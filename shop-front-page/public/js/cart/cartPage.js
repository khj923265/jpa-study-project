export const cartPageJS = {
    init: function (){
        if($(".mini-cart").length) {
            var cartToggleBtn = $(".cart-toggle-btn");
            var cartContent = $(".mini-cart-content");
            var body = $("body");

            cartToggleBtn.on("click", function(e) {
                cartContent.toggleClass("mini-cart-content-toggle");
                e.stopPropagation();
            });

            body.on("click", function() {
                cartContent.removeClass("mini-cart-content-toggle");
            }).find(cartContent).on("click", function(e) {
                e.stopPropagation();
            });
        }
    }
}