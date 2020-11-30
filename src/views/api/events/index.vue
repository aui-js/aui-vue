<template>
	<div class="container">
		<aui-header title="事件" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list" onclick="aui.openWin('actionmenu.html')">
					<div class="aui-list-left">drag 元素拖动</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list" @click.stop="openWin('actionsheet/actionsheet')">
					<div class="aui-list-left">longPress 元素长按</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list" onclick="aui.openWin('chatbox.html')">
					<div class="aui-list-left">事件列表</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>		
			</div>
		</div>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'events',
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

