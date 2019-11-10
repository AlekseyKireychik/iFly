$(document).ready(function() {
  //slider
  $(".advantages__list").slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="advantages__dot">' + "0" + (i + 1) + "</a>";
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false,
          arrows: false,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $(".seti__lenta").slick({
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    speed: 300,
    slidesToShow: 3
  });

  $(".reviews-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1
  });

  $(".insructors__sliders").slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    asNavFor: '.insructorsList-slider'

  });
  $(".insructorsList-slider").slick({
    dots: false,
    asNavFor: '.insructors__sliders',
    arrows: false,
    speed: 300,
    focusOnSelect: true,
    slidesToShow: 5
  });

  $(".newpost-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true
        }
      }
    ]
  });
  
  $(".new__bottom").slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true
        }
      }
    ]
      
  });

  $(".history-slide").slick({
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //pagination text
  $("a[data-slide]").click(function(e) {
    e.preventDefault();
    let slideno = $(this).data("slide");
    $(".insructors__sliders").slick("slickGoTo", slideno - 1);
  });

  $("a[data-slide]").click(function(e) {
    e.preventDefault();
    let slideno = $(this).data("slide");
    $(".history-slide").slick("slickGoTo", slideno - 1);
  });

  // $(".history__caption[data-dot]").hasClass(".slick-active"),
  //   function(e) {
  //     e.preventDefault();
  //     let dot = $(this).data("dot");
  //     dot.toggleClass("is-active");
  //   };

  //news
  $(".news__btn").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("is-active");
  });  

  $(".news__selectValue").on("click", function(event) {
    event.preventDefault();
    $(".news__nav").toggleClass("is-active");
  });  

  //form
  $(".register").on("click", function(event) {
    event.preventDefault();
    $(".main__form").addClass("is-active");
    $(".overlay").addClass("is-active");
    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".main__form").removeClass("is-active");
    });
    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".main__form").removeClass("is-active");
    });
  });

  //nav-menu
  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $("#nav-menu").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".profile__subList").removeClass("is-active");
    // $("#nav-menu").on("mouseenter", function() {
    //   $(this).addClass("is-active");
    // });
    // $("#nav-menu").on("mouseleave", function() {
    //   $(this).removeClass("is-active");
    //   $(".burger-menu").removeClass("is-active");
    // });
  });

  //profile
  $(".profile__container").on("click", function(event) {
    event.preventDefault();
    $(".profile__subList").toggleClass("is-active");
    $("#nav-menu").removeClass("is-active");
    $(".burger-menu").removeClass("is-active");
  });

  $(".header__link").hover(function(event) {
    event.preventDefault();
    $(this)
      .siblings(".header__subList")
      .toggleClass("is-active");
    $(".header__subList").on("mouseenter", function() {
      $(this).addClass("is-active");
    });
    $(".header__subList").on("mouseleave", function() {
      $(this).removeClass("is-active");
    });
  });
  // vacancies
  
  
  // $(".vacancies__btn").on("click", function() {
  //   var vacancies_switch = $(this);
  //   if ($(this).text() == 'подробнее') {
  //     vacancies_switch.html('подробнее');
  //     } else {
  //       vacancies_switch.html('свернуть');
  //     }
  // });

  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    $(".panel").removeClass("is-active");
    $(this)
      .parents(".panel")
      .toggleClass("is-active");
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
  //pagination counter

  let $slider = $(".pagin-number");

  if ($slider.length) {
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");

    let updateSliderCounter = function(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + "/" + slidesCount);
    };

    $slider.on("init", function(event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on("afterChange", function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
  }

});

