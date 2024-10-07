using MongoDB.Driver;
using ECommAPI.Model;
using ECommAPI.Services;

namespace ECommAPI.Repository
{
    public class ProductService : IProductService
    {
        private readonly IMongoCollection<Product> _products;

        //Constructor
        public ProductService(MongoDbContext context)
        {
            _products = context.Products;
        }

        // Create product
        public async Task CreateAsync(Product product)
        {
            product.SetCreatedData();
            await _products.InsertOneAsync(product);
        }

        // Get all product
        public async Task<List<Product>> GetAsync()
        {
            return await _products.Find(u => true).ToListAsync();
        }
    }
}