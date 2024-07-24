using HWPlatform.DAL.Models;

namespace HWPlatform.BLL.Contracts;

public interface IHomeworkSubmissionService
{
    Task SubmitHomeworkAsync(HomeworkSubmission homeworkSubmission);
    Task<HomeworkSubmission> GetSubmissionByAssignmentStudentEmailAsync(string email);
}