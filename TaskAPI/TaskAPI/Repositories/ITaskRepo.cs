using System.Collections.Generic;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public interface ITaskRepo
    {
        int Create(Task task);
        List<Task> GetAll();
        Task GetById(int id);
        Task GetByIdNoTrack(int id);
        List<Task> FindByProject(int id);
        int Remove(Task task);
        int Update(Task task);
        int UpdateStatus(Task task);
        int UpdateAssignedSpring(int taskId, int? springId);
    }
}