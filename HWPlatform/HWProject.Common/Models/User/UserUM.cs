using System.ComponentModel.DataAnnotations;

namespace HWPlatform.Common.Models.User;

public class UserUM
{
    [RegularExpression("^(?=.*[A-ZА-Яа-яa-z])([A-ZА-Я])([a-zа-я]{2,29})+(?<![_.])$", ErrorMessage = "First name is not valid")]
    [Display(Name = "First name")]
    public string? FirstName { get; set; } = String.Empty;

    [RegularExpression("^(?=.*[A-ZА-Яа-яa-z])([A-ZА-Я])([a-zа-я]{2,29})+(?<![_.])$", ErrorMessage = "Last name is not valid")]
    [Display(Name = "Last name")]
    public string? LastName { get; set; } = String.Empty;

    [EmailAddress(ErrorMessage = "Email name is not in the correct format")]
    public string? Email { get; set; } = String.Empty;

    [StringLength(1, ErrorMessage = "The {0} must be exactly {1} character long.", MinimumLength = 1)]
    [RegularExpression("^(0|1|2)$")]
    [Display(Name = "User role")]
    public string? Role { get; set; } = string.Empty;
}
