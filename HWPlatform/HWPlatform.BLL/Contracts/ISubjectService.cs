using HWPlatform.Common.Models.Subject;

namespace HWPlatform.BLL.Contracts;

public interface ISubjectService
{
    // Add subject to teacher
    Task AddSubjectToTeacherAsync(string email, int subjectId);

    // Remove subject from teacher
    Task RemoveSubjectFromTeacherAsync(string email, int subjectId);

    // Check if subject exists
    Task<bool> CheckIfSubjectExistsAsync(int subjectId);

    // Create subject
    Task CreateSubjectAsync(string name, SubjectIM subjectIM);
    
    // Delete subject
    Task DeleteSubjectByIdAsync(int subjectId);

    // Get subject by id
    Task<SubjectVM> GetSubjectByIdAsync(int subjectId);
}
