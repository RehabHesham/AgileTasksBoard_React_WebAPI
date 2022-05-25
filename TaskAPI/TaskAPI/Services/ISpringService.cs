using System.Collections.Generic;
using TaskAPI.DTOs;

namespace TaskAPI.Services
{
    public interface ISpringService
    {
        int Create(SpringDTO spring);
        List<SpringDTO> GetAll();
        List<SpringDTO> FindByProject(int id);
        SpringDTO GetById(int id);
        int Remove(SpringDTO spring);
        int Update(SpringDTO spring);
    }
}