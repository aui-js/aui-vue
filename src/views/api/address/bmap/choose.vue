<template>
	<div class="container">
		<aui-header title="位置" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list" @click.stop="openPage('/address/amap')">
					<div class="aui-list-left">amap高德地图</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>	
				<div class="aui-list" @click.stop="openPage('/address/bmap')">
					<div class="aui-list-left">bmap百度地图</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'bmap-choose',
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

