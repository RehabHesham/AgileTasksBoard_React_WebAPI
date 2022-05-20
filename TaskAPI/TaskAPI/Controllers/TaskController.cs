using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TaskAPI.Models;
using TaskAPI.Repositories;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskRepo taskRepo;

        public TaskController(TaskRepo _taskRepo)
        {
            taskRepo = _taskRepo;
        }

        // GET: api/Task
        [HttpGet]
        public ActionResult<List<Task>> GetTasks()
        {
            return taskRepo.GetAll();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public ActionResult<Task> GetTask(int id)
        {
            var task = taskRepo.GetById(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            int result = taskRepo.Update(task);

            if (result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }

        // POST: api/Task
        [HttpPost]
        public ActionResult<Task> AddTask(Task task)
        {
            taskRepo.Create(task);
            return CreatedAtAction("GetTask", new { id = task.Id }, task);
        }

        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = taskRepo.GetById(id);
            if (task == null)
            {
                return NotFound();
            }

            taskRepo.Remove(task);

            return NoContent();
        }
    }
}
