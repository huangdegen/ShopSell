function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function xuan(can,ses) {
	var c = ses;
	for(var i=0;i<c.length;i++) {
		if(c[i].value == can) {
			c[i].selected = true;
		}
	}
}

/*********************跳转*******************/
function formsearch(pid) {
    document.getElementById("pageNo").value = pid;
    hrefgo('');
}
//跳转到:
function fytz() {
	var fy = document.getElementById("itzfy").value;
	document.getElementById("pageNo").value = fy;
    hrefgo('');
}

/*********************排序*******************/
//1).信用排序(价格及上架时间清空):
function xyfsOrder(type) {
	document.getElementById("xinyuOrder").value = type;
	document.getElementById("pxfs").value = "";
	document.getElementById("sjpx").value = "";
	hrefgo('1');
}
function xyfsOrder_T(type) {
	document.getElementById("xinyuOrder").value = type;
	hrefgo('1');
}
//2).价格排序(信用及上架时间清空):
function jgfsOrder(type) {
	document.getElementById("pxfs").value = type;
	document.getElementById("xinyuOrder").value = "";
	document.getElementById("sjpx").value = "";
	hrefgo('1');
}
function jgfsOrder_T(type) {
	document.getElementById("pxfs").value = type;
	hrefgo('1');
}
//3).上架时间排序(信用及价格清空):
function sjpxOrder(type) {
	document.getElementById("sjpx").value = type;
	document.getElementById("xinyuOrder").value = "";
	document.getElementById("pxfs").value = "";
	hrefgo('1');
}
//排序恢复默认:
function OrderResume() {
	document.getElementById("xinyuOrder").value = "";
	document.getElementById("pxfs").value = "";
	document.getElementById("sjpx").value = "";
	hrefgo('1');
}
function viewOnload(type) {
	document.getElementById("view").value = type;
	hrefgo('');
}

/*********************选择*******************/
//New20150319:
function scleiGo(sclei) {
	if(sclei != "") {
		var xn = trim(document.getElementById("sctype").value);
		if(xn == sclei) { //选中之后的再次点击,则取消
			sclei = "";
		}
	}
	document.getElementById("sctype").value = sclei;
	hrefgo('1');
}
function scleiXn(sclei) {
	$('#isclei'+sclei).addClass('cur');
}
//商标:
function sbleiGo(sblei) {
	if(sblei != "") {
		var xn = trim(document.getElementById("sbtype").value);
		if(xn == sblei) { //选中之后的再次点击,则取消
			sblei = "";
		}
	}
	document.getElementById("sbtype").value = sblei;
	hrefgo('1');
}
function sbleiXn(sblei) {
	$('#isblei'+sblei).addClass('cur');
}
function leimuGo(leimu) {
	if(leimu != "") {
		var xn = trim(document.getElementById("isp_sort").value);
		if(xn == leimu) { //选中之后的再次点击,则取消
			leimu = "";
		}
	}
	document.getElementById("isp_sort").value = leimu;
	document.getElementById("yijilei").value = "";
	hrefgo('1');
}
//一级类目:
function yileiGo(yilei) {
	
	yilei = trim(yilei);
	var xn = trim(document.getElementById("yijilei").value);	
	var res = ","+yilei+",";
	if(xn.indexOf(res) >= 0) {
		//已存在,去除:
		xn = xn.replace(res,",");
		if(xn == ",") {
			xn = "";
		}
	}else {
		//累加:
		if(xn != "") {
			xn += yilei+",";
		}else {
			xn = res;
		}
	}
	document.getElementById("yijilei").value = xn;
	//hrefgo('1');
}
function yileiXn(yilei) {
	$('#iyilei'+yilei).addClass('cur');
}
//价格:
function jiaclick(sg) {

	if(sg == "1") {
		document.getElementById("stPrice").value = 0;
		document.getElementById("enPrice").value = 50000;
	}else if(sg == "2") {
		document.getElementById("stPrice").value = 50000;
		document.getElementById("enPrice").value = 100000;
	}else if(sg == "3") {
		document.getElementById("stPrice").value = 100000;
		document.getElementById("enPrice").value = 200000;
	}else if(sg == "4") {
		document.getElementById("stPrice").value = 200000;
		document.getElementById("enPrice").value = 500000;
	}else if(sg == "5") {
		document.getElementById("stPrice").value = 500000;
		document.getElementById("enPrice").value = "";
	}
	document.getElementById("ijiasg").value = sg;
	hrefgo('1');
}
function jiaXn(sg) {
	
	if(sg != null && sg != "" && sg != "10") {
		$('#ijiakuai'+sg).addClass('cur');
	}
}
function jiaQx() {
	
	document.getElementById("stPrice").value = "";
	document.getElementById("enPrice").value = "";
	document.getElementById("ijiasg").value = "";
	hrefgo('1');
}

