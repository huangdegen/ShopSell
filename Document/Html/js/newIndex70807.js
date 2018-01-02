
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function checkXqMob(mob) {
	var reg0=/^1\d{10}$/;
	var res=false;
	if (reg0.test(mob)) {
		res=true;
	}
	return res;
}
function checksz(argvalue) {
	argvalue = argvalue.toString();
	var validChars = "0123456789";
	for (var n = 0; n < argvalue.length; n++) {
		if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
	}
	return true;
}

function WeiXinShow()
{
	window.open("/theuser/user/weixin.htm",'',"width=500,height=470,top=100,left=400");
}

//My5pao:
function xialashow() {
	document.getElementById("ioutflag").value = "1";
	document.getElementById("imy5pao").style.display="";
	document.getElementById("iwupao").className="cur";
}
function hrefout() {
	document.getElementById("ioutflag").value = "";
	setTimeout("hidexla()",200);
}
function hidexla() {
	if(document.getElementById("ioutflag").value == "") {
		xialahide();
	}
}
function xialahide() {
	document.getElementById("imy5pao").style.display="none";
	document.getElementById("ioutflag").value = "";
	document.getElementById("iwupao").className="";
}

/////////////////////////搜索////////////////////////////////
function soxialashow() {
	document.getElementById("isoutflag").value = "1";
	document.getElementById("isodl").style.display="";
}
function hrefsout() {
	document.getElementById("isoutflag").value = "";
	setTimeout("hidesoxla()",200);
}
function hidesoxla() {
	if(document.getElementById("isoutflag").value == "") {
		soxialahide();
	}
}
function soxialahide() {
	document.getElementById("isodl").style.display="none";
	document.getElementById("isoutflag").value = "";
}
function sosoClk(sg) {
	document.getElementById("isosoflag").value = sg;
	if(sg == "2") {
		document.getElementById("isoshow1").innerHTML="天猫网店";
		//document.getElementById("ishopName").value = "填写关键词或网店编号";
	}else if(sg == "4") {
		document.getElementById("isoshow1").innerHTML="淘宝网店";
		//document.getElementById("ishopName").value = "填写关键词或网店编号";
	}else if(sg == "5") {
		document.getElementById("isoshow1").innerHTML="其它网店";
		//document.getElementById("ishopName").value = "填写关键词或网店编号";
	}
	document.getElementById("isodl").style.display="none";
}
function MouseClk() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		document.getElementById("ishopName").value = "";
	}
}
function MouseOut() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "") {
		document.getElementById("ishopName").value = "填写关键词或网店编号";
	}
}
function srhformSbt() {
	var spn = document.getElementById("ishopName").value.trim();
	if(spn == "填写关键词或网店编号") {
		spn = "";
		document.getElementById("ishopName").value = "";
	}
	var sg = document.getElementById("isosoflag").value;
	if(sg == "2") {
		window.open("/shopmm/tmallIndexNew-3--------------------"+spn+"---------1.html",'','');
	}else if(sg == "4") {
		window.open("/shopmm/transEnprsNew-1-----------------"+spn+"-----------1.html",'','');
	}else if(sg == "5") {
		window.open("/shopmm/qitaIndexNew-------------"+spn+"--------1.html",'','');
	}
	//61018:
	try{
		dwr.engine.setAsync(false);
		spIndexDwr.SaveSearchRec("1",sg,spn,
		{
	      callback:function(data) {}
		});
	}catch(e){}
}
//70728:
function srhClkType(sg) {
	document.getElementById("idptp2").className="radio";
	document.getElementById("idptp4").className="radio";
	document.getElementById("idptp5").className="radio";
	document.getElementById("isosoflag").value = sg;
	document.getElementById("idptp"+sg).className="radio checked";
}
/**************************************************************************************/

