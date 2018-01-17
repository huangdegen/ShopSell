
/**
 * 前端窗口类
 */
function ForeWindow(foreWinId)
{
    var self = this;
    var m_isIE = (document.all ? true : false);
    var m_foreWin = $(foreWinId); //前端窗口对象
    var m_boardWin = null;        //遮罩窗口对象
    var m_screenWidth = 0;
    var m_screenHeight = 0;
    var m_left = 0;
    var m_top = 0;
    var m_isShow = false;
    var m_Overflow = '';
    
    /**
     * 遮罩窗口的颜色
     */
    this.backColor = '#333333';
    
    /**
     * 遮罩窗口的不透明度
     */
    this.opacity = 55;
    
    /**
     * 自适应浏览器窗口大小
     */
    function autoResize()
    {
        try
        {
			if(!m_isShow) return;
            m_screenWidth = document.documentElement.clientWidth;
            m_screenHeight = document.documentElement.clientHeight;
            m_foreWin.style.position='absolute';
            m_foreWin.style.display = 'block';
            if(m_left != null && m_top != null){
                m_foreWin.style.top = document.documentElement.scrollTop + m_top + 'px';
                m_foreWin.style.left = document.documentElement.scrollLeft + m_left + 'px';
            }else{
                m_foreWin.style.top = document.documentElement.scrollTop + ((m_screenHeight - m_foreWin.offsetHeight)/2) + 'px';
                m_foreWin.style.left = document.documentElement.scrollLeft + ((m_screenWidth - m_foreWin.offsetWidth)/2) + 'px';
            }
            m_foreWin.style.zIndex = '' + (m_boardWin.style.zIndex + 1);			
            m_boardWin.style.width = m_screenWidth + 'px';
            m_boardWin.style.height = m_screenHeight + 'px';			
            m_boardWin.style.top = document.documentElement.scrollTop + 'px';
            m_boardWin.style.left = document.documentElement.scrollLeft + 'px';
            m_boardWin.style.display = 'block';
        }
        catch(ex){}
    }
        
    /**
     * 显示窗口
     */
    this.show = function(left, top)
    {
        try
        {
            if(m_isShow) return;
            m_isShow = true;
            m_left = left;
            m_top = top;
            m_Overflow = document.body.parentNode.style.overflow;
            document.body.parentNode.style.overflow="hidden";
            createBoardWindow();
            autoResize();
            if(m_isIE) {
                window.attachEvent('onresize',autoResize);
            }else {
                window.addEventListener('resize',autoResize,false);
            }
        }
        catch(ex){}
    };
    
    /**
     * 隐藏窗口
     */
    this.hide = function()
    {
        try
        {
            m_isShow = false;
            m_foreWin.style.display = 'none';
            m_boardWin.style.display = 'none';
            document.body.parentNode.style.overflow = m_Overflow;
            if(m_isIE) {
                window.detachEvent('onresize',autoResize);
            }else {
                window.removeEventListener('resize',autoResize,true);
            }
            document.body.removeChild(m_boardWin);
            m_boardWin = null;
        }
        catch(ex){}
    };
    
    /**
     * 获取DOM对象实例句柄
     */
    function $(id){return document.getElementById(id);}
    
    /**
     * 创建遮罩窗口
     */
    function createBoardWindow()
    {
        try
        {
        	m_boardWin = document.createElement('IFRAME');
            m_boardWin.frameBorder=0;
            m_boardWin.allowTransparency=false;
            document.body.appendChild(m_boardWin);
            m_boardWin.style.cssText="position:absolute;left:0px;top:0px;display:none";
            m_boardWin.contentWindow.document.open();
            m_boardWin.contentWindow.document.write('<html><body style="background-color:'+self.backColor+'"></body></html>');
            m_boardWin.contentWindow.document.close();
            m_boardWin.style.filter='alpha(opacity='+self.opacity+')';
            m_boardWin.style.opacity=(self.opacity/100);
            m_boardWin.style.MozOpacity=(self.opacity/100);
			m_boardWin.style.zIndex = 999;
        }
        catch(ex){}
    }
}

