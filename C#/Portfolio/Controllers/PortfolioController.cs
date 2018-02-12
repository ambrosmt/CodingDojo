using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Portfolio.Controllers
{
    public class PortfolioController : Controller
    {
        [HttpGet]
        [Route("/test")]
        public IActionResult Test()
        {
            return View();
            // return View("Test", "_Layout");
        }
        [HttpGet]
        [Route("")]
        public IActionResult Home()
        {
            return View();
        }
        [HttpGet]
        [Route("/Projects")]
        public IActionResult Projects()
        {
            return View();
        }
        [HttpGet]
        [Route("/Contact")]
        public IActionResult Contact()
        {
            return View();
        }
    }
}