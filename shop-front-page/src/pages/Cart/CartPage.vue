<template>
  <section class="cart-section woocommerce-cart section-padding">
    <div class="container-1410">
      <div class="row">
        <div class="col col-xs-12">
          <div class="woocommerce">
            <form action="/" method="post">
              <table class="shop_table shop_table_responsive cart">
                <thead>
                <tr>
                  <th class="product-remove">&nbsp;</th>
                  <th class="product-thumbnail">&nbsp;</th>
                  <th class="product-name">상품명</th>
                  <th class="product-price">가격</th>
                  <th class="product-quantity">수량</th>
                  <th class="product-subtotal">총가격</th>
                </tr>
                </thead>
                <tbody>
                <!--상품리스트-->
                <tr v-for="cart in carts2" class="cart_item">
                  <td class="product-remove">
                    <a href="#" class="remove" title="Remove this item" data-product_id="8"
                       data-product_sku="my name is">&times;</a>
                  </td>
                  <td class="product-thumbnail">
                    <a href="">
                      <img width="57" height="70" :src="cart.product.imgPath"
                           class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                           alt="#"/>
                    </a>
                  </td>
                  <td class="product-name" data-title="Product">
                    <a href="http://localhost/wp/?product=new-product">{{ cart.product.title }}</a>
                  </td>

                  <td class="product-price" data-title="Price">
                    <span class="woocommerce-Price-amount amount"><span
                        class="woocommerce-Price-currencySymbol"></span>{{
                        cart.product.price
                      }} 원</span>
                  </td>
                  <td class="product-quantity" data-title="Quantity">
                    <div class="quantity">
                      <input type="number" step="1" min="0"
                             name="cart[c9f0f895fb98ab9159f51fd0297e236d][qty]" v-model="cart.count"
                             title="Qty" class="product-count input-text qty text"/>
                    </div>
                  </td>
                  <td class="product-subtotal" data-title="Total">
                    <span class="woocommerce-Price-amount amount"><span
                        class="woocommerce-Price-currencySymbol"></span>{{
                        cart.count * cart.product.price
                      }}</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="actions">
                    <div class="coupon">
                      <label for="coupon_code">Coupon:</label>
                      <input type="text" name="coupon_code" class="input-text" id="coupon_code"
                             value="" placeholder="Coupon code"/>
                      <input type="submit" class="button" name="apply_coupon" value="쿠폰(미구현)"/>
                    </div>
                    <input type="submit" class="button" name="update_cart" value="Update Cart"/>
                    <input type="hidden" id="_wpnonce" name="_wpnonce" value="918724a9c2"/>
                    <input type="hidden" name="_wp_http_referer" value="/wp/?page_id=5"/>
                  </td>
                </tr>
                </tbody>
              </table>
            </form>

            <div class="cart-collaterals">
              <div class="cart_totals calculated_shipping">
                <h2>합계</h2>
                <table class="shop_table shop_table_responsive">
                  <tr class="cart-subtotal">
                    <th :style="{width:230 + 'px'}">결제예정금액</th>
                    <td data-title="Subtotal"><span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol"></span>{{ totalPrice }}</span>
                    </td>
                  </tr>
                  <tr class="shipping">
                    <th>(미구현)</th>
                    <td data-title="">

                    </td>
                  </tr>

                  <tr class="order-total">
                    <th>(미구현)</th>
                    <td data-title="">

                    </td>
                  </tr>
                </table>

                <div class="wc-proceed-to-checkout">
                  <router-link to="/checkout" custom v-slot="{ navigate }">
                    <button @click="navigate" @keypress.enter="navigate" class="woocommerce-button">결제하기</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {cartPageJS} from "../../../public/js/cart/cartPage";
import {mapState} from "vuex";

export default {
  name: 'cartPage',
  data() {
    return {
      carts2: "",
    }
  },
  computed: {
    ...mapState('cart', ['carts']),
    totalPrice: function () {
      return this.carts2.reduce((totalPrice, itemCart) => {
            return totalPrice + (itemCart.count * itemCart.product.price)
          },0
      )
    }
  },
  mounted() {
    cartPageJS.init();
  },
  created() {
    this.read();
  },
  methods: {
    async read() {
      await this.$store.dispatch('cart/read', this.$store.state.member.member.id);
      this.carts2 = this.$store.state.cart.carts;
    }
  }

}
</script>