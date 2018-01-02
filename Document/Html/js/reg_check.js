
function NameClk() {
	var spn = document.getElementById("iloginName").value;
	if(spn == "填写您的手机号") {
		document.getElementById("iloginName").value = "";
	}
}

//user.loginPwd
function checkupwd(varVal, objID) {
	document.getElementById("iaqlev").style.display = "none"; //安全强度;
	varVal = trim(varVal);
	if(varVal != "") {
		
		if(varVal.length < 6) {
			document.getElementById(objID).innerHTML="·密码至少为6位！";
			document.getElementById("ishow2").className = "Cha";
			return ;
		}else if(varVal.length > 20) {
			document.getElementById(objID).innerHTML="·密码最长为20位！";
			document.getElementById("ishow2").className = "Cha";
			return ;
		}
		
		theDwr.CheckRegPwd(varVal,
		{
	      callback:function(data) {
			if(data == "pwd ok") {
				
				document.getElementById("iaqlev").style.display = "";
				var sg = AuthPasswd(varVal);
				if(sg == "2") {
					document.getElementById("ian1").className = "cur30";
					document.getElementById("ian2").className = "cur30";
					document.getElementById("ian3").className = "cur3";
					document.getElementById(objID).innerHTML="·密码填写正确！";
				}else if(sg == "1") {
					document.getElementById("ian1").className = "cur20";
					document.getElementById("ian2").className = "cur2";
					document.getElementById("ian3").className = "";
					document.getElementById(objID).innerHTML="·密码填写正确！";
				}else {
					document.getElementById("ian1").className = "cur1";
					document.getElementById("ian2").className = "";
					document.getElementById("ian3").className = "";
					document.getElementById(objID).innerHTML="·该密码比较简单，有被盗风险，<br/>&nbsp;&nbsp;建议您更改为复杂密码，如字母+数字的组合";
				}
				document.getElementById("ishow2").className = "Dui";
			}else {
				document.getElementById(objID).innerHTML="·密码格式错误(由字母、数字或字符组成)！";
				document.getElementById("ishow2").className = "Cha";
			}
		  }
		});
	}else {
		document.getElementById(objID).innerHTML="·请填写密码(至少为6位)！";
		document.getElementById("ishow2").className = "Cha";
	}
}

//user.rePwd
function checkuRpwd(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		var lgval = trim(document.getElementById("iloginPwd").value);
		if(varVal == lgval) {
			document.getElementById(objID).innerHTML="";
			document.getElementById("ishow3").className = "Dui";
		}else {
			document.getElementById(objID).innerHTML="·两次输入的密码不一致！";
			document.getElementById("ishow3").className = "Cha";
		}
	}else {
		document.getElementById(objID).innerHTML="·请确认密码！";
		document.getElementById("ishow3").className = "Cha";
	}
}

//user.pwdquestion
function checkPwdQton(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		document.getElementById(objID).innerHTML="<img src=\"images/reg/rok.gif\" />";
		document.getElementById(objID).className = "input_warn";
	}else {
		document.getElementById(objID).innerHTML="请选择密码保护问题！";
		document.getElementById(objID).className = "input_warnw";
	}
}

//othpwdqstion
function checkOthPwdQton(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		
		if(varVal.length < 2 || varVal.length > 20) {
			document.getElementById(objID).innerHTML="自定义问题长度为2-20位，请正确填写！";
			document.getElementById(objID).className = "input_warnw";
		}else{		
			document.getElementById(objID).innerHTML="<img src=\"images/reg/rok.gif\" />";
			document.getElementById(objID).className = "input_warn";
		}
	}else {
		document.getElementById(objID).innerHTML="请填写自定义问题！";
		document.getElementById(objID).className = "input_warnw";
	}
}

//user.pwdanswer
function checkPwdAsw(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		var lgval = document.getElementById("ipwdquestion").value;
		if(trim(lgval) == "") {
			document.getElementById(objID).innerHTML="请选择密码保护问题！";
			document.getElementById(objID).className = "input_warnw";
		}else if(varVal.length < 2 || varVal.length > 20) {
			document.getElementById(objID).innerHTML="问题答案长度为2-20位，字母区分大小写！";
			document.getElementById(objID).className = "input_warnw";
		}else {
			document.getElementById(objID).innerHTML="<img src=\"images/reg/rok.gif\" />";
			document.getElementById(objID).className = "input_warn";
		}
	}else {
		document.getElementById(objID).innerHTML="请填写密码保护问题答案！";
		document.getElementById(objID).className = "input_warnw";
	}
}

