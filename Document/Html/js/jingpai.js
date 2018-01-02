
function BzjgoToPay(pmNo) {
	
	Iframe({
    	Url:"topaypmbzj.action?pmNo="+pmNo,
    	Width:515,
		Height:356,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
function NowToLogin(pmNo) {
	parent.Close();
	parent.location.href = "http://u.5pao.com/spcenter/tiaozhuan.html?fromurl=auctionGet-"+pmNo;
}

function PmgoToPay(pmno) {
	
	Iframe({
    	Url:"tojoinpm.action?pmNo="+pmno,
    	Width:515,
		Height:356,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
function JpaiOk(pmNo) {
	parent.Close();
	PmEndTimeShow(pmNo);
	PaimReShow(pmNo);
}

function SpxqToLogin(pmNo) {
	Iframe({
    	Url:"spxqtologin.html?pmNo="+pmNo,
    	Width:580,
		Height:356,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
function SplbToLogin(pmNo) {
	Iframe({
    	Url:"splbtologin.html?pmNo="+pmNo,
    	Width:580,
		Height:356,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}
function SpxqToGet() {
	Iframe({
    	Url:"toseespgj.html",
    	Width:580,
		Height:356,
		scrolling:'no',
		isIframeAutoHeight:false,
		isShowIframeTitle:false,
    	call:function(data) {
        }
    });
}

function pmPingJsale(logu,saleId,pmNo) {
	if(logu != null && logu != "") {
		Iframe({
	    	Url:"topjsale.html?saleId="+saleId,
	    	Width:606,
			Height:356,
			scrolling:'no',
			isIframeAutoHeight:false,
			isShowIframeTitle:false,
	    	call:function(data) {
	        }
	    });		
	}else {
		window.location.href = "http://u.5pao.com/spcenter/tiaozhuan.html?fromurl=auctionGet-"+pmNo;
	}
}
