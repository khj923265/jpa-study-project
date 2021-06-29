<template>
  <div class="woocommerce-content-inner">
    <div class="woocommerce-toolbar-top">
      <p class="woocommerce-result-count">Showing 1–12 of 70 results</p>
      <div class="products-sizes">
        <a href="#" class="grid-4 active">
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <a href="#" class="grid-3">
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <a href="#" class="list-view">
          <div class="grid-draw-line">
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw-line">
            <span></span>
            <span></span>
          </div>
          <div class="grid-draw-line">
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <form class="woocommerce-ordering" method="get">
        <select name="orderby" class="orderby">
          <option value="menu_order" selected='selected'>Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="date">Sort by newness</option>
          <option value="price">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
        <input type="hidden" name="post_type" value="product" />
      </form>
    </div>
    <ul class="products">

      <li v-for="product in products" class="product">
        <div class="product-holder">
          <router-link :to="`/product/${product.id}`">
            <img :src="product.imgPath" alt>
          </router-link>
          <div class="shop-action-wrap">
            <ul class="shop-action">
              <li><a href="#"  title="Quick view!"><i class="fi flaticon-view"></i></a></li>
              <li><a href="#" title="Add to Wishlist!"><i class="fi icon-heart-shape-outline"></i></a></li>
              <li><a href="#" title="Add to cart!"><i class="fi flaticon-shopping-cart"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="product-info">
          <h4><a href="shop-single.html">{{ product.title }}</a></h4>
          <span class="woocommerce-Price-amount amount">
              <ins>
                  <span class="woocommerce-Price-amount amount">
                      <bdi><span class="woocommerce-Price-currencySymbol"></span>{{ product.price }}원</bdi>
                  </span>
              </ins>
          </span>
        </div>
      </li>

    </ul>
  </div>
</template>
<script>
import {mapState} from "vuex";
import store from "@/store/product";

export default {
  computed: {
    ...mapState('product',['products']),
  },
  created() {
    if (this.$store.state.product === undefined){
      this.$store.registerModule('product', store);
    }
    this.read();
  },
  methods:{
    async read() {
      await this.$store.dispatch('product/read');
    }
  }
}
</script>