using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Services;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpringController : ControllerBase
    {
        private ISpringService springService;

        public SpringController(ISpringService springService)
        {
            this.springService = springService;
        }
        // GET: api/Spring
        [HttpGet]
        public ActionResult<List<SpringDTO>> GetSprings()
        {
            return springService.GetAll();
        }
        // GET: api/Spring
        [HttpGet("projectId={id:int}")]
        public ActionResult<List<SpringDTO>> FindByProject(int id)
        {
            return springService.FindByProject(id);
        }

        // GET: api/Spring/5
        [HttpGet("{id:int}")]
        public ActionResult<SpringDTO> GetSpring(int id)
        {
            var spring = springService.GetById(id);

            if (spring == null)
            {
                return NotFound();
            }

            return spring;
        }

        // PUT: api/Spring/5
        [HttpPut("{id}")]
        public IActionResult UpdateSpring(int id, SpringDTO spring)
        {
            if (id != spring.Id)
            {
                return BadRequest();
            }

            int result = springService.Update(spring);

            if (result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }

        // POST: api/Spring
        [HttpPost]
        public ActionResult<SpringDTO> AddSpring(SpringDTO spring)
        {
            int result = springService.Create(spring);
            if (result <= 0)
            {
                return StatusCode(500);
            }
            spring.Id = result;
            return CreatedAtAction("GetSpring", new { id = spring.Id }, spring);
        }

        // DELETE: api/Spring/5
        [HttpDelete("{id}")]
        public IActionResult DeleteSpring(int id)
        {
            var spring = springService.GetByIdNoTrack(id);
            if (spring == null)
            {
                return NotFound();
            }

            int result = springService.Remove(spring);
            if (result <= 0)
            {
                return StatusCode(500);
            }

            return NoContent();
        }
    }
}
