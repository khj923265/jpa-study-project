import Vue from 'vue';

import vuetify from './plugins/vuetify';
import store from './store';

import App from './App';

import router from './router';

import 'vuetify/dist/vuetify.css';

// import http from './http';

// import Vue2Filters from 'vue2-filters';
import Filters from './plugins/filters';

Vue.config.productionTip = false

global.store = store;
global.router = router;
// global.http = http;
// Vue.use(Vue2Filters);
Vue.use(Filters);

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
