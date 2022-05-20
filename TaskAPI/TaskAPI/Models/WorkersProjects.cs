using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class WorkersProjects
    {
        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        [ForeignKey("Worker")]
        public string WorkerId { get; set; }

        //Navigation Property
        public Project Project { get; set; }
        public ApplicationUser Worker { get; set; }
    }
}
