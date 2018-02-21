/* Menu button */

$(".service-header__menu-button").click(function() {
  $(this).toggleClass("service-header__menu-button--close");
  $(".service-header__logo").toggleClass("service-header__logo--open");
  $(".service-header__menu").toggleClass("service-header__menu--open");
});


/* Service order item hover */

$(".service-order__item button.button").mouseover(function() {
  $(this).parent().addClass("service-order__item--active");
});

$(".service-order__item button.button").mouseout(function() {
  $(this).parent().removeClass("service-order__item--active");
});


/* Service order item height */

$(document).ready(function() {
  var maxHeight = +$($(".service-order__item h4")[0]).css("height").split("px")[0];
  for (var i = 1; i < $(".service-order__item h4").length; i++) {
    if (+$($(".service-order__item h4")[i]).css("height").split("px")[0] > maxHeight) {
      maxHeight = +$($(".service-order__item h4")[i]).css("height").split("px")[0];
    }
  }
  for (var i = 0; i < $(".service-order__item h4").length; i++) {
    $($(".service-order__item h4")[i]).css("height", maxHeight);
  }
});


/* Popup form */

$(".button--popup").click(function() {
  $(".service-overlay").addClass("service-overlay--active");
  $(".service-popup").addClass("service-popup--active");
});

$(".close-button").click(function() {
  $(".service-overlay").removeClass("service-overlay--active");
  $(".service-popup").removeClass("service-popup--active");
});


/* Page scroll */

$(".service-header__menu-item--1").click(function() {
  $("html, body").animate({
    scrollTop: $("html").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--2").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-person").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--3").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-program").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--4").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-reviews").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--5").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-map").offset().top
  }, 1000);
  return false;
});


/* Offer counter */

function countdownCounter() {
  var finishDate = new Date(2019, 0, 1);
  var curentDate = new Date();

  if ((curentDate - finishDate) >= 0) {
    /*$(".header-top__timer-days span").text(0);*/
    $(".offer-counter__hours").text(0);
    $(".offer-counter__minutes").text(0);
    $(".offer-counter__seconds").text(0);
  } else {
    var time = finishDate - curentDate;
    var days = Math.floor(time / (24 * 3600 * 1000));
    var hours = Math.floor((time / (24 * 3600 * 1000) - days) * 24);
    var minutes = Math.floor((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60);
    var seconds = Math.floor((((((time / (24 * 3600 * 1000) - days) * 24) - hours) * 60) - minutes) * 60);

    /*$(".header-top__timer-days span").text(days);
    $(".header-top__timer-hours span").text(hours);*/
    if (hours < 10) {
      $(".offer-counter__hours").text("0" + hours);
    } else {
      $(".offer-counter__hours").text(hours);
    }
    if (minutes < 10) {
      $(".offer-counter__minutes").text("0" + minutes);
    } else {
      $(".offer-counter__minutes").text(minutes);
    }
    if (seconds < 10) {
      $(".offer-counter__seconds").text("0" + seconds);
    } else {
      $(".offer-counter__seconds").text(seconds);
    }
  }
};

setInterval(countdownCounter, 1000);


/* Program carousel */

$(".program-button--forward").click(function() {
  $(".program-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".service-program__item").length; i++) {
    if ($($(".service-program__item")[i]).hasClass("service-program__item--active")) {
      $($(".service-program__item")[i]).removeClass("service-program__item--active");
      $($(".service-program__item")[i + 1]).addClass("service-program__item--active");
      if (i == 1) {
        $(".program-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
});

$(".program-button--back").click(function() {
  $(".program-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".service-program__item").length; i++) {
    if ($($(".service-program__item")[i]).hasClass("service-program__item--active")) {
      $($(".service-program__item")[i]).removeClass("service-program__item--active");
      $($(".service-program__item")[i - 1]).addClass("service-program__item--active");
      if (i == 1) {
        $(".program-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
});


/* Reviews carousel */

$(".reviews-button--forward").click(function() {
  $(".reviews-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".service-reviews__block").length; i++) {
    if ($($(".service-reviews__block")[i]).hasClass("service-reviews__block--active")) {
      $($(".service-reviews__block")[i]).removeClass("service-reviews__block--active");
      $($(".service-reviews__block")[i + 1]).addClass("service-reviews__block--active");
      if (i == 1) {
        $(".reviews-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".service-reviews__pagination-item").length; j++) {
    if ($($(".service-reviews__pagination-item")[j]).hasClass("service-reviews__pagination-item--active")) {
      $($(".service-reviews__pagination-item")[j]).removeClass("service-reviews__pagination-item--active");
      $($(".service-reviews__pagination-item")[j + 1]).addClass("service-reviews__pagination-item--active");
      break;
    }
  }
});

$(".reviews-button--back").click(function() {
  $(".reviews-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".service-reviews__block").length; i++) {
    if ($($(".service-reviews__block")[i]).hasClass("service-reviews__block--active")) {
      $($(".service-reviews__block")[i]).removeClass("service-reviews__block--active");
      $($(".service-reviews__block")[i - 1]).addClass("service-reviews__block--active");
      if (i == 1) {
        $(".reviews-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
  for (var j = 0; j < $(".service-reviews__pagination-item").length; j++) {
    if ($($(".service-reviews__pagination-item")[j]).hasClass("service-reviews__pagination-item--active")) {
      $($(".service-reviews__pagination-item")[j]).removeClass("service-reviews__pagination-item--active");
      $($(".service-reviews__pagination-item")[j - 1]).addClass("service-reviews__pagination-item--active");
      break;
    }
  }
});


/* Order carousel */

$(".order-button--forward").click(function() {
  $(".order-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".service-order__item").length; i++) {
    if ($($(".service-order__item")[i]).hasClass("service-order__item--visible")) {
      $($(".service-order__item")[i]).removeClass("service-order__item--visible");
      $($(".service-order__item")[i + 1]).addClass("service-order__item--visible");
      if (i == 1) {
        $(".order-button--forward").attr("disabled", "disabled");
      }
      break;
    }
  }
});

$(".order-button--back").click(function() {
  $(".order-button--forward").removeAttr("disabled");
  for (var i = 0; i < $(".service-order__item").length; i++) {
    if ($($(".service-order__item")[i]).hasClass("service-order__item--visible")) {
      $($(".service-order__item")[i]).removeClass("service-order__item--visible");
      $($(".service-order__item")[i - 1]).addClass("service-order__item--visible");
      if (i == 1) {
        $(".order-button--back").attr("disabled", "disabled");
      }
      break;
    }
  }
});


/* Team pagination */

$(".service-team__pagination-item").click(function() {
  $(".service-team__pagination-item").removeClass("service-team__pagination-item--active");
  $(".service-team__item").hide();
  $(this).addClass("service-team__pagination-item--active");
  var num = $(this).attr("class").charAt(61);
  $(".service-team__item--" + num).show();
});


/* Back-to-top button */

(function () {
  window.addEventListener("scroll", function(event) {
    if ($(window).scrollTop() == 0) {
      document.querySelector(".back-to-top").classList.remove("back-to-top--visible");
    } else {
      document.querySelector(".back-to-top").classList.add("back-to-top--visible");
    }
  });
}());

$(".back-to-top").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});