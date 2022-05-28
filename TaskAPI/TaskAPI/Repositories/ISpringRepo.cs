using System.Collections.Generic;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public interface ISpringRepo
    {
        int Create(Spring spring);
        List<Spring> GetAll();
        List<Spring> FindByProject(int id);
        Spring GetById(int id);
        Spring GetByIdNoTrack(int id);
        int Remove(Spring spring);
        int Update(Spring spring);
    }
}