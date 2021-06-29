<template>

  <!-- start checkout-section -->
  <section class="checkout-section section-padding">
    <div class="container-1410">
      <div class="row">
        <div class="col col-xs-12">
          <div class="woocommerce">

            <form name="checkout" method="post" class="checkout woocommerce-checkout" action="http://localhost/wp/?page_id=6" enctype="multipart/form-data">

              <div class="col2-set" id="customer_details">
                <div class="col-1">
                  <div class="woocommerce-billing-fields">

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
                      <tr v-for="cart in carts" class="cart_item">
                        <td class="product-remove">
                          <a href="#" class="remove" title="Remove this item" data-product_id="8" data-product_sku="my name is">&times;</a>
                        </td>
                        <td class="product-thumbnail">
                          <a href="">
                            <img width="57" height="70" :src="cart.product.imgPath"
                                 class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="#"  />
                          </a>
                        </td>
                        <td class="product-name" data-title="Product">
                          <a href="http://localhost/wp/?product=new-product">{{ cart.product.title }}</a> </td>

                        <td class="product-price" data-title="Price">
                          <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol"></span>{{ cart.product.price }} 원</span>
                        </td>
                        <td class="product-quantity" data-title="Quantity">
                          <div class="quantity">
                            <input type="number" step="1" min="0" name="cart[c9f0f895fb98ab9159f51fd0297e236d][qty]" v-model="cart.count" title="Qty" class="product-count input-text qty text" />
                          </div>
                        </td>
                        <td class="product-subtotal" data-title="Total">
                          <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol"></span>{{ cart.count * cart.product.price }}</span>
                        </td>
                      </tr>
                      </tbody>
                    </table>

                    <h3>Billing Details</h3>

                    <input class="form-row form-row form-row-wide" type="text" placeholder="수령인" value=""/>
                    <input type="text" class="form-row form-row form-row-first validate-required" placeholder="우편번호" :value="item.zip">
                    <input type="button" class="form-row form-row form-row-last button alt" @click="daumPostcode" value="우편번호 찾기"><br>
                    <input class="form-row form-row form-row-wide" type="text" placeholder="주소" :value="item.addr1"><br>
                    <input class="form-row form-row form-row-wide" ref="addr2" type="text" placeholder="상세주소" :value="item.addr2">

                    <input list="br" class="wide">
                    <datalist id="br">
                      <option value="aa">aa</option>
                      <option value="bb">bb</option>
                      <option value="cc">cc</option>
                    </datalist>

                    <p class="form-row form-row form-row-wide" id="billing_company_field">
                      <label>수령위치 :
                        <input type="radio" v-model="item.location" value="문앞">문앞
                        <input type="radio" v-model="item.location" value="경비실">경비실
                        <input type="radio" v-model="item.location" value="직접수령">직접수령
                        <input type="radio" v-model="item.location" value="기타">기타
                      </label>
                    </p>
                  </div>
                </div>

              </div>

              <h3 id="order_review_heading">Your order</h3>

              <div id="order_review" class="woocommerce-checkout-review-order">
                <table class="shop_table woocommerce-checkout-review-order-table">
                  <thead>
                  <tr>
                    <th class="product-name">Product</th>
                    <th class="product-total">Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cart_item">
                    <td class="product-name">
                      Checked Hoodies Woo&nbsp; <strong class="product-quantity">&times; 1</strong> </td>
                    <td class="product-total">
                      <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>165.00</span>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>

                  <tr class="cart-subtotal">
                    <th>Subtotal</th>
                    <td><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>165.00</span>
                    </td>
                  </tr>

                  <tr class="shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping">
                      Free Shipping
                      <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0" value="free_shipping:1" class="shipping_method" />

                    </td>
                  </tr>

                  <tr class="order-total">
                    <th>Total</th>
                    <td><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>165.00</span></strong> </td>
                  </tr>

                  </tfoot>
                </table>
                <div id="payment" class="woocommerce-checkout-payment">
                  <ul class="wc_payment_methods payment_methods methods">
                    <li class="wc_payment_method payment_method_cheque">
                      <input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque" checked='checked' data-order_button_text="" />
                      <!--grop add span for radio button style-->
                      <span class='grop-woo-radio-style'></span>
                      <!--custom change-->
                      <label for="payment_method_cheque">
                        Check Payments </label>
                      <div class="payment_box payment_method_cheque">
                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                      </div>
                    </li>
                    <li class="wc_payment_method payment_method_paypal">
                      <input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="paypal" data-order_button_text="Proceed to PayPal" />
                      <!--grop add span for radio button style-->
                      <span class='grop-woo-radio-style'></span>
                      <!--custom change-->
                      <label for="payment_method_paypal">
                        PayPal <img src="assets/images/paypal.png" alt="PayPal Acceptance Mark" /><a href="#" class="about_paypal" title="What is PayPal?">What is PayPal?</a> </label>
                      <div class="payment_box payment_method_paypal" style="display:none;">
                        <p>Pay via PayPal; you can pay with your credit card if you don&#8217;t have a PayPal account.</p>
                      </div>
                    </li>
                  </ul>
                  <div class="form-row place-order">
                    <noscript>
                      Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.
                      <br/>
                      <input type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="Update totals" />
                    </noscript>

                    <input type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order" />

                    <input type="hidden" id="_wpnonce5" name="_wpnonce" value="783c1934b0" />
                    <input type="hidden" name="_wp_http_referer" value="/wp/?page_id=6" /> </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end checkout-section -->

</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'checkoutPage',
  data(){
    return{
      item: {
        zip:'',
        addr1:'',
        addr2:'',
        location:'',
      },
    }
  },
  computed:{
    ...mapState('cart',['carts']),
  },
  methods:{
    daumPostcode: function (){
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = '';
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          }
          if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          if(extraRoadAddr !== ''){
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }
          if(fullRoadAddr !== ''){
            fullRoadAddr += extraRoadAddr;
          }
          this.item.zip = data.zonecode;
          this.item.addr1 = fullRoadAddr;

          this.$refs.addr2.focus();
        }
      }).open();
    }
  }

}
</script>