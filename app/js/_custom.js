// accordion FAQ page
$(".faq__btn").on("click", function() {
  $(this)
    .parents(".panel")
    .toggleClass("is-active");
});
