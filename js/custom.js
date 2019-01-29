/*=============================
            SCROLL EFFECT
===============================*/
$(function () {
    //animate on scroll
    new WOW().init();
});

/*=============================
            TEAM
===============================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverpause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 2
            }

        }
    });
});


/*=============================
            TESTIMONIALS
===============================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverpause: true,
    });
});

/*=============================
            WORKSHOP
===============================*/
$(function () {
    $("#workshop-check").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverpause: true,
    });
});




/*=============================
            PARTNERS
===============================*/
$(function () {
    $("#partners-list").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverpause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 768 up
            992: {
                items: 6
            }
        }
    });
});


/*=============================
            NAVIGATION
===============================*/

// Show/Hide nav bar

$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav bar
            $("nav").removeClass("camrab-top-nav")
            $("#back-to-top").fadeOut();
        } else {
            //show nav bar
            $("nav").addClass("camrab-top-nav")
            $("#back-to-top").fadeIn();
        }
    });
});

//Smooth Scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        //get/return id
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});

// CLose moobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });

});
