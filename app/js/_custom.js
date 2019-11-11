$(document).ready(function() {
  //slider
  $(".programs__list").slick({
    infinite: false,
    arrows: false,
    dots: false,
    speed: 300,
    centerMode: true,
    slidesToShow: 3
  });

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
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    dots: true
    // asNavFor: ".insructorsList-slider"
  });

  $(".insructors__sliders #slick-slide-control00").text("Алексей Птушкин");
  $(".insructors__sliders #slick-slide-control01").text("Илья Алёхин");
  $(".insructors__sliders #slick-slide-control02").text("Вячеслав Красный");
  $(".insructors__sliders #slick-slide-control03").text("Сергей Панченков");
  $(".insructors__sliders #slick-slide-control04").text("Алексей Смирнов");

  // $(".insructorsList-slider").slick({
  //   dots: false,
  //   asNavFor: ".insructors__sliders",
  //   arrows: false,
  //   speed: 300,
  //   focusOnSelect: true,
  //   slidesToShow: 5,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //         infinite: true
  //       }
  //     }
  //   ]
  // });

  $(".newpost-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    autoplay: true,
    autoplaySpeed: 3000,
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
    dots: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".history-slide #slick-slide-control00").text("1998 - 2001");
  $(".history-slide #slick-slide-control01").text("2002 - 2007");
  $(".history-slide #slick-slide-control02").text("2008 - 2013");
  $(".history-slide #slick-slide-control03").text("2014 - 2019");

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

  // $("#slick-slide-control00").on("click", function() {
  // //   var vacancies_switch = $(this);
  // //   if ($(this).text() == 'подробнее') {
  // //     vacancies_switch.html('подробнее');
  // //     } else {
  // //       vacancies_switch.html('свернуть');
  // //     }
  // });

  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    $(".panel").removeClass("is-active");
    $(this)
      .parents(".panel")
      .toggleClass("is-active");
  });

  //pagination counter

  //custom function showing current slide
  // var $status = $(".pagingInfo");
  // var $slickElement = $(".pagin-number");

  // $slickElement.on("init reInit afterChange", function(
  //   event,
  //   slick,
  //   currentSlide,
  //   nextSlide
  // ) {
  //   //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.text(i + "/" + slick.slideCount);
  // });

  let $slider = $(".pagin-number");

  if ($slider.length) {
    let currentSlide = 0;
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
