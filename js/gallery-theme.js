(function($) {    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function gallery_slider(){
        if ( $('.resort_gallery').length ){
            $('.resort_gallery').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                navContainer: '.resort_gallery_inner',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    800: {
                        items: 3,
                    },
                    1060: {
                        items: 4,
                    }
                }
            })
        }
    }
    gallery_slider();
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function resort_full_slider(){
        if ( $('.resort_full_gallery').length ){
            $('.resort_full_gallery').owlCarousel({
                loop:true,
                margin: 0,
                items: 4,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    800: {
                        items: 4,
                    }
                }
            })
        }
    }
    resort_full_slider();
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function resot_slider(){
        if ( $('.choose_resot_slider, .room_details_img').length ){
            $('.choose_resot_slider, .room_details_img').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
                navContainer: '.choose_resot_slider, .room_details_img',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
            })
        }
    }
    resot_slider();
    
    /*----------------------------------------------------*/
    /*  Explor Room Slider
    /*----------------------------------------------------*/
    function explor_slider(){
        if ( $('.explor_slider').length ){
            $('.explor_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav:true,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                navContainerClass: 'explor_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            })
        }
    }
    explor_slider();
    
    /*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function clients_slider(){
        if ( $('.clients_slider').length ){
            $('.clients_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false,
                responsiveClass: true,
            })
        }
    }
    clients_slider();
})(jQuery)