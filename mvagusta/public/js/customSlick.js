jQuery(document).ready(function ($) {
  $(".banner_slider").slick({
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: ".thumbnail_slider",
  });
  $(".thumbnail_slider").slick({
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: ".banner_slider",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="slide-arrow prev-arrow"><<</button>',
          nextArrow: '<button class="slide-arrow next-arrow">>></button>',
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="slide-arrow prev-arrow"><<</button>',
          nextArrow: '<button class="slide-arrow next-arrow">>></button>',
        },
      },
    ],
  });
  $(".banner_slider").slick("slickGoTo", 0);
  $(".thumbnail_slider").slick("slickGoTo", 0);
});
