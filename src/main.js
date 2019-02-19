import Vue from 'vue'
import App from './App.vue'
import vueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'

Vue.use(vueAxios,axios)


Vue.config.productionTip = false

new Vue({
	el:'#app',
	render: h => h(App),
	router,
})
