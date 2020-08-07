//前端过滤器 利用ajax同步验证session 如果没有登录跳转到登录页面【非常重要】
var rsTxt=$.ajax({
	type:"get",
	url:"http://127.0.0.1:9999/api/show/denglu2",
	async:false
}).responseText;

if(rsTxt==""){
	location.href="yj/登录.html";
}
//本地缓存验证session
/*if(window.sessionStorage.getItem("users")==null){
	location.href="sessionerror.html";
}*/


