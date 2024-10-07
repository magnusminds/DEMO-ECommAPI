using ECommAPI.Repository;
using ECommAPI.Services;

namespace ECommAPI
{
    public static class SetupServices
    {
        public static void SetupInterface(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IUserService, UserService>();
            serviceCollection.AddScoped<IProductService, ProductService>();
        }
    }
}