$(document).ready(function () {

    var CookieConsentTracking = Cookies.get("CookieConsentTracking");
    var CookieConsent = Cookies.get("CookieConsent");
    if (CookieConsentTracking == "false" || CookieConsentTracking == undefined) {
        DeleteAllThirdPartyCookies();
    }

    if (CookieConsent == undefined) {
        setTimeout(function () {
            $(".FixedCookiePopupContainer").fadeIn("slow");
            $(".CookieTransparentBackground").show();
        }, 500)

    }
    else {
        LoadAllTrackingScripts();
    }


    $("#CookieSettingBtn").click(function () {
        $(".CookieMainContainer").hide();
        $(".CookieSettingsContainer").show();
    })
    if ($(".FixedCookiePopupContainer").is(":visible")) {
        $(".CookieTransparentBackground").show();
    }
    else {
        $(".CookieTransparentBackground").hide();
    }

    $("#SaveTrackingSettings").click(function () {
        var trackingCookie = document.getElementById("TrackingCookies").checked;
        if (trackingCookie == true) {
            Cookies.set("CookieConsentTracking", "true", { expires: 365 });
            Cookies.set("CookieConsent", "true", { expires: 365 });
            LoadAllTrackingScripts();

        }
        else {
            DeleteAllThirdPartyCookies();
            Cookies.set("CookieConsentTracking", "false", { expires: 365 });
            Cookies.set("CookieConsent", "true", { expires: 365 });
        }
        $(".FixedCookiePopupContainer").fadeOut("slow");
        $(".CookieTransparentBackground").hide();
    })

    $("#AcceptAllCookiesBtn").click(function () {
        Cookies.set("CookieConsentTracking", "true", { expires: 365 });
        Cookies.set("CookieConsent", "true", { expires: 365 });
        LoadAllTrackingScripts();
        $(".FixedCookiePopupContainer").fadeOut("slow");
        $(".CookieTransparentBackground").hide();
    })
})
function loadScript(url) {
    // adding the script element to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // then bind the event to the callback function 
    // there are several events for cross browser compatibility
    //script.onreadystatechange = callback;
    //script.onload = callback;

    // fire the loading
    head.appendChild(script);
}



function LoadAllTrackingScripts() {
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-W2WBX033TC');
    loadScript('/js/Google.js');




}
function DeleteAllThirdPartyCookies() {
    //Awin cookies
    Cookies.remove("bId");
    Cookies.remove("aw25520");
    Cookies.remove("AWSESS");
    Cookies.remove("awpv25520");
    Cookies.remove("_aw_m_25520");
    Cookies.remove("_aw_sn_25520");
    Cookies.remove("_D9J");
    //Google analytics
    Cookies.remove("_ga");
    Cookies.remove("_gid");
    Cookies.remove("_ga_UA-107089292-10");
    Cookies.remove("_gac_gb_UA-107089292-10");
    Cookies.remove("_gat_gtag_UA_107089292_10");
    Cookies.remove("_gat");
    Cookies.remove("AMP_TOKEN");
    Cookies.remove("_gac_UA_107089292_10");
    //HotJar
    Cookies.remove("_hjSessionUser_2628880");
    Cookies.remove("_hjid");
    Cookies.remove("_hjFirstSeen");
    Cookies.remove("_hjUserAttributesHash");
    Cookies.remove("_hjCachedUserAttributes");
    Cookies.remove("_hjViewportId");
    Cookies.remove("_hjSession_2628880");
    Cookies.remove("_hjSessionTooLarge");
    Cookies.remove("_hjSessionRejected");
    Cookies.remove("_hjSessionResumed");
    Cookies.remove("_hjLocalStorageTest");
    Cookies.remove("_hjIncludedInPageviewSample");
    Cookies.remove("_hjIncludedInSessionSample");
    Cookies.remove("_hjAbsoluteSessionInProgress");
    Cookies.remove("_hjTLDTest");
    Cookies.remove("_hjRecordingEnabled");
    Cookies.remove("_hjRecordingLastActivity");
    Cookies.remove("_hjClosedSurveyInvites");
    Cookies.remove("_hjDonePolls");
    Cookies.remove("_hjMinimizedPolls");
    Cookies.remove("_hjShownFeedbackMessage");
    //Salesfire 
    Cookies.remove("sf_id");
    Cookies.remove("sf_geo");
    Cookies.remove("sf_*");
}