using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IProjectRepo projectRepo;
        private readonly IConversions conversions;

        public ProjectService(IProjectRepo projectRepo,IConversions conversions)
        {
            this.projectRepo = projectRepo;
            this.conversions = conversions;
        }
        public int Create(ProjectDTO project)
        {
            return projectRepo.Create(conversions.convertDTOtoProject(project));
        }

        public List<ProjectDTO> GetAll()
        {
            return conversions.convertListProjectToDTO(projectRepo.GetAll());
        }

        public ProjectDTO GetById(int id)
        {
            return conversions.convertProjectToDTO(projectRepo.GetById(id));
        }

        public ProjectDTO GetByIdNoTrack(int id)
        {
            return conversions.convertProjectToDTO(projectRepo.GetByIdNoTrack(id));
        }

        public int Remove(ProjectDTO project)
        {
            return projectRepo.Remove(conversions.convertDTOtoProject(project));
        }

        public int Update(ProjectDTO project)
        {
            return projectRepo.Update(conversions.convertDTOtoProject(project));
        }
        
    }
}
