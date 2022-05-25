
using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Models;

namespace TaskAPI.Services
{
    public class Conversions : IConversions
    {
        //Project
        public List<ProjectDTO> convertListProjectToDTO(List<Project> projectList)
        {
            List<ProjectDTO> projects = new List<ProjectDTO>();
            foreach (Project project in projectList)
            {
                projects.Add(convertProjectToDTO(project));
            }
            return projects;
        }
        public ProjectDTO convertProjectToDTO(Project project)
        {
            ProjectDTO projectDTO = new ProjectDTO()
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                EndDate = project.EndDate,
                StartDate = project.StartDate,
                Client = project.Client,
                EffortHours = project.EffortHours,
                OwnerId = project.OwnerId,
            };
            if (project.Tasks == null && project.Springs == null)
                return projectDTO;
            foreach (Task task in project.Tasks)
            {
                projectDTO.tasks.Add(convertTaskToDTO(task));
            }
            foreach(Spring spring in project.Springs)
            {
                projectDTO.springs.Add(convertSpringToDTO(spring));
            }
            return projectDTO;
        }
        public Project convertDTOtoProject(ProjectDTO project)
        {
            return new Project()
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                EndDate = project.EndDate,
                StartDate = project.StartDate,
                Client = project.Client,
                EffortHours = project.EffortHours,
                OwnerId = project.OwnerId,
            };
        }


        //Spring
        public List<SpringDTO> convertListSpringtoDTO(List<Spring> springsList)
        {
            List<SpringDTO> springs = new List<SpringDTO>();
            foreach (Spring spring in springsList)
            {
                springs.Add(convertSpringToDTO(spring));
            }
            return springs;
        }
        public SpringDTO convertSpringToDTO(Spring spring)
        {
            return new SpringDTO()
            {
                Id = spring.Id,
                Name = spring.Name,
                StartDate = spring.StartDate,
                EndDate = spring.EndDate,
                ProjectId = spring.ProjectId,
            };
        }

        public Spring convertDTOtoSpring(SpringDTO spring)
        {
            return new Spring()
            {
                Id = spring.Id,
                Name = spring.Name,
                StartDate = spring.StartDate,
                EndDate = spring.EndDate,
                ProjectId = spring.ProjectId,
            };
        }
        //Task
        public List<TaskDTO> convertListTaskToDTO(List<Task> taskList)
        {
            List<TaskDTO> tasks = new List<TaskDTO>();
            foreach (Task task in taskList)
            {
                tasks.Add(convertTaskToDTO(task));
            }
            return tasks;
        }
        public TaskDTO convertTaskToDTO(Task task)
        {
            return new TaskDTO()
            {
                Id = task.Id,
                Name = task.Name,
                Description = task.Description,
                Priority = task.Priority,
                Weight = task.Weight,
                SpringId = task.SpringId,
                ProjectId = task.ProjectId,
                WorkerId = task.WorkerId
            };
        }
        public Task convertDTOtoTask(TaskDTO task)
        {
            return new Task()
            {
                Id = task.Id,
                Name = task.Name,
                Description = task.Description,
                Priority = task.Priority,
                Weight = task.Weight,
                SpringId = task.SpringId,
                ProjectId = task.ProjectId,
                WorkerId = task.WorkerId
            };
        }
    }
}
