$(function () {
  $(".header-slider").slick({
    dots: true,
    vertical: true,
    prevArrow:
      '<button type="button" class="slick-prev slick-btn"><img src="images/prev.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-btn"><img src="images/next.svg"></button>',
    responsive: [
      {
        breakpoint: 371,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".product__content",
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/product-prev.png"></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/product-next.png"></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
        breakpoint: 461,
        settings: {
          vertical: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    fade: true,
    arrows: false,
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
