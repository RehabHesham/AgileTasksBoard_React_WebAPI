using Microsoft.EntityFrameworkCore;

namespace TaskAPI.Models
{
    public class AgileDBEntity : DbContext
    {
        public AgileDBEntity()
        {

        }public AgileDBEntity(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WorkersProjects>().HasKey(e => new { e.ProjectId, e.WorkerId});
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Project> projects { get; set; }
        public DbSet<Spring> springs { get; set; }
        public DbSet<Task> tasks { get; set; }



        // Remove after use identity
        public DbSet<ApplicationUser>  users { get; set; }
    }
}
