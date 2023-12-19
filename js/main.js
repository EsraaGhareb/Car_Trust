(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 10);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    //toggle button
    $(document).ready(function(){
      $(".toggleBtn").click(function(){
        $(".carForm").toggle();
      });
    });
    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

      $('#brands-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        pagination :true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            loop: true,
            nav: true,
            dots: true
          },
          600: {
            items: 2,
            loop: true,
            nav: true,
            dots:true
          },
          1000: {
            items: 5,
            nav: true,
            loop: true,
            margin: 25,
            dots: false,
            autoplay: true
          }
        }
      });
    
})(jQuery);

