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
    public int SubmissionId { get; set; }

    [Required]
    public HomeworkSubmission Submission { get; set; } = null!;
}
