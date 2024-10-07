using ECommAPI.Model;

namespace ECommAPI.Services
{
    public interface IProductService
    {
        public Task CreateAsync(Product product);

        public Task<List<Product>> GetAsync();
    }
}