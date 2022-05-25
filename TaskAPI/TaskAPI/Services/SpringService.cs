using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Services
{
    public class SpringService : ISpringService
    {
        private readonly ISpringRepo springRepo;
        private readonly IConversions conversions;

        public SpringService(ISpringRepo springRepo,IConversions conversions)
        {
            this.springRepo = springRepo;
            this.conversions = conversions;
        }
        public int Create(SpringDTO spring)
        {
            return springRepo.Create(conversions.convertDTOtoSpring(spring));
        }

        public List<SpringDTO> GetAll()
        {
            return conversions.convertListSpringtoDTO(springRepo.GetAll());
        }
        public List<SpringDTO> FindByProject(int id)
        {
            return conversions.convertListSpringtoDTO(springRepo.FindByProject(id));
        }

        public SpringDTO GetById(int id)
        {
            return conversions.convertSpringToDTO(springRepo.GetById(id));
        }

        public int Remove(SpringDTO spring)
        {
            return springRepo.Remove(conversions.convertDTOtoSpring(spring));
        }

        public int Update(SpringDTO spring)
        {
            return springRepo.Update(conversions.convertDTOtoSpring(spring));
        }    
    }
}
