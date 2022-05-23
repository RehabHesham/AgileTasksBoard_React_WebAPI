using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskAPI.DTOs
{
    public class ProjectDTO
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

        //Forien key
        [Required]
        public string OwnerId { get; set; }
    }
}
