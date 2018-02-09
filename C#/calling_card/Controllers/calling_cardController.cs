using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace calling_card.Controllers
{
    public class calling_cardController : Controller
    {
        [HttpGetAttribute]
        [Route("")]
        public string Home()
        {
            return "Hello World! \n I made this for you :3";
        }

        [HttpGet]
        [Route("index")]
        public string Index(){
            return "Greetings from index  ;P";
        }

        [HttpGet]
        [Route("jason_test")]
        public JsonResult DisplayInt()
        {
            return Json(34);
        }

        [HttpGet]
        [Route("index/{Name}")]
        public string Method(string Name)
        {
            return $"Welcome {Name}";
        }
        // [HttpPost]
        // [Route("")]
        // public IActionResult Other(){}

        [HttpGet]
        [Route("{firstName}/{lastName}/{favNumber}/{favColor}")]
        public JsonResult basicInfo(string firstName, string lastName, string favNumber, string favColor)
        {
            var AnonObject = new {
                                First_Name = firstName,
                                Last_Name = lastName,
                                Favorite_Number = favNumber,
                                Favorite_Color = favColor
                                };
            return Json(AnonObject);
        }
    }
}