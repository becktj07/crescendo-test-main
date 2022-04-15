$("#navLaunch").click(function () {
    $(".main-nav").toggleClass("nav-open");

     $(window).resize(function() {
        if ($(window).width() > 1024) {
            $(".main-nav").removeClass("nav-open");
        }
      });
});