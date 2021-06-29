import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8083';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// const express = require('express');
// const cors = require('cors');

// let corsOption = {
//   origin: 'http://localhost:8083',
//   credentials: true // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
// }
//
// Vue.use(cors(corsOption)); // CORS 미들웨어 추가
