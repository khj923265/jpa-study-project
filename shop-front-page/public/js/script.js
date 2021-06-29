/*! simple-grunt-starter - v1.7.0 - 2021-02-01 */ 

$.initialize = function () {
    /*------------------------------------------
            = ALL ESSENTIAL FUNCTIONS
        -------------------------------------------*/

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $(".navigation-holder .close-navbar");
        var body = $(".page-wrapper");

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
                body.addClass("active-body-overlay");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            body.removeClass("active-body-overlay");
            return false;
        })
    }

    toggleMobileNavigation();


    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();


    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var doParallax = -(resize/5);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(10).fadeOut(500, function() {

                //active wow
                wow.init();


            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function() {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter:selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-grids').length) {
            var $grid =  $('.masonry-grids').masonry({
                itemSelector: '.post',
                columnWidth: '.post',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    masonryGridSetting();


    /*------------------------------------------
        = SETTING HEADER MIDDLE LOGO
    -------------------------------------------*/
    function siteMiddleLogoSetting() {
        if(($(".header-style-1").length) && (window.innerWidth > 991) && ($("#navbar > ul").length)) {

            var nav = $("#navbar > ul");
            var navLi = nav.find(">li");

            if(navLi.length > 1) {
                var midLastLi = nav.find(">li:nth-child(" + Math.ceil(navLi.length / 2) + ")");
                var logo = $(".navbar-brand");
                var logoWidth = $(".navbar-brand").innerWidth();
                $( "<li class='logo-middle'></li>" ).insertAfter( midLastLi ).append(logo);
            } else if(navLi.length == 1) {
                nav.find(">li:first-child").css({
                    "left": -70 + "px"
                })
            }
        } else if(($(".header-style-1").length) && (window.innerWidth < 992) && ($("#navbar > ul").length)) {
            var logo = $(".header-style-1 .navbar-brand");
            var navOpenBtn = $(".navbar-header button");
            navOpenBtn.after(logo);
        }
    }

    siteMiddleLogoSetting();



    /*------------------------------------------
        = HOME 1 HEADER SEARCH
    -------------------------------------------*/
    if($(".input-search-form").length) {
        var input = $(".input-search-form");

        input.on("focus", function() {
            input.addClass("width-search-form");
        })

        input.on("focusout", function() {
            input.removeClass("width-search-form");
        })
    }


    /*------------------------------------------
        = HOME 2 HEADER SEARCH
    -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        var serachFormBox = $(".header-search-form-wrapper .header-search-area");
        var openSearchFormBtn = $(".header-search-form-wrapper .search-toggle-btn");
        var closeSeachFormBtn = $(".header-search-form-wrapper .close-form");
        var body = $(".page-wrapper");

        $(document.body).append(serachFormBox);
        serachFormBox.hide();

        openSearchFormBtn.on("click", function(e) {
            serachFormBox.slideDown();
            body.addClass("active-body-overlay");
            return false;
        });

        closeSeachFormBtn.on("click", function() {
            serachFormBox.slideUp();
            body.removeClass("active-body-overlay");
            return false;
        })
    }



    /*------------------------------------------
        = TOGGLE SIDE INFOBAR
    -------------------------------------------*/
    function toggleSideInfo() {
        if ($(".side-info-content").length) {
            var sindeInfo = $(".side-info-content");
            var sideInfoOpenBtn = $(".side-info-bars");
            var sideInfoCloseBtn = $(".side-info-close-btn");
            var body = $(".page-wrapper");

            $(document.body).append(sindeInfo);

            sideInfoOpenBtn.on("click", function(e) {
                sindeInfo.addClass("toggle-side-info");
                body.addClass("active-body-overlay");
                return false;
            })

            sideInfoCloseBtn.on("click", function(e) {
                sindeInfo.removeClass("toggle-side-info");
                body.removeClass("active-body-overlay");
                return false;
            })
        }
    }


    /*------------------------------------------
        = woocommerce
    -------------------------------------------*/
    if($(".checkout-section").length) {
        var showLogInBtn = $(".woocommerce-info > a");
        var showCouponBtn = $(".showcoupon");
        var shipDifferentAddressBtn = $("#ship-to-different-address");
        var loginForm = $("form.login");
        var couponForm = $(".checkout_coupon");
        var shippingAddress = $(".shipping_address");

        loginForm.hide();
        couponForm.hide();
        shippingAddress.hide();

        showLogInBtn.on("click", function(event) {
            event.preventDefault();
            loginForm.slideToggle();
            event.stopPropagation();
        });

        showCouponBtn.on("click", function(event2) {
            event2.preventDefault();
            couponForm.slideToggle();
            event2.stopPropagation();
        })

        shipDifferentAddressBtn.on("click", function(event3) {
            shippingAddress.slideToggle();
            event3.stopPropagation();
        })
    }


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($(".product-count").length) {
        $(".product-count").TouchSpin({
            verticalbuttons: true
        });
    }


    /*------------------------------------------
        = TOOLTIP
    -------------------------------------------*/
    $( document ).tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        }
    });


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input.product-count").length) {
        $("input.product-count").TouchSpin({
            verticalbuttons: true
        });
    }



    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>','<i class="fi flaticon-next"></i>'],
            dots: false,
            items: 1
        });
    }


    /*------------------------------------------
        = TESTIMONIALS SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            items: 1
        });
    }


    /*------------------------------------------
        = HOME 3 TOP PRODUCT SLIDER
    -------------------------------------------*/
    if($(".top-product-slider".length)) {
        $(".top-product-slider").owlCarousel({
            items:1,
            loop:true,
            smartSpeed:450,
            dotData:true,
        });
    }



    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
    if ($("#clock").length) {
        $('#clock').countdown('2021/2/14', function(event) {
            var days = $("#clock").data("days"),
                hours = $("#clock").data("hours"),
                mins = $("#clock").data("mins"),
                sec = $("#clock").data("sec");

            var $this = $(this).html(event.strftime(''
                + '<div class="box"><div>%D</div> <span>' + days + '</span> </div>'
                + '<div class="box"><div>%H</div> <span>' + hours + '</span> </div>'
                + '<div class="box"><div>%M</div> <span>' + mins + '</span> </div>'
                + '<div class="box"><div>%S</div> <span>' + sec + '</span> </div>'));
        });
    }


    /*------------------------------------------
        = NEWSLETTER POPUP
    -------------------------------------------*/
    function newsletterPopup() {
        var newsletter = $(".newsletter-popup-area-section");
        var newsletterClose = $(".newsletter-close-btn");

        var test = localStorage.input === 'true'? true: false;
        $(".show-message").prop('checked', test || false);

        var localValue = localStorage.getItem("input");

        if(localValue === "true") {
            newsletter.css({
                "display": "none"
            });
        }

        newsletter.addClass("active-newsletter-popup");

        newsletterClose.on("click", function(e) {
            newsletter.removeClass("active-newsletter-popup");
            return false;
        })

        $(".show-message").on('change', function() {
            localStorage.input = $(this).is(':checked');
        });
    }




    /*** insert i tage after Slider SVG element for html validation error ***/
    if(($(".sw-ar-rt") && $(".sw-ar-lf")).length) {
        var swiperLfArr = $(".sw-ar-lf"),
            swiperRtArr = $(".sw-ar-rt");

        swiperLfArr.after('<i class="ti-angle-left"></i>');
        swiperRtArr.after('<i class="ti-angle-right"></i>');
    }



    /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $(".site-footer .lower-footer").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })



    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        preloader();

        toggleMobileNavigation();

        smallNavFunctionality();

        toggleSideInfo();

        masonryGridSetting();

        if($(".newsletter-popup-area-section").length) {

            setTimeout(function() {
                newsletterPopup();
            },"2500");
        }

    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

    });



    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

        toggleClassForSmallNav();

        clearTimeout($.data(this, 'resizeTimer'));

        $.data(this, 'resizeTimer', setTimeout(function() {
            smallNavFunctionality();

            siteMiddleLogoSetting();

        }, 200));

    });

};


