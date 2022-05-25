using System;
using System.Collections.Generic;
using System.Linq;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public class SpringRepo : ISpringRepo
    {
        private readonly AgileDBEntity db;

        public SpringRepo(AgileDBEntity context)
        {
            db = context;
        }
        public List<Spring> GetAll()
        {
            return db.springs.ToList();
        }
        public Spring GetById(int id)
        {
            return db.springs.SingleOrDefault(p => p.Id == id);
        }
        public List<Spring> FindByProject(int id)
        {
            return db.springs.Where(s=>s.ProjectId == id).ToList();
        }
        public int Create(Spring spring)
        {
            if (spring != null)
            {
                try
                {
                    db.springs.Add(spring);
                    db.SaveChanges();
                    return spring.Id;
                }
                catch (Exception ex)
                {
                    return -1;
                }

            }
            return -1;
        }
        public int Update(Spring spring)
        {
            if (spring != null)
            {
                Spring oldspring = GetById(spring.Id);
                oldspring.Name = spring.Name;
                oldspring.EndDate = spring.EndDate;
                oldspring.StartDate = spring.StartDate;
                oldspring.ProjectId = spring.ProjectId;
                try
                {
                    db.SaveChanges();
                    return 1;
                }
                catch (Exception ex)
                {
                    return -1;
                }
            }
            return -1;
        }
        public int Remove(Spring spring)
        {
            try
            {
                db.springs.Remove(spring);
                return db.SaveChanges();
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
    }
}
