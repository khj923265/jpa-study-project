export const ShopPageJS = {
  init: function () {
    if ($(".woocommerce-toolbar-top").length) {
      var products = $(".products"),
          allButton = $(".products-sizes a"),
          grid4 = $(".grid-4"),
          grid3 = $(".grid-3"),
          listView = $(".list-view");

      allButton.each(function () {
        var $this = $(this);
        $this.on("click", function (e) {
          e.preventDefault();
          $this.addClass("active").siblings().removeClass('active');
          e.stopPropagation();
        })
      });

      grid4.on("click", function (f) {
        products.removeClass("list-view three-column");
        products.addClass("default-column");
        f.stopPropagation();
      });

      grid3.on("click", function (g) {
        products.removeClass("default-column list-view");
        products.addClass("three-column");
        g.stopPropagation();
      });

      listView.on("click", function (h) {
        products.removeClass("default-column three-column");
        products.addClass("list-view");
        h.stopPropagation();
      });
    }

    /*----------------------------
        = SHOP PRICE SLIDER
    ------------------------------ */
    if ($("#slider-range").length) {
      $("#slider-range").slider({
        range: true,
        min: 12,
        max: 200,
        values: [0, 100],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });

      $("#amount").val(
          "$" + $("#slider-range").slider("values", 0) + " - $" + $(
          "#slider-range").slider("values", 1));
    }

    if ($("ul.products").length) {
      var product = $("ul.products li.product");

      product.each(function () {
        var quickViewLink = product.find('a[title="Quick view!"]');
        var closeQuickView = product.find(
            ".quick-view-single-product-close-btn");
        var singleProduct = $(".quick-view-single-product");

        var owlStage = $(".owl-stage") ? $(".owl-stage") : null;
        var owlStageOuter = $(".owl-carousel .owl-stage-outer") ? $(
            ".owl-carousel .owl-stage-outer") : null;

        quickViewLink.on("click", function (e) {
          e.preventDefault();
          $(this).closest(".product").find(
              ".quick-view-single-product").addClass(
              "activve-quick-view-single-product");

          owlStage.addClass("transform-none");
          owlStageOuter.addClass("transform-none");
          return false;
        })

        closeQuickView.on("click", function (f) {
          singleProduct.removeClass("activve-quick-view-single-product");
          owlStage.removeClass("transform-none");
          owlStageOuter.removeClass("transform-none");
          return false;
        })
      })
    }
  }
}