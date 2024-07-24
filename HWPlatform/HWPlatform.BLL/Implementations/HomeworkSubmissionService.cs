using HWPlatform.BLL.Contracts;
using HWPlatform.DAL.Data;
using HWPlatform.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

public class HomeworkSubmissionService : IHomeworkSubmissionService
{
    private readonly DBContext dbContext;

    public HomeworkSubmissionService(DBContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task SubmitHomeworkAsync(HomeworkSubmission homeworkSubmission)
    {
        dbContext.Add(homeworkSubmission);
        await dbContext.SaveChangesAsync();
    }
    
    public async Task<HomeworkSubmission> GetSubmissionByAssignmentStudentEmailAsync(string email)
    {
        return await dbContext.HomeworkSubmissions
            .Where(s => s.AssignedStudent.Student.User.Email == email)
            .FirstOrDefaultAsync();
    }
}