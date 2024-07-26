using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class StudentDetails
{
    // FK property to Users
    [Key]
    public int UserId { get; set; }

    [Required] 
    public User User { get; set; } = null!;

    // Composite FK property to Classes
    [ForeignKey("ClassId1, ClassId2")]
    public string ClassId1 { get; set; } =string.Empty;
    public int ClassId2 { get; set; }

    [Required]
    public Class Class { get; set; } = null!;

    [Required]
    public int ClassNumber { get; set; }

    // Reference navigation to HomeworkSubmission
    public ICollection<AssignmentStudent> AssignedHomeworks { get; } = new List<AssignmentStudent>();
}
