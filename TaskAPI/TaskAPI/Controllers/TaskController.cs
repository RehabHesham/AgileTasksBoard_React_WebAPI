using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Services;

namespace TaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService taskService;

        public TaskController(ITaskService taskService)
        {
            this.taskService = taskService;
        }

        // GET: api/Task
        [HttpGet]
        public ActionResult<List<TaskDTO>> GetTasks()
        {
            return taskService.GetAll();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public ActionResult<TaskDTO> GetTaskByID(int id)
        {
            var task = taskService.GetById(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // GET: api/Task/5
        [HttpGet("projectId={id:int}")]
        public ActionResult<List<TaskDTO>> FindByProject(int id)
        {
            return taskService.FindByProject(id);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, TaskDTO task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            int result = taskService.Update(task);

            if (result != -1)
            {
                return NoContent();
            }
            return StatusCode(500);
        }
        [HttpPost("{id:int}/springUpdate")]
        public IActionResult UpdateTaskSpring(int id,TaskDTO task)
        {
            int result = taskService.UpdateAssignedSpring(id, task.SpringId);

            if (result < 0)
            {
                return StatusCode(500);
            }
            return NoContent();
        }
        [HttpPost("{id:int}/statusUpdate")]
        public IActionResult UpdateTaskStatus(int id, TaskDTO task)
        {
            int result = taskService.UpdateStatus(task);

            if (result < 0)
            {
                return StatusCode(500);
            }
            return NoContent();
        }

        // POST: api/Task
        [HttpPost]
        public ActionResult<TaskDTO> Create(TaskDTO task)
        {
            int result = taskService.Create(task);
            if (result <= 0)
            {
                return StatusCode(500);
            }
            task.Id = result;
            return CreatedAtAction("GetTaskByID", new { id = task.Id }, task);
        }

        // DELETE: api/Task/5
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = taskService.GetByIdNoTrack(id);
            if (task == null)
            {
                return NotFound();
            }

            taskService.Remove(task);

            return NoContent();
        }
    }
}
