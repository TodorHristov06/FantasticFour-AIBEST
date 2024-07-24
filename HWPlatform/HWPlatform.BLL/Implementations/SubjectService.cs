using HWPlatform.BLL.Contracts;
using HWPlatform.DAL.Data;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

internal class SubjectService : ISubjectService
{
    private readonly DBContext dbContext;

    SubjectService(DBContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task AddSubjectToTeacherAsync(string email, int subjectId)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstAsync();

        var subject = await dbContext.Subjects.FindAsync(subjectId);

        if (subject == null) return;

        user.Teacher.Subjects.Add(subject);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<bool> CheckIfSubjectExists(int subjectId)
    {
        return await this.dbContext.Subjects.SingleOrDefaultAsync(s => s.Id == subjectId) is not null;
    }

    public async Task RemoveSubjectFromTeacherAsync(string email, int subjectId)
    {
        var user = await this.dbContext.Users
            .Include(u => u.Teacher.Subjects)
            .FirstAsync(u => u.Email == email);

        var subject = await this.dbContext.Subjects
            .Include(s => s.Teachers)
            .FirstOrDefaultAsync(s => s.Id == subjectId);

        if (subject == null) return;

        user.Teacher.Subjects.Remove(subject);

        await this.dbContext.SaveChangesAsync();
    }
}
