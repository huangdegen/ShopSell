
//(官网)注册:
function checkRegistForm()
{	
	var boolean = true;
	var loginName = checkunameGuang(document.getElementById("iloginName").value,'rloginName');
	if(boolean && !loginName) {
		document.getElementById("iloginName").focus();
		boolean =false;
	}
	
	var phone = checkregphone(document.getElementById("iumobile").value,'rumobile');
	if(boolean && !phone){
		document.getElementById("iumobile").focus();
		boolean =false;
	}
	
	var qq = checkregqq(document.getElementById("iuqq").value,'rqq');
	if(boolean && !qq){
		document.getElementById("iuqq").focus();
		boolean =false;
	}
	
	var pwd =  checkregpwd(document.getElementById("iloginPwd").value,'rloginPwd');
	if(boolean && !pwd){
		document.getElementById("iloginPwd").focus();
		boolean =false;
	}
	
	var repwd = checkregaganinpwd(document.getElementById("irePwd").value,'rrePwd');
	if(boolean && !repwd){
		document.getElementById("irePwd").focus();
		boolean =false;
	}
	
	var yanzheng = tuPianYan(document.getElementById("yanzheng").value,'ryanzheng');
	var duanxin = duanxinyanzheng(document.getElementById("idxmsg").value,'rdxmsg');
	var xieyi = xieyicheckbox('riyxcheckbox');
	if(xieyi) {
		document.getElementById("iyxcheckboxhidden").value = "ok";
	}else{
		document.getElementById("iyxcheckboxhidden").value = "fail";
	}
	if(loginName && phone && qq && pwd && repwd && yanzheng && duanxin && xieyi) {
		document.getElementById("iform1").submit();
	}
	return boolean;
}
//(手机)注册:
function mobRegistForm()
{
	var iloginName = document.getElementById("iloginName");
	var sjnum = trim(iloginName.value);
	if(sjnum == "") {
		alert("请填写账户名！");
		iloginName.focus();
		return false;
	}
	if(sjnum.length < 2 || sjnum.length > 20) {
		alert("账户名长度为2-20位，由汉字、字母(不分大小写)、数字或下划线组成！");
		iloginName.focus();
		return false;
	}
	
	var iloginPwd = document.getElementById("iloginPwd");
	var lgpwd = trim(iloginPwd.value);
	if(lgpwd == "") {
		alert("登录密码不能为空！");
		iloginPwd.focus();
		return false;
	}
	if(lgpwd.length < 6 || lgpwd.length > 20) {
		alert("密码长度为6-20位，由字母、数字或字符组成，字母区分大小写！");
		iloginPwd.focus();
		return false;
	}
	var iuqq = document.getElementById("iuqq");
	var uqq = trim(iuqq.value);
	if(uqq == "") {
		alert("请填写QQ号！");
		iuqq.focus();
		return false;
	}
	if(uqq.length < 4 || uqq.length > 13) {
		alert("请正确填写QQ号！");
		iuqq.focus();
		return false;
	}
	if(isAllDigits(uqq) == false) {
		alert("请正确填写QQ号！");
		iuqq.focus();
		return false;
	}
	
	var iumobile = document.getElementById("iumobile");
	var umb = trim(iumobile.value);
	if(umb == "") {
		alert("请填写手机号！");
		iumobile.focus();
		return false;
	}
	if(checkMob(umb) == false) {
		alert("请正确填写手机号！");
		iumobile.focus();
		return false;
	}
	
	var yanzheng = document.getElementById("yanzheng");
	var uyzm = trim(yanzheng.value);
	if(uyzm == "") {
		alert("请输入图片验证码！");
		yanzheng.focus();
		return false;
	}
	if(uyzm.length != 6) {
		alert("请正确输入图片验证码！");
		yanzheng.focus();
		return false;
	}
	
	var idxmsg = document.getElementById("idxmsg");
	var dxmsg = trim(idxmsg.value);
	if(dxmsg == "") {
		alert("请填写短信验证码！");
		idxmsg.focus();
		return false;
	}
	if(dxmsg.length != 6) {
		alert("请正确填写短信验证码！");
		idxmsg.focus();
		return false;
	}
	document.getElementById("iform1").submit();
}

