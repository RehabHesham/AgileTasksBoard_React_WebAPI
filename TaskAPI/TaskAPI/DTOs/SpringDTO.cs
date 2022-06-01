using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskAPI.DTOs
{
    public class SpringDTO
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required, IsDateAfter("StartDate")]
        public DateTime EndDate { get; set; }
        [Required]
        public int Duration { get; set; }
        [Required]
        public string Status { get; set; } = "new";
        [Required]
        public int PercentageDone { get; set; }


        //Foreign Key
        [Required]
        public int ProjectId { get; set; }

    }
}
