using TaskAPI.Models;

namespace TaskAPI.Services
{
    public interface IProgressCalculations
    {
        int UpdateProjectProgress(int projectId);
        int UpdateSpringProgress(int springId);
    }
}