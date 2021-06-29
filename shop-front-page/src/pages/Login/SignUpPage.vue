<template>
  <div class="page-wrapper">
    <!-- start my-account-section -->
    <section class="my-account-section">
      <div class="container-1410">
        <div class="row">
          <div class="col-xs-offset-4 col-xs-4">
            <div class="woocommerce">
              <div class="woocommerce-notices-wrapper"></div>
              <div class="u-columns col-8" id="customer_login">
                <div class="u-column col-2">
                  <h1 class="text-center">AZEDW</h1>
                  <h3 class="text-center">회원가입</h3>
                  <form class="woocommerce-form woocommerce-form-login login"
                        id="app"
                  >
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="username">이메일&nbsp;<span class="required">*</span></label>
                      <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                             name="username"
                             id="username"
                             autocomplete="username"
                             v-model="user.email"
                      >
                    </p>
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="password">비밀번호&nbsp;<span class="required">*</span></label>
                      <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                             name="password"
                             id="password"
                             autocomplete="current-password"
                             v-model="user.password"
                      >
                    </p>
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="name">이름&nbsp;<span class="required">*</span></label>
                      <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                             name="name"
                             id="name"
                             autocomplete="name"
                             v-model="user.name"
                      >
                    </p>
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="phone">전화번호&nbsp;<span class="required">*</span></label>
                      <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                             name="phone"
                             id="phone"
                             autocomplete="phone"
                             v-model="user.phone"
                      >
                    </p>
                    <p class="form-row text-center">
                      <input class="woocommerce-button button woocommerce-form-login__submit"
                          type="button" value="회원가입" @click="create"
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end my-account-section -->
  </div>
</template>
<script>
import store from '../../store/member/index';
import router from "@/router";

export default {
  name: 'signupPage',
  data(){
    return{
      user: {
        email: null,
        password: null,
        name: null,
        phone: null
      },
    }
  },
  created() {
    if (this.$store.state.member === undefined){
      this.$store.registerModule('member', store);
    }
  },
  methods:{
    async create() {
      await this.$store.dispatch('member/create', this.user);
      await router.push({name: "loginPage"});
    },
  }

}
</script>