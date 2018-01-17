/* Service order item hover */

$(".service-order__item button").mouseover(function() {
  $(this).parent().addClass("service-order__item--active");
});

$(".service-order__item button").mouseout(function() {
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
    /*$(".header-top__timer-days span").text(0);
    $(".header-top__timer-hours span").text(0);*/
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
