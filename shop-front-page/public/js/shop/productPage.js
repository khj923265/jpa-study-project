export const ProductPageJS = {
    init: function () {
        if ($(".shop-single-slider").length) {
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                focusOnSelect: true,

                responsive: [
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]

            });
        }
    }
}