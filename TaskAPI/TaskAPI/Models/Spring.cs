using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class Spring
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public int Duration { get; set; }
        [Required]
        public string Status { get; set; } = "new";
        [Required]
        public int PercentageDone { get; set; }

        //Foreign Key
        [Required]
        [ForeignKey("Project")]
        public int ProjectId { get; set; }

        //Navigation Property
        public Project Project { get; set; }
        public List<Task> Tasks { get; set; }
    }
}
