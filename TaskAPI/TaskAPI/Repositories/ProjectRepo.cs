﻿using System;
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
            return db.projects.SingleOrDefault(p => p.Id == id);
        }
        public int Create(Project project)
        {
            if (project != null)
            {
                try
                {
                    db.projects.Add(project);
                    return db.SaveChanges();
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
                oldProject.Duration = project.Duration;
                oldProject.EndDate = project.EndDate;
                oldProject.StartDate = project.StartDate;
                oldProject.Client = project.Client;
                oldProject.OwnerId = project.OwnerId;
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
    }
}
