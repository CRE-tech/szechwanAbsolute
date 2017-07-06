/*

Template:  Resta resturant template
Template URI: http://hastech.company/
Description: This is html5 template
Author: Hastech
Author URI: http://hastech.company/
Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. Searchbar active
    03. stickey menu
    04. Nivo slider activation
    05. Isotope activation
    0.6 MagnificPopup activation
    08.  Counter Up
    0.9 Accordion
    10. slick carousel 
    11. You tube video active
    12. Parallax active
    13. wow js active
    14. scrollUp jquery active
    15. Preloader
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";

   /*-------------------------------------------
    	01. jQuery MeanMenu
    --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();
	
	/* ------------------
       02. Searchbar active
    ---------------- */
	$('.search-inner a').on('click', function(){
		$('.search-inside').fadeIn();
	});
	$('.search-close').on('click', function(){
		$('.search-inside').fadeOut();
	});	
	
    /*----------------------------
       03. stickey menu
    ----------------------------*/
    $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 265) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
	   }
	});
    
	/*----------------------
		04. Nivo slider activation
	----------------------*/
	$('#mainSlider').nivoSlider({
        directionNav: false,
        animSpeed: 2000,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: true,
        manualAdvance: true,
        prevText: '<i class="fa fa-chevron-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-chevron-right nivo-next-icon"></i>'
    });

	/*----------------------
		05. Isotope activation
	----------------------*/
    $(window).on('load',function(){

        // Activate isotope in container
        $(".gallery-item-box").isotope({
           itemSelector:'.gallery-item'
        });

        //add isotope click function
        $('.gallery-menu li').on('click',function(){
           $(".gallery-menu li").removeClass("active");
           $(this).addClass("active");

           var selector = $(this).attr("data-filter");
         $(".gallery-item-box").isotope({
             filter: selector,
             animationOptions:{
                 duration:750,
                 easing:'linear',
                 queue: false
             }
         });
         return false;
        });

    });

    /*---------------
        0.6 MagnificPopup activation
     -------------------*/
    $('.single-item-gallery a,.member-overlay').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
    });	
	
    $('.single-gallery-img a').magnificPopup({
            type: 'image',
            gallery:{enabled:true},
            zoom: {
                 enabled: true,
                 duration: 300,
            }
    });	
	$('.blog-hover a, .viedo--play a,.widget-video-overlay a').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
    });
    
    /*--------------------------
      08.  Counter Up
    ---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    /*--------------------
      0.9 Accordion
    -------------------------*/
    $(".widget-categories").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
    $(".accordion-active").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	});	
    
	/*-------------------------------------------
    	10. slick carousel 
    --------------------------------------------- */
    $('.dises-list').slick({
    	   arrows: false,
		   slidesToShow: 1,
		   dots: true,
		   customPaging: function(slider, i) {
                return '<a href="javascript:void(0)">' + (i + 1) + '</a>';
            },
		   responsive: [
            {
			  breakpoint: 350,
			  settings: {
				centerPadding: '20px',
			  }
			}
		  ]
  	});
   $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return '<a href="javascript:void(0)">' + (i + 1) + '</a>';
        },
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider'
    });
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
            
            {
              breakpoint: 767,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 2,
                centerMode: false,
                }
            },
            {
              breakpoint: 480,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });
    
    $('.team-list').slick({
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
    
  /*--------------------
       11. You tube video active
    -------------------------*/
    $(".youtube-bg").YTPlayer({
        videoURL:"https://youtu.be/fJRhdDIJqs0",
        containment:'.youtube-bg',
        mute:true,
        loop:true,
        showControls: true
        
    });
    
    /*--------------------------
		12. Parallax active
	----------------------*/
	$('.parallax').parallax("50%", 0.3);

   /*------------------
    	13. wow js active
    ---------------- */
    new WOW().init();
   /*------------
    	14. scrollUp jquery active
    ------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*---------
	   15. Preloader
	------------------------*/
		$(window).on('load', function() {
			$(".preloader").fadeOut("slow");;
		});

})(jQuery);
