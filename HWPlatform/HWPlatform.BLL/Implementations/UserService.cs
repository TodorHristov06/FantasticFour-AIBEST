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
}
