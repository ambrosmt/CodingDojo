using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace NetClock.Controllers{
    public class NetClockController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult Index(){
            var userDt = DateTime.Now.ToString("MM/dd/yyyy hh:mm tt");
            DateTime dtByUser = DateTime.Parse(userDt).Date;
            var parseDate = dtByUser.ToString("dddd, dd MMMM yyyy");
            var localTime = DateTime.Now.ToString("hh:mm tt");
            ViewData["Date"] = parseDate;
            ViewData["Time"] = localTime;
            return View();
        }
    }
}