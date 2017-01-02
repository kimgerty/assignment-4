$(document).ready(function(){
$(".readmore").click(function(eventmore) {
  eventmore.preventDefault ();
});
$(".readless hide").click(function(eventless) {
  eventless.preventDefault ();
})

  $(".readmore").click(function () {
    $("p").slideDown ();
    $("#show-this-on-click").hide ();
    $(".readmore").hide ();
    $(".readless").show ();
  });

  $(".readless hide").click(function() {
    $("p").slideUp ();
    $(".readless hide").hide ();
    $("#show-this-on-click").hide ();
    $(".readmore").show ();
  });

});
