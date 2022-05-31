using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskAPI.Models;

namespace TaskAPI.Repositories
{
    public class TaskRepo : ITaskRepo
    {
        private AgileDBEntity db;
        

        public TaskRepo(AgileDBEntity context)
        {
            db = context;
            
        }
        public List<Task> GetAll()
        {
            return db.tasks.ToList();
        }
        public Task GetById(int id)
        {
            return db.tasks.SingleOrDefault(p => p.Id == id);
        }
        public List<Task> FindByProject(int id)
        {
            return db.tasks.Where(t => t.ProjectId == id).ToList();
        }
        public int Create(Task task)
        {
            if (task != null)
            {
                try
                {
                    db.tasks.Add(task);
                    db.SaveChanges();
                    return task.Id;
                }
                catch (Exception ex)
                {
                    return -1;
                }

            }
            return -1;
        }
        public int Update(Task task)
        {
            if (task != null)
            {
                Task oldtask = GetById(task.Id);
                oldtask.Name = task.Name;
                oldtask.Description = task.Description;
                oldtask.Priority = task.Priority;
                oldtask.Weight = task.Weight;
                oldtask.WorkerId = task.WorkerId;
                oldtask.ProjectId = task.ProjectId;
                oldtask.Status = task.Status;
                oldtask.PercentageDone = task.PercentageDone;   
                oldtask.SpringId = task.SpringId;
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

        public int UpdateStatus(Task task)
        {
            if (task != null)
            {
                Task oldtask = GetById(task.Id);
                oldtask.Status = task.Status;
                oldtask.PercentageDone= task.PercentageDone;
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
        public int UpdateAssignedSpring(int taskId,int? springId)
        {
            Task oldtask = GetById(taskId);
            oldtask.SpringId = springId;
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
        public int Remove(Task task)
        {
            try
            {
                db.tasks.Remove(task);
                return db.SaveChanges();
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

        public Task GetByIdNoTrack(int id)
        {
            return db.tasks.AsNoTracking().SingleOrDefault(p => p.Id == id);
        }

        
    }
}
