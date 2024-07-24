using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HWPlatform.PL.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize(Roles = "Admin")]

public class SubjectsController : ControllerBase
{
    private readonly ISubjectService subjectService;
    private readonly IUserService userService;

    public SubjectsController(ISubjectService subjectService, IUserService userService)
    {
        this.subjectService = subjectService;
        this.userService = userService;
    }

    [HttpPut("/teacher/{email}/addsubject/{subjectId}")]
    public async Task<ActionResult<Response>> AddSubjectToTeacherAsync(string email, int subjectId)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email) || !await this.subjectService.CheckIfSubjectExists(subjectId))
            return NotFound();

        await this.subjectService.AddSubjectToTeacherAsync(email, subjectId);

        return this.Ok(
            new Response
            {
                Status = "Subject added to teacher",
                Message = "The subject has been added to the teacher"
            });
    }

    [HttpDelete("teacher/{email}/removesubject/{subjectId}")]
    public async Task<ActionResult<Response>> RemoveSubjectFromTeacherAsync(string email, int subjectId)
    {
        if (!await this.userService.CheckIfUserExistsByEmailAsync(email) || !await this.subjectService.CheckIfSubjectExists(subjectId))
            return NotFound();

        await this.subjectService.RemoveSubjectFromTeacherAsync(email, subjectId);

        return this.Ok(
            new Response
            {
                Status = "Subject removed from teacher",
                Message = "The subject has been removed from the teacher"
            });
    }
}
