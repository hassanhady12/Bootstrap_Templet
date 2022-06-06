$(document).ready(function() {
    "use strict";
    $('.carousel').carousel({
        interval: 3000

    });
    //show color option
    $(" .gear-check ").click(function() {
        $(".color-option").fadeToggle();
    });
    var scrollButton = $("#scroll-top"),
        colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("background-color", "#E41B17").end()
        .eq(1).css("background-color", "#E426D5").end()
        .eq(2).css("background-color", "#009AFF").end()
        .eq(3).css("background-color", "#FFF400");

    colorLi.click(function() {
        $("link[href*='theam']").attr("href", $(this).attr("data-value"));
    });

    //scroll top

    $(window).scroll(function() {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    //clic scroll
    scrollButton.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
});

//Loding screen
$(window).load(function() {
    "use stric";
    //loding screen
    $(".loding-overlay .spinner").fadeOut(3000, function() {
        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(3000, function() {
            $(this).remove();
        });
    });


});