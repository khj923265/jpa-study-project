<template>
  <section class="trendy-product-section section-padding">
    <div class="container-1410">
      <div class="row">
        <div class="col col-xs-12">
          <div class="section-title-s2">
            <h2>Best products</h2>
          </div>
          <a href="#" class="more-products">More products</a>
        </div>
      </div>
      <div class="row">
        <div class="col col-xs-12">
          <div class="products-wrapper">
            <ul class="products product-row-slider">
              <li v-for="product in products" class="product">
                <div class="product-holder">
                  <router-link :to="`/product/${product.id}`">
                    <img :src="product.imgPath" alt>
                  </router-link>
                  <div class="shop-action-wrap">
                    <ul class="shop-action">
                      <li><a href="#" title="Quick view!"><i class="fi flaticon-view"></i></a>
                      </li>
                      <li><a href="#" title="Add to Wishlist!"><i
                          class="fi icon-heart-shape-outline"></i></a></li>
                      <li><a href="#" title="Add to cart!"><i
                          class="fi flaticon-shopping-cart"></i></a></li>
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
        </div>
      </div>
    </div> <!-- end container-1410 -->
  </section>
</template>
<script>
import { mapState } from 'vuex';
import {bestProductsJS} from "../../../../public/js/home/bestProducts";
import store from "@/store/product";

export default {
  computed: {
    ...mapState('product',['products']),

  },
  created() {
    if (this.$store.state.product === undefined){
      this.$store.registerModule('product', store);
    }
    this.read()
        .then(() => bestProductsJS.init());
  },
  methods:{
    async read() {
      await this.$store.dispatch('product/read');
    }
  }
}
</script>