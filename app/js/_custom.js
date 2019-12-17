//BackForm input-file

function getFileName() {
  let file = document.getElementById("uploaded-file").value;

  file = file
    .replace(/\\/g, "/")
    .split("/")
    .pop();

  document.getElementById("file-name").innerHTML =
    '<div id="del__container" class="del__container">' +
    file +
    '<span id="del-file"><span onclick="RemoveFunc()" class="name del-file-btn">Удалить файл</span></span>' +
    "</div>";
}
function RemoveFunc() {
  document.getElementById("uploaded-file").value = null;

  let remove = document.getElementById("del__container").remove();
  return false;
}

jQuery.each(jQuery("textarea[data-autoresize]"), function() {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function(el) {
    jQuery(el)
      .css("height", "auto")
      .css("height", el.scrollHeight + offset);
  };
  jQuery(this)
    .on("keyup input", function() {
      resizeTextarea(this);
    })
    .removeAttr("data-autoresize");
});

$(document).ready(function() {
  //sliders

  //programs
  $("#programs-list").on("init", function(event, slick) {
    $(".programs__counter").text(1 + " / " + slick.slideCount);
  });
  $("#programs-list").on("reInit", function(event, slick) {
    $(".programs__counter").text(1 + " / " + slick.slideCount);
  });
  $("#programs-list").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".programs__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $("#programs-list").slick({
    infinite: false,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          focusOnSelect: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  });

  //akcii
  $("#akcii-list").on("init", function(event, slick) {
    $(".akcii__counter").text(1 + " / " + slick.slideCount);
  });
  $("#akcii-list").on("reInit", function(event, slick) {
    $(".akcii__counter").text(1 + " / " + slick.slideCount);
  });
  $("#akcii-list").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".akcii__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $("#akcii-list").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  });

  $("#advantages-list").slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="advantages__dot">' + "0" + (i + 1) + "</a>";
    }
  });

  $("#birthday-list").slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="birthday__dot">' + "0" + (i + 1) + "</a>";
    }
  });

  //seti homepage
  $("#seti-lenta").on("init", function(event, slick) {
    $(".seti__counter").text(1 + " / " + slick.slideCount);
  });
  $("#seti-lenta").on("reInit", function(event, slick) {
    $(".seti__counter").text(1 + " / " + slick.slideCount);
  });
  $("#seti-lenta").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".seti__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $("#seti-lenta").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    useTransform: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1100,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true
        }
      }
    ]
  });

  function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    let visibleSlides = $(
      '.seti__lenta > .slick-list > .slick-track > .slick-slide[aria-hidden="false"]'
    );
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css("opacity", 1);
      // console.log($(this).html());
    });
    //Set the opacity of the first and last partial slides.
    $(visibleSlides)
      .first()
      .prev()
      .css("opacity", 0.4);
    $(visibleSlides)
      .last()
      .next()
      .css("opacity", 0.4);
  }

  //Execute the function to apply the visibility on dom ready.
  $(setSlideVisibility());

  //Re-apply the visibility in the beforeChange event.
  $(".seti__lenta").on("beforeChange", function() {
    $(".slick-slide").each(function() {
      $(this).css("opacity", 1);
    });
  });

  //After the slide change has completed, call the setSlideVisibility to hide the partial slides.
  $(".seti__lenta").on("afterChange", function() {
    setSlideVisibility();
  });

  // reviews
  $(".reviews-slider").on("init", function(event, slick) {
    $(".reviews__counter").text(1 + " / " + slick.slideCount);
  });
  $(".reviews-slider").on("reInit", function(event, slick) {
    $(".reviews__counter").text(1 + " / " + slick.slideCount);
  });
  $(".reviews-slider").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".reviews__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $(".reviews-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1
  });

  $(".insructors__sliders").slick({
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });

  $(".insructors__sliders #slick-slide-control00").text("Алексей Птушкин");
  $(".insructors__sliders #slick-slide-control01").text("Илья Алёхин");
  $(".insructors__sliders #slick-slide-control02").text("Вячеслав Красный");
  $(".insructors__sliders #slick-slide-control03").text("Сергей Панченков");
  $(".insructors__sliders #slick-slide-control04").text("Алексей Смирнов");

  //book flight
  $(".lang__btn").on("click", function(event) {
    event.preventDefault();
    $(".lang__subList").toggleClass("is-active");
  });

  $("#order-list01").on("init", function(event, slick) {
    $(".order__counter").text(1 + " / " + slick.slideCount);
  });
  $("#order-list01").on("reInit", function(event, slick) {
    $(".order__counter").text(1 + " / " + slick.slideCount);
  });
  $("#order-list01").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".order__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $("#order-list01").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
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

  $("#order-list02").on("init", function(event, slick) {
    $(".order__counter02").text(1 + " / " + slick.slideCount);
  });
  $("#order-list02").on("reInit", function(event, slick) {
    $(".order__counter02").text(1 + " / " + slick.slideCount);
  });
  $("#order-list02").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".order__counter02").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $("#order-list02").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
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
  //newpost
  $(".newpost-slider").on("init", function(event, slick) {
    $(".newpost__counter").text(1 + " / " + slick.slideCount);
  });
  $(".newpost-slider").on("reInit", function(event, slick) {
    $(".newpost__counter").text(1 + " / " + slick.slideCount);
  });
  $(".newpost-slider").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".newpost__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  });
  $(".newpost-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    adaptiveHeight: true,
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

  //newpost bottom
  $(".new__bottom").on("init", function(event, slick) {
    $(".new__counter").text(1 + " / " + slick.slideCount);
  });
  $(".new__bottom").on("reInit", function(event, slick) {
    $(".new__counter").text(1 + " / " + slick.slideCount);
  });
  $(".new__bottom").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".new__counter").text(currentSlide + 1 + " / " + slick.slideCount);
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

  //athlete
  $(".athlete__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".athlete__sliderNav"
  });
  $(".athlete__sliderNav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".athlete__slider",
    arrows: false,
    dots: false,
    variableWidth: true,
    centerMode: false,
    focusOnSelect: true
  });
  //vacancies
  $(".vacancies__btn").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("is-active")) {
      $(".panel-title").removeClass("is-active");
      $(".vacancies__btn").removeClass("is-active");
    } else {
      $(".panel-title").removeClass("is-active");
      $(".vacancies__btn").removeClass("is-active");
      $(this)
        .closest(".panel-heading")
        .children(".panel-title")
        .addClass("is-active");
      $(this).addClass("is-active");
    }
  });

  //news
  $(".news__btn").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("is-active")) {
      $(".news__btn").removeClass("is-active");
      $(this).removeClass("is-active");
    } else {
      $(".news__btn").removeClass("is-active");
      $(this).addClass("is-active");
    }
  });

  $(".news__selectValue").on("click", function(event) {
    event.preventDefault();
    $(".news__nav").toggleClass("is-active");
  });
  //gallery
  $(".gallery__btn").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("is-active")) {
      $(".gallery__btn").removeClass("is-active");
      $(this).removeClass("is-active");
    } else {
      $(".gallery__btn").removeClass("is-active");
      $(this).addClass("is-active");
    }
  });

  $(".gallery__selectValue").on("click", function(event) {
    event.preventDefault();
    $(".gallery__nav").toggleClass("is-active");
  });
  // Lightbox
	// $('.gallery .gallery__link').lightbox(); 
  //form request
  $(".request").on("click", function(event) {
    event.preventDefault();
    $(".request__form").addClass("is-active");
    $(".overlay").addClass("is-active");
    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".request__form").removeClass("is-active");
    });
    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".request__form").removeClass("is-active");
    });
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

  $("#comment").bind("input", function() {
    if ($("#comment").html($(this).val().length)) {
      $(this).addClass("change");
    } else {
      $(this).removeClass("change");
    }
  });
  $("#comment02").bind("input", function() {
    if ($("#comment02").html($(this).val().length)) {
      $(this).addClass("change");
    } else {
      $(this).removeClass("change");
    }
  });
  $(document).on("keypress", ".validate-numeric", function(event) {
    return isNumber(event);
  });

  function isNumber(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (unicode != 8 && unicode != 9) {
      //if the key isn't the backspace key (which we should allow)
      if (unicode < 48 || unicode > 57)
        //if not a number
        return false; //disable key press
    }
  }

  $(".form").on("submit", function(e) {
    e.preventDefault();

    var formdata = {};
    var fields = [];
    var form = $(this);

    $(this)
      .find("[data-type]")
      .each(function(i, e) {
        var item = {};
        if ($(e).data("type") == "Radio Button") {
          if ($(e).is(":checked")) {
            item["type"] = $(e).data("type");
            item["label"] = $(e).data("label");
            item["value"] = $(e).val();
            item["required"] =
              typeof $(e).data("validation") != "undefined" ? "true" : "false";
            fields.push(item);
          }
        } else {
          item["type"] = $(e).data("type");
          item["label"] = $(e).data("label");
          if (item["type"] == "Checkbox") {
            $(e).is(":checked")
              ? (item["value"] = "ticked")
              : (item["value"] = "not ticked");
          } else {
            item["value"] = $(e).val();
          }
          item["required"] =
            typeof $(e).data("validation") != "undefined" ? "true" : "false";
          fields.push(item);
        }
      });

    formdata["formid"] = form.find("[name=formid]").val();
    formdata["url"] = form.find("[name=url]").val();
    formdata["culturecode"] = form.find("[name=culturecode]").val();
    formdata["fields"] = fields;

    formdata = JSON.stringify(formdata);

    $.ajax({
      type: "POST",
      url: "",
      data: formdata,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        form.trigger("reset");
      },
      error: function(data) {}
    });
  });

  //nav-menu

  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $("#nav-menu").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".profile__subList").removeClass("is-active");
  });

  //menu

  $(".menu-title").on("click", function() {
    if ($(this).hasClass("is-active")) {
      $(".menu-title").removeClass("is-active");
      $(".menu__list").removeClass("is-active");
    } else {
      $(".menu-title").removeClass("is-active");
      $(".menu__list").removeClass("is-active");
      $(this)
        .children(".menu__list")
        .addClass("is-active");
      $(this).addClass("is-active");
    }
  });

  //profile
  $(".profile__container").on("click", function(event) {
    event.preventDefault();
    $(".profile__subList").toggleClass("is-active");
    $(".profile__logo-active").toggleClass("is-active");
    $(".profile__logo").toggleClass("is-active");
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

  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    if (
      $(this)
        .parents(".panel")
        .hasClass("is-active")
    ) {
      $(".panel").removeClass("is-active");
      $(this)
        .parents(".panel")
        .removeClass("is-active");
    } else {
      $(".panel").removeClass("is-active");
      $(this)
        .parents(".panel")
        .addClass("is-active");
    }
  });
});
