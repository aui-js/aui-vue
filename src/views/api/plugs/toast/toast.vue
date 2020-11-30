<template>
	<div class="container">
		<aui-header title="toast消息提示弹窗" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<button class="aui-btn aui-btn-blue" @click.stop="showToast($event)">显示底部toast消息提示</button>
			<button class="aui-btn aui-btn-blue" @click.stop="showToast($event)" data-location="middle">显示页面中心位置的toast消息提示</button>
			<button class="aui-btn aui-btn-blue" @click.stop="showToast($event)" :data-icon="require('@/static/image/img/success.png')" data-msg="操作成功">显示带图标垂直布局消息提示</button>
			<button class="aui-btn aui-btn-blue" @click.stop="showToast($event)" :data-icon="require('@/static/image/img/success.png')" data-msg="操作成功" data-direction="row">显示带图标水平布局消息提示</button>	
		</div>
		<aui-toast
			ref="toast"
			:msg="auiToast.msg"
			:location = "auiToast.location"
			:direction="auiToast.direction"
			:icon="auiToast.icon"
			:duration="auiToast.duration"
		></aui-toast>
	</div>
</template>

<script>
	import {aui} from '@/common/aui/js/aui.js';
	import auiHeader from '@/components/aui-header/aui-header.vue';
	import auiToast from '@/components/aui-toast/aui-toast.vue';
	export default {
		name: 'loading',
		components: {
			auiHeader,
			auiToast
		},
		data(){
			return {
				auiToast: {
					msg: '网络连接错误，请稍后再试',
					icon: '',
					location: 'bottom',
					direction: 'col',
					duration: 2000,
				},
			}
		},
		methods: {
			openPage(url){
				var _this = this;
				_this.$router.push({path: url})
			},
			closePage(){
				this.$router.back(-1)
			},
			//显示toast消息提示弹窗
			showToast(e){
				var _this = this;
				aui.isDefine(e.currentTarget.dataset.msg) ? _this.auiToast.msg = e.currentTarget.dataset.msg : _this.auiToast.msg = '网络连接错误，请稍后再试';
				aui.isDefine(e.currentTarget.dataset.icon) ? _this.auiToast.icon = e.currentTarget.dataset.icon : _this.auiToast.icon = '';
				aui.isDefine(e.currentTarget.dataset.location) ? _this.auiToast.location = e.currentTarget.dataset.location : _this.auiToast.location = 'bottom';
				aui.isDefine(e.currentTarget.dataset.direction) ? _this.auiToast.direction = e.currentTarget.dataset.direction : _this.auiToast.direction = 'col';
				// _this.$refs.toast.show();
				_this.$refs.toast.show().then(function(){
					console.log('toast关闭');
				});
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

