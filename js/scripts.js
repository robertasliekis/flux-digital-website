//Burger menu control start
$(".burger-menu-wrapper").click(function() {
  $(".overlay-menu-wrapper").addClass("overlay-menu-visible");
});

$(".burger-menu-side").click(function() {
  $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");
});
//Burger menu control end

//Search bar fieldstart
var timesClicked = 1;
$(".search-button").click(function() {
  if (timesClicked % 2 != 0) {
    $(".search-field").addClass("search-field-open");
    $(".become-client").addClass("button-invisible");
  } else {
    $(".search-field").removeClass("search-field-open");
    $(".become-client").removeClass("button-invisible");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});
//Search bar field end

//Chat button start
var timesClicked = 1;
$(".chat-button").click(function() {
  if (timesClicked % 2 != 0) {
    $(".icon-wrapper").addClass("chat-button-active");
    $(".chat-window").addClass("chat-window-active");
  } else {
    $(".icon-wrapper").removeClass("chat-button-active");
    $(".chat-window").removeClass("chat-window-active");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});
//chat button end

//On scroll chat button animation start
$(window).on("scroll", function() {
  var footerTop = $(".footer-section").offset().top;
  var chatButtonTop = $(".chat-button").offset().top;
  if (chatButtonTop > footerTop - 100) {
    $(".chat-button").addClass("chat-button-bottom");
    $(".chat-window").addClass("chat-window-bottom");
  } else {
    $(".chat-button").removeClass("chat-button-bottom");
    $(".chat-window").removeClass("chat-window-bottom");
  }
});
//On scroll chat button animation end
