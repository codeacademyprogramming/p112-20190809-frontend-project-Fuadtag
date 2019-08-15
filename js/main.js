$(document).ready(function() {
    $(".search-button").click(function() {
        $(".modal").css("display", "block");

    })

    $(".close-circle").click(function() {
        $(".modal").css("display", "none");
    })


    $('.slide').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        navSpeed: 800,
        autoplay: true,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }

    })
    $(".owl-carousel").owlCarousel();











})