//user.trueName
function checkTruename(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		theDwr.CheckTrueName(varVal,
		{
	      callback:function(data) {
			if(data == "pattern error") {
				document.getElementById(objID).innerHTML="请正确填写真实姓名(注册后不能修改)！";
				document.getElementById(objID).className = "input_warnw";
			}else if(data == "tname ok") {
				document.getElementById(objID).innerHTML="<img src=\"images/reg/rok.gif\" />";
				document.getElementById(objID).className = "input_warn";
			}
		  }
		});
	}else {
		document.getElementById(objID).innerHTML="请填写真实姓名(请正确填写,注册后不能修改)！";
		document.getElementById(objID).className = "input_warnw";
	}
}

//user.umobile
function checkumobile(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		theDwr.CheckMobile(varVal,
		{
	      callback:function(data) {
			if(data == "pattern error") {
				document.getElementById(objID).innerHTML="·请正确填写手机号码！";
				document.getElementById("ishow4").className = "Cha";
			}else if(data == "mobile ok") {
				document.getElementById(objID).innerHTML="·该手机号可以使用！";
				document.getElementById("ishow4").className = "Dui";
			}else if(data == "renzhen") {
				document.getElementById(objID).innerHTML="·该手机号已被使用！";
				document.getElementById("ishow4").className = "Cha";
			}else {
				document.getElementById(objID).innerHTML="·请填写常用手机号！";
				document.getElementById("ishow4").className = "Cha";
			}
		  }
		});
	}else {
		document.getElementById(objID).innerHTML="·请填写手机号！";
		document.getElementById("ishow4").className = "Cha";
	}
}

//user.uqq//60114:
function checkuqq(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		theDwr.CheckuQQ(varVal,
		{
	      callback:function(data) {
			if(data == "pattern error") {
				document.getElementById(objID).innerHTML="·请正确填写QQ号！";
				document.getElementById("ishow5").className = "Cha";
			}else if(data == "qq ok") {
				document.getElementById(objID).innerHTML="·填写常用QQ号！";
				document.getElementById("ishow5").className = "Dui";
			}
		  }
		});
	}else {
		document.getElementById(objID).innerHTML="·请填写QQ号！";
		document.getElementById("ishow5").className = "Cha";
	}
}

//user.uemail
function checkuemail(varVal, objID)
{
	varVal = trim(varVal);
	if(varVal != "") {
		theDwr.CheckEmail(varVal,
		{
	      callback:function(data) {
			if(data == "pattern error") {
				document.getElementById(objID).innerHTML="请正确填写邮箱地址！";
				document.getElementById(objID).className = "input_warnw";
			}else if(data == "email ok") {
				document.getElementById(objID).innerHTML="<img src=\"images/reg/rok.gif\" />";
				document.getElementById(objID).className = "input_warn";
			}else if(data == "email registed") {
				document.getElementById(objID).innerHTML="此邮箱已被注册！";
				document.getElementById(objID).className = "input_warnw";
			}
		  }
		});
	}else {
		document.getElementById(objID).innerHTML="请填写邮箱地址！";
		document.getElementById(objID).className = "input_warnw";
	}
}

