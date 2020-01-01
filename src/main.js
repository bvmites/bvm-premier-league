import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue);


Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app');
