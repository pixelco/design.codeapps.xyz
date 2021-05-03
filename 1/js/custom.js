$(document).ready(function(){
    "use strict";

  /*
  ============================================================== 
    DL Responsive Menu
  ============================================================== 
  */
  if(typeof($.fn.dlmenu) == 'function'){
    $('#responsive-navigation').each(function(){
      $(this).find('.dl-submenu').each(function(){
      if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
        var parent_nav = $('<li class="menu-item parent-menu"></li>');
        parent_nav.append($(this).siblings('a').clone());
        
        $(this).prepend(parent_nav);
      }
      });
      $(this).dlmenu();
    });
  }
  /*
  ==============================================================
     Testimonial SLIDER SCRIPT
  ==============================================================
  */
  if($('.why-choosus-slider').length){
    $('.why-choosus-slider').slick({
        draggable: true,
        arrows: true,
        dots: false,
        fade: true,
        speed: 900,
        infinite: true
    });
  }



   if($('.services-slider').length){
    $('.services-slider').slick({
      draggable: true,
      arrows: false,
      dots: true,
      fade: true,
      speed: 900,
      autoplay: true,
      infinite: true,
      touchThreshold: 100
    });
  }

      if($('.blog-slider').length){
        $('.blog-slider').slick({
          draggable: true,
          arrows: false,
          dots: true,
          fade: true,
          speed: 900,
          autoplay: true,
          infinite: true,
          touchThreshold: 100
        });
      }
  /*
    ============================================================
       Main Banner Javascript
    ============================================================
  */
  if($('.slider').length){
    $('.slider').slick({
      draggable: true,
      arrows: false,
      dots: true,
      fade: true,
      speed: 900,
      autoplay: true,
      infinite: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      touchThreshold: 100
    });
    $('.slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
  }
  /*
  =======================================================================
      FIXED HEADER ON - OFF
  =======================================================================
  */
  if ($('.sticky-header').length) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(function() {
          var header = $(".sticky-header");
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();
              if (scroll >= 10) {
                  header.removeClass('affix-top').addClass("affix");
              } else {
                  header.removeClass("affix").addClass('affix-top');
              }
          });
      });
    }
  }
  /*
    ============================================================
      JS NOT FOR MOBILE (PARALLAX, OPACITY SCROLL)
    ============================================================
  */
  if( mobileDetect == false ) {
    /*
    =======================================================================
      PARALLAX
     =======================================================================
    */
    if ( $('.parallax-section').length ){
      $.stellar({
        horizontalScrolling: true,
        responsive: true
      }); 
    }; 
  
  }//END JS NOT FOR MOBILE
  /*
  ==============================================================
     Testimonial SLIDER SCRIPT
  ==============================================================
  */
  if($('.testimonial').length){
    $('.testimonial').slick({
       slidesToShow: 2,
        dots: false,
        autoplay: true,
        centerMode: true,
        arrows: true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
              arrows: false,
              slidesToShow: 1
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }
    /*
  ==============================================================
     Testimonial SLIDER SCRIPT
  ==============================================================
  */
  if($('.brand-slider').length){
    $('.brand-slider').slick({
       slidesToShow: 6,
        dots: false,
        autoplay: true,
        centerMode: true,
        arrows: true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }
    /*
  ==============================================================
     Testimonial SLIDER SCRIPT
  ==============================================================
  */
  if($('.event-slider').length){
    $('.event-slider').slick({
       slidesToShow: 3,
        dots: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        vertical:true,
        centerPadding: "0px",
        responsive: [
        {
          breakpoint: 992,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
        }, 
        {
          breakpoint: 670,
          settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
          }
        }]
    });
  }







  /*
    ============================================================
         popup Javascript
    ============================================================
  */
  if($('.popup-gallery').length) {
    $('.popup-gallery').magnificPopup({
      delegate: '.popup-icon,.pop-icon',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-3d-unfold',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        // this.st.mainClass = this.st.el.attr('data-effect');
      }
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        /*titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }*/
      }
    });
  }
  if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length) {
    //VIDEO GMAPS POPUP
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      //disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  }

  /*
  ==============================================================
    COUNTDOWN  Script Start
  ==============================================================
  */
  if($('.countdown').length){
    $('.countdown').downCount({ date: '5/9/2018 12:00:00', offset: +1 });
    //$('.countdown').downCount({ date: 'Month/Date/Year 12:00:00', offset: +1 });
  }
  /*
    ============================================================
       Flickr Feed Javascript
    ============================================================
  */
    if ($("#flickr-feeds").length) {
        $('#flickr-feeds').jflickrfeed({
            limit: 6,
            qstrings: {
                id: '152623543@N06'
            },
            itemTemplate: '<li>' + '<a class="lightbox"  href="{{image}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
        });
    }

  // /*
  // ==============================================================
  //  Headin Adjusting  Script Start
  // ==============================================================
  // */
  // if($('section').length){
  //   $('section').children('.container').children('.section-heading').css('margin-top','-3px');
  // }
  // if($('section').length){
  //   $('section').children('.container').children('.section-heading-2').css('margin-top','-3px');
  // }

  // /*
  // ==============================================================
  //   COUNTDOWN  Script Start
  // ==============================================================
  // */
  // if($('.countdown').length){
  //   $('.countdown').downCount({ date: '1/1/2018 12:00:00', offset: +1 });
  // }
  // /*
  // ==============================================================
  //    PROGRESS BAR SCRIPT
  // ============================================================== 
  // */
  // if($('.progressbars').length){
  //   $(".progressbars").jprogress();
  //     $(".progressbarsone").jprogress({
  //       background: ""
  //     });
  //     var _gaq = _gaq || [];
  //       _gaq.push(['_setAccount', 'UA-109049373-1']);
  //       _gaq.push(['_setDomainName', 'oscarthemes.com']);
  //       _gaq.push(['_trackPageview']);

  //     (function() {
  //       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  //       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  //       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  //   })();
  // }
  // /*
  // ============================================================
  //   Custom Select Menu Slider Javascript
  // ============================================================
  // */
  // if ($('select').length) {
  //     $('select').each(function() {
  //         var $this = $(this),
  //             numberOfOptions = $(this).children('option').length;
  //         $this.addClass('hidden');
  //         $this.wrap('<div class="text"></div>');
  //         $this.after('<div class="styledselect form-control"></div>');
  //         var $styledselect = $this.next('div.styledselect');
  //         $styledselect.text($this.children('option').eq(0).text());
  //         var $list = $('<ul />', {
  //             'class': 'options'
  //         }).insertAfter($styledselect);
  //         for (var i = 0; i < numberOfOptions; i++) {
  //             $('<li />', {
  //                 text: $this.children('option').eq(i).text(),
  //                 html: $this.children('option').eq(i).html(),
  //                 rel: $this.children('option').eq(i).val()
  //             }).appendTo($list);
  //         }
  //         var $listItems = $list.children('li');
  //         $styledselect.click(function(e) {
  //             e.stopPropagation();
  //             $('div.styledselect.active').each(function() {
  //                 $(this).removeClass('active').next('ul.options').hide();
  //             });
  //             $(this).toggleClass('active').next('ul.options').toggle();
  //         });
  //         $listItems.click(function(e) {
  //             e.stopPropagation();
  //             $styledselect.text($(this).text()).removeClass('active');
  //             $this.val($(this).attr('rel'));
  //             $list.hide();
  //         });
  //         $(document).click(function() {
  //             $styledselect.removeClass('active');
  //             $list.hide();
  //         });
  //     });
  // }


  /*
  ============================================================
       Counter Javascript
  ============================================================
  */
    // if ($('.count-number').length) {
    //   $('.count-number').counterUp({
    //       delay: 10,
    //       time: 1000
    //   });
    // }

    /*
      ============================================================
           Masonry Gallery Javascript
      ============================================================
    */
    if ($('.masonry').length) {
        $(".masonry").imagesLoaded(function() {
            $(".masonry").masonry();
        });
    }
    if ($('.items-grid').length) {
        var fselector = 0,
            itemsGrid = $(".items-grid");
        (function($) {
            "use strict";
            var isotopeMode;
            if (itemsGrid.hasClass("masonry")) {
                isotopeMode = "masonry";
            } else {
                isotopeMode = "fitRows"
            }
            itemsGrid.imagesLoaded(function() {
                itemsGrid.isotope({
                    itemSelector: '.mix',
                    layoutMode: isotopeMode,
                    filter: fselector
                });
            });
            $(".port-filter").on('click', '.filter', function() {
                $(".filter").removeClass("active");
                $(this).addClass("active");
                fselector = $(this).attr('data-filter');
                itemsGrid.isotope({
                    itemSelector: '.mix',
                    layoutMode: isotopeMode,
                    filter: fselector
                });
                return false;
            });
        })(jQuery);
    }
    if ($('#items-grid2,#items-grid3').length) {
        var fselector = 0,
            itemsGrid = $("#items-grid2,#items-grid3");
        (function($) {
            "use strict";
            var isotopeMode;
            if (itemsGrid.hasClass("masonry")) {
                isotopeMode = "masonry";
            } else {
                isotopeMode = "fitRows"
            }
            itemsGrid.imagesLoaded(function() {
                itemsGrid.isotope({
                    itemSelector: '.mix',
                    layoutMode: isotopeMode,
                    filter: fselector
                });
            });
            $(".port-filter").on('click', '.filter', function() {
                $(".filter").removeClass("active");
                $(this).addClass("active");
                fselector = $(this).attr('data-filter');
                itemsGrid.isotope({
                    itemSelector: '.mix',
                    layoutMode: isotopeMode,
                    filter: fselector
                });
                return false;
            });
        })(jQuery);
    }
    if ($('js-height-fullscr').length) {
        $(".js-height-fullscr").height($(window).height());
    }

  // /*
  // =======================================================================
  //     NEWSLETTER
  // =======================================================================
  // */
  // $(function () {
  //   'use strict';
  //     var $form = $('#mc-embedded-subscribe-form');

  //     $('#mc-embedded-subscribe').on('click', function(event) {
  //     if(event) event.preventDefault();
  //     register($form);
  //     });
  //   });

  //   function register($form) {
  //     $.ajax({
  //     type: $form.attr('method'),
  //     url: $form.attr('action'),
  //     data: $form.serialize(),
  //     cache       : false,
  //     dataType    : 'json',
  //     contentType: "application/json; charset=utf-8",
  //     error       : function(err) { $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>'); },
  //     success     : function(data) {
       
  //       if (data.result != "success") {
  //       var message = data.msg;
  //       $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
  //       } 

  //       else {
  //       var message = data.msg;
  //       $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
  //       }
  //     }
  //   });
  // }
  /*
  =======================================================================
      Map Script
  =======================================================================
  */
  if ( $('#map-canvas').length ){
    initMap();
  }
  if ( $('[data-toggle="datepicker"').length ){
    $('[data-toggle="datepicker"]').datepicker();
  }


});


/*
  =======================================================================
       Map Custom Style Script Script
  =======================================================================
*/
var gmMapDiv = $("#map-canvas");
function initMap(){
  (function($){
      var gmCenterAddress = gmMapDiv.attr("data-address");
      var gmMarkerAddress = gmMapDiv.attr("data-address");
      gmMapDiv.gmap3({
          action: "init",
          marker: {
              address: gmMarkerAddress,
              options: {
                  icon: "images/loc-marker.png" /* Location marker */
              }
          },
          map: {
            options: {
                zoom: 17,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                mapTypeControl: false, /* hide/show (false/true) mapTypeControl*/
                scaleControl: false, /*hide/show (false/true) scaleControl */
                scrollwheel: false, /*hide/show (false/true) scrollwheel*/
                streetViewControl: false, /*hide/show (false/true) streetViewControl*/
                draggable: true,
                styles:[ { stylers: [{ invert_lightness: true }, { saturation: -100 }, { lightness: 10 }] } ] /*CHANGE STYLE (colors and etc.) */
            }
          }
      });
  })(jQuery);
}






