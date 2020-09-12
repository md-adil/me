// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/banner_dna.jpg", 
	 		 "images/banner_spaces.jpg",
			 "images/banner_tech.jpg",
			 "images/banner_google_datacenter.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})