function lujiaGo() {
	var lusprice = trim(document.getElementById("ilusprice").value);
	var lueprice = trim(document.getElementById("ilueprice").value);
	if(lusprice != "" || lueprice != "") { //填写了筛选框中的价格,以此为准:
		document.getElementById("ijiasg").value = "10"; //手填价格;
		document.getElementById("stPrice").value = lusprice;
		document.getElementById("enPrice").value = lueprice;
	}else {
		var jiasg = document.getElementById("ijiasg").value;
    	if(jiasg == "10") { //筛选-取消:
    		document.getElementById("stPrice").value = "";
        	document.getElementById("enPrice").value = "";
    		document.getElementById("ijiasg").value = "";
    	}
	}
	hrefgo('1');
}

//2015-08-07:
function rdMoval(sg,val) {
	
	if(sg == "1") {
		document.getElementById("isdaih").value = val;
	}else if(sg == "2") {
		document.getElementById("ishuoy").value = val;
	}else if(sg == "3") {
		document.getElementById("sbguoh").value = val;
	}
}

/*********************其它*******************/
function okBusiDate(obj) {
    var thiStr = $(obj).closest('.selectBox');
    var sval = $('#startDateBusi').val();
    var eval = $('#endDateBusi').val();
    var xval = "";
    if(sval != "" || eval != "") {
    	if(sval != "" && eval != "") {
    		var isval = parseInt(sval);
    		var ieval = parseInt(eval);
    		if(ieval < isval) {
    			alert("搜索结束日期不能早于起始日期！");
    			return ;
    		}
    		sval = sval.substring(2);
    		eval = eval.substring(2);
    	}
    	xval = sval+"~"+eval;
    }else {
    	xval = "入驻时间";
    }
    thiStr.find('.selected').val(xval);
    thiStr.find('ul').hide(0);
}
//您的选择:
function yourSel() {
    //选择值之后显示:
    if($('.yourSel').css('display') == 'none') {
    	$('.yourSel').css('display','block');
    }
}

