using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class Grade
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public int Percentage { get; set; }

    [Required]
    public string Feedback { get; set; } = string.Empty;

    // FK property to HomeworkSubmission
    public int AssignmentStudentId { get; set; }

    [Required]
    public AssignmentStudent AssignmentStudent { get; set; } = null!;
}
