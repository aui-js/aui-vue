<template>
	<div class="container">
		<aui-header title="bmap" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list">
					<div class="aui-list-left">获取当前位置</div>
					<!--<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>-->
				</div>
				<div class="aui-list">
					<div class="aui-list-left">打开地图选择当前位置</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
			</div>
			<div class="map" id="map"></div>
		</div>
	</div>
</template>
<script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=Go8TPnKDL44WFZbOATH4AsbA7qTwNosi"></script>
<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'bmap',
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

