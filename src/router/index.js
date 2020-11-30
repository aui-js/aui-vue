import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'api',
		component: () => import('../views/api/index.vue')
	},
	{
		path: '/api/devices',
		name: 'devices',
		component: () => import('../views/api/devices/index.vue')
	},
	{
		path: '/api/events',
		name: 'events',
		component: () => import('../views/api/events/index.vue')
	},
	{
		path: '/api/plugs',
		name: 'plugs',
		component: () => import('../views/api/plugs/index.vue')
	},
	{
		path: '/dialog',
		name: 'Dialog',
		component: () => import('../views/api/plugs/dialog/dialog.vue')
	},
	{
		path: '/loading',
		name: 'loading',
		component: () => import('../views/api/plugs/loading/loading.vue')
	},
	{
		path: '/toast',
		name: 'toast',
		component: () => import('../views/api/plugs/toast/toast.vue')
	},
	{
		path: '/api/address',
		name: 'location',
		component: () => import('../views/api/address/index.vue')
	},
	{
		path: '/address/amap',
		name: 'amap',
		component: () => import('../views/api/address/amap/index.vue')
	},
	{
		path: '/address/bmap',
		name: 'bmap',
		component: () => import('../views/api/address/bmap/index.vue')
	},
	{
		path: '/bmap/choose',
		name: 'bmap-choose',
		component: () => import('../views/api/address/bmap/choose.vue')
	},
	{
		path: '/demo',
		name: 'demo',
		component: () => import('../views/demo/index.vue')
	}
]

const router = new VueRouter({
	routes
})


// 全局前置路由守卫
/* 
	 to: Route: 即将要进入的目标 路由对象
	 from: Route: 当前导航正要离开的路由
	 next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
// router.beforeEach((to, from, next) => {// eslint-disable-line no-unused-vars  
//   next();
// }) 
//全局后置钩子
// router.afterEach((to, from) => {// eslint-disable-line no-unused-vars
//   console.log(to)
// })


//防止重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router
