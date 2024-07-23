using HWPlatform.Common.Models.User;

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
}
