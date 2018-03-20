/* Menu button */

$(".service-header__menu-button").click(function() {
  $(this).toggleClass("service-header__menu-button--close");
  $(".service-header__logo").toggleClass("service-header__logo--open");
  $(".service-header__menu").toggleClass("service-header__menu--open");
});


/* Service order item hover */

$(".service-order__item button.button").mouseover(function() {
  if ($(".container").css("width") != "280px") {
    $(this).parent().addClass("service-order__item--active");
  }
});

$(".service-order__item button.button").mouseout(function() {
  if ($(".container").css("width") != "280px") {
    $(this).parent().removeClass("service-order__item--active");
  }
});


/* Service order item height */

$(document).ready(function() {
  if ($(".container").css("width") == "1180px") {
    var maxHeight = +$($(".service-order__item h4")[0]).css("height").split("px")[0];
    for (var i = 1; i < $(".service-order__item h4").length; i++) {
      if (+$($(".service-order__item h4")[i]).css("height").split("px")[0] > maxHeight) {
        maxHeight = +$($(".service-order__item h4")[i]).css("height").split("px")[0];
      }
    }
    for (var i = 0; i < $(".service-order__item h4").length; i++) {
      $($(".service-order__item h4")[i]).css("height", maxHeight);
    }
  }
});


/* Popup form */

$(".button--popup").click(function() {
  $(".service-overlay").addClass("service-overlay--active");
  $(".service-popup").addClass("service-popup--active");
  $("body").css("overflowY", "hidden");
});

$(".close-button").click(function() {
  $(".service-overlay").removeClass("service-overlay--active");
  $(".service-popup").removeClass("service-popup--active");
  $("body").css("overflowY", "scroll");
});


/* Popup page */

$(".service-portfolio__gallery-item--1").click(function() {
  $(".service-overlay").addClass("service-overlay--active");
  $(".page-popup").addClass("page-popup--active");
  $("body").css("overflowY", "hidden");
});

$(".return-button").click(function() {
  $(".service-overlay").removeClass("service-overlay--active");
  $(".page-popup").removeClass("page-popup--active");
  $("body").css("overflowY", "scroll");
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
    scrollTop: $("#service-company").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--3").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-portfolio").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--4").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-program").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--5").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-reviews").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--6").click(function() {
  $("html, body").animate({
    scrollTop: $("#service-team").offset().top
  }, 1000);
  return false;
});

$(".service-header__menu-item--7").click(function() {
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


/* Portfolio pagination */

$(".service-portfolio__pagination-item").click(function() {
  $(".service-portfolio__pagination-item").removeClass("service-portfolio__pagination-item--active");
  $(".service-portfolio__gallery-item").hide();
  $(this).addClass("service-portfolio__pagination-item--active");
  var num = $(this).attr("class").charAt(71);
  $(".service-portfolio__gallery-item--" + (num * 2 - 1)).show();
  $(".service-portfolio__gallery-item--" + (num * 2)).show();
});


/* Program carousel */

$(".program-button--forward").click(function() {
  $(".program-button--back").removeAttr("disabled");
  for (var i = 0; i < $(".service-program__item").length; i++) {
    if ($($(".service-program__item")[i]).hasClass("service-program__item--active")) {
      $($(".service-program__item")[i]).removeClass("service-program__item--active");
      $($(".service-program__item")[i + 1]).addClass("service-program__item--active");
      if (i == 2) {
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


/* Program pagination */

$(".service-program__pagination-item").click(function() {
  $(".service-program__pagination-item").removeClass("service-program__pagination-item--active");
  $(".service-program__item").hide();
  $(".service-program__item").removeClass("service-program__item--active");
  $(this).addClass("service-program__pagination-item--active");
  var num = $(this).attr("class").charAt(67);
  $(".service-program__item--" + num).show();
  $(".service-program__item--" + num).addClass("service-program__item--active");
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


/* Reviews pagination */

$(".service-reviews__pagination-item").click(function() {
  $(".service-reviews__pagination-item").removeClass("service-reviews__pagination-item--active");
  $(".service-reviews__block").hide();
  $(".service-reviews__block").removeClass("service-reviews__block--active");
  $(this).addClass("service-reviews__pagination-item--active");
  var num = $(this).attr("class").charAt(67);
  $(".service-reviews__block--" + num).show();
  $(".service-reviews__block--" + num).addClass("service-reviews__block--active");
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


/* Order pagination */

$(".service-order__pagination-item").click(function() {
  $(".service-order__pagination-item").removeClass("service-order__pagination-item--active");
  $(".service-order__item").hide();
  $(this).addClass("service-order__pagination-item--active");
  var num = $(this).attr("class").charAt(63);
  $(".service-order__item--" + num).show();
});


/* Team pagination */

$(".service-team__pagination-item").click(function() {
  $(".service-team__pagination-item").removeClass("service-team__pagination-item--active");
  $(".service-team__item").hide();
  $(this).addClass("service-team__pagination-item--active");
  var num = $(this).attr("class").charAt(61);
  $(".service-team__item--" + num).show();
});


/* Service ordering - Upload file name */

$(".service-ordering__file--1 .service-ordering__upload-file input[type='file']").change(function() {
  var fileName_1 = $(this).val().replace(/.*\\/, "");
  if (fileName_1 != "") {
    $(".service-ordering__file--1 .service-ordering__file-name").val(fileName_1);
    $(".service-ordering__file--1 .service-ordering__upload-file").addClass("service-ordering__upload-file--uploaded");
  } else {
    $(".service-ordering__file--1 .service-ordering__file-name").val("");
    $(".service-ordering__file--1 .service-ordering__upload-file").removeClass("service-ordering__upload-file--uploaded");
  }
});

$(".service-ordering__file--2 .service-ordering__upload-file input[type='file']").change(function() {
  var fileName_2 = $(this).val().replace(/.*\\/, "");
  if (fileName_2 != "") {
    $(".service-ordering__file--2 .service-ordering__file-name").val(fileName_2);
    $(".service-ordering__file--2 .service-ordering__upload-file").addClass("service-ordering__upload-file--uploaded");
  } else {
    $(".service-ordering__file--2 .service-ordering__file-name").val("");
    $(".service-ordering__file--2 .service-ordering__upload-file").removeClass("service-ordering__upload-file--uploaded");
  }
});


/* Service ordering - Delete file button */

$(".service-ordering__file--1 .service-ordering__delete-file").click(function(e) {
  e.preventDefault();
  $(".service-ordering__file--1 .service-ordering__upload-file input[type='file']").val("");
  $(".service-ordering__file--1 .service-ordering__file-name").val("");
  $(".service-ordering__file--1 .service-ordering__upload-file").removeClass("service-ordering__upload-file--uploaded");
});

$(".service-ordering__file--2 .service-ordering__delete-file").click(function(e) {
  e.preventDefault();
  $(".service-ordering__file--2 .service-ordering__upload-file input[type='file']").val("");
  $(".service-ordering__file--2 .service-ordering__file-name").val("");
  $(".service-ordering__file--2 .service-ordering__upload-file").removeClass("service-ordering__upload-file--uploaded");
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


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);