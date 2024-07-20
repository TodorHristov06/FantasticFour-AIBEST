using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Models.User;
using HWPlatform.DAL.Data;
using AutoMapper;
using HWPlatform.DAL.Models;
using Microsoft.EntityFrameworkCore;
using AutoMapper.QueryableExtensions;

namespace HWPlatform.BLL.Implementations;

internal class UserService : IUserService
{
    private readonly DBContext dbContext;
    private readonly IMapper mapper;

    public UserService(DBContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
    }

    // TODO: Refine method
    public async Task CreateUserAsync(UserIM userIM)
    {
        var user = this.mapper.Map<User>(userIM);

        user.IsActive = true;

        await this.UpdatePasswordAsync(user.Email);

        this.dbContext.Add(user);

        await this.dbContext.SaveChangesAsync();
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

        string passwordHash = 
            BCrypt.Net.BCrypt.HashPassword(
            new string(Enumerable
            .Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)])
            .ToArray()));

        return passwordHash;
    }

    public async Task UpdatePasswordAsync(string email)
    {
        var user = await dbContext.Users
            .Where(u => u.Email == email)
            .FirstOrDefaultAsync();

        if (user == null) return;

        user.PasswordHash = this.GenerateRandomPassword();

        await this.dbContext.SaveChangesAsync();

        // TODO: send email
    }

    // TODO: Create the config provider for models
    public async Task<List<UserVM>> GetAllUsersAsync()
    {
        return await this.dbContext.Users
            .Where(u => u.IsActive == true)
            .ProjectTo<UserVM>(this.mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<UserVM> GetUserByEmailAsync(string email)
    {
        return await this.dbContext.Users
            .Where(u => u.Email == email)
            .ProjectTo<UserVM>(this.mapper.ConfigurationProvider)
            .FirstOrDefaultAsync();
    }

    public async Task<UserVM> GetUserByIdAsync(int id)
    {
        return await this.dbContext.Users
            .Where(u => u.Id == id)
            .ProjectTo<UserVM>(this.mapper.ConfigurationProvider)
            .FirstOrDefaultAsync();
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
            // TODO: Implement
        }

        await this.dbContext.SaveChangesAsync();

        return await this.GetUserByEmailAsync(email);
    }
}