/*********************搜索*******************/
//New150315,确定搜索:
function searchQue() {
	
	hrefgo('1');
}
function shopsCheck() {
	
	/*var sid = trim(document.getElementById("sid").value);
	if(isNaN(sid) || sid.indexOf(' ') > -1) {
	    alert('请正确填写编号！');
	    return false;
	}*/ //2013-05-02;
	
	var stPrice = trim(document.getElementById("stPrice").value);
	var enPrice = trim(document.getElementById("enPrice").value);
	if(isNaN(stPrice) || isNaN(enPrice)) {
	    alert('价格请填写数字！');
	    return false;
	}
    return true;
}
function hrefgo(pcflag)
{
	if(shopsCheck() == false) {
		return false;
	}

	var actionurl = trim(document.getElementById("index").action); //eg:auctionListNew.html
	actionurl = actionurl.replace(".html","");
	
	var spType = trim(document.getElementById("spType").value);
	var hrefurl = actionurl + "-"+spType;
	
	//xyfrom:
	hrefurl += "-";
	
	//xyto:
	hrefurl += "-";
	
	var sctype = trim(document.getElementById("sctype").value);
	hrefurl += "-"+sctype;
	
	var sbtype = trim(document.getElementById("sbtype").value);
	hrefurl += "-"+sbtype;
	
	var isp_sort = trim(document.getElementById("isp_sort").value);
	hrefurl += "-"+isp_sort;
	
	var yijilei = trim(document.getElementById("yijilei").value);
	hrefurl += "-"+((yijilei != "") ? encodeURI(encodeURI(yijilei)) : "");
	
	var stPrice = trim(document.getElementById("stPrice").value);
	hrefurl += "-"+stPrice;
	
	var enPrice = trim(document.getElementById("enPrice").value);
	hrefurl += "-"+enPrice;
	
	var ijiasg = trim(document.getElementById("ijiasg").value); //价格标签标识;
	hrefurl += "-"+ijiasg;

	var isarea = trim(document.getElementById("isarea").value);
	if(isarea == "地区范围" || isarea == "地区不限") {
		isarea = "";
	}
	hrefurl += "-"+((isarea != "") ? encodeURI(encodeURI(isarea)) : "");
	
	var ispingf = trim(document.getElementById("ispingf").value);
	if(ispingf == "动态评分" || ispingf == "不限") {
		ispingf = "";
	}
	if(ispingf != "") {
		ispingf = ispingf.replace("分以上", "");
	}
	hrefurl += "-"+ispingf;
	
	var ishopHour = trim(document.getElementById("ishopHour").value);
	if(ishopHour == "入驻时间" || ishopHour == null) {
		ishopHour = "";
	}
	hrefurl += "-"+ishopHour;
	
	var iskouf = trim(document.getElementById("iskouf").value);
	if(iskouf == "扣分情况" || iskouf == "不限") {
		iskouf = "";
	}
	hrefurl += "-"+((iskouf != "") ? encodeURI(encodeURI(iskouf)) : "");
	
	var isdaih = trim(document.getElementById("isdaih").value);
	if(isdaih == "是否带货" || isdaih == "不限") {
		isdaih = "";
	}
	hrefurl += "-"+((isdaih != "") ? encodeURI(encodeURI(isdaih)) : "");
	
	var ishuoy = trim(document.getElementById("ishuoy").value);
	if(ishuoy == "提供货源" || ishuoy == "不限") {
		ishuoy = "";
	}
	hrefurl += "-"+((ishuoy != "") ? encodeURI(encodeURI(ishuoy)) : "");
	
	var nsrzz = trim(document.getElementById("nsrzz").value);
	if(nsrzz == "纳税人资质" || nsrzz == "不限") {
		nsrzz = "";
	}
	hrefurl += "-"+((nsrzz != "") ? encodeURI(encodeURI(nsrzz)) : "");
	
	var sbleib = trim(document.getElementById("sbleib").value);
	if(sbleib == "商标类别" || sbleib == "不限") {
		sbleib = "";
	}
	hrefurl += "-"+((sbleib != "") ? encodeURI(encodeURI(sbleib)) : "");
	
	var sbguoh = trim(document.getElementById("sbguoh").value);
	if(sbguoh == "商标过户" || sbguoh == "不限") {
		sbguoh = "";
	}
	hrefurl += "-"+((sbguoh != "") ? encodeURI(encodeURI(sbguoh)) : "");
	
	var steam = trim(document.getElementById("isteam").value);
	if(steam == "团队转让" || steam == "不限") {
		steam = "";
	}
	hrefurl += "-"+((steam != "") ? encodeURI(encodeURI(steam)) : "");
	
	var sid = trim(document.getElementById("sid").value);
	if(sid == "填写关键词或网店编号") {
		sid = "";
	}
	hrefurl += "-"+((sid != "") ? encodeURI(encodeURI(sid)) : "");
	
	//'更多'展开:
	var izhank = trim(document.getElementById("izhank").value);
	hrefurl += "-"+izhank;
	
	//多选:
	hrefurl += "-";

	//排序,信用等级:
	var xinyuOrder = trim(document.getElementById("xinyuOrder").value);
	hrefurl += "-"+xinyuOrder;
	
	var pxfs = trim(document.getElementById("pxfs").value);
	hrefurl += "-"+pxfs;
	
	var sjpx = trim(document.getElementById("sjpx").value);
	hrefurl += "-"+sjpx;
	
	//利润排序,预留:
	hrefurl += "-";
	
	//营业额排序,预留:
	hrefurl += "-";
	
	//分页码:
	if(pcflag != null && pcflag == "1") {
		hrefurl += "-1";
	}else {
		var pageNo = trim(document.getElementById("pageNo").value);
		hrefurl += "-"+pageNo;
	}	
	hrefurl += ".html";
	window.location.href = hrefurl;
}

