//本地存储的工具库
// if(!window.localStorage){
// 	alert('你的浏览器不支持localStorage');
// }
var store ={
	setItem(key,value){
		window.localStorage.setItem(key,JSON.stringify(value));
	},
	getItem(key){
		return JSON.parse(window.localStorage.getItem(key));
	},
	removeItem(key){
		window.localStorage.removeItem(key);
	}
}

export default store;
