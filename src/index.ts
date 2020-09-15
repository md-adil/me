import $ from "jquery";
import "bootstrap";
(window as any).jQuery = $;
import "jquery-backstretch";
import banners from "../images/banners/*.jpg";
// templatemo 467 easy profile

$(function() {
    // PRELOADER
    $('.preloader').delay(1).fadeOut("slow"); // set duration in brackets    
    // HOME BACKGROUND SLIDESHOW
    $('body').backstretch(Object.values(banners), {
        duration: 3200, fade: 1300
    });

    $('.btn-expand').click(function(e) {
        e.preventDefault();
        $(this).siblings(".expandable").slideToggle();
    });
    $('.btn-more-skills').click(function(e) {
        e.preventDefault();
        $('.skills-container').slideToggle();
    })
    $('.skill-close').click(function() {
        $('.skills-container').slideUp();
    })
});