//清空浏览过的商品(cookie)
function emBrowseIsShops()
{
 	var date = new Date();
 	date.setTime(date.getTime()-10000);
 	document.cookie="browseIsShops"+"=v; expires="+date.toGMTString();
 	document.getElementById('browseIsShopsList').innerHTML = "";		
}

//网店详情新增页面控制js方法
function infoTab_1(type) {
	
	if(type == "2") {
		document.getElementById("tab_to_2").className = "cur";
		document.getElementById("tab_to_1").className = "";
		document.getElementById("tab_to_3").className = "";
		document.getElementById("tab_to_4").className = "";
		
		document.getElementById("XqMs-box ChangJianWT").style.display = "block";
		document.getElementById("XqMs-box XinYu").style.display = "none";
		document.getElementById("XqMs-box MiaoShu").style.display = "none";
		document.getElementById("XqMs-box ChuShouLC").style.display = "none";
		document.getElementById("Safety clearfix").style.display = "none";
		document.getElementById("XqMs-box TongLeiDP").style.display = "none";
		
	}else if(type == "3") {
		document.getElementById("tab_to_3").className = "cur";
		document.getElementById("tab_to_1").className = "";
		document.getElementById("tab_to_2").className = "";
		document.getElementById("tab_to_4").className = "";
		
		document.getElementById("XqMs-box ChuShouLC").style.display = "block";
		document.getElementById("Safety clearfix").style.display = "block";
		document.getElementById("XqMs-box XinYu").style.display = "none";
		document.getElementById("XqMs-box MiaoShu").style.display = "none";		
		document.getElementById("XqMs-box ChangJianWT").style.display = "none";
		document.getElementById("XqMs-box TongLeiDP").style.display = "none";

	}else if(type == "4") {
		document.getElementById("tab_to_4").className = "cur";
		document.getElementById("tab_to_1").className = "";
		document.getElementById("tab_to_2").className = "";
		document.getElementById("tab_to_3").className = "";
		
		document.getElementById("XqMs-box TongLeiDP").style.display = "block";
		document.getElementById("XqMs-box ChuShouLC").style.display = "none";
		document.getElementById("Safety clearfix").style.display = "none";
		document.getElementById("XqMs-box XinYu").style.display = "none";
		document.getElementById("XqMs-box MiaoShu").style.display = "none";		
		document.getElementById("XqMs-box ChangJianWT").style.display = "none";

	}else {
		document.getElementById("tab_to_1").className = "cur";
		document.getElementById("tab_to_2").className = "";
		document.getElementById("tab_to_3").className = "";
		document.getElementById("tab_to_4").className = "";
		
		document.getElementById("XqMs-box XinYu").style.display = "block";
		document.getElementById("XqMs-box MiaoShu").style.display = "block";
		document.getElementById("XqMs-box ChangJianWT").style.display = "";
		document.getElementById("XqMs-box ChuShouLC").style.display = "";
		document.getElementById("Safety clearfix").style.display = "none";
		document.getElementById("XqMs-box TongLeiDP").style.display = "";
	}
}

function InfoTab(type) 
{
	if(type == 1)
	{
		document.getElementById("photoInfo").style.display = "block";
		document.getElementById("tab_to_1").className = "action";
		document.getElementById("zongheQu").style.display = "block";
		document.getElementById("tab_to_2").className = "";
		document.getElementById("goumaiLc").style.display = "block";
		document.getElementById("changjianWt").style.display = "block";
		document.getElementById("doubleSafe").style.display = "block";
		document.getElementById("tab_to_3").className = "";
		document.getElementById("changjianWt_tit").style.display = "block";
		document.getElementById("goumaiLc_tit").style.display = "block";
		document.getElementById("mobanjiashao").style.display = "block";
	}else if(type == 2) {
		document.getElementById("photoInfo").style.display = "none";
		document.getElementById("tab_to_1").className = "";
		document.getElementById("changjianWt").style.display = "block";
		document.getElementById("tab_to_2").className = "action";
		document.getElementById("goumaiLc").style.display = "none";
		document.getElementById("doubleSafe").style.display = "none";
		document.getElementById("tab_to_3").className = "";
		document.getElementById("mobanjiashao").style.display = "none";
		document.getElementById("changjianWt_tit").style.display = "none";
		document.getElementById("goumaiLc_tit").style.display = "none";
	}else if(type == 3) {
		document.getElementById("photoInfo").style.display = "none";
		document.getElementById("tab_to_1").className = "";
		document.getElementById("changjianWt").style.display = "none";
		document.getElementById("tab_to_2").className = "";
		document.getElementById("goumaiLc").style.display = "block";
		document.getElementById("doubleSafe").style.display = "block";
		document.getElementById("tab_to_3").className = "action";
		document.getElementById("mobanjiashao").style.display = "none";
		document.getElementById("changjianWt_tit").style.display = "none";
		document.getElementById("goumaiLc_tit").style.display = "none";
	}
}

