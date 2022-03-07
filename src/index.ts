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

    $('.btn-expand').on("click", function(e) {
        e.preventDefault();
        $(this).text() !== "Less" ? $(this).text("Less") : $(this).text("More");
        $(this).siblings(".expandable").slideToggle();
    });
    
    $('.btn-more-skills').click(function(e) {
        e.preventDefault();
        expandSkills();
    });
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
    });
    
    $('#skill-overview a:not(.btn-more-skills)').on("click", function(e) {
        e.preventDefault();
        const fullSkills =  $('.skills-container');
        if (fullSkills.is(':hidden')) {
            fullSkills.slideDown(() => {
                $($(this).attr("href")!).get(0)?.scrollIntoView({behavior: "smooth"});
            })
        } else {
            $($(this).attr("href")!).get(0)?.scrollIntoView({behavior: "smooth"});
        }
    });

    const expandSkills = (cb?: () => void) => {
        const container = $('.skills-container');
        const isHidden = container.is(":hidden");
        if (!isHidden) {
            $('html, body').animate({
                scrollTop: container.offset()?.top ?? 0 
            }, cb);
        }
        $('.skills-container').slideDown(() => {
            if (isHidden) {
                $('html, body').animate({
                    scrollTop: container.offset()?.top ?? 0 
                }, cb);
            }
        });
    }
    $('[data-scroll-to]').on('click', function(e) {
        e.preventDefault();
        const view = $(this).attr('data-scroll-to');
        $(view!).get(0)?.scrollIntoView({ behavior: 'smooth' });
    })
});
