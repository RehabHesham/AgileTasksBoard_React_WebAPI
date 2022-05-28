using System.ComponentModel.DataAnnotations;

namespace TaskAPI.DTOs
{
    public class TaskDTO
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
        [Required]
        public int PercentageDone { get; set; }

        //Foreiegn Key
        public int? SpringId { get; set; }
        [Required]
        public int ProjectId { get; set; }
        public string? WorkerId { get; set; }

    }
}
