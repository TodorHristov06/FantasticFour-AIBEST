using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Models.User;
using HWPlatform.DAL.Data;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using AutoMapper.QueryableExtensions;
using AutoMapper.Configuration.Annotations;
using HWPlatform.DAL.Models;

namespace HWPlatform.BLL.Implementations;

internal class UserService : IUserService
{
    private readonly DBContext dbContext;
    private readonly IMapper mapper;
    private readonly IEmailService emailService;

    public UserService(DBContext dbContext, IMapper mapper, IEmailService emailService)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
        this.emailService = emailService;
    }

    public async Task DeleteUserAsync(string email)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();

        if (user == null) return;

        user.IsActive = false;

        await this.dbContext.SaveChangesAsync();
    }

    public string GenerateRandomPassword()
    {
        int length = 10;
        string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

        var random = new Random();

        string password = 
            new string(Enumerable
            .Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)])
            .ToArray());

        return password;
    }

    public async Task UpdatePasswordAsync(string email)
    {
        var user = await dbContext.Users
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();

        if (user == null) return;

        string password = this.GenerateRandomPassword();

        this.emailService.SendEmail(user.FirstName + " " + user.LastName, user.Email, password);

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(password);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task UpdatePasswordForAuthServiceAsync(string email)
    {
        var user = await dbContext.Users
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();

        if (user == null) return;

        string password = this.GenerateRandomPassword();

        this.emailService.SendEmail(user.FirstName + " " + user.LastName, user.Email, password);
    }

    public async Task<UserVM> GetUserByEmailAsync(string email)
    {
        return await this.dbContext.Users
            .Where(u => u.Email == email)
            .ProjectTo<UserVM>(this.mapper.ConfigurationProvider)
            .FirstAsync();
    }

    public async Task<UserVM> GetUserByIdAsync(int id)
    {
        return await this.dbContext.Users
            .Where(u => u.Id == id)
            .ProjectTo<UserVM>(this.mapper.ConfigurationProvider)
            .FirstAsync();
    }

    public async Task<UserVM> UpdateUserAsync(string email, UserUM userUM)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();

        if(userUM.FirstName != null && user != null)
        {
            user.FirstName = userUM.FirstName;
        }
        if(userUM.LastName != null && user != null)
        {
            user.LastName = userUM.LastName;
        }
        if(userUM.Email != null && user != null)
        {
            user.Email = userUM.Email;
        }
        if(userUM.Role != null && user != null)
        {
            user.RoleId = Convert.ToInt32(userUM.Role);
        }

        await this.dbContext.SaveChangesAsync();

        return await this.GetUserByEmailAsync(email);
    }

    public async Task<bool> CheckIfUserExistsByEmailAsync(string email)
    {
        return await this.dbContext.Users.SingleOrDefaultAsync(u => u.Email == email) is not null;
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
}
