using System.Collections.Generic;
using TaskAPI.DTOs;
using TaskAPI.Models;

namespace TaskAPI.Services
{
    public interface IConversions
    {
        Project convertDTOtoProject(ProjectDTO project);
        Spring convertDTOtoSpring(SpringDTO spring);
        Task convertDTOtoTask(TaskDTO task);
        List<ProjectDTO> convertListProjectToDTO(List<Project> projectList);
        List<SpringDTO> convertListSpringtoDTO(List<Spring> springsList);
        List<TaskDTO> convertListTaskToDTO(List<Task> taskList);
        ProjectDTO convertProjectToDTO(Project project);
        SpringDTO convertSpringToDTO(Spring spring);
        TaskDTO convertTaskToDTO(Task task);
    }
}