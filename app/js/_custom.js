$(document).ready(function() {
  //nav-menu
  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $("#nav-menu").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $("#nav-menu").on('mouseenter', function() {
      $(this).addClass("is-active");
    });
    $("#nav-menu").on('mouseleave', function() {
      $(this).removeClass("is-active");
      $(".burger-menu").removeClass("is-active");
    });
  });

  $(".header__link").hover (function(event) {
    event.preventDefault();
    $(this).siblings(".header__subList").toggleClass("is-active");
    $(".header__subList").on('mouseenter', function() {
      $(this).addClass("is-active");
    });
    $(".header__subList").on('mouseleave', function() {
      $(this).removeClass("is-active");
    });
  });

  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    $(".panel").removeClass("is-active");
    $(this).parents(".panel").toggleClass("is-active");
  });

  // $.extend($.validator.messages, {
  //   required: "Error"
  // });

  // $("#form").validate({
  //   rules: {
  //     name: {
  //       required: true
  //     },
  //     fname: {
  //       required: true,
  //       fname: true
  //     },
  //     tel: {
  //       required: true
  //     }
  //   }
  // });

  //more-less
  // $('.nav-toggle').click(function () {
  //   var collapse_content_selector = $(this).attr('href');
  //   var toggle_switch = $(this);
  //   $(collapse_content_selector).toggle(function () {
  //       if ($(this).css('display') == 'none') {
  //           toggle_switch.html('Read More');
  //       } else {
  //           toggle_switch.html('Read Less');
  //       }
  //   });
  // });

  //slider
  // $(".reviews-slider").slick({
  //   dots: true,
  //   arrows: true,
  //   speed: 300,
  //   slidesToShow: 1
  // });
});