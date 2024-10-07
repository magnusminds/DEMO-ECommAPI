using Microsoft.AspNetCore.Mvc;
using ECommAPI.Model;
using ECommAPI.Repository;
using ECommAPI.Services;

namespace ECommAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService _userService)
        {
            this._userService = _userService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(User user)
        {
            await _userService.CreateAsync(user);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = await _userService.GetAsync();
            return Ok(users);
        }
    }
}