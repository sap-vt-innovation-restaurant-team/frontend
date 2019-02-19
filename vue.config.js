//vue.config.js
module.exports = {
	baseUrl:'/',
	devServer:{
		proxy:{
			'/api':{
				target:'http://10.87.154.189:12306',
				changeOrigin:true,
				ws:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}

// VUE_APP_BASE_API=/api
