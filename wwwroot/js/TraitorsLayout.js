$(document).ready(function () {

    $(".FAQsBtn").click(function (event) {
        event.preventDefault();
        if (window.location.pathname == "/") {
            var element = document.querySelector("#FAQs");
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            /*            window.scroll(0, window.scrollY - 154)*/

            player.stopVideo();
            window.history.pushState({}, "", "#FAQs")
        }
        else {
            location.href = "/#FAQs";
        }

    })

    if (window.location.hash == "#FAQs") {
        var element = document.querySelector("#FAQs");
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })


    }

    $(".DetailsBtn").click(function (event) {
        event.preventDefault();
        if (window.location.pathname == "/") {
            var element = document.querySelector("#Details");
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            player.stopVideo();
            window.history.pushState({}, "", "#Details")
        }
        else {
            location.href = "/#Details";
        }

    })

    if (window.location.hash == "#Reviews") {
        var element = document.querySelector("#Reviews");
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })

    }


    $(".HowToPlayBtn").click(function (event) {
        event.preventDefault();
        if (window.location.pathname == "/") {
            var element = document.querySelector("#HowToPlay");
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            player.stopVideo();
            player.playVideo();
            window.history.pushState({}, "", "#HowToPlay")
        }
        else {
            location.href = "/#HowToPlay";
        }

    })

    if (window.location.hash == "#HowToPlay") {
        var element = document.querySelector("#HowToPlay");
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        player.stopVideo();
        player.playVideo();
    }

    $(".InBoxBtn").click(function () {
        if (window.location.pathname == "/") {
            var element = document.querySelector("#InTheBox");
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            player.stopVideo();
            window.history.pushState({}, "", "#InTheBox")
        }
        else {
            location.href = "/#InTheBox";
        }

    })

    if (window.location.hash == "#InTheBox") {
        var element = document.querySelector("#InTheBox");
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
})