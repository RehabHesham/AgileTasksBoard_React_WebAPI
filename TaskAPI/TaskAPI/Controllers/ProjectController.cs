using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectRepo projectRepo;

        public ProjectController(ProjectRepo projectRepo)
        {
            this.projectRepo = projectRepo;
        }

        // GET: api/Project
        [HttpGet]
        public ActionResult<List<Project>> Getprojects()
        {
            return projectRepo.GetAll();
        }

        // GET: api/Project/5
        [HttpGet("{id}")]
        public ActionResult<Project> GetProject(int id)
        {
            var project = projectRepo.GetById(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        // PUT: api/Project/5
        [HttpPut("{id}")]
        public IActionResult UpdateProject(int id, Project project)
        {
            if (id != project.Id)
            {
                return BadRequest();
            }

            int result = projectRepo.Update(project);

            if(result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }

        // POST: api/Project
        [HttpPost]
        public ActionResult<Project> AddProject(Project project)
        {
            projectRepo.Create(project);
            return CreatedAtAction("GetProject", new { id = project.Id }, project);
        }

        // DELETE: api/Project/5
        [HttpDelete("{id}")]
        public IActionResult DeleteProject(int id)
        {
            var project = projectRepo.GetById(id);
            if (project == null)
            {
                return NotFound();
            }

            projectRepo.Remove(project);

            return NoContent();
        }
    }
}
