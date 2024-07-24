using AutoMapper;
using HWPlatform.Common.Models.Class;
using HWPlatform.Common.Models.User;
using HWPlatform.DAL.Models;

namespace HWPlatform.PL.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    { 
        // Map User to UserVM
        this.CreateMap<User, UserVM>();

        // Map Class to ClassVM
        this.CreateMap<Class, ClassVM>();
    }
}
