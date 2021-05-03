"use strict"; // Start of use strict


function mobileNavToggle () {
    if ($('.header .header-navigation.navbar .navbar-nav .sub-menu').length) {
        $('.header .header-navigation.navbar .navbar-nav .sub-menu').parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        $('.header .header-navigation.navbar .navbar-nav .sub-nav-toggler').on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}

function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper .slider1').length) {
        var Self = $('.rev_slider_wrapper .slider1');
        var slideHeight = Self.data('height');
        jQuery(".slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: 1170,
            gridheight: slideHeight
        });
    };
}

function zebraDatePickerInit () {
    if ($('input.datepicker').length) {
        console.log('hello');
        $('input.datepicker').datepicker();
    };
}

function thmCounter() {
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };
}

function thmCarousel() {
    if ($('.room-carousel').length) {
        $('.room-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoWidth: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
    if ($('.gallery-carousel').length) {
        $('.gallery-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoWidth: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });
    }
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoWidth: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    }
}
function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}

function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {        
        revolutionSliderActiver();
        mobileNavToggle();
        zebraDatePickerInit();
        thmCounter();
        thmCarousel();
        thmLightBox();
        scrollToTarget();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        projectMasonaryLayout();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {

    })(jQuery);
});