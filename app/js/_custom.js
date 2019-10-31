// accordion FAQ page
$(".faq__btn").on("click", function() {
  $(".panel").removeClass("is-active");
  $(this)
    .parents(".panel")
    .toggleClass("is-active");
});
