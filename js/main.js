(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100);
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
                $('.fixed-top .app-alert').addClass('d-none');

            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
                $('.fixed-top .app-alert').removeClass('d-none');

            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', 0);
                $('.fixed-top .app-alert').addClass('d-none');

            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
                $('.fixed-top .app-alert').removeClass('d-none');
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

let paymentDetails ={
    mileage:"",
    origin: "",
    color: "",
    purpose_of_use: "",
    accidents: "",
    maintenance_history: "",
    certified: "",
    modified: "",
    Service_Contract: "",
    warranty: "",
    ct_score: "",
    manufacturer_id: "",
    model_id: "",
    year_id: "",
    trim_id: "",
    plate_no: "",
    source: "Website",
};