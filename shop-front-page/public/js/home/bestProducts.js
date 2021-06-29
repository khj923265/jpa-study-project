export const bestProductsJS = {
    init: function () {
        if ($(".product-row-slider").length) {
            $(".product-row-slider").owlCarousel({
                autoplay: false,
                smartSpeed: 300,
                loop: true,
                autoplayHoverPause: true,
                dots: false,
                nav: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },

                    450: {
                        items: 2,
                        margin: 15
                    },

                    550: {
                        items: 3,
                        margin: 15
                    },

                    1200: {
                        items: 4
                    }
                }
            });
        }
    }
}