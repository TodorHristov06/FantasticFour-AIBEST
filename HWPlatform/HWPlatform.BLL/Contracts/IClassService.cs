using HWPlatform.Common.Models.Class;

namespace HWPlatform.BLL.Contracts;

public interface IClassService
{
    // Check if class exists
    Task<bool> CheckIfClassExists(String className, int classYear);

    // Change student class
    Task ChangeStudentClassAsync(string email, string className, int classYear);

    // Add class to teacher
    Task AddClassToTeacherAsync(string email, string className, int classYear);

    // Remove class from teacher
    Task RemoveClassFromTeacherAsync(string email, string className, int classYear);

    // Create class
    Task CreateClassAsync(string name, int year, ClassIM classIM);

    // Update class
    Task<ClassVM> UpdateClassAsync(string oldName, int oldYear, ClassUM classUM);

    // Delete class
    Task DeleteClassAsync(string name, int year);

    // Get class
    Task<ClassVM> GetClassByCompositePKAsync(string name, int year);
}
