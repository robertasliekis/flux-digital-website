var backgroundHeight = window.outerHeight;

if (window.innerWidth <= 1024) {
  $(".overlay-menu-wrapper").height(window.innerHeight - 56);
  $(".welcome-background").height(backgroundHeight / 2);
}

if (window.innerWidth <= 414) {
  $(".welcome-background").height(backgroundHeight - 144);
}

window.addEventListener("resize", () => {
  $(".overlay-menu-wrapper").height(window.innerHeight - 56);
  $(".welcome-background").height(backgroundHeight / 2);
  if (window.innerWidth <= 414) {
    $(".welcome-background").height(backgroundHeight - 144);
  }
});

//Burger menu control start
var scrollTop1 = 0;
var scrollTop2 = 0;

$(".burger-menu-wrapper").click(function () {
  var scrollTop1 = $(window).scrollTop();
  if (!$(".overlay-menu-wrapper").hasClass("overlay-menu-visible")) {
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible");
    if (window.innerWidth <= 414) {
      document.getElementById("empty-section").style.marginTop = -scrollTop1 + "px";
      window.setTimeout(function () {
        $(".website-wrapper").addClass("scroll-disabled ");
      }, 600);
    }
  } else {
    $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");
    if (window.innerWidth <= 414) {
      $(".website-wrapper").removeClass("scroll-disabled");
      document.getElementById("empty-section").style.marginTop = "0px";
      window.scrollTo(0, scrollTop2);
    }
  }
  scrollTop2 = scrollTop1;
});

//Burger menu control end

//Search bar fieldstart
$(".search-button").click(function () {
  if (!$(".search-field").hasClass("search-field-open")) {
    $(".search-field").addClass("search-field-open");
    $(".become-client").addClass("button-invisible");
  } else {
    $(".search-field").removeClass("search-field-open");
    $(".become-client").removeClass("button-invisible");
  }
});
//Search bar field end

//Chat button start
$(".chat-button").click(function () {
  if (!$(".chat-window").hasClass("chat-window-active")) {
    $(".icon-wrapper").addClass("chat-button-active");
    $(".chat-window").addClass("chat-window-active");
  } else {
    $(".icon-wrapper").removeClass("chat-button-active");
    $(".chat-window").removeClass("chat-window-active");
  }
});
//chat button end

//On scroll chat button animation start
$(window).on("scroll", function () {
  let footerTop = $(".footer-section").offset().top;
  let chatButtonTop = $(".chat-button").offset().top;
  if (chatButtonTop > footerTop - 100) {
    $(".chat-button").addClass("chat-button-bottom");
    $(".chat-window").addClass("chat-window-bottom");
  } else {
    $(".chat-button").removeClass("chat-button-bottom");
    $(".chat-window").removeClass("chat-window-bottom");
  }
});
//On scroll chat button animation end
