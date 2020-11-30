<template>
	<div class="container">
		<aui-header title="实例" :right="{use: true, click: openPopMenu}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconother" style="font-size: 30px; left: -5px; color: #F44336;"></i>侧滑菜单</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont icontupianshangchuan" style="font-size: 18px; color: #2CB0B2;"></i>图片上传</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconimage1" style="font-size: 20px; color: #F44336;"></i>图片预览</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont icontupiancaijian" style="font-size: 18px; color: #8BC34A;"></i>图片裁剪</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconzhutise" style="font-size: 20px; color: #2CB0B2;"></i>获取图片主题色</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconselect_fill" style="font-size: 28px; color: #FFB74D; left: -4px;"></i>星级评价</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont icondatepicker1" style="font-size: 18px; color: #FB6802; top: 1px;"></i>选择器</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconxialaliebiao" style="font-size: 20px; color: #73B9EC;"></i>下拉选择</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconxuanxiangqia1" style="font-size: 18px; color: #EC2B45; top: 1px;"></i>选项卡</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconerweima" style="font-size: 20px; color: #12986D;"></i>生成二维码</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconcopy" style="font-size: 20px; color: #007AFF;"></i>复制到剪贴板</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconxingzhuang" style="font-size: 24px; color: #f6a820;"></i>抛物线(加入购物车)</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconweibiaoti-zhuanhuan-" style="font-size: 24px; color: #8BC34A;"></i>波浪特效</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconqiu" style="font-size: 20px; color: #FB6802;"></i>水球图</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont icondaojishi" style="font-size: 20px; color: #EC2B45; top: 1px;"></i>倒计时</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><i class="iconfont iconrenlianshibie" style="font-size: 24px; color: #197DE0;"></i>人脸识别</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<!-- <div class="aui-list" onclick="aui.openWin('redpacket/index.html')">
					<div class="aui-list-left"><i class="iconfont iconredpacket_fill" style="font-size: 24px; color: #FF5555;"></i>红包雨</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div> -->
			</div>
		</div>
		<aui-footer :currentIndex="currentIndex" @tab="changeTab"></aui-footer>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	import auiFooter from '@/components/aui-footer/aui-footer.vue';
	export default {
		name: 'demo',
		components: {
			auiHeader,
			auiFooter
		},
		data(){
			return {
				currentIndex: 1,
			}
		},
		mounted() {
			
		},
		methods:{
			changeTab(e){
				var _this = this;
				_this.currentIndex = e.index;
				_this.$router.push({path: e.url})
			},
			openPopMenu(){
				alert('打开菜单')
			}
		}
	}
</script>

<style scoped="scoped">
	.container{
		width: 100%;
		height: -webkit-calc(100vh - 50px);
		height: calc(100vh - 50px);
		background-color: #F4F4F4;
	}
	.aui-list-left i{width: 30px; height: 100%; line-height: 53px; text-align: left; display: inline-block; vertical-align: top; position: relative;}
</style>
