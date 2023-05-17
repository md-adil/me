import "jquery-backstretch";
import banners from "../images/banners/*.jpg";
import "@fancyapps/fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";
import photos from "../images/photos/*.jpg";

$(function () {
    // PRELOADER
    $(".preloader").delay(500).fadeOut("slow"); // set duration in brackets
    // HOME BACKGROUND SLIDESHOW
    $("body").backstretch(Object.values(banners), {
        duration: 3200,
        fade: 1300,
    });

    $(".btn-expand").on("click", function (e) {
        e.preventDefault();
        $(this).text() !== "Less" ? $(this).text("Less") : $(this).text("More");
        $(".expandable").slideToggle();
    });

    $(".btn-more-skills").on('click', function (e) {
        e.preventDefault();
        expandSkills();
    });

    $(".skill-close").on('click', function () {
        $("#detailed-skills").slideUp();
    });

    const $photos = $(".photos");
    Object.values(photos).forEach((photo) => {
        $photos.append($("<a />", { href: photo, "data-fancybox": "gallery" }));
    });

    $('[data-fancybox="gallery"]').fancybox();

    $(".btn-about-more").on("click", (e) => {
        e.preventDefault();
        $(".about-more").slideToggle();
    });

    $("#skill-overview a:not(.btn-more-skills)").on("click", function (e) {
        e.preventDefault();
        const fullSkills = $("#detailed-skills");
        if (fullSkills.is(":hidden")) {
            fullSkills.slideDown(() => {
                $($(this).attr("href")!).get(0)?.scrollIntoView({ behavior: "smooth" });
            });
        } else {
            $($(this).attr("href")!).get(0)?.scrollIntoView({ behavior: "smooth" });
        }
    });

    const expandSkills = (cb?: () => void) => {
        const container = $("#detailed-skills");
        const isHidden = container.is(":hidden");
        if (!isHidden) {
            $("html, body").animate(
                {
                    scrollTop: container.offset()?.top ?? 0,
                },
                cb
            );
        }
        container.slideDown(() => {
            if (isHidden) {
                $("html, body").animate(
                    {
                        scrollTop: container.offset()?.top ?? 0,
                    },
                    cb
                );
            }
        });
    };
    $("[data-scroll-to]").on("click", function (e) {
        e.preventDefault();
        const view = $(this).attr("data-scroll-to");
        $(view!).get(0)?.scrollIntoView({ behavior: "smooth" });
    });
});
