<template>
	<div class="container">
		<aui-header title="组件" :left="{use: true, click: closePage}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list" @click.stop="openPage('actionmenu/actionmenu')">
					<div class="aui-list-left">actionMenu 底部菜单</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('actionsheet/actionsheet')">
					<div class="aui-list-left">actionSheet 操作表</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('chatbox.html')">
					<div class="aui-list-left">chatbox聊天页面底部UI插件</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('datepicker.html')">
					<div class="aui-list-left">datepicker时间选择器</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('/dialog')">
					<div class="aui-list-left">dialog 模态弹窗</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('keypad.html')">
					<div class="aui-list-left">keypad 数字键盘</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('/loading')">
					<div class="aui-list-left">loading 加载动画</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('picker.html')">
					<div class="aui-list-left">picker 多级联动</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('popdownmenu.html')">
					<div class="aui-list-left">popdownmenu底部弹出窗口</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('popover.html')">
					<div class="aui-list-left">popover 弹出菜单</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('poptopmenu.html')">
					<div class="aui-list-left">poptopmenu顶部弹出窗口</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>	
				<div class="aui-list" @click.stop="openPage('poster/poster')">
					<div class="aui-list-left">poster 广告弹窗</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('selectmenu.html')">
					<div class="aui-list-left">selectmenu下拉列表选择框</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('sidemenu.html')">
					<div class="aui-list-left">sidemenu 侧滑菜单</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('/toast')">
					<div class="aui-list-left">toast 消息提示</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
				<div class="aui-list" @click.stop="openPage('wxshare.html')">
					<div class="aui-list-left">wxShare 微信分享提示弹窗</div>
					<div class="aui-list-right"><div class="iconfont aui-btn-right iconright1"></div></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	export default {
		name: 'plugs',
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

