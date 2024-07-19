using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class AssignmentStudent
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    // FK property to HomeworkAssignments
    public int AssignmentId { get; set; }

    [Required]
    public HomeworkAssignment Assignment { get; set; } = null!;

    // Reference navigation to HomeworkSubmissions
    public HomeworkSubmission? Submission { get; set; }

    // Reference navigation to Grades
    public Grade? Grade { get; set; }

    // FK property to Students
    public int StudentId { get; set; }

    [Required]
    public StudentDetails Student { get; set; } = null!;
}
