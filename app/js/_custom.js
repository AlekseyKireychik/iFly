$(document).ready(function() {
  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    $(".panel").removeClass("is-active");
    $(this)
      .parents(".panel")
      .toggleClass("is-active");
  });

  $.extend($.validator.messages, {
    required: "Error"
  });

  $("#form").validate({
    rules: {
      name: {
        required: true
      },
      fname: {
        required: true,
        fname: true
      },
      tel: {
        required: true
      }
    }
  });

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
  // $(".slider").slick({
  //   dots: false,
  //   arrows: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000
  // });
});