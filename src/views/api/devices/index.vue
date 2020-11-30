<template>
	<div class="container">
		<aui-header title="设备" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<button class="aui-btn aui-btn-blue btn-0">判断是否为微信浏览器</button>
			<button class="aui-btn aui-btn-blue btn-1">判断是否为IOS系统</button>
			<button class="aui-btn aui-btn-blue btn-2">判断是否为android系统</button>
			<button class="aui-btn aui-btn-blue btn-3">判断是否为IE浏览器</button>
			<button class="aui-btn aui-btn-blue btn-4">判断是否为PC</button>
			<button class="aui-btn aui-btn-blue btn-5">获取设备是否连接网络</button>
			<button class="aui-btn aui-btn-blue btn-6">获取设备网络类型</button>
		</div>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'devices',
		components: {
			auiHeader
		},
		methods: {
			openPage(url){
				var _this = this;
				_this.$router.push({path: url})
			},
			closePage(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.container{
		width: 100%;
		height: 100vh;
		background-color: #F4F4F4;
	}
	.aui-content{
		padding: 15px 0 0 0;
	}
	.aui-list-left img{height: 18px; margin: -0 10px 0 0; display: inline-block; vertical-align: middle; position: relative; top: -1px;}
</style>

