<template name="aui-footer">
	<div class="aui-footer row-before">
		<div class="aui-footer-item" v-for="(item, index) in items" :key="index" :class="{'active': currentIndex==index}" @click.stop="chooseTab(item)">
			<img :src="currentIndex==index ? item.selectSrc : item.src" alt="">
			<p>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'aui-footer',
		props: {
			currentIndex: Number,
		},
		data(){
			return {
				items: [ //底部导航数据
					{
						name: 'API', 
						index: 0, 
						url: '/', 
						src: require('@/static/image/tab/tab-api.png'), 
						selectSrc: require('@/static/image/tab/tab-api-active.png')
					},
					{
						name: 'DEMO', 
						index: 1, 
						url: 'demo', 
						src: require('@/static/image/tab/tab-demo.png'), 
						selectSrc: require('@/static/image/tab/tab-demo-active.png')
					}
				]
			}
		},
		methods:{
			chooseTab(item){
				this.$emit('tab', item);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.aui-footer{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		z-index: 995;		
	}
	.aui-footer-item{
		height: 50px;		
		display: inline-block;
		font-size: 0;
		text-align: center;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.aui-footer-item img{
		width: 20px;
		margin: 8px 0 3px 0;
	}
	.aui-footer-item p{
		width: 100%;
		height: 20px;
		line-height: 15px;
		display: block;
		margin: 0;
		font-size: 12px;
		color: #aaa;
		vertical-align: top;
	}
	.aui-footer-item.active p{
		color: #197DE0;
	}
</style>
