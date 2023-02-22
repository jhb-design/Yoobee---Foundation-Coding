$(document).ready(function(){

	"use strict";


    //Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 100);

			return false;

		});



        //testimonial-carousel

        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,

            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
        });


        
        $('.header-area').sticky({
           topSpacing:0
        });
        

});	

	



//modal

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  $(".closeModal").click(function () {
    $(".modal").modal("hide");
});














   