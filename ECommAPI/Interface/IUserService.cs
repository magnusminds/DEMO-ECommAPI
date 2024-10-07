using ECommAPI.Model;

namespace ECommAPI.Services
{
    public interface IUserService
    {
        public Task CreateAsync(User product);

        public Task<List<User>> GetAsync();
    }
}