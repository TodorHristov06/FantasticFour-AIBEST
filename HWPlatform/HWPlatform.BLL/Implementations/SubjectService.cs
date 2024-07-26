using AutoMapper;
using AutoMapper.QueryableExtensions;
using HWPlatform.BLL.Contracts;
using HWPlatform.Common.Models.Subject;
using HWPlatform.DAL.Data;
using HWPlatform.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HWPlatform.BLL.Implementations;

internal class SubjectService : ISubjectService
{
    private readonly DBContext dbContext;
    private readonly IMapper mapper;

    SubjectService(DBContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
    }

    public async Task AddSubjectToTeacherAsync(string email, int subjectId)
    {
        var user = await this.dbContext.Users
            .Where(u => u.Email == email)
            .FirstAsync();

        var subject = await dbContext.Subjects.FindAsync(subjectId);

        if (subject == null) return;

        user.Teacher.Subjects.Add(subject);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<bool> CheckIfSubjectExistsAsync(int subjectId)
    {
        return await this.dbContext.Subjects.SingleOrDefaultAsync(s => s.Id == subjectId) is not null;
    }

    public async Task CreateSubjectAsync(string name, SubjectIM subjectIM)
    {
        var subject = this.mapper.Map<Subject>(subjectIM);

        subject.Name = name;

        this.dbContext.Subjects.Add(subject);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task DeleteSubjectByIdAsync(int subjectId)
    {
        var subject = await dbContext.Subjects.FindAsync(subjectId);

        if (subject != null)
            this.dbContext.Remove(subject);

        await this.dbContext.SaveChangesAsync();
    }

    public async Task<SubjectVM> GetSubjectByIdAsync(int subjectId)
    {
        return await this.dbContext.Subjects
            .Where(s => s.Id == subjectId)
            .ProjectTo<SubjectVM>(this.mapper.ConfigurationProvider)
            .FirstAsync();
    }

    public async Task RemoveSubjectFromTeacherAsync(string email, int subjectId)
    {
        var user = await this.dbContext.Users
            .Include(u => u.Teacher.Subjects)
            .FirstAsync(u => u.Email == email);

        var subject = await this.dbContext.Subjects
            .Include(s => s.Teachers)
            .FirstOrDefaultAsync(s => s.Id == subjectId);

        if (subject == null) return;

        user.Teacher.Subjects.Remove(subject);

        await this.dbContext.SaveChangesAsync();
    }
}
