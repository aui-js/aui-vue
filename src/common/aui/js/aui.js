const aui = {
	console: function(str){
		console.log(str);
	},
	/***打开新页面
	   @param {string} url 页面路径
	   @param {Object} opts 参数 {id: ''}
	   @example: aui.openWin("index.html", {id: 1})
	*/
	openWin(url, opts){
		var _this = this;
		var str = '?'; // eslint-disable-line no-unused-vars
		for(var i in opts){
			if(_this.isDefine(opts[i])){
				str += i + '=' + opts[i] + '&';
			}
		}
	},		
	/***关闭页面
	   @example: aui.closePage()
	*/
	closePage(callback){
		//直接关闭页面，并向后台发送数据
		if(typeof callback == "function"){
			if(window.addEventListener) {
				window.addEventListener("beforeunload", callback, false);
			} else {
				window.attachEvent("onbeforeunload", callback, false);
			}
		}
	},
	/***判断字符串是否为空
	   @param {string} str 变量
	   @example: aui.isDefine("变量");
	*/
	isDefine(str){
		if (str == null || str == "" || str == "undefined" || str == undefined || str == "null" || str == "(null)" || str == 'NULL' || typeof (str) == 'undefined'){
			return false;
		}else{
			str = str + "";
			str = str.replace(/\s/g, "");
			if (str == ""){return false;}
			return true;
		}
	},
}

export {
	aui
}