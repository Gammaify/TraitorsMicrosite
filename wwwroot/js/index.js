$(document).ready(function () {



        //$.get("https://gingerfox.co.uk/api/ProductPrice?productid=1145", function (data, status) {

        //    if (data.lineSalePercentage != 0) {
        //        var discountPercentage = data.productPrice / 100 * data.lineSalePercentage;


        //        var ProductPriceString = "£" + (data.productPrice - discountPercentage).toFixed(2);
        //        $("#ProductPrice").text(ProductPriceString + " ");
        //    }
        //    else {
        //        $("#ProductPrice").text("£" + data.productPrice + " ");
        //    }
        //});

    const client = window.ShopifyBuy.buildClient({
        domain: 'gingerfox.co.uk',
        storefrontAccessToken: '5f230d2d8cbccf9bbe5d60551645777f'
    });

    const productId = 'gid://shopify/Product/8777816473886';

    client.product.fetch(productId).then((product) => {
        var price = "£" + product.variants[0].price.amount;
        // Do something with the product
        $("#ProductPrice").text(price + " ");
    });

  


    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        touchDrag: true,
        items: 4,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            468: {
                items: 2,
                center: false
            },
            992: {
                items: 4,
                center: false,
            }
        }
    });

    $("#q1Card").click(function () {
        $("#q1").toggle();
        $("#a1").toggle();
        var element = document.getElementById("q1Card");
        element.classList.toggle("FAQAnswerCard");
    })

    $("#q2Card").click(function () {
        $("#q2").toggle();
        $("#a2").toggle();
        var element = document.getElementById("q2Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q3Card").click(function () {
        $("#q3").toggle();
        $("#a3").toggle();
        var element = document.getElementById("q3Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q4Card").click(function () {
        $("#q4").toggle();
        $("#a4").toggle();
        var element = document.getElementById("q4Card");
        element.classList.toggle("FAQAnswerCard");
    })

})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    slidesPerView: "auto",
    centeredSlidesBounds: true,
    spaceBetween: 40,
    // If we need pagination
    //pagination: {
    //    el: '.swiper-pagination',
    //},

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



    // And if we need scrollbar
    //scrollbar: {
    //    el: '.swiper-scrollbar',
    //},
});

const swiper2 = new Swiper('.LifeStyleSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlidesBounds: true,
    centeredSlides: true,
    slidesPerView: "1",
    breakpoints: {
        768: {
            slidesPerView: "3",
        },
        992: {
            slidesPerView: "4",
        }
    },
    // If we need pagination
    //pagination: {
    //    el: '.swiper-pagination',
    //},

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



    // And if we need scrollbar
    //scrollbar: {
    //    el: '.swiper-scrollbar',
    //},
});
/*window.addEventListener('scroll', function () { console.log(this.scrollY) })*/
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'ujVwDJHg3ak',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}



function onPlayerStateChange(event) {
    //if (event.data == 1) {
    //    setTimeout(stopVideo, 6000);
    //    done = true;
    //}
}
function stopVideo() {
    player.stopVideo();
}