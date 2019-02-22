import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Homepage from '../components/Homepage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import FaceIDPage	from '../components/FaceIDPage.vue'
import PreferencePage from '../components/PreferencePage.vue'
import DeskPage from '../components/DeskPage.vue'
import MenuPage from '../components/MenuPage.vue'
import OrderPage	from '../components/OrderPage.vue'
import ReceiptPage from '../components/ReceiptPage.vue'

export default new Router({
	mode:'history',
	routes:[
		{
			path: '/',
			component: Homepage,
			name: 'homepage'
		},
		{
			path: '/register',
			component: RegisterPage,
			name: 'register'
		},
		{
			path: '/createFaceID',
			component: FaceIDPage,
			name: 'createFaceID'
		},
		{
			path: '/checkFaceID',
			component: FaceIDPage,
			name: 'checkFaceID'
		},
		{
			path: '/preference',
			component: PreferencePage,
			name: 'preference'
		},
		{
			path: '/desk',
			component: DeskPage,
			name: 'desk'
		},
		{
			path: '/menu',
			component: MenuPage,
			name: 'menu'
		},
		{
			path: '/order',
			component: OrderPage,
			name: 'order'
		},
		{
			path: '/receipt',
			component: ReceiptPage,
			name: 'receipt'
		}
	]
})
