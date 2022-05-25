using System.Collections.Generic;
using TaskAPI.DTOs;

namespace TaskAPI.Services
{
    public interface ITaskService
    {
        int Create(TaskDTO task);
        List<TaskDTO> GetAll();
        TaskDTO GetById(int id);
        List<TaskDTO> FindByProject(int id);
        int Remove(TaskDTO task);
        int Update(TaskDTO task);
    }
}