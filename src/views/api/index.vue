<template>
	<div class="container">
		<aui-header title="aui-uni" :right="{use: true, click: openPopMenu}"></aui-header>
		<div class="aui-content">
			<div class="aui-lists">
				<div class="aui-list" @click.stop="openPage('api/devices')">
					<div class="aui-list-left"><img src="@/static/image/img/index-0.png" alt="">设备</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list" @click.stop="openPage('api/events')">
					<div class="aui-list-left"><img src="@/static/image/img/index-1.png" alt="">事件</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list" @click.stop="openPage('api/plugs')">
					<div class="aui-list-left"><img src="@/static/image/img/index-2.png" alt="">组件</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list" @click.stop="openPage('api/address')">
					<div class="aui-list-left"><img src="@/static/image/img/index-3.png" alt="">位置</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
				<div class="aui-list">
					<div class="aui-list-left"><img src="@/static/image/img/index-4.png" alt="">客服</div>
					<div class="aui-list-right"><i class="iconfont aui-btn-right iconright1"></i></div>
				</div>
			</div>
		</div>
		<aui-footer :currentIndex="currentIndex" @tab="changeTab"></aui-footer>
	</div>
</template>

<script>
	import auiHeader from '@/components/aui-header/aui-header.vue';
	import auiFooter from '@/components/aui-footer/aui-footer.vue';
	export default {
		name: 'home',
		components: {
			auiHeader,
			auiFooter
		},
		data(){
			return {
				currentIndex: 0,
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
			},
			openPage(url){
				var _this = this;
				_this.$router.push({path: url})
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
	.aui-list-left img{height: 18px; margin: -0 10px 0 0; display: inline-block; vertical-align: middle; position: relative; top: -1px;}
</style>
