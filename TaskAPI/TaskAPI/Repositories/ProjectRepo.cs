using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public class ProjectRepo : IProjectRepo
    {
        private readonly AgileDBEntity db;

        public ProjectRepo(AgileDBEntity context)
        {
            db = context;
        }
        public List<Project> GetAll()
        {
            return db.projects.ToList();
        }
        public Project GetById(int id)
        {
            return db.projects.Include(p=>p.Springs).Include(p=>p.Tasks).SingleOrDefault(p => p.Id == id);
        }
        public int Create(Project project)
        {
            if (project != null)
            {
                try
                {
                    db.projects.Add(project);
                    db.SaveChanges();
                    return project.Id;
                }
                catch (Exception ex)
                {
                    return -1;
                }

            }
            return -1;
        }
        public int Update(Project project)
        {
            if (project != null)
            {
                Project oldProject = GetById(project.Id);
                oldProject.Name = project.Name;
                oldProject.Description = project.Description;
                oldProject.EffortHours = project.EffortHours;
                oldProject.EndDate = project.EndDate;
                oldProject.StartDate = project.StartDate;
                oldProject.Client = project.Client;
                oldProject.OwnerId = project.OwnerId;
                oldProject.PercentageDone = project.PercentageDone;
                oldProject.Status = project.Status;
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
        public int Remove(Project project)
        {
            try
            {
                db.projects.Remove(project);
                return db.SaveChanges();
            }catch (Exception ex)
            {
                return -1;
            }
        }
        public Project GetByIdNoTrack(int id)
        {
            return db.projects.AsNoTracking().SingleOrDefault(p => p.Id == id);
        }
    }
}
