using System.ComponentModel.DataAnnotations;

namespace HWPlatform.Common.Models.Class;

public class ClassIM
{
    [Required(ErrorMessage = "Name is required")]
    [RegularExpression("^(1[0-2]|[1-9])[a-zA-Z]$", ErrorMessage = "Name is not valid")]
    public string Name { get; set; } = string.Empty;

    // Years 2000 - 2099
    [Required(ErrorMessage = "Year is required")]
    [RegularExpression("^20\\d{2}$", ErrorMessage = "Year is not valid")]
    public string Year { get; set; } = string.Empty;
}
