using IBusinessLogic;
using Microsoft.AspNetCore.Mvc;

namespace BackApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReflectionController(IImporterService importerService) : ControllerBase
    {
        private readonly IImporterService _importerService = importerService;

        [HttpGet("importers")]
        public ActionResult<string[]> GetImporters()
        {
            var response = _importerService.GetImporters();
            return Ok(response);
        }
    }
}
