
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace GingerFoxHub.Pages.Shared.Components.CookieConsent
{
    public class CookieConsentViewComponent : ViewComponent
    {
        public class CookieConsentData
        {
            public string Name { get; set; }
        }


        public IList<CookieConsentData> cookieList = new List<CookieConsentData>();
        public IViewComponentResult Invoke(string TrackingCookieNames)
        {

            //var CookieConsentTracking = HttpContext.Request.Cookies["CookieConsentTracking"];
            //var CookieConsent = HttpContext.Request.Cookies["CookieConsent"];
            //if (CookieConsent == "true")
            //{
            //    SessionHelper.SetObjectAsJson(HttpContext.Session, "CookieConsent", "true");
            //}
            //else
            //{
            //    SessionHelper.SetObjectAsJson(HttpContext.Session, "CookieConsent", "false");
            //}
            //if (CookieConsentTracking == "true")
            //{
            //    SessionHelper.SetObjectAsJson(HttpContext.Session, "CookieConsentTracking", "true");
            //}
            //else
            //{
            //    SessionHelper.SetObjectAsJson(HttpContext.Session, "CookieConsentTracking", "false");
            //}




            var ListOfCookies = TrackingCookieNames.Split(",");
            foreach (var cookie in ListOfCookies)
            {
                CookieConsentData cookieData = new CookieConsentData();
                cookieData.Name = cookie;
                cookieList.Add(cookieData);
            }



            return View("CookieConsent", cookieList);
        }


    }
}