function AuthPasswd(string) {
	
	var getres = "0";
	if(string.length >=6) {
		
		if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /[-`=;',.\/~!@#$%^&*()_+|{}:\"<>?]+/.test(string)) {

			getres = "2";

	    }else if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {

    		getres = "1";

        }else if(/\[a-zA-Z]+/.test(string) && /[-`=;',.\/~!@#$%^&*()_+|{}:\"<>?]+/.test(string)) {

        	getres = "1";

        }else if(/[0-9]+/.test(string) && /[-`=;',.\/~!@#$%^&*()_+|{}:\"<>?]+/.test(string)) {

        	getres = "1";
        	
        }
	}
	return getres;
}

var sdtime = 60;
function TimeShow() {
	
	sdtime = sdtime - 1;
	if(sdtime >= 0) {
		document.getElementById("idxnum").value="重新发送("+sdtime+")";
		setTimeout("TimeShow()",1000);
	}else {
		document.getElementById("idxnum").value="获取短信验证码";
		sdtime = 60;
	}	
}


function ImgYzmChk(imgYzm) {
var res = "err";
dwr.engine.setAsync(false);
theDwr.CheckImgYzm(imgYzm,
{
  callback:function(data) {
	  if(data != null && data == "ok") {
		  res = "ok";
	  }
  }
});
return res;
}


function myTrim(str){ //删除左右两端的空格　　
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//账户名：
function checkuname(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入账户名";
		add.className = "tips colr-red";
		return false;
	}
	//用户名校验：字母数字汉字下换线，2-20位
	var patrn=/^[\a-\z\A-\Z0-9\u4E00-\u9FA5\_]{2,20}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="账户名为2-20位。由汉字、字母（不分大小写）、数字或下划线组成";
		add.className = "tips colr-red";
		return false;
	}else{
		//dwr校验：
		theDwr.CheckLoginName(varVal,
		{
	      callback:function(data) {
			if(data == "name ok") {
				document.getElementById(objID).innerHTML="√";
				add.className = "tips fuhe";
				return true;
			}else if(data == "pattern error") {
				document.getElementById(objID).innerHTML="账户名为2-20位。由汉字、字母（不分大小写）、数字或下划线组成";
				add.className = "tips colr-red";
				return false;
			}else if(data == "name registed") {
				document.getElementById(objID).innerHTML="此账号已被注册";
				add.className = "tips colr-red";
				return false;
			}else {
				document.getElementById(objID).innerHTML="系统异常，请稍后重试！";
				add.className = "tips colr-red";
				return false;
			}
		  }
		});
	}
}

//账户名：
function checkunameGuang(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入账户名";
		add.className = "tips colr-red";
		return false;
	}
	//用户名校验：字母数字汉字下换线，2-20位
	var patrn=/^[\a-\z\A-\Z0-9\u4E00-\u9FA5\_]{2,20}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="账户名为2-20位。由汉字、字母（不分大小写）、数字或下划线组成";
		add.className = "tips colr-red";
		return false;
	}else{
		document.getElementById(objID).innerHTML="√";
		add.className = "tips fuhe";
		return true;
	}
}

//手机号校验：
function checkregphone(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入手机号";
		add.className = "tips colr-red";
		return false;
	}
	var patrn=/^[1][3,4,5,7,8][0-9]{9}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="请输入正确的手机号码";
		add.className = "tips colr-red";
		return false;
	}else{
		document.getElementById(objID).innerHTML="√";
		add.className = "tips fuhe";
		return true;
	}
}

//qq校验：
function checkregqq(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入QQ号";
		add.className = "tips colr-red";
		return false;
	}
	var patrn=/^[0-9]{5,12}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="请输入正确的QQ号";
		add.className = "tips colr-red";
		return false;
	}else{
		document.getElementById(objID).innerHTML="√";
		add.className = "tips fuhe";
		return true;
	}
}

//密码校验：
function checkregpwd(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入密码";
		add.className = "tips colr-red";
		return false;
	}
	var patrn=/^\S{6,20}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="密码格式错误，请重新设置";
		add.className = "tips colr-red";
		/*//确认密码数据重置
		document.getElementById("irePwd").value="";
		document.getElementById("rrePwd").innerHTML="· 密码为6-20位，由字母、数字或字符组成，字母区分大小写！";
		document.getElementById("rrePwd").className = "tips";*/
		return false;
	}else{
		document.getElementById(objID).innerHTML="√";
		add.className = "tips fuhe";
		//确认密码不为空
		if(myTrim(document.getElementById("irePwd").value)!=""){
			if(myTrim(document.getElementById("irePwd").value)!=varVal){
				document.getElementById("rrePwd").innerHTML="确认密码与设置密码不同，请重新输入";
				document.getElementById("rrePwd").className = "tips colr-red";
				return false;
			}else{
				document.getElementById("rrePwd").innerHTML="√";
				document.getElementById("rrePwd").className = "tips fuhe";
				return true;
			}
		}
		return true;
	}
}

//确认密码校验：
function checkregaganinpwd(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	var reg = myTrim(document.getElementById("iloginPwd").value); 
	if(reg==""){
		/*//密码区提示：
		document.getElementById("rloginPwd").innerHTML="请先输入设置密码";
		document.getElementById("rloginPwd").className = "tips colr-red";*/
		document.getElementById(objID).innerHTML="请先输入设置密码";
		add.className = "tips colr-red";
		return false;
	}else{
		if(varVal==""){
			document.getElementById(objID).innerHTML="请输入确认密码";
			add.className = "tips colr-red";
			return false;
		}
		//确认密码区提示：
		if(varVal!=reg){
			document.getElementById(objID).innerHTML="确认密码与设置密码不同，请重新输入";
			add.className = "tips colr-red";
			return false;
		}else{
			document.getElementById(objID).innerHTML="√";
			add.className = "tips fuhe";
			return true;
		}
	}
}

//图片验证码：
function tuPianYan(varVal, objID) {
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入图片验证码";
		add.className = "tips colr-red";
		return false;
	}
	var patrn=/^\d{6}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="验证码错误，请重新切换验证";
		add.className = "tips colr-red";
		return false;
	}else{
		//异步验证图片验证码:
		var yzmres = ImgYzmChk(varVal);
		if(yzmres != "ok") {
			document.getElementById(objID).innerHTML="验证码错误，请重新切换验证";
			add.className = "tips colr-red";
			return false;
		}else{
			document.getElementById(objID).innerHTML="√";
			add.className = "tips fuhe";
			return true;
		}
	}
}

//短信验证码:
function duanxinyanzheng(varVal, objID) {
	/*var phone = checkregphone(document.getElementById("iumobile").value,'rumobile');
	var tupianYan = tuPianYan(document.getElementById("yanzheng").value,'ryanzheng');*/
	varVal = myTrim(varVal);
	var add = document.getElementById(objID); 
	if(varVal==""){
		document.getElementById(objID).innerHTML="请输入短信验证码";
		add.className = "tips colr-red";
		return false;
	}
	var patrn=/^\d{6}$/;
	if (!patrn.exec(varVal)){
		document.getElementById(objID).innerHTML="验证码错误，请重新验证";
		add.className = "tips colr-red";
		return false;
	}else{
		document.getElementById(objID).innerHTML="";
		add.className = "tips";
		return true;
	}
}

//服务使用协议
function xieyicheckbox(objID) {
	var iyxcheckbox = document.getElementById("iyxcheckbox");
	if(iyxcheckbox.checked == false) {
		document.getElementById(objID).innerHTML="请阅读并且同意服务使用协议";
		document.getElementById(objID).className = "tips colr-red";
		return false;
	}else{
		document.getElementById(objID).innerHTML="";
		document.getElementById(objID).className = "tips";
		return true;
	}
}

//发送短信:
function SendDxNum() {
	var sjnum = document.getElementById("iumobile").value;
	var phone = checkregphone(sjnum,'rumobile');
	var tupianYan = tuPianYan(document.getElementById("yanzheng").value,'ryanzheng');
	if(phone && tupianYan && sdtime == 60){
		theDwr.SetRegMsgNum(sjnum,
		{
	      callback:function(data) {
			if(data == "ok") {
				layer.msg('短信验证码已发送，请查收');
				TimeShow();
				//重置验证码对错信息
				document.getElementById("rdxmsg").innerHTML="";
				document.getElementById("rdxmsg").className = "tips";
				return true;
			}else if(data == "okend") {
				layer.msg('该手机号已被使用,请更换');
			}else if(data == "onein") {
				layer.msg('短信验证码已发送,一分钟之内请勿重复点击');
				TimeShow();
			}else if(data == "fiveci") {
				layer.msg('该手机号在一小时内已发送过5次验证码,请稍后再试');
			}else {
				layer.msg('系统繁忙,请稍后重试');
				TimeShow();
			}
		  }
		});
	}
}

//图片验证码：
function tuPianYanFocus(objID) {
	var add = document.getElementById(objID); 
	document.getElementById(objID).innerHTML="看不清？<a href='javascript:void(0);' onclick='changeValidateCode();'>点击换一个！</a>";
	add.className = "tips";
}

//短信验证码：
function duanxinFocus(objID) {
	var add = document.getElementById(objID); 
	document.getElementById(objID).innerHTML="";
	add.className = "tips";
}
