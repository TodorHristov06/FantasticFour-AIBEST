using AutoMapper;
using AutoMapper.QueryableExtensions;
using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Models.Class;
using HWPlatform.DAL.Data;
using HWPlatform.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

internal class ClassService : IClassService
{
    private readonly DBContext dbContext;
    private readonly IMapper mapper;

    public ClassService(DBContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
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

    public async Task CreateClassAsync(string name, int year, ClassIM classIM)
    {
        var classObj = this.mapper.Map<Class>(classIM);

        classObj.ClassName = name;
        classObj.Year = year;

        this.dbContext.Classes.Add(classObj);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<ClassVM> UpdateClassAsync(string oldName, int oldYear, ClassUM classUM)
    {
        var classObj = await this.dbContext.Classes.FindAsync(new { oldName, oldYear });

        if (classObj != null && classUM.Name != null)
            classObj.ClassName = classUM.Name;
        if (classObj != null && classUM.Year != null)
            classObj.Year = Convert.ToInt32(classUM.Year);

        this.dbContext.Classes.Update(classObj);
        await this.dbContext.SaveChangesAsync();

        return await this.GetClassByCompositePKAsync(classObj.ClassName, classObj.Year);
    }

    public async Task DeleteClassAsync(string name, int year)
    {
        var classObj = await this.dbContext.Classes.FindAsync(new { name, year });

        if (classObj != null)
            this.dbContext.Remove(classObj);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<ClassVM> GetClassByCompositePKAsync(string name, int year)
    {
        return await this.dbContext.Classes
            .Where(c => c.ClassName == name && c.Year == year)
            .ProjectTo<ClassVM>(this.mapper.ConfigurationProvider)
            .FirstAsync();
    }
}
