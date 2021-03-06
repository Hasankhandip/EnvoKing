// preloader start
$(window).on("load", function () {
  $(".holder")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      500,
      function () {
        $(".holder").css("display", "none");
      }
    );
});
// preloader end
// header-section
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 170 ) {
    $(".header-bottom").addClass("active");
    $(".header-top").addClass("remove");
    $(".header-logo").addClass("remove");
    $(".header-logo-2").addClass("active");
    $(".nav-link").addClass("active-2");
    $(".active-2-active").addClass("activated");
    $(".nav-link i").addClass("active");
  } else {
    $(".header-bottom").removeClass("active");
    $(".header-top").removeClass("remove");
    $(".header-logo").removeClass("remove");
    $(".header-logo-2").removeClass("active");
    $(".nav-link").removeClass("active-2");
    $(".active-2-active").removeClass("activated");
    $(".nav-link i").removeClass("active");
  }
});

// scroll-top btn start
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll-top").addClass("active");
  } else {
    $(".scroll-top").removeClass("active");
  }
});

$(".scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end
// slick slider
$(document).ready(function(){
    $('.banner-slider').slick({
      prevArrow: '<a href="#0" class="prev"><i class="las la-long-arrow-alt-left"></i></a>',
      nextArrow: '<a href="#0" class="next"><i class="las la-long-arrow-alt-right"></i></a>',
    });
  });

// odometer js start
(function() {
  $(".overview-counter-up").each(function () {
      $(this).isInViewport(function(status) {
          if (status === "entered") {
              for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                  var el = document.querySelectorAll('.odometer')[i];
                  el.innerHTML = el.getAttribute("data-odometer-final");
              }
          }
      });
  });
})();
// odometer js end