//vue.config.js
module.exports = {
	baseUrl: '/',
	devServer: {
		proxy: {
			'/api/order': {
				target: 'http://10.87.131.170:10000',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api/order': ''
				}
			},
			'/api/user': {
				target: 'http://10.87.131.170:10001',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api/user': ''
				}
			},
			'/api/ml': {
				target: 'http://10.87.131.170:10001',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api/ml': ''
				}
			},
			'/api/fr': {
				target: 'http://10.87.134.195:5001',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api/fr': ''
				}
			}
		}
	}
}

// VUE_APP_BASE_API=/api
