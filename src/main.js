import Vue from 'vue'
import App from './App.vue'
import vueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(vueAxios,axios)
Vue.use(iView)


Vue.config.productionTip = false

new Vue({
	el:'#app',
	render: h => h(App),
	router,
})
