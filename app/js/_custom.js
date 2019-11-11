$(document).ready(function() {

  //sliders

  // $(".programs__list").slick({
  //   infinite: false,
  //   arrows: false,
  //   dots: false,
  //   speed: 300,
  //   centerMode: true,
  //   slidesToShow: 3
  // });

  $(".advantages__list").slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  // seti homepage
  $(".seti__lenta").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true
  });

  function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    let visibleSlides = $('.seti__lenta > .slick-list > .slick-track > .slick-slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css('opacity', 1);
      console.log($(this).html());
    });
    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0.4);
    $(visibleSlides).last().next().css('opacity', 0.5);
  }
  
  //Execute the function to apply the visibility on dom ready.
  $(setSlideVisibility());
  
  //Re-apply the visibility in the beforeChange event.
  $('.seti__lenta').on('beforeChange', function() {
    $('.slick-slide').each(function() {
      $(this).css('opacity', 1);
    });
  });
  
  //After the slide change has completed, call the setSlideVisibility to hide the partial slides.
  $('.seti__lenta').on('afterChange', function() {
    setSlideVisibility();
  });


  //
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

  // accordion FAQ page
  $(".faq__btn").on("click", function() {
    $(".panel").removeClass("is-active");
    $(this)
      .parents(".panel")
      .toggleClass("is-active");
  });
  ///fsdfdsdfsd

  var SETTINGS = {
    navBarTravelling: false,
    navBarTravelDirection: "",
	 navBarTravelDistance: 150
}

var colours = {
    0: "#867100",
    1: "#7F4200",
    2: "#99813D",
    3: "#40FEFF",
    4: "#14CC99",
    5: "#00BAFF",
    6: "#0082B2",
    7: "#B25D7A",
    8: "#00FF17",
    9: "#006B49",
    10: "#00B27A",
    11: "#996B3D",
    12: "#CC7014",
    13: "#40FF8C",
    14: "#FF3400",
    15: "#ECBB5E",
    16: "#ECBB0C",
    17: "#B9D912",
    18: "#253A93",
    19: "#125FB9",
}

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// Out advancer buttons
var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
var pnAdvancerRight = document.getElementById("pnAdvancerRight");
// the indicator
var pnIndicator = document.getElementById("pnIndicator");

var pnProductNav = document.getElementById("pnProductNav");
var pnProductNavContents = document.getElementById("pnProductNavContents");

pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));

// Set the indicator
moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]);

// Handle the scroll of the horizontal container
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
}

pnProductNav.addEventListener("scroll", function() {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});


pnAdvancerLeft.addEventListener("click", function() {
	// If in the middle of a move return
    if (SETTINGS.navBarTravelling === true) {
        return;
    }
    // If we have content overflowing both sides or on the left
    if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
        // Find how far this panel has been scrolled
        var availableScrollLeft = pnProductNav.scrollLeft;
        // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settings
        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
            pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
        } else {
            pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
        }
        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
        pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
        // Update our settings
        SETTINGS.navBarTravelDirection = "left";
        SETTINGS.navBarTravelling = true;
    }
    // Now update the attribute in the DOM
    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
});

pnAdvancerRight.addEventListener("click", function() {
    // If in the middle of a move return
    if (SETTINGS.navBarTravelling === true) {
        return;
    }
    // If we have content overflowing both sides or on the right
    if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
        // Get the right edge of the container and content
        var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
        var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
        // Now we know how much space we have available to scroll
        var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
        // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settings
        if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
            pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
        } else {
            pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
        }
        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
        pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
        // Update our settings
        SETTINGS.navBarTravelDirection = "right";
        SETTINGS.navBarTravelling = true;
    }
    // Now update the attribute in the DOM
    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
});

pnProductNavContents.addEventListener(
    "transitionend",
    function() {
        // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
        var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
        var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
        // If there is no transition we want to default to 0 and not null
        var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
        pnProductNavContents.style.transform = "none";
        pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition");
        // Now lets set the scroll position
        if (SETTINGS.navBarTravelDirection === "left") {
            pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
        } else {
            pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
        }
        SETTINGS.navBarTravelling = false;
    },
    false
);

// Handle setting the currently active link
pnProductNavContents.addEventListener("click", function(e) {
	var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
	links.forEach(function(item) {
		item.setAttribute("aria-selected", "false");
	})
	e.target.setAttribute("aria-selected", "true");
	// Pass the clicked item and it's colour to the move indicator function
	moveIndicator(e.target, colours[links.indexOf(e.target)]);
	console.log(colours[links.indexOf(e.target)]);
});

function moveIndicator(item, color) {
    var textPosition = item.getBoundingClientRect();
    var container = pnProductNavContents.getBoundingClientRect().left;
    var distance = textPosition.left - container;
    pnIndicator.style.transform = "translateX(" + (distance + pnProductNavContents.scrollLeft) + "px) scaleX(" + textPosition.width * 0.01 + ")";
    if (color) {
        pnIndicator.style.backgroundColor = color;
    }
}

function determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsRight = Math.floor(containerMetrics.right);
    var containerMetricsLeft = Math.floor(containerMetrics.left);
    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsRight = Math.floor(contentMetrics.right);
    var contentMetricsLeft = Math.floor(contentMetrics.left);
	 if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
        return "both";
    } else if (contentMetricsLeft < containerMetricsLeft) {
        return "left";
    } else if (contentMetricsRight > containerMetricsRight) {
        return "right";
    } else {
        return "none";
    }
}

  ///https://codepen.io/benfrain/pen/MppBYa




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
