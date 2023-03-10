using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            // Mapping our Activity to our Activity
            // Mapping our data from request to Activity from DB
            CreateMap<Activity, Activity>();
        }
    }
}