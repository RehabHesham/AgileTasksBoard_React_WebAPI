using System.Collections.Generic;

namespace TaskAPI.Models
{
    public class ApplicationUser
    {
        public string Id { get; set; }
        public List<WorkersProjects> projects { get; set; }
        public List<Task> tasks { get; set; }   
    }
}
