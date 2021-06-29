<template>
  <div>
    <Category/>

    <!-- start shop-section -->
    <section class="shop-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col col-xs-12">
            <div class="shop-area clearfix">
              <div class="woocommerce-content-wrap">
                <Product/>
                <Pagination/>
              </div>

              <div class="shop-sidebar">
                <Search/>
                <PriceFilter/>
                <ProductCategory/>
                <ColorFilter/>
                <ProductTag/>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end container -->
    </section>
    <!-- end shop-section -->
  </div>
</template>
<script>
import {ShopPageJS} from "../../../public/js/shop/shopPage";
import Category from "@/pages/Home/components/Category";
import Search from "@/pages/Shop/components/Search";
import PriceFilter from "@/pages/Shop/components/PriceFilter";
import ProductCategory from "@/pages/Shop/components/ProductCategory";
import ColorFilter from "@/pages/Shop/components/ColorFilter";
import ProductTag from "@/pages/Shop/components/ProductTag";
import Product from "@/pages/Shop/components/Product";
import Pagination from "@/pages/Shop/components/Pagination";

export default {
  name: 'ShopPage',
  components: {
    Category,
    Search,
    PriceFilter,
    ProductCategory,
    ColorFilter,
    ProductTag,
    Product,
    Pagination
  },
  mounted() {
    ShopPageJS.init();
  }

}
</script>