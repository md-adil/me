import $ from "jquery";
import "bootstrap";
(window as any).jQuery = $;
import "jquery-backstretch";
import banners from "../images/banners/*.jpg";
// templatemo 467 easy profile

$(function() {
    // PRELOADER
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
    // HOME BACKGROUND SLIDESHOW
    $('body').backstretch(Object.values(banners), {
        duration: 3200, fade: 1300
    });
});
