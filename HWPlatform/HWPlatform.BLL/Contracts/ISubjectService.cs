namespace HWPlatform.BLL.Contracts;

public interface ISubjectService
{
    // Add subject to teacher
    Task AddSubjectToTeacherAsync(string email, int subjectId);

    // Remove subject from teacher
    Task RemoveSubjectFromTeacherAsync(string email, int subjectId);

    // Check if subject exists
    Task<bool> CheckIfSubjectExists(int subjectId);
}
