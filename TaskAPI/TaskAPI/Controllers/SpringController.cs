using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpringController : ControllerBase
    {
        private readonly SpringRepo springRepo;

        public SpringController(SpringRepo _springRepo)
        {
            springRepo = _springRepo;
        }
        // GET: api/Spring
        [HttpGet]
        public ActionResult<List<Spring>> GetSprings()
        {
            return springRepo.GetAll();
        }

        // GET: api/Spring/5
        [HttpGet("{id}")]
        public ActionResult<Spring> GetSpring(int id)
        {
            var spring = springRepo.GetById(id);

            if (spring == null)
            {
                return NotFound();
            }

            return spring;
        }

        // PUT: api/Spring/5
        [HttpPut("{id}")]
        public IActionResult UpdateSpring(int id, Spring spring)
        {
            if (id != spring.Id)
            {
                return BadRequest();
            }

            int result = springRepo.Update(spring);

            if (result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }

        // POST: api/Spring
        [HttpPost]
        public ActionResult<Spring> AddSpring(Spring spring)
        {
            springRepo.Create(spring);
            return CreatedAtAction("GetSpring", new { id = spring.Id }, spring);
        }

        // DELETE: api/Spring/5
        [HttpDelete("{id}")]
        public IActionResult DeleteSpring(int id)
        {
            var spring = springRepo.GetById(id);
            if (spring == null)
            {
                return NotFound();
            }

            springRepo.Remove(spring);

            return NoContent();
        }
    }
}
