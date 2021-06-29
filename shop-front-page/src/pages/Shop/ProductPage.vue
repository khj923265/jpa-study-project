<template>

    <!-- start shop-single-section -->
    <section class="shop-single-section section-padding">
      <div class="container-1410">
        <div class="row">
          <div class="col col-md-6">
            <div class="shop-single-slider">
              <div class="slider-for">
                <div><img :src="product.imgPath" alt></div>
              </div>
              <div class="slider-nav">
                <div><img :src="product.imgPath" alt></div>
              </div>
            </div>
          </div>

          <div class="col col-md-6">
            <div class="product-details">
              <h2>{{ product.title }}</h2>
              <div class="price">
                <span class="current">{{ product.price }}원</span>
              </div>
              <div class="rating">
                <i class="fi flaticon-star"></i>
                <i class="fi flaticon-star"></i>
                <i class="fi flaticon-star"></i>
                <i class="fi flaticon-star"></i>
                <i class="fi flaticon-star-social-favorite-middle-full"></i>
                <span>(2 Customer review)</span>
              </div>
              <p>상품설명</p>

              <div class="product-option">
                <form class="form">
                  <div class="product-row">
                    <div>
                      <input class="product-count" type="number" value="1" name="count" v-model.number="cart.count">
                      <input>
                    </div>
                    <div>
                      <button type="button" @click="insertCart">장바구니</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="thb-product-meta-before">
                <div class="add-to-wishlist">
                  <a href="#" class="add_to_wishlist">
                    <i class="pe-7s-like"></i>
                    <span>Add To Wishlist</span>
                  </a>
                </div>

                <div class="product_meta">
                  <span class="sku_wrapper">SKU: <span class="sku">71236-1</span></span>
                  <span class="posted_in">Categories: <a href="#">Clothing</a>, <a href="#">Tops</a>, <a href="#">Women</a></span>
                  <span class="tagged_as">Tags: <a href="#">Button</a>, <a href="#">Red</a>, <a href="#">Tshirt</a></span>
                </div>
              </div>
            </div>
          </div> <!-- end col -->
        </div> <!-- end row -->

        <div class="row">
          <div class="col col-xs-12">
            <div class="single-product-info">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="active"><a href="#01" data-toggle="tab">Description</a></li>
                <li><a href="#02" data-toggle="tab">Review (03)</a></li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="01">
                  <p> Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
                  <p> waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar wallstrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="02">
                  <div class="row">
                    <div class="col col-xs-12">
                      <div class="client-rv">
                        <div class="client-pic">
                          <img src="/images/shop/shop-single/review/img-1.jpg" alt>
                        </div>
                        <div class="details">
                          <div class="name-rating-time">
                            <div class="name-rating">
                              <div>
                                <h4>Mice</h4>
                              </div>
                              <div class="rating">
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                              </div>
                            </div>
                            <div class="time">
                              <span>1 day ago</span>
                            </div>
                          </div>
                          <div class="review-body">
                            <p>Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                          </div>
                        </div>
                      </div>

                      <div class="client-rv">
                        <div class="client-pic">
                          <img src="/images/shop/shop-single/review/img-2.jpg" alt>
                        </div>
                        <div class="details">
                          <div class="name-rating-time">
                            <div class="name-rating">
                              <div>
                                <h4>Hone</h4>
                              </div>
                              <div class="rating">
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                              </div>
                            </div>
                            <div class="time">
                              <span>1 day ago</span>
                            </div>
                          </div>
                          <div class="review-body">
                            <p>Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                          </div>
                        </div>
                      </div>

                      <div class="client-rv">
                        <div class="client-pic">
                          <img src="/images/shop/shop-single/review/img-3.jpg" alt>
                        </div>
                        <div class="details">
                          <div class="name-rating-time">
                            <div class="name-rating">
                              <div>
                                <h4>Piloa</h4>
                              </div>
                              <div class="rating">
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                                <i class="fi flaticon-star"></i>
                              </div>
                            </div>
                            <div class="time">
                              <span>2 days ago</span>
                            </div>
                          </div>
                          <div class="review-body">
                            <p>Waved about helplessly as he looked What's happened to me he thought. It wasn't a dreamtrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>
                          </div>
                        </div>
                      </div>
                    </div> <!-- end col -->

                    <div class="col col-xs-12 review-form-wrapper">
                      <div class="review-form">
                        <h4>Here you can review the item</h4>
                        <form>
                          <div>
                            <input type="text" class="form-control" placeholder="Name *" required>
                          </div>
                          <div>
                            <input type="email" class="form-control" placeholder="Email *" required>
                          </div>
                          <div>
                            <textarea class="form-control" placeholder="Review *"></textarea>
                          </div>
                          <div class="rating-wrapper">
                            <div class="rating">
                              <a href="#" class="star-1" >
                                <i class="ti-star"></i>
                              </a>
                              <a href="#" class="star-1" >
                                <i class="ti-star"></i>
                              </a>
                              <a href="#" class="star-1" >
                                <i class="ti-star"></i>
                              </a>
                              <a href="#" class="star-1" >
                                <i class="ti-star"></i>
                              </a>
                              <a href="#" class="star-1" >
                                <i class="ti-star"></i>
                              </a>
                            </div>
                            <div class="submit">
                              <button type="submit" class="theme-btn">Post review</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- end row -->
      </div> <!-- end of container -->
    </section>

</template>
<script>
import { ProductPageJS } from "../../../public/js/shop/productPage";
import {mapState} from "vuex";
import store from '../../store/product/index';

export default {
  name: 'productPage',
  data(){
    return{
      cart:{
        member_id: null,
        product_id: null,
        count: 1
      }
    }
  },
  computed: {
    ...mapState('member',['member']),
    ...mapState('product',['product']),
  },
  created() {
    if (this.$store.state.cart === undefined){
      this.$store.registerModule('Cart', store);
    }
    this.getProduct();
  },
  methods:{
    async getProduct() {
      await this.$store.dispatch('product/getProduct',this.$route.params.id)
      .then(() => ProductPageJS.init());
    },
    async insertCart() {
      this.cart.member_id = this.$store.state.member.member.id;
      this.cart.product_id = this.$store.state.product.product.id;
      await this.$store.dispatch('cart/insertCart',this.cart);
      await alert("추가가 완료되었습니다.");
    }
  },
  mounted() {

  }
}

</script>