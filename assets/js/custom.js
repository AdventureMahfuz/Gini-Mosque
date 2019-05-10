(function($) {
$(document).ready(function(){
    //mobile menu
    $(".mobile-home-btn").on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });
    $(".mobile-menu-btn").on("click", function () {
        $('ul.mobile-menu').css({
            'bottom': '50px',
            'opacity': '1',
            'transition': 'all .5s',
        });
    });
    $("#close").on("click", function () {
        $('ul.mobile-menu').css({
            'bottom': '-100%',
            'opacity': '0',
            'transition': 'all .8s',
        });
    });
    $("ul.mobile-menu li a").on("click", function () {
        $('ul.mobile-menu').css({
            'bottom': '-100%',
            'opacity': '0',
            'transition': 'all .8s',
        });
    });

    //hero slider
    $('#hero-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        nav: true,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
    //hero slider animation
    $('#hero-slider').on('translate.owl.carousel', function () {
        $('.item-content h1, .item-content h2, .item-content p, .slider-btn a').removeClass('animated fadeInUp').css('opacity', '0');
    });
    $('#hero-slider').on('translated.owl.carousel', function () {
        $('.item-content h1, .item-content h2, .item-content p, .slider-btn a').addClass('animated fadeInUp').css('opacity', '1');
    });

    /*event countdown*/
    $('.countdown').countdown('2019/06/12', function (event) {
        $('#count-days').html(event.strftime('%D'));
        $('#count-hours').html(event.strftime('%H'));
        $('#count-minutes').html(event.strftime('%M'));
        $('#count-seconds').html(event.strftime('%S'));
    });

    //islamic event and blog post slide active
    $('.islamic-event, .blog-slider').owlCarousel({
        loop: true,
        margin: 18,
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });



//back to top button
    $(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

    //WoW js activation
    new WOW().init();

    // magnific popup activation
    $('.popular-item-thumb').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    });
});
})( jQuery );