import Vue from 'vue'
import App from './player.vue'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#player');
