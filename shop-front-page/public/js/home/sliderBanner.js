export const sliderJs = {
    init: function () {
        if($(".hero-style-1") || $(".hero-style-2")) {
            // settings
            var $sliderDelay = 7500,
                $sliderSpeed = 1000;

            // animate stroke
            var count = 0,
                $svg = $('.slider-nav-progress').drawsvg({
                    duration: $sliderDelay,
                    stagger: $sliderSpeed,
                    reverse: true
                });

            function drawsvgSliderArrow() {
                $svg.drawsvg('animate');
            }

            var menu = [];
            jQuery('.swiper-slide').each( function(index){
                menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
            });
            var interleaveOffset = 0.5;
            var swiperOptions = {
                loop: false,
                speed: $sliderSpeed,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                on: {
                    progress: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-inner").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },

                    touchStart: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },

                    setTransition: function(speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-inner").style.transition =
                                speed + "ms";
                        }
                    },

                    slideChange: function() {
                        drawsvgSliderArrow();
                    }
                },
            };

            var swiper = new Swiper(".swiper-container", swiperOptions);

            // DATA BACKGROUND IMAGE
            var sliderBgSetting = $(".slide-bg-image");
            sliderBgSetting.each(function(indx){
                if ($(this).attr("data-background")){
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });
        }



        var swiper2 = new Swiper('.swiper-container-s2', {
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
