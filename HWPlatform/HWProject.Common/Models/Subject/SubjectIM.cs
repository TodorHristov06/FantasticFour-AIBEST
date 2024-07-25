using System.ComponentModel.DataAnnotations;

namespace HWPlatform.Common.Models.Subject;

public class SubjectIM
{
    [Required(ErrorMessage = "Name is required")]
    [RegularExpression("^([A-Za-z0-9]+)(\\s[A-Za-z0-9]+)*$", ErrorMessage = "Name is not valid")]
    public string Name { get; set; } = string.Empty;
}