//菜单栏发布求购:
function postWant() {
    var p = $('#postDemand');
    var e = $('#postEnter');
    var asrc = e.attr('src').split('.');

    if(p.css('display') == 'none') {
        p.show(500);
        asrc[asrc.length - 1] = 'png';
    } else{
        p.hide(500);
        asrc[asrc.length - 1] = 'gif';
    }
    var ssrc = asrc.join('.');
    e.attr('src',ssrc);
}
function XqMouseClk(vtype,otype) {
	if(vtype == "1") { //姓名:
		var xqname = trim($('#xqname').val());
		if(otype == "2") { //鼠标离开:
			if(xqname == "") {
				$('#xqname').val("例如：何先生");
			}
		}else { //点击:
			if(xqname == "例如：何先生") {
				$('#xqname').val("");
			}
		}
	}else if(vtype == "2") {
		var xqmobile = trim($('#xqmobile').val());
		if(otype == "2") { //鼠标离开:
			if(xqmobile == "") {
				$('#xqmobile').val("例如：15688878886");
			}
		}else { //点击:
			if(xqmobile == "例如：15688878886") {
				$('#xqmobile').val("");
			}
		}
	}else if(vtype == "3") {
		var xqqq = trim($('#xqqq').val());
		if(otype == "2") { //鼠标离开:
			if(xqqq == "") {
				$('#xqqq').val("例如：826935668");
			}
		}else { //点击:
			if(xqqq == "例如：826935668") {
				$('#xqqq').val("");
			}
		}
	}else if(vtype == "4") {
		var yourWant = trim($('#yourWant').val());
		if(otype == "2") { //鼠标离开:
			if(yourWant == "") {
				$('#yourWant').val("例如：求购一个江浙沪地区女装类天猫店");
			}
		}else { //点击:
			if(yourWant == "例如：求购一个江浙沪地区女装类天猫店") {
				$('#yourWant').val("");
			}
		}
	}
}
//发布需求:
function SendXuqiu() {
	
	//获取填写信息:
	var xqshop = "";
	if(document.getElementById("xqshop1").checked == true) {
		xqshop = "天猫网店";
	}else if(document.getElementById("xqshop2").checked == true) {
		xqshop = "淘宝网店";
	}else if(document.getElementById("xqshop3").checked == true) {
		xqshop = "其它网店";
	}
	if(xqshop == "") {
		alert("温馨提示：请选择店铺分类！");
		return ;
	}
	var xqname = trim($('#xqname').val());
	if(xqname == "" || xqname == "例如：何先生") {
		alert("温馨提示：请填写姓名！");
		$('#xqname').focus();
		return ;
	}
	if(xqname.length < 2 || xqname.length > 10) {
		alert("温馨提示：请正确填写姓名！");
		$('#xqname').focus();
		return ;
	}
	var xqmobile = trim($('#xqmobile').val());
	if(xqmobile == "" || xqmobile == "例如：15688878886") {
		alert("温馨提示：请填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	if(checkXqMob(xqmobile) == false) {
		alert("温馨提示：请正确填写手机号！");
		$('#xqmobile').focus();
		return ;
	}
	var xqqq = trim($('#xqqq').val());
	if(xqqq == "" || xqqq == "例如：826935668") {
		alert("温馨提示：请填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(xqqq.length < 4 || xqqq.length > 12) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	if(checksz(xqqq) == false) {
		alert("温馨提示：请正确填写QQ号！");
		$('#xqqq').focus();
		return ;
	}
	var yourWant = trim($('#yourWant').val());
	if(yourWant == "例如：求购一个江浙沪地区女装类天猫店") {
		yourWant = "";
	}
	if(yourWant != "") {
		if(yourWant.length > 200) {
			alert("温馨提示：需求内容限200字！");
			$('#yourWant').focus();
			return ;
		}
	}

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
		$('#ixqsdiv').css('display','none');
		$('#ixqediv').css('display','block');
	}else {
		alert("温馨提示：信息提交失败，请稍后重试哦！");
	}
}

//zixun online:
function ShowZixun() {
	window.open("http://wpa.qq.com/msgrd?v=3&uin=2355676101&site=qq&menu=yes",'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
}
//gujia:
function gujiaGo() {
	
	var shopurl = trim(document.getElementById("ishopurl").value);
	if(shopurl == "") {
		alert("温馨提示：请输入要查询的店铺链接或旺旺号！");
		document.getElementById("ishopurl").focus();
		return ;
	}
	document.getElementById("isgjform").submit();
}

//tanchuang:
function tjkefushow(closg) {
	
	var timenow = new Date().getTime();
	if(closg != null && closg == "no") {
		
		showServiceLayer();
		
	}else {
		var noshow = $.cookie('indexQzshow');
		if(noshow != null && noshow == "yh") {
			//			
		}else {
			showServiceLayer();
			$.cookie('indexQzshow', 'yh', { expires: 1, path: '/' });
			//setTimeout("IndexQzTanClose()",10000);
		}
	}
}
//60701:
function fytanshow() {
	
	var noshow = $.cookie('indexFytshow');
	if(noshow != null && noshow == "yh") {
		//
	}else {
		Iframe({
			Url:"fiveyear.htm",
	    	Width:598,
			Height:535,
			scrolling:'no',
			border:0,
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });
		$.cookie('indexFytshow', 'yh', { expires: 1, path: '/' });
		//setTimeout("IndexQzTanClose()",3000);
	}
}
function IndexQzTanClose() {
	//parent.Close();
	layer.close(layer.index);
}
//61109:
function DobSyTanClose() {
	parent.Close();
	document.getElementById("iweixin11_layer").style.display="";
}
function dobsyshow() {
	
	Iframe({
		Url:"dousyshow.jsp",
    	Width:890,
		Height:460,
		scrolling:'no',
		border:0,
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
	//setTimeout("DobSyTanClose()",5000);
}

function GetRandomNum(Min,Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
//2015-09-30:
function QQAsk(aurl) {
	window.open(aurl,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
}
//2015-11-12:
function QQToAsk(buytype) {
	//var timenow = new Date().getTime();
	if(device.mobile() || device.ipad()) {
		
		window.location.href = "getshowsale.action?sptype="+buytype;
	}else {
		window.open("getshowsale.action?sptype="+buytype,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
	}
}
//2016-08-25:
function QaqqToAsk(zxtype) {
	if(device.mobile() || device.ipad()) {
		
		window.location.href = "getzixunsale.action?sptype="+zxtype;
	}else {
		window.open("getzixunsale.action?sptype="+zxtype,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
	}
}
//2015-11-17:
function QQSjAsk(qsg) {
	var aurl = "";
	if(qsg == "sh") {
		var gnum = GetRandomNum(1,3);
		var snum = parseInt(gnum);
		if(snum == 1) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2850702775&site=qq&menu=yes";
		}else if(snum == 2) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2850702776&site=qq&menu=yes";
		}else if(snum == 3) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853711388&site=qq&menu=yes";
		}else {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853711388&site=qq&menu=yes";
		}		
	}else if(qsg == "dk") {
		var gnum = GetRandomNum(1,3);
		var snum = parseInt(gnum);
		if(snum == 1) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2850702753&site=qq&menu=yes";
		}else if(snum == 2) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853821083&site=qq&menu=yes";
		}else if(snum == 3) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355963690&site=qq&menu=yes";
		}else {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2850702753&site=qq&menu=yes";
		}		
	}else if(qsg == "cs") {
		var gnum = GetRandomNum(1,10);
		var snum = parseInt(gnum);
		if(snum == 1) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670884&site=qq&menu=yes";
		}else if(snum == 2) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355963695&site=qq&menu=yes";
		}else if(snum == 3) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355845898&site=qq&menu=yes";
		}else if(snum == 4) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853821070&site=qq&menu=yes";
		}else if(snum == 5) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853821087&site=qq&menu=yes";
		}else if(snum == 6) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670892&site=qq&menu=yes";
		}else if(snum == 7) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2853670880&site=qq&menu=yes";
		}else if(snum == 8) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355927173&site=qq&menu=yes";
		}else if(snum == 9) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355963692&site=qq&menu=yes";
		}else if(snum == 10) {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355676101&site=qq&menu=yes";
		}else {
			aurl = "http://wpa.qq.com/msgrd?v=3&uin=2355676101&site=qq&menu=yes";
		}
	}
	window.open(aurl,'',"width=644,height=544,toolbar=no,scrollbars=no,menubar=no,status=no");
}

//60115:
function servQqCheck() {
	
	var chkqq = trim(document.getElementById("ichkqq").value);
	if(chkqq == "" || chkqq == null) {
		alert("温馨提示：请输入要校验的QQ号码！");
		document.getElementById("ichkqq").focus();
		return ;
	}
	if(chkqq.length < 4 || chkqq.length > 13) {
		alert("请输入正确的QQ号码！");
		return ;
	}
	if(checksz(chkqq) == false) {
		alert("请输入正确的QQ号码！");
		return ;
	}
	Iframe({
    	Url:"checkservqq.html?qqnum="+chkqq,
    	Width:432,
		Height:330,
		scrolling:'no',
		border:0,
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}

function AddWpaoFavorite() {
	var title = "舞泡";
	var url = "http://www.5pao.com";
	try {
		window.external.addFavorite(url,title);
	}catch(e) {
		try {
	    	window.sidebar.addPanel(title,url,"");
		}catch(e) {
			alert("抱歉,您的浏览器不支持,请按 Ctrl+D 手动收藏!");
	    }
	}
}
