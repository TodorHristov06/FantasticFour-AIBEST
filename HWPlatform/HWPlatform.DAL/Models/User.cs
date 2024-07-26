using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class User
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    public string LastName { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    [Required]
    public bool IsActive { get; set; }

    // FK property to UserRoles
    public int RoleId { get; set; }

    [Required]
    public UserRoles Role { get; set; } = null!;

    // Reference navigation to StudentDetails
    public StudentDetails? Student { get; set; }

    // Reference navigation to Teachers
    public Teacher? Teacher { get; set; }
}
