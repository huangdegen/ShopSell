
//JS 中删除字符串左右的空格:
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

//判断某个值是否被选中(针对下拉表):
function xuan(can,ses) {
	var c = ses;
	for(var i=0;i<c.length;i++) {
		if(c[i].value == can) {
			c[i].selected = true;
		}
	}
}

//针对复选框，单选框等选中:
function xuanChecked(can,xkname) {
	var c = xkname;
	for(var i=0;i<c.length;i++) {
		if(c[i].value == can) {
			c[i].checked = true;
		}
	}
}

//判断是否都是纯数字:
function isAllDigits(argvalue) {
	argvalue = argvalue.toString();
	var validChars = "0123456789";
	for (var n = 0; n < argvalue.length; n++) {
		if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
	}
	return true;
}

//判断是否是EMAIL的格式:
function IsMail(mail) {
	var patrn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	if (!patrn.test(mail))
	return false;
	else 
	return true;
}

//判断是否是正确的手机格式:
function checkMob(mob) {
	/*var reg0=/^13[0-9]{1,1}\d{8}$/;
	var reg3=/^14[0-9]{1,1}\d{8}$/;
	var reg1=/^15[0-9]{1,1}\d{8}$/;
	var reg2=/^18[0-9]{1,1}\d{8}$/;
	var res=false;
	if (reg0.test(mob)) {
		res=true;
	}else if (reg1.test(mob)) {
		res=true;
	}else if (reg2.test(mob)) {
		res=true;
	}else if (reg3.test(mob)) {
		res=true;
	}*/
	
	var reg0=/^1\d{10}$/;
	var res=false;
	if (reg0.test(mob)) {
		res=true;
	}	
	return res;
}

//updateUinfo:
function fuday(monv,objSite) {
	if(objSite.options.length != 1) {
		for (var i=objSite.options.length-1;i>-1;i--){
			objSite.remove(i);
		}
	}
	if(monv == "01" || monv == "03" || monv == "05" || monv == "07" || monv == "08" || monv == "10" || monv == "12") {
	  for(var i=1;i<=31;i++) {
		var op=document.createElement("<option>");
		if(i<10) {
			op.text="0"+i;
			op.value="0"+i;
		}else {
			op.text=i;
			op.value=i;
		}
		objSite.add(op);
	  }
	}else if(monv == "02") {
	  for(var i=1;i<=29;i++) {
		var op=document.createElement("<option>");
		if(i<10) {
			op.text="0"+i;
			op.value="0"+i;
		}else {
			op.text=i;
			op.value=i;
		}
		objSite.add(op);
	  }
	}else {
		for(var i=1;i<=30;i++) {
		var op=document.createElement("<option>");
		if(i<10) {
			op.text="0"+i;
			op.value="0"+i;
		}else {
			op.text=i;
			op.value=i;
		}
		objSite.add(op);
	  }
	}
}

