
//My5pao:
function xialashow() {
	document.getElementById("ioutflag").value = "1";
	document.getElementById("imy5pao").style.display="";
	document.getElementById("iwupao").className="more";
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


/*****
 * 5pao new 201707
****************/
function homeHeaderFixed(){
	var winScrollTop = $(window).scrollTop();
	if(winScrollTop > 0){
		$('#header').removeClass('home-header');
	} else{
		$('#header').addClass('home-header');
	}
}

function searchSwitch(){
	var s = $('.search .item');
	s.click(function(){
		s.find('.radio').removeClass('checked');
		$(this).find('.radio').addClass('checked');
	})
}

function serviceSwitch(){
	$("#c_service").toggle();
}

function showLogin(){
	layer.open({
		type: 2,
        title: false,
		closeBtn: false,
        shadeClose: true,
        shade: 0.6,
        area: ['520px', '384px'],
        content: '../login/login.html'
	})
}

function showFeedback(){
	layer.open({
		type: 1,
        title: false,
		closeBtn: false,
        shadeClose: true,
        shade: 0.6,
        area: ['520px'],
        content: $('#feedback')
	});
	$('#feedback .tab a').click(function(){
		$(this).addClass('cur').siblings('a').removeClass('cur');
		$('#feedback .tab_con').eq($(this).index()).css('display','block').siblings('.tab_con').css('display','none')
	})
}

function iePlaceholder(obj) {
	$(obj).each(function(){
	  $(this).val($(this).attr('placeholder'));
	}).focus(function(){
	  if($(this).val() == $(this).attr('placeholder')){
		$(this).val('');
	  }
	}).blur(function(){
	  if($(this).val() == ''){
		$(this).val($(this).attr('placeholder'));
	  }
	})
}
