using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class HomeworkSubmission
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public string FilePath { get; set; } = string.Empty;

    [Required]
    public DateTime SubmissionDate {  get; set; }

    [Required]
    public string Comment { get; set; } = string.Empty;

    // Reference navigation to Grades
    public Grade? Grade { get; set; }
    
    // FK property to Students
    public int StudentId { get; set; }

    [Required]
    public StudentDetails Student { get; set; } = null!;

    // FK property to HomeworkAssignment
    public int AssignmentId { get; set; }

    [Required]
    public HomeworkAssignment Assignment { get; set; } = null!;
}
