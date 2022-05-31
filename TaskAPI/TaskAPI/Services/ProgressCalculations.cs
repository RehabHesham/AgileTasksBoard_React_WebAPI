using System;
using System.Collections.Generic;
using System.Linq;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Services
{
    public class ProgressCalculations : IProgressCalculations
    {

        private IProjectRepo projectRepo;
        private ISpringRepo springRepo;
        public ProgressCalculations(IProjectRepo projectRepo, ISpringRepo springRepo)
        {
            this.projectRepo = projectRepo;
            this.springRepo = springRepo;
        }
        public int UpdateSpringProgress(int springId)
        {
            Spring spring = springRepo.GetByIdIncludeTasks(springId);

            int doneTasks = spring.Tasks.Count(t => t.Status == "Done");
            int totalTasks = spring.Tasks.Count();
            spring.PercentageDone = 0;
            if (doneTasks > 0)
                spring.PercentageDone = (int)(((decimal)doneTasks / totalTasks) * 100);

            List<Task> tasks = spring.Tasks.Where(t => t.Status == "Active").ToList();
            int activeTasks = tasks.Count();
            int percentageDone = 0;
            foreach (var task in tasks)
            {
                percentageDone += task.PercentageDone;
            }
            spring.PercentageDone += (int) (percentageDone * ((decimal)activeTasks / totalTasks));

            if (spring.PercentageDone == 100)
            {
                spring.Status = "Closed";
            }else if (spring.PercentageDone == 0)
            {
                spring.Status = "Future";
            }
            else
            {
                spring.Status = "Current";
            }
            return springRepo.Update(spring);
        }

        public int UpdateProjectProgress(int projectId)
        {
            Project project = projectRepo.GetById(projectId);
            decimal percentageDone = 0;
            int springsDuration = project.Springs.Sum(s=>s.Duration);
            foreach (var spring in project.Springs)
            {
                percentageDone += spring.PercentageDone*((decimal)spring.Duration/springsDuration);
            }
            project.PercentageDone = (int)percentageDone;
            if(project.Springs.FirstOrDefault(s=>s.Status == "Current") == null && project.PercentageDone != 100)
            {
                Spring spring = project.Springs.OrderBy(s => s.StartDate).FirstOrDefault(s => s.Status == "Future");
                spring.Status = "Current";
                springRepo.Update(spring);
            }
            if (project.PercentageDone >= 100)
            {
                project.Status = "Completed";
            }else if(project.PercentageDone == 0)
            {
                project.Status = "New";
            }
            else
            {
                project.Status = "In Progress";
            }
                return projectRepo.Update(project);
        }
    }
}
