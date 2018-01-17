	
/********************************08-05********************************/

function daover(bh,sg) {
    $("#div_"+bh+"_1").hide();
    $("#div_"+bh+"_2").hide();
    $("#dd_"+bh+"_"+sg).addClass("cur").siblings().removeClass("cur");
    $("#div_"+bh+"_"+sg).show();
}

function showDownMenu() {
    var timer = null;
    $('#allNav').click(function() {
        clearInterval(timer);
        $('#downMenuList').show();
    });
    $('#allNav').mouseleave(function() {
        clearInterval(timer);
        timer = setInterval("$('#downMenuList').hide()",30);
    });
    $('#downMenuList, .YinCang').hover(function() {
        clearInterval(timer);
    }, function(){
        timer = setInterval("$('#downMenuList').hide()",30);
    });
}

function showMenuDownList() {
    var timer = null;
    var isNum;
    $('.WP-nav .N-WP ul li').hover(function() {
        clearInterval(timer);
        $('.navDownList').hide();
        $('.WP-nav .N-WP ul li a').removeClass('hover');
        $(this).children('a').addClass('hover');
        $(this).children('.navDownList').show();
    }, function(){
        timer = setInterval(function(){
            $('.WP-nav .N-WP ul li a').removeClass('hover');
            $('.navDownList').hide();
        },100);
    });
    $('.navDownList').hover(function(){
        clearInterval(timer);
        $(this).children('.navDownList').show();
    }, function() {
        $('.WP-nav .N-WP ul li a').removeClass('hover');
        $('.navDownList').hide();
    });
}

//-------------------------------------------------------------
function MouseClk() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		document.getElementById("ishopName").value = "";
	}
}

function MouseOut() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "") {
		var sg = document.getElementById("isosoflag").value;
		if(sg == "1") {
			document.getElementById("ishopName").value = "填写旺旺名或淘宝店铺地址";
		}else if(sg == "2") {
			document.getElementById("ishopName").value = "填写关键词或网店编号";
		}else if(sg == "3") {
			document.getElementById("ishopName").value = "填写关键词";
		}
	}
}

function hidesoxla() {
	if(document.getElementById("isoutflag").value == "") {
		soxialahide();
	}
}
function hrefsout() {
	document.getElementById("isoutflag").value = "";
	setTimeout("hidesoxla()",200);
}
function soxialashow() {
	document.getElementById("isoutflag").value = "1";
	document.getElementById("isodl").style.display="";
}
function soxialahide() {
	document.getElementById("isodl").style.display="none";
	document.getElementById("isoutflag").value = "";
}

function sosoShow(sg)
{
	document.getElementById("isosoflag").value = sg;
	if(sg == "1") {
		document.getElementById("isoshow1").innerHTML="估价";
		document.getElementById("ishopName").value = "填写旺旺名或淘宝店铺地址";
		document.getElementById("isobtn").value = "网店估价";
	}else if(sg == "2") {
		document.getElementById("isoshow1").innerHTML="天猫网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}else if(sg == "4") {
		document.getElementById("isoshow1").innerHTML="淘宝网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}else if(sg == "5") {
		document.getElementById("isoshow1").innerHTML="其它网店";
		document.getElementById("ishopName").value = "填写关键词或网店编号";
		document.getElementById("isobtn").value = "搜索网店";
	}
	document.getElementById("isodl").style.display="none";
}

function srhformSbt() {
	var spn = document.getElementById("ishopName").value;
	if(spn == "填写旺旺名或淘宝店铺地址" || spn == "填写关键词或网店编号" || spn == "填写关键词") {
		spn = "";
		document.getElementById("ishopName").value = "";
	}	
	var sg = document.getElementById("isosoflag").value;
	if(sg == "1") {
		//document.getElementById("iformfind").method = "post";
		//document.getElementById("iformfind").action = "/shopmm/spevaluate.html";
		//document.getElementById("iformfind").submit();
	}else if(sg == "2") {
		window.open("/shopmm/tmallIndexNew-3--------------------"+spn+"---------1.html",'','');
	}else if(sg == "4") {
		window.open("/shopmm/transEnprsNew-1-----------------"+spn+"-----------1.html",'','');
	}else if(sg == "5") {
		window.open("/shopmm/qitaIndexNew-------------"+spn+"--------1.html",'','');
	}
	//61018:
	try{
		dwr.engine.setAsync(false);
		spIndexDwr.SaveSearchRec("3",sg,spn,
		{
	      callback:function(data) {}
		});
	}catch(e){}
}
	
//--------------------------
	
//菜单栏发布求购
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
	//DWREngine.setAsync(false);
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

function fourshow() {
	
	var noshow = $.cookie('nofourshow');
	if(noshow != null && noshow == "yh") {
		//
	}else {

		Iframe({
			Url:"/5paoIndex/fouryear.htm",
	    	Width:807,
			Height:506,
			scrolling:'no',
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });
	}
}
	