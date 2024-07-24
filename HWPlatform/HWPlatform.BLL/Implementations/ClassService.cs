using HWPlatform.BLL.Contracts;
using HWPlatform.DAL.Data;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

internal class ClassService : IClassService
{
    private readonly DBContext dbContext;

    public ClassService(DBContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task AddClassToTeacherAsync(string email, string className, int classYear)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstAsync();

        var classObj = await this.dbContext.Classes.FindAsync(new { className, classYear });

        if (classObj == null) return;

        user.Teacher.Classes.Add(classObj);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task RemoveClassFromTeacherAsync(string email, string className, int classYear)
    {
        var user = await this.dbContext.Users
            .Include(u => u.Teacher.Classes)
            .FirstAsync(u => u.Email == email);

        var classObj = await this.dbContext.Classes
            .Include(s => s.Teachers)
            .FirstOrDefaultAsync(c => c.ClassName == className && c.Year == classYear);

        if (classObj == null) return;

        user.Teacher.Classes.Remove(classObj);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task ChangeStudentClassAsync(string email, string className, int classYear)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstAsync();

        user.Student.ClassId1 = className;
        user.Student.ClassId2 = classYear;

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<bool> CheckIfClassExists(string className, int classYear)
    {
        return await this.dbContext.Classes.SingleOrDefaultAsync(c => c.ClassName == className && c.Year == classYear) is not null;
    }
}
