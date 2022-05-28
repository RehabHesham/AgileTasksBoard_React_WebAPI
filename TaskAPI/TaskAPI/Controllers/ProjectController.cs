using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TaskAPI.DTOs;
using TaskAPI.Services;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private IProjectService projectService;

        public ProjectController(IProjectService projectService)
        {
            this.projectService = projectService;
        }

        // GET: api/Project
        [HttpGet]
        public ActionResult<List<ProjectDTO>> Getprojects()
        {
            return projectService.GetAll();
        }

        // GET: api/Project/5
        [HttpGet("{id}")]
        public ActionResult<ProjectDTO> GetProject(int id)
        {
            var project = projectService.GetById(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        // PUT: api/Project/5
        [HttpPut("{id}")]
        public IActionResult UpdateProject(int id, ProjectDTO project)
        {
            if (id != project.Id)
            {
                return BadRequest();
            }

            int result = projectService.Update(project);

            if(result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }

        // POST: api/Project
        [HttpPost]
        public ActionResult<ProjectDTO> AddProject(ProjectDTO project)
        {
            int result = projectService.Create(project);
            if(result <= 0)
            {
                return StatusCode(500);
            }
            project.Id = result;
            return CreatedAtAction("GetProject", new { id = project.Id }, project);
        }

        // DELETE: api/Project/5
        [HttpDelete("{id}")]
        public IActionResult DeleteProject(int id)
        {
            var project = projectService.GetByIdNoTrack(id);
            if (project == null)
            {
                return NotFound();
            }

            projectService.Remove(project);

            return NoContent();
        }
    }
}
