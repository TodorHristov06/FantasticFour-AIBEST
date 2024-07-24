using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Models.User;
using HWPlatform.Common.Utilities;
using HWPlatform.DAL.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HWPlatform.PL.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize(Roles = "Admin")]

public class UsersController : ControllerBase
{
    private readonly IUserService userService;

    public UsersController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<UserVM>> GetUserByIdEmailAsync(string email)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email))
            return NotFound();

        return await this.userService.GetUserByEmailAsync(email);
    }

    [HttpPatch("/update/{email}")]
    public async Task<ActionResult<UserVM>> UpdateUserByEmailAsync([FromBody] UserUM userUM, string email)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email))
            return NotFound();

        return await userService.UpdateUserAsync(email, userUM);
    }

    [HttpPatch("/delete/{email}")]
    public async Task<ActionResult<Response>> SoftDeleteUserAsync(string email)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email))
            return NotFound();

        await this.userService.DeleteUserAsync(email);

        return this.Ok(
            new Response
            {
                Status = "User deleted successfully",
                Message = "IsActive has been set to false"
            });
    }

    [HttpGet("/getpassword/{email}")]
    public async Task<ActionResult<string>> GetPasswordAsync(string email)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email))
            return NotFound();

        return await this.userService.UpdatePasswordForAuthServiceAsync(email);
    }
}
