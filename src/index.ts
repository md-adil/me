declare var require: any;
import $ from "jquery";
(window as any).jQuery = $;
import "jquery-backstretch";
import banners from "../images/banners/*.jpg";
import "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import photos from "../images/photos/*.jpg";
// templatemo 467 easy profile

$(function() {
    // PRELOADER
    $('.preloader').delay(500).fadeOut("slow"); // set duration in brackets    
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
        const container = $('.skills-container');
        const isHidden = container.is(":hidden");
        if (!isHidden) {
            $('html, body').animate({
                scrollTop: container.offset()?.top ?? 0 
            });
        }
        $('.skills-container').slideDown(() => {
            if (isHidden) {
                $('html, body').animate({
                    scrollTop: container.offset()?.top ?? 0 
                });
            }
        });
    })
    $('.skill-close').click(function() {
        $('.skills-container').slideUp();
    })
  
    const $photos = $(".photos");
    Object.values(photos).forEach((photo) => {
        $photos.append(
            $("<a />", {href: photo, "data-fancybox": "gallery"})
        );
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    $('.btn-about-more').on("click", (e) => {
        e.preventDefault();
        $('.about-more').slideToggle();
    })
});
