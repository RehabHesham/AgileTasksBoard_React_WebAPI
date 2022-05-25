using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public int? Priority { get; set; }
        public int? Weight { get; set; }
        [Required]
        public string Status { get; set; } = "new";

        //Foreiegn Key
        [ForeignKey("Spring")]
        public int? SpringId { get; set; }
        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        [ForeignKey("Worker")]
        public string? WorkerId { get; set; }

        //Navigation Property
        public Spring Spring { get; set; }
        public Project Project { get; set; }
        public ApplicationUser Worker { get; set; }
    }
}
