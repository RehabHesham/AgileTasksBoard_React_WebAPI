using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace TaskAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        //Navigation Property
        public List<WorkersProjects> projects { get; set; }
        public List<Task> tasks { get; set; }   
    }
}
