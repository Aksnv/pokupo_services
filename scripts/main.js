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