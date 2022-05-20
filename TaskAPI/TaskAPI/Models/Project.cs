using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAPI.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public TimeSpan Duration { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public string Client { get; set; }

        //Forien key
        [ForeignKey("Owner")]
        public string OwnerId { get; set; }

        //Navigation Property
        public ApplicationUser Owner { get; set; }
        public List<WorkersProjects> Workers { get; set; }
        public List<Spring> Springs { get; set; }
        public List<Task> Tasks { get; set; }
    }
}
