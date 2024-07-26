using AutoMapper;
using HWPlatform.BLL.Contracts;
using HWPlatform.DAL.Data;
using HWPlatform.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

public class HomeWorkAssigmentService : IHomeWorkAssigmentService
{
    private readonly DBContext dbContext;
    private readonly IMapper mapper;
    
    public HomeWorkAssigmentService(DBContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
    }

    public async Task CreateHomeWorkAssigmentAsync(HomeworkAssignment homeworkAssigment)
    {
        //var homeworkAssigment = this.mapper.Map<HomeworkAssignment>(homeworkAssigmentIM);
        this.dbContext.Add(homeworkAssigment);
        await this.dbContext.SaveChangesAsync();
    }

    public async Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentByEmailAsync(string email)
    {
        return await dbContext.HomeworkAssignments
            .Where(a => a.AssignedStudents.Any(u => u.Student.User.Email == email))
            .ToListAsync();
    }
    
    public async Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentBeforeDeadlineByEmailAsync(string email)
    {
        return await dbContext.HomeworkAssignments
            .Where(a => a.AssignedStudents.Any(u => u.Student.User.Email == email))
            .Where(a => a.Deadline > DateTime.Now)
            .ToListAsync();
    }
    
    public async Task<List<HomeworkAssignment>> GetAllHomeWorkAssigmentAfterDeadlineByEmailAsync(string email)
    {
        return await dbContext.HomeworkAssignments
            .Where(a => a.AssignedStudents.Any(u => u.Student.User.Email == email))
            .Where(a => a.Deadline < DateTime.Now)
            .ToListAsync();
    }

    public async Task<HomeworkAssignment> GetHomeWorkAssigmentById(int id)
    {
        return await dbContext.HomeworkAssignments
            .Where(a => a.Id == id)
            .FirstOrDefaultAsync();
    }
}