function rentTimeOnLoad(type)
{
	$("#rentTimeSelect span").removeClass("rentTimeActived");
	
	$("#rentTimeR" + type).addClass("rentTimeActived");
	document.getElementById("rentTimeHi").value = type;
	priceSearch(type);
	
	$("#rentPriceSpan").html(onloadRentPrice.replace(",",""));
}

function DateDiff(sDate1, sDate2){ 
 	var aDate, oDate1, oDate2, iDays;
 	
 	aDate = sDate1.split("-");
 	oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); 
 	aDate = sDate2.split("-"); 
 	oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); 
 	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24); 
 	return iDays;
} 

function selNewDrawAcct()
{
	myForeWindow= new ForeWindow("payWin");
	isMyForeWindowShow = true;
	myForeWindow.show();
}

function hide()
{
	isMyForeWindowShow = false;
	myForeWindow.hide();
}
function strDateTime(str)
{ 
   var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
   if(r==null)return false; 
   var d= new Date(r[1], r[3]-1, r[4]); 
   return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]); 
}
function doDelete(path)
{
 	var msg = "您确定要 "+ path +"吗？\n\n请确认！";
 	var flag = true;
	if (confirm(msg) == flag)
	{	
		return true;	
	}else {
		return false;
	}
}

function addBookmark(title,url) { 
	if (window.sidebar) { 
		window.sidebar.addPanel(title,url,""); 
	} else if( document.all ) { 
		window.external.AddFavorite(url,title); 
	} else if( window.opera && window.print ) { 
		return true; 
	} 
}

function fenShow() {
	
	document.getElementById("ifenqishow").style.display="block";
}

function qiXuan(sg) {
	document.getElementById("ixnfnqi").value = sg;
	$("#ifenq"+sg).addClass("fenqishuXuanzhong").siblings().removeClass("fenqishuXuanzhong");
}

function orderSave() {
	
	//document.getElementById("iformsj").action = wushop+"/markorder.html";
	//document.getElementById("iformsj").submit();
	window.location.href = wushop+"/markorder.html?shopId="+shopId;
}

function fenqiSave() {
	
	var fenqi = document.getElementById("ixnfnqi").value;
	if(fenqi == null || fenqi == "") {
		alert("温馨提示：请选择分期数！");
		return ;
	}
	window.location.href = wushop+"/markorder.html?shopId="+shopId+"&fenqi="+fenqi;
}

//发送到手机:
function sendMsg() {
	window.open(wushop+"/tosendmsg.html?shopid="+shopId+"&sg=1",'',"");
}

//收藏:
function saveCollection() {
	
 	if(confirm("确定将此网店添加到收藏夹吗？") == true) {
 		window.open(wushop+"/toaddscj.html?shopId="+shopId,'',"");
	}
}

//举报:
function reportMessage(op) {
	window.open(wushop+"/displayError.html?param="+op+"&spid="+shopId,'',"");
}

//添加到看店单:
function AddToSesList()
{
	var dt = new Date().getTime();
	Iframe({
    	Url:"addtokdd.html?shopid="+shopId+"&dt="+dt,
    	Width:360,
		Height:150,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data){
        }
     });
}
//看店单列表:
function ShowSesList()
{
	Iframe({
    	Url:"showkddlist.html",
    	Width:822,
		Height:528,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data){
        }
     });
}

//评价:
function pingJsale(logu,saleId) {
	
	if(logu != null && logu != "") {
		
		Iframe({
	    	Url:"topjsale.html?saleId="+saleId+"&shopId="+shopId,
	    	Width:606,
			Height:356,
			scrolling:'no',
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });
		
	}else {
		window.location.href = "http://u.5pao.com/wucenter/loginback.html?fromurl=http://www.5pao.com/shopmm/shopsGet-"+shopId+".html";
	}
}

//daikuan:
function gouDai() {
	
	Iframe({
    	Url:"goudai.html?shopId="+shopId,
    	Width:806,
		Height:550,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}

//help:
function tmhpVideo() {
	Iframe({
    	Url:"tmallvideo.html",
    	Width:750,
		Height:540,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
function tbhpVideo() {
	Iframe({
    	Url:"taobovideo.html",
    	Width:750,
		Height:540,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}

function copyToClipBoard() {
    var clipBoardContent = shopSId+"";
    var s = window.clipboardData.setData("Text",clipBoardContent);
    if(s == true) {
		alert("复制成功！");
	}
}

function convert_Img(pimage,pindex,size)
{
	var sizeList = size.split('*');
	var imagesHTML = "";
	var t = 0;
	for(i = 1 ; i < Number(sizeList[1]) + 1;i++)
	{
		for(j = 1 ; j < Number(sizeList[0]) + 1;j++) {
			t++;
			imagesHTML = imagesHTML + "<div style=\"float:left;overflow:hidden;\"><img width=\"460\" src=\"" + picpath + pimage + "\" /></div>"
		}
	}
	$("#u"+pindex).html(imagesHTML);
	$(".tab_content").hide();
	$("#u"+pindex).show();
}

function IndexShow() {
	alert("温馨提示：请联系业务员开通查看店铺首页图的功能！");
}

//举报模块:
function jbhidexla() {
	if(document.getElementById("ijboutflag").value == "") {
		jubaohide();
	}
}
function jbhrefout()
{
	document.getElementById("ijboutflag").value = "";
	setTimeout("jbhidexla()",200);
}
function jubaoshow() {
	document.getElementById("ijboutflag").value = "1";
	document.getElementById("ijua").className="jubao cur";
	document.getElementById("ijubao").style.display="block";
}
function jubaohide() {
	document.getElementById("ijua").className="jubao";
	document.getElementById("ijubao").style.display="none";
	document.getElementById("ijboutflag").value = "";
}

//点击小图切换大图:
function mEpt(mimg,pid) {

	$("div.picList ul li").removeClass("cur");
	document.getElementById("ipicli"+pid).className="cur";
    document.getElementById("idatu").src = picpath+"/d_"+mimg;
    document.getElementById("idatuhref").href = picpath+"/tmp_"+mimg;
}
function mEpt0(mimg,pid) {

	$("div.picList ul li").removeClass("cur");
	document.getElementById("ipicli"+pid).className="cur";
    document.getElementById("idatu").src = "http://www.5pao.com/shopmm/images/0830/"+mimg+"-4.jpg";
    document.getElementById("idatuhref").href = "http://www.5pao.com/shopmm/images/0830/"+mimg+"-tmp.jpg";
}

function tzWangdian() {
    window.open("tmallIndexNew.html",'',"");
}

function startplay() {

	$str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="750" height="500"'+
                   ' id="blog_index_flash">'+
                    '<param name="movie" value="http://www.5pao.com/shopmm/flash/gmjiaocheng.swf" />'+
                    '<param name="wmode" value="transparent" />'+
                    '<param name="menu" value="false">'+
                    '<param name="quality" value="high" />'+
                    '<param name="allowScriptAccess" value="sameDomain" />'+
                    '<param name="allowFullScreen" value="true" />'+
                    '<object type="application/x-shockwave-flash" data="http://www.5pao.com/shopmm/flash/gmjiaocheng.swf" width="750"'+
                        'height="500" id="blog_index_flash_ff">'+
                        '<param name="quality" value="high" />'+
                        '<param name="wmode" value="transparent" />'+
                        '<param name="menu" value="false">'+
                        '<param name="allowScriptAccess" value="sameDomain" />'+
                        '<param name="allowFullScreen" value="true" />'+
                    '</object>'+
            '</object>';
			
	$('#gmbz_video').html($str);
}

function helpVideo() {
	
	videoShow();
	
	$str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="750" height="500"'+
                   ' id="blog_index_flash">'+
                    '<param name="movie" value="http://www.5pao.com/shopmm/flash/gmjiaocheng.swf" />'+
                    '<param name="wmode" value="transparent" />'+
                    '<param name="menu" value="false">'+
                    '<param name="quality" value="high" />'+
                    '<param name="allowScriptAccess" value="sameDomain" />'+
                    '<param name="allowFullScreen" value="true" />'+
                    '<object type="application/x-shockwave-flash" data="http://www.5pao.com/shopmm/flash/gmjiaocheng.swf" width="750"'+
                        'height="500" id="blog_index_flash_ff">'+
                        '<param name="quality" value="high" />'+
                        '<param name="wmode" value="transparent" />'+
                        '<param name="menu" value="false">'+
                        '<param name="allowScriptAccess" value="sameDomain" />'+
                        '<param name="allowFullScreen" value="true" />'+
                    '</object>'+
            '</object>';
			
	$('#gmbz_video').html($str);
}

function videoShow() {
    var htm="<div id='getPh' class='getPh'></div>";
    $("body").append(htm);
    $("#jianz").css("display","block");
    $("#getPh").css({"width":$(document).width(),"height":$(document).height()});
	$("#jianz").css({"left":($(document).width()-$("#jianz").width()-10)/2,"top":($(window).height()-$("#gmbz_video").height())/2});
    //绑定关闭事件:
    $("#closePHoto").click(function() {
        $("#getPh").remove();
        $("#jianz").css("display","none");
    });
}

/***************************08-30**********************************/

function liscroll() {

var $slider = $('.slider ul');
var $slider_child_l = $('.slider ul li').length;
var $slider_width = $('.slider ul li').width()+3;
$slider.width($slider_child_l * ($slider_width+10));

var slider_count = 0;
if ($slider_child_l < 4) {
	$('#btn-right').css({cursor: 'auto'});
	$('#btn-right').removeClass("dasabled");
}
$('#btn-right').click(function() {
	if ($slider_child_l < 4 || slider_count >= $slider_child_l - 4) {
		return false;
	}
	slider_count++;
	$slider.animate({left: '-=' + $slider_width + 'px'}, 'slow');
	slider_pic();
});
$('#btn-left').click(function() {
	if (slider_count <= 0) {
		return false;
	}
	slider_count--;
	$slider.animate({left: '+=' + $slider_width + 'px'}, 'slow');
	slider_pic();
});

}

/***************************14-12-12**********************************/

function askshow(shis,ywqq) {

	if(typeof(shis) == "undefined") {
		shis = "err";
	}

	if(shis != null && shis == "no") {
		//拒绝,不再弹出;
	}else {
	
		//$.cookie('spaskshow', 'ok', { expires: 0, path: '/' });
		
		//允许弹出,再次检测是否已弹出过(多页面打开):
		var sonemo = $.cookie('spaskonemo');
		if(sonemo != null && sonemo == "yh") {
			//不再弹出;
		}else {
			
			//记录同一浏览器中已弹出过:
			$.cookie('spaskonemo', 'yh', { expires: 0, path: '/' });
	
			//show:
			ywqq = ywqq.replace(/&/g,"@");
			Iframe({
		    	Url:"shop/zixun.jsp?ywqq="+ywqq,
		    	Width:600,
				Height:278,
				scrolling:'no',
				isIframeAutoHeight:false,
				isShowIframeTitle:false,
		    	call:function(data) {
		        }
		    });		
		}
	}
}

//2015-07-15:
function wanshow(ywqq) {

	ywqq = ywqq.replace(/&/g,"@");
	Iframe({
    	Url:"shop/yiwan.jsp?ywqq="+ywqq,
    	Width:555,
		Height:145,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });	
}

/*$(function() {
    var _top = $('#ljzx').offset().top;
    var oldST = 0;
    $(window).scroll(function() {
        if($(window).scrollTop() <= _top && oldST > _top){
            $('#ljzx img').attr('src',$('#ljzx img').attr('src'));
        };
        oldST = $(window).scrollTop();
    });
});*/

$(function() {
    $('#service30 .each').mouseover(function() {
        $('#J_current').stop().animate({'top':$(this).attr('flag')*33}, 100);
        $('#serviceItem30 .detail-con').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
    });
});
function infoTabNewOld(n) {
    $('.tab-XiangQing a').removeClass('cur').eq(n-1).addClass('cur');
    switch(n){
        case 1: $('.tabOne').css('display','block');
                $('.tabTwo').css('display','block');
                $('.tabThree').css('display','block');
                $('.tabFourth').css('display','none');
            break;
        case 2: $('.tabOne').css('display','none');
                $('.tabTwo').css('display','block');
                $('.tabThree').css('display','none');
                $('.tabFourth').css('display','none');
            break;
        case 3: $('.tabOne').css('display','none');
                $('.tabTwo').css('display','block');
                $('.tabThree').css('display','none');
                $('.tabFourth').css('display','none');
            break;
        case 4: $('.tabOne').css('display','none');
                $('.tabTwo').css('display','none');
                $('.tabThree').css('display','block');
                $('.tabFourth').css('display','none');
            break;
        case 5: $('.tabOne').css('display','none');
                $('.tabTwo').css('display','none');
                $('.tabThree').css('display','none');
                $('.tabFourth').css('display','block');
            break;
    }
}

/*DWREngine.setAsync = function(async) {
    DWREngine._async = async;
};*/

var pageNo = 0;
function ShowSameShops() {
	
	//dwr.engine.setAsync(false);
	pageNo ++;
	spIndexDwr.querySameShops(shopStr,'2',pageNo,
	{
	      callback:function(datalist) {

			var str = "";
			if(datalist != null && datalist.length > 0) {
				
				var zystr = "";
				var sbstr = "";
				var scstr = "";
				var tagStr = "";
				var shoptag = "";
				var tjstr = "";
				var imgstr = "";
				var rztype = "";
				for(var i=0;i<datalist.length;i++) {

					zystr = "store f-l";
					if(i == 1) {
						zystr = "store f-r";
					}
					
					shoptag = (datalist[i].shoptag != null) ? datalist[i].shoptag : "";
					tagStr = "";
					if(shoptag.indexOf('sbq1') > -1) {
						tagStr += "<span class=\"mark\">带货出售</span>";
					}
					if(shoptag.indexOf('sbq2') > -1) {
						tagStr += "<span class=\"mark\">可提供货源</span>";
					}
					if(shoptag.indexOf('sbq3') > -1) {
						tagStr += "<span class=\"mark\">公司认证</span>";
					}
					if(shoptag.indexOf('sbq4') > -1) {
						tagStr += "<span class=\"mark\">可当面交易</span>";
					}
					if(shoptag.indexOf('sbq5') > -1) {
						tagStr += "<span class=\"mark\">动态全红</span>";
					}
					if(shoptag.indexOf('sbq6') > -1) {
						tagStr += "<span class=\"mark\">优质店铺</span>";
					}
					if(shoptag.indexOf('sbq8') > -1) {
						tagStr += "<span class=\"mark\">无任何扣分</span>";
					}
					if(shoptag.indexOf('sbq9') > -1) {
						tagStr += "<span class=\"mark\">盈利店铺</span>";
					}
	            	
					tjstr = "tuijian";
	            	if(datalist[i].saletype == "1") {
	            		
	            		imgstr = "";
	            		if(datalist[i].sellLevImage != null && datalist[i].sellLevImage != '') {
							imgstr = "<img class=\"v-2\" src=\"images/"+datalist[i].sellLevImage+"\"/>";
						}
	            		
	            		if(datalist[i].dujia == "1") {
	            			tjstr = "dujia";
						}
	            		str += "<div class=\""+zystr+"\"><i class=\""+tjstr+"\"></i>";
	            		str += "<div class=\"storebox\"><div class=\"title\">"+datalist[i].spTitle+"</div>";
	            		str += "<div class=\"property clearfix\">";
	            		str += "	<div class=\"f-l\"><p>所属行业："+datalist[i].typeName+"</p><p>卖家信用："+imgstr+"</p></div>";
	            		str += "	<div class=\"f-r\"><div class=\"price\">"+datalist[i].csprice+"</div><a href=\"shopsGet-"+datalist[i].id+".html\" class=\"toDetails\">查看详情&gt;</a></div>";
	            		str += "</div>";
	            		str += "<div class=\"mark_list\">";
	            		str += tagStr;
	            		str += "</div>";
	            		str += "</div>";
	            		str += "</div>";
	            		
	            	}else if(datalist[i].saletype == "2") {
	            		
	            		if(datalist[i].malltp == "1") {
							scstr = "旗舰店";
						}else if(datalist[i].malltp == "2") {
							scstr = "专营店";
						}else if(datalist[i].malltp == "3") {
							scstr = "专卖店";
						}else {
							scstr = "-";
						}						
						if(datalist[i].brandtp == "1") {
							sbstr = "R标";
						}else if(datalist[i].brandtp == "2") {
							sbstr = "TM标";
						}else {
							sbstr = "-";
						}
	            		
	            		if(datalist[i].dujia == "1") {
	            			tjstr = "dujia";
						}
	            		str += "<div class=\""+zystr+"\"><i class=\""+tjstr+"\"></i>";
	            		str += "<div class=\"storebox\"><div class=\"title\">"+datalist[i].spTitle+"</div>";
	            		str += "<div class=\"property clearfix\">";
	            		str += "	<div class=\"f-l\"><p>所属行业："+datalist[i].typeName+"</p><p>商标类型："+sbstr+"</p><p>商城类型："+scstr+"</p></div>";
	            		str += "	<div class=\"f-r\"><div class=\"price\">"+datalist[i].csprice+"</div><a href=\"shopsGet-"+datalist[i].id+".html\" class=\"toDetails\">查看详情&gt;</a></div>";
	            		str += "</div>";
	            		str += "<div class=\"mark_list\">";
	            		str += tagStr;
	            		str += "</div>";
	            		str += "</div>";
	            		str += "</div>";
	            		
	            	}else if(datalist[i].saletype == "9") {
	            		
	            		if(datalist[i].rztype == "1") {
	            			rztype = "个人身份证认证";
						}else if(datalist[i].rztype == "2") {
							rztype = "企业执照认证";
						}else if(datalist[i].rztype == "3") {
							rztype = "个体户营业执照认证";
						}else {
							rztype = "-";
						}
	            		
	            		if(datalist[i].dujia == "1") {
	            			tjstr = "dujia";
						}
	            		str += "<div class=\""+zystr+"\"><i class=\""+tjstr+"\"></i>";
	            		str += "<div class=\"storebox\"><div class=\"title\">"+datalist[i].spTitle+"</div>";
	            		str += "<div class=\"property clearfix\">";
	            		str += "	<div class=\"f-l\"><p>所属行业："+datalist[i].typeName+"</p><p>认证类型："+rztype+"</p></div>";
	            		str += "	<div class=\"f-r\"><div class=\"price\">"+datalist[i].csprice+"</div><a href=\"shopsGet-"+datalist[i].id+".html\" class=\"toDetails\">查看详情&gt;</a></div>";
	            		str += "</div>";
	            		str += "<div class=\"mark_list\">";
	            		str += tagStr;
	            		str += "</div>";
	            		str += "</div>";
	            		str += "</div>";	            		
	            	}
				}
				
				document.getElementById("ishopshow").innerHTML = str;

			 }else {
				//str ="<div class=\"item\"><div>暂无相应同类店铺信息!</div></div>";//70727;
				document.getElementById("isameshopdiv").style.display = "none";
				document.getElementById("ishopshow").style.display = "none";
			 }
		  }
	});
}
