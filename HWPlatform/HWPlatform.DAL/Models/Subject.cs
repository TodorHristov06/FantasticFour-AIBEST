using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HWPlatform.DAL.Models;

public class Subject
{
    [Required]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    // Collection navigation to HomeworkAssignment
    public ICollection<HomeworkAssignment> Assignments { get; } = new List<HomeworkAssignment>();

    // FK property to Teachers
    public int TeacherId { get; set; }

    [Required]
    public Teacher Teacher { get; set; } = null!;
}
