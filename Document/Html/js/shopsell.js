
function XqMouseClkS(vtype,otype) {
	if(vtype == "1") { //姓名:
		var xqname = trim($('#xqnameS').val());
		if(otype == "2") { //鼠标离开:
			if(xqname == "") {
				$('#xqnameS').val("例如：何先生");
			}
		}else { //点击:
			if(xqname == "例如：何先生") {
				$('#xqnameS').val("");
			}
		}
	}else if(vtype == "2") {
		var xqmobile = trim($('#xqmobileS').val());
		if(otype == "2") { //鼠标离开:
			if(xqmobile == "") {
				$('#xqmobileS').val("例如：15688878886");
			}
		}else { //点击:
			if(xqmobile == "例如：15688878886") {
				$('#xqmobileS').val("");
			}
		}
	}else if(vtype == "3") {
		var xqqq = trim($('#xqqqS').val());
		if(otype == "2") { //鼠标离开:
			if(xqqq == "") {
				$('#xqqqS').val("例如：826935668");
			}
		}else { //点击:
			if(xqqq == "例如：826935668") {
				$('#xqqqS').val("");
			}
		}
	}else if(vtype == "4") {
		var yourWant = trim($('#yourWantS').val());
		if(otype == "2") { //鼠标离开:
			if(yourWant == "") {
				$('#yourWantS').val("请填写您希望出售的网店链接的首页或旺旺名");
			}
		}else { //点击:
			if(yourWant == "请填写您希望出售的网店链接的首页或旺旺名") {
				$('#yourWantS').val("");
			}
		}
	}
}

//发布卖店需求:
function SendSellXuqiu() {
	
	//获取填写信息:
	var xqname = trim($('#xqnameS').val());
	if(xqname == "" || xqname == "例如：何先生") {
		alert("温馨提示：请填写您的姓名！");
		$('#xqnameS').focus();
		return ;
	}
	if(xqname.length < 2 || xqname.length > 10) {
		alert("温馨提示：请正确填写您的称呼！");
		$('#xqnameS').focus();
		return ;
	}
	var xqmobile = trim($('#xqmobileS').val());
	if(xqmobile == "" || xqmobile == "例如：15688878886") {
		alert("温馨提示：请填写手机号！");
		$('#xqmobileS').focus();
		return ;
	}
	if(checkXqMob(xqmobile) == false) {
		alert("温馨提示：请正确填写手机号！");
		$('#xqmobileS').focus();
		return ;
	}
	var xqqq = trim($('#xqqqS').val());
	if(xqqq == "" || xqqq == "例如：826935668") {
		alert("温馨提示：请填写QQ号！");
		$('#xqqqS').focus();
		return ;
	}
	if(xqqq.length < 4 || xqqq.length > 12) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqqS').focus();
		return ;
	}
	if(checksz(xqqq) == false) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqqS').focus();
		return ;
	}
	var xqshop = trim($('#ixqshopS').val());
	if(xqshop == "") {
		alert("温馨提示：请选择出售店铺类型！");
		return ;
	}
	var yourWant = trim($('#yourWantS').val());
	if(yourWant == "请填写您希望出售的网店链接的首页或旺旺名") {
		yourWant = "";
	}
	if(yourWant == "") {
		alert("温馨提示：请填写网店网址！");
		$('#yourWantS').focus();
		return ;
	}
	if(yourWant.length > 200) {
		alert("温馨提示：网店网址过长！");
		$('#yourWantS').focus();
		return ;
	}
	xqname = xqname+"[shopsell]";

	var res = 0;
	dwr.engine.setAsync(false);
	spIndexDwr.SendXuqiu(xqname,xqmobile,xqqq,yourWant,xqshop,
	{
      callback:function(data) {
        if(data != null && data == "ok") {
        	res = 1;
    	}
	  }
	});
	
	if(res == 1) {
		$('#ixqsdivs').css('display','none');
		$('#ixqedivs').css('display','block');
	}else {
		alert("温馨提示：信息提交失败，请稍后重试哦！");
	}
}

function IndexGo() {
	window.location.href="http://www.5pao.com";
}

//70801:
function sellShopClkType(sg,sval) {
	document.getElementById("idptp1").className="radio";
	document.getElementById("idptp2").className="radio";
	document.getElementById("idptp3").className="radio";
	document.getElementById("idptp"+sg).className="radio checked";
	document.getElementById("ixqshopS").value = sval;
}
