<template>
	<div class="container">
		<aui-header title="amap" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				
			</div>
		</div>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'amap',
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
	.aui-list-left img{height: 18px; margin: -0 10px 0 0; display: inline-block; vertical-align: middle; position: relative; top: -1px;}
</style>

