using System.Collections.Generic;
using TaskAPI.DTOs;

namespace TaskAPI.Services
{
    public interface IProjectService
    {
        int Create(ProjectDTO project);
        List<ProjectDTO> GetAll();
        ProjectDTO GetById(int id);
        ProjectDTO GetByIdNoTrack(int id);
        int Remove(ProjectDTO project);
        int Update(ProjectDTO project);
    }
}