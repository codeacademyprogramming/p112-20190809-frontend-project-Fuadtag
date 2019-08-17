$(document).ready(function() {
    $(".search-button").click(function() {
        $(".modal").css("display", "block");

    })

    $(".close-circle").click(function() {
        $(".modal").css("display", "none");
    })


    // $(window).on("scroll", function() {
    //     let navbar = $(nav);
    //     let win = $(window);
    //     let scroll = win.scrollTop();
    //     if (scroll < 300) {

    //         navbar.removeClass("sticky");
    //     } else {
    //         navbar.addClas("sticky");
    //     }s
    // })

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
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");
            this.classList.toggle(".accordion-color");



            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";

            } else {
                panel.style.display = "block";


            }
        });
    }
    $(".accordion").click(function() {
            $(".accordion").classname.toggle(".accordion-color")
        })
        // $({ Counter: 0 }).animate({
        //     Counter: $('.p-counter').text()
        // }, {
        //     duration: 1000,
        //     easing: 'swing',
        //     step: function() {
        //         $('.p-counter').text(Math.ceil(this.Counter));
        //     }
        // });










})