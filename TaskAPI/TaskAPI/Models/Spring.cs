using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class Spring
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        //Foreign Key
        [ForeignKey("Project")]
        public int ProjectId { get; set; }

        //Navigation Property
        public Project Project { get; set; }
        public List<Task> Tasks { get; set; }
    }
}
