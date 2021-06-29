<template>
  <section class="hero-slider hero-style-1" ref="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <template v-for="banner in mainBanners">
          <div class="swiper-slide">
            <div class="slide-inner slide-bg-image" :style="`background-image: url(${banner.img_path});`">
              <div class="container-1410">
                <div data-swiper-parallax="400" class="slide-text">
                  <p>{{ banner.subtitle }}</p>
                </div>
                <div data-swiper-parallax="300" class="slide-title">
                  <h2>{{ banner.title }}</h2>
                </div>
                <div class="clearfix"></div>
                <div data-swiper-parallax="500" class="slide-btns">
                  <a href="shop.html" class="theme-btn-s7">Shop Now</a>
                </div>
              </div>
            </div> <!-- end slide-inner -->
          </div> <!-- end swiper-slide -->
        </template>
      </div>

      <!-- end swiper-wrapper -->

      <!-- Control -->
      <div class="control-slider swiper-control">
        <div></div>
        <div class="swiper-pagination"></div>
        <div>
          <div class="swiper-button-next">
            <svg class="slider-nav slider-nav-progress" viewBox="0 0 46 46">
              <g class="slider-nav-path-progress-color">
                <path d="M0.5,23a22.5,22.5 0 1,0 45,0a22.5,22.5 0 1,0 -45,0" />
              </g>
            </svg>
            <svg class="slider-nav slider-nav-transparent sw-ar-rt" viewBox="0 0 46 46">
              <circle class="slider-nav-path" cx="23" cy="23" r="22.5" />
            </svg>
          </div>
          <div class="swiper-button-prev">
            <svg class="slider-nav slider-nav-transparent sw-ar-lf" viewBox="0 0 46 46">
              <circle class="slider-nav-path" cx="23" cy="23" r="22.5" />
            </svg>
          </div>
        </div>
      </div>
      <!-- /Control -->
    </div>
  </section>
</template>


<script>
  import { mapState } from 'vuex';
  import { sliderJs } from '../../../../public/js/home/sliderBanner';
  import store from "@/store/product";

  export default {
    data(){
      return {
      }
    },
    computed: {
      ...mapState('banner',['mainBanners'])
    },
    created() {
      if (this.$store.state.banner === undefined){
        this.$store.registerModule('banner', store);
      }
      this.getMainBanners()
          .then(() => sliderJs.init());
    },
    methods:{
      async getMainBanners(){
        await this.$store.dispatch('banner/read');
      }
    }
  }
</script>