//安全设置,60114:
function checkRegsetForm() {
	
	var ipwdquestion = document.getElementById("ipwdquestion");
	var vpwdqst = trim(ipwdquestion.value);
	if(vpwdqst == "") {
		alert("请选择一个提示问题！");
		ipwdquestion.focus();
		return false;
	}	
	if(vpwdqst == "自定义问题") {
		var iothpwdqstion = document.getElementById("iothpwdqstion");
		var vopwdqst = trim(iothpwdqstion.value);
		if(vopwdqst == "") {
			alert("请填写自定义问题！");
			iothpwdqstion.focus();
			return false;
		}
		if(vopwdqst.length < 2 || vopwdqst.length > 20) {
			alert("自定义问题长度为2-20位，请正确填写！");
			iothpwdqstion.focus();
			return false;
		}
	}
	
	var ipwdanswer = document.getElementById("ipwdanswer");
	var npwda = trim(ipwdanswer.value);
	if(npwda == "") {
		alert("提示答案不能为空！");
		ipwdanswer.focus();
		return false;
	}
	if(npwda.length < 2 || npwda.length > 20) {
		alert("提示答案长度为2-20位，字母区分大小写！");
		ipwdanswer.focus();
		return false;
	}
	
	var itrueName = document.getElementById("itrueName");
	var vtname = trim(itrueName.value);
	if(vtname == "") {
		alert("真实姓名不能为空！");
		itrueName.focus();
		return false;
	}
	if(CheckChineseChar(vtname) == false) {
		alert("请正确填写真实姓名(注册后不能修改)！");
		itrueName.focus();
		return false;
	}
	if(vtname.length < 2 || vtname.length > 8) {
		alert("请正确填写真实姓名(注册后不能修改)！");
		itrueName.focus();
		return false;
	}
	
	/*var iuqq = document.getElementById("iuqq");
	var vuqq = trim(iuqq.value);
	if(vuqq == "") {
		alert("QQ号码不能为空！");
		iuqq.focus();
		return false;
	}
	if(vuqq.length < 4 || vuqq.length > 13) {
		alert("请正确填写QQ号码！");
		iuqq.focus();
		return false;
	}
	if(isAllDigits(vuqq) == false) {
		alert("请正确填写QQ号码！");
		iuqq.focus();
		return false;
	}*///60114;
	
	var iuemail = document.getElementById("iuemail");
	var vemail = trim(iuemail.value);
	if(vemail == "") {
		alert("安全邮箱不能为空！");
		iuemail.focus();
		return false;
	}
	if(vemail.length < 6 || vemail.length > 40) {
		alert("请正确填写邮箱地址(注册后不能修改)！");
		iuemail.focus();
		return false;
	}
	if(IsMail(vemail) == false) {
		alert("请正确填写邮箱地址(注册后不能修改)！");
		iuemail.focus();
		return false;
	}
	
	document.getElementById("iform1").submit();
}

function checkBangForm()
{
	var iloginName = document.getElementById("iloginName");
	if(trim(iloginName.value) == "") {
		alert("用户名不能为空！");
		iloginName.focus();
		return false;
	}
	if(trim(iloginName.value).length < 2 || trim(iloginName.value).length > 20) {
		alert("用户名长度为2-20位，由汉字、字母(不分大小写)、数字或下划线组成！");
		iloginName.focus();
		return false;
	}
	
	var iloginPwd = document.getElementById("iloginPwd");
	if(trim(iloginPwd.value) == "") {
		alert("登录密码不能为空！");
		iloginPwd.focus();
		return false;
	}
	if(trim(iloginPwd.value).length < 6 || trim(iloginPwd.value).length > 20) {
		alert("登录密码长度为6-20位，由字母、数字组成，字母区分大小写！");
		iloginPwd.focus();
		return false;
	}
	
	var irePwd = document.getElementById("irePwd");
	if(trim(irePwd.value) == "") {
		alert("请再次填写登录密码！");
		irePwd.focus();
		return false;
	}
	if(trim(irePwd.value) != trim(iloginPwd.value)) {
		alert("两次输入的登录密码不一致！");
		irePwd.focus();
		return false;
	}
	
	return true;
}
function copylogpwd(logpwd) {
	document.getElementById("irePwd").value = logpwd;
}

function changeValidateCode() {
	//每次请求需要一个不同的参数，否则可能会返回同样的验证码(和浏览器的缓存机制有关系),获取当前的时间作为参数:   
	var timenow = new Date().getTime();
	document.getElementById("iyzimg").src="rand.do?d="+timenow;
}

function mbxuan(can)
{
	if(can != '') {
		var c = document.getElementById("ipwdquestion");
		for(var i=0;i<c.length;i++) {
			if(c[i].value == can) {
				c[i].selected = true;
			}
		}
	}
}

//判断纯中文:
function CheckChineseChar(s_char) {
	var re1 = new RegExp("^[\u0391-\uFFE5]*$");
	return re1.test(s_char);
}

function showinfo(idn) {
	var c = document.getElementById(idn).innerHTML;
	if(c == "") {
		document.getElementById(idn).innerHTML = "<img src='images/rgt.png' border='0' />";
	}
}
