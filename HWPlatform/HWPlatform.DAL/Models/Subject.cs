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

    // Collection navigation to Teachers
    public ICollection<Teacher> Teachers { get; } = new List<Teacher>();
}
