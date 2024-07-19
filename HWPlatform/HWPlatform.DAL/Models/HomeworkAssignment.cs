using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class HomeworkAssignment
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public DateTime Deadline { get; set; }

    [Required]
    public int MaxPoints { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    // FK property to Teachers
    public int TeacherId { get; set; }

    [Required]
    public Teacher Teacher { get; set; } = null!;

    // FK property to Subjects
    public int SubjectId { get; set; }

    [Required]
    public Subject Subject { get; set; } = null!;

    // Collection navigation to HomeworkSubmission
    public ICollection<AssignmentStudent> AssignedStudents { get; } = new List<AssignmentStudent>();
}
