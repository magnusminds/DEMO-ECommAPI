using MongoDB.Driver;
using ECommAPI.Model;

namespace ECommAPI.Services
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration["ConnectionStrings:MongoDb"]);
            _database = client.GetDatabase(configuration["ConnectionStrings:DatabaseName"]);
        }

        public IMongoCollection<User> Users => _database.GetCollection<User>("Users");
        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Products");
    }
}