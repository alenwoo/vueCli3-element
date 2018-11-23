import Vue from 'vue'
import App from './spectator.vue'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#spectator');