//数据返回值:
function ziStr(zval,rdef) {
	if(zval != null && zval != "" && zval != "null") {
		return zval;
	}else {
		return rdef;
	}
}
function szStr(zval,zhz,rdef) {
	if(zval != null && zval > 0) {
		return zval+zhz;
	}else {
		return rdef;
	}
}

function queryConditionOhter() {
	
	$('.otherFlt .fltTabTo .selectBox a').click(function() {
		var i = $(this).closest('.fltTabTo').index('.otherFlt .fltTabTo');		
		$('#otherQueryItem dd').each(function(index) {
			if($(this).css('display') == 'block') {
				if(i == index) {
					$('#otherQueryItem dd').css('display','none');
					$('#otherQueryItem').eq(index).css('display','block');
					$('#izhank').val('');
					return false;
				}
			}
			if(index >= ($('#otherQueryItem dd').length - 1)) {
				$('#otherQueryItem').css('display','block');
				$('#otherQueryItem dd').css('display','none');
				$('#otherQueryItem dd').eq(i).css('display','block');
				$('#izhank').val('1');
			}
		})
	});
	
	//点击传值:
	$('#otherQueryItem dd li a').click(function() {
		$(this).closest('ul').find('a').removeClass('cur');
		$(this).addClass('cur');
		if($(this).closest('ul').next('.otherVal').val() == $(this).text()) {
			$(this).closest('ul').next('.otherVal').val("");
		}else {
			$(this).closest('ul').next('.otherVal').val($(this).text());
		}
		hrefgo('1');
	});
}

function setClkValShow(tval) {
	$('#otherQueryItem dd li a').each(function(index) {
		if($(this).text() == tval) {
			$(this).closest('ul').find('a').removeClass('cur');
			$(this).addClass('cur');
		}
	});
}

//70727:
function showOtherSearch() {
	
	var sarea = trim($('#isarea').val());
	var skouf = trim($('#iskouf').val());
	var nsrzz = trim($('#nsrzz').val());
	var sdaih = trim($('#isdaih').val());
	var shuoy = trim($('#ishuoy').val());
	var sbleib = trim($('#sbleib').val());
	var sbguoh = trim($('#sbguoh').val());
	var steam = trim($('#isteam').val());

	if(sarea != null && sarea != '') {
		$('#isareaDd').css('display','block');
		setClkValShow(sarea);
	}else if(skouf != null && skouf != '') {
		$('#iskoufDd').css('display','block');
		setClkValShow(skouf);
	}else if(nsrzz != null && nsrzz != '') {
		$('#nsrzzDd').css('display','block');
		kdsjValShow(nsrzz);
	}else if(sdaih != null && sdaih != '') {
		$('#isdaihDd').css('display','block');
		setClkValShow(sdaih);
	}else if(shuoy != null && shuoy != '') {
		$('#ishuoyDd').css('display','block');
		setClkValShow(shuoy);
	}else if(sbleib != null && sbleib != '') {
		$('#sbleibDd').css('display','block');
		setClkValShow(sbleib);
	}else if(sbguoh != null && sbguoh != '') {
		$('#sbguohDd').css('display','block');
		setClkValShow(sbguoh);
	}else if(steam != null && steam != '') {
		$('#isteamDd').css('display','block');
		setClkValShow(steam);
	}
}
