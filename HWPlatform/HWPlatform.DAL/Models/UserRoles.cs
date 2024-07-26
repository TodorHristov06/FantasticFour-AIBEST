using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HWPlatform.DAL.Models;

public class UserRoles
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    // Collection navigation to Users
    public ICollection<User> Users { get; } = new List<User>();
}
