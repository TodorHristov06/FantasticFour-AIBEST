using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class Teacher
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    // Collection navigation to HomeworkAssignment
    public ICollection<HomeworkAssignment> Assignments { get; set; } = new List<HomeworkAssignment>();

    // FK property to Users
    public int UserId { get; set; }

    [Required]
    public User User { get; set; } = null!;

    // Collection navigation to Subjects
    public ICollection<Subject> Subjects { get; } = new List<Subject>();

    // Collection navigation to Classes
    public ICollection<Class> Classes { get; } = new List<Class>();
}
