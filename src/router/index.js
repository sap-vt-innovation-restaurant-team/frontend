import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import UserDistinguish from '../components/userDistinguish.vue'
import Register from '../components/register.vue'
import FaceRecognition	from '../components/faceRecognition.vue'
import OrderMachine from '../components/orderMachine.vue'
import OrderConfirm	from '../components/orderConfirm.vue'

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:UserDistinguish,
		},
		{
			path:'/register',
			component:Register,
		},
		{
			path:'/facerecognition',
			component:FaceRecognition,
		},
		{
			path:'/orderMachine',
			component:OrderMachine,
		},
		{
			path:'/orderConfirm',
			component:OrderConfirm,
		},
	]
})
