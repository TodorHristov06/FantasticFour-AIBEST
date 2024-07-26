using HWPlatform.DAL.Models;

namespace HWPlatform.BLL.Contracts;

public interface IHomeWorkAssigmentService
{
    Task CreateHomeWorkAssigmentAsync(HomeworkAssignment homeworkAssigment);

    Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentByEmailAsync(string email);
    
    Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentBeforeDeadlineByEmailAsync(string email);
    
    Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentAfterDeadlineByEmailAsync(string email);

    Task<HomeworkAssignment> GetHomeWorkAssigmentById(int id);
}