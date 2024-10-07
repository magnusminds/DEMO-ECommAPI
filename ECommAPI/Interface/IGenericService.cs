namespace ECommAPI.Interface
{
    public interface IGenericService<T> where T : class
    {
        public Task CreateAsync(T product);

        public Task<List<T>> GetAsync();
    }
}