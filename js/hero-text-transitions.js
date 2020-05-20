$('.hero-slider').slick({
    slidesToShow: 1,
    prevArrow: $(".themes-carousel-controls.prev"),
    nextArrow: $(".themes-carousel-controls.next"),
    autoplay: true,
    dots: false,
    autoplaySpeed: 4500,
    fade: true
  });

// This will make a slick gallery carousel that autoplays
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: $(".gallery-control.prev"),
  nextArrow: $(".gallery-control.next"),
  autoplaySpeed: 900,
});


// This will make a slick testimonial carousel that autoplays
$('.slick-testimonials').slick({
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 3000,
  fade: true
});


// This will make a slick gallery for hotel features carousel that autoplays
$('.slick-chose-feautures').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3900,
  prevArrow: $(".choose_resot_slider .owl-prev"),
  nextArrow: $(".choose_resot_slider .owl-next"),
  fade: true
});