$(".scrollAbout").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
});

$(".scrollWho").click(function() {
    $('html, body').animate({
      scrollTop: $("#who").offset().top
    }, 1000);
});
