using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public decimal? EffortHours { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Client { get; set; }
        [Required]
        public string Status { get; set; } = "new";

        //Forien key
        [Required,ForeignKey("Owner")]
        public string OwnerId { get; set; }

        //Navigation Property
        public ApplicationUser Owner { get; set; }
        public List<WorkersProjects> Workers { get; set; }
        public List<Spring> Springs { get; set; }
        public List<Task> Tasks { get; set; }
    }
}
