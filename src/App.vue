<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		components: {
			// auiFooter
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
		}
	}
</script>
<style>
	/*每个页面公共css */
	@import url("./common/aui/css/aui.css");
	@import url("./common/aui/css/aui.iconfont.css");
	*{margin: 0; padding: 0;}
	html,
	body {
		min-height: 100vh;
		padding: 0;
		margin: 0;
		position: relative;
	}
	#app {
		min-height: 100vh;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		position: relative;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
