using System.Collections.Generic;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public interface IProjectRepo
    {
        int Create(Project project);
        List<Project> GetAll();
        Project GetById(int id);
        Project GetByIdNoTrack(int id);
        int Remove(Project project);
        int Update(Project project);
    }
}