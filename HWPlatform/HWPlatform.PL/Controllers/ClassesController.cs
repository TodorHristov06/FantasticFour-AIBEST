using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Utilities;
using HWPlatform.DAL.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HWPlatform.PL.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize(Roles = "Admin")]

public class ClassesController : ControllerBase
{
    private readonly IClassService classService;
    private readonly IUserService userService;

    public ClassesController(IClassService classService, IUserService userService)
    {
        this.classService = classService;
        this.userService = userService;
    }

    [HttpPut("/student/{email}/class/{classYear}/{className}")]
    public async Task<ActionResult<Response>> UpdateStudentClassAsync(string email, string className, int classYear)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email) || !await this.classService.CheckIfClassExists(className, classYear))
            return NotFound();

        await this.classService.ChangeStudentClassAsync(email, className, classYear);

        return this.Ok(
            new Response
            {
                Status = "Student class changed successfully",
                Message = "Class has been updated"
            });
    }

    [HttpPut("/teacher/{email}/addclass/{classYear}/{className}")]
    public async Task<ActionResult<Response>> AddClassToTeacherAsync(string email, string className, int classYear)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email) || !await this.classService.CheckIfClassExists(className, classYear))
            return NotFound();

        await this.classService.AddClassToTeacherAsync(email, className, classYear);

        return this.Ok(
            new Response {
                Status = "Class added to teacher",
                Message = "The class has been added to the teacher"
            });
    }

    [HttpDelete("/teacher/{email}/removeclass/{classYear}/{className}")]
    public async Task<ActionResult<Response>> RemoveClassFromTeacherAsync(string email, string className, int classYear)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email) || !await this.classService.CheckIfClassExists(className, classYear))
            return NotFound();

        await this.classService.RemoveClassFromTeacherAsync(email, className, classYear);

        return this.Ok(
            new Response
            {
                Status = "Class removed from teacher",
                Message = "The class has been removed from the teacher"
            });
    }
}
