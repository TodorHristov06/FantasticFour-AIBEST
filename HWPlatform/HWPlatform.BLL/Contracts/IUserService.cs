using HWPlatform.Common.Models.User;
using System.Transactions;

namespace HWPlatform.BLL.Contracts;

public interface IUserService
{
    // Get user by id
    Task<UserVM> GetUserByIdAsync(int id);

    // Get user by email
    Task<UserVM> GetUserByEmailAsync(string email);

    // Generate a random password
    string GenerateRandomPassword();

    // Update password
    Task UpdatePasswordAsync(string email);

    // Update user
    Task<UserVM> UpdateUserAsync(string email, UserUM userUM);

    // Soft delete user
    Task DeleteUserAsync(string email);

    // Generate random pass for auth service
    Task UpdatePasswordForAuthServiceAsync(string email);

    // Check if user exists by email
    Task<bool> CheckIfUserExistsByEmailAsync(string email);
}
