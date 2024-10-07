using MongoDB.Driver;
using ECommAPI.Model;
using ECommAPI.Services;

namespace ECommAPI.Repository
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;

        //Constructor
        public UserService(MongoDbContext context)
        {
            _users = context.Users;
        }

        // Create user
        public async Task CreateAsync(User user)
        {
            user.SetCreatedData();
            await _users.InsertOneAsync(user);
        }

        // Get all users
        public async Task<List<User>> GetAsync()
        {
            return await _users.Find(u => true).ToListAsync();
        }
    }
}