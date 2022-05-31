using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepo taskRepo;
        private readonly IConversions conversions;
        private readonly IProgressCalculations progress;

        public TaskService(ITaskRepo taskRepo,IConversions conversions, IProgressCalculations progress)
        {
            this.taskRepo = taskRepo;
            this.conversions = conversions;
            
            this.progress = progress;
        }

        public int Create(TaskDTO task)
        {
            return taskRepo.Create(conversions.convertDTOtoTask(task));
        }

        public List<TaskDTO> GetAll()
        {
            return conversions.convertListTaskToDTO(taskRepo.GetAll());  
        }

        public TaskDTO GetById(int id)
        {
            Task task = taskRepo.GetById(id);
            return conversions.convertTaskToDTO(task);
        }
        
        public List<TaskDTO> FindByProject(int id)
        {
            return conversions.convertListTaskToDTO(taskRepo.FindByProject(id));
        }

        public int Remove(TaskDTO task)
        {
            return taskRepo.Remove(conversions.convertDTOtoTask(task));
        }

        public int Update(TaskDTO task)
        {
            return taskRepo.Update(conversions.convertDTOtoTask(task));
        }

        public int UpdateStatus(TaskDTO task)
        {
            switch (task.Status)
            {
                case "New":
                    task.PercentageDone = 0;
                    break;
                case "Active":
                    task.PercentageDone = 10;
                    break;
                case "Done":
                    task.PercentageDone = 100;
                    break;
            }

            int result = taskRepo.UpdateStatus(conversions.convertDTOtoTask(task));
            if(result > 0)
            {
                int springresult = progress.UpdateSpringProgress((int)task.SpringId);
                if (result > 0)
                {
                    return progress.UpdateProjectProgress(task.ProjectId);
                }
                return springresult;
            }
            return result;
        }

        public TaskDTO GetByIdNoTrack(int id)
        {
            return conversions.convertTaskToDTO(taskRepo.GetByIdNoTrack(id));
        }

        public int UpdateAssignedSpring(int taskId, int? springId)
        {
            return taskRepo.UpdateAssignedSpring(taskId,springId);
        }
    }
}
