using Microsoft.AspNetCore.Mvc;
using ECommAPI.Model;
using ECommAPI.Services;

namespace ECommAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService _productService)
        {
            this._productService = _productService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Product product)
        {
            await _productService.CreateAsync(product);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            var product = await _productService.GetAsync();
            return Ok(product);
        }
    }
}