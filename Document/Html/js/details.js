
function infoTabNew(n,type, scroll) {
	
    $('#tab_details a').removeClass('cur').eq(n-1).addClass('cur');
    $('#tab_details_fixed a').removeClass('cur').eq(n-1).addClass('cur');
    if(scroll){
    	$(window).scrollTop(scroll);
    } else{
    	$(window).scrollTop(600);
    }
    switch(n){
        case 1: 
        		if(type){
        			$('#tabOne').css('display','block');
	                $('#tabTwo').css('display','none');
	                $('#tabThree').css('display','none');
	                $('#tabFour').css('display','none');
	                $('#tabFive').css('display','none');
	                $('#tabSix').css('display','none');
	            } else{
	           		$('#tabOne').css('display','block');
	                $('#tabTwo').css('display','block');
	                $('#tabThree').css('display','block');
	                $('#tabFour').css('display','block');
	                $('#tabFive').css('display','block');
	                $('#tabSix').css('display','block');
	            }
            break;
        case 2: $('#tabOne').css('display','none');
                $('#tabTwo').css('display','block');
                $('#tabThree').css('display','none');
                $('#tabFour').css('display','none');
                $('#tabFive').css('display','none');
                $('#tabSix').css('display','none');
            break;
        case 3: $('#tabOne').css('display','none');
                $('#tabTwo').css('display','none');
                $('#tabThree').css('display','block');
                $('#tabFour').css('display','none');
                $('#tabFive').css('display','none');
                $('#tabSix').css('display','none');
            break;
        case 4: $('#tabOne').css('display','none');
                $('#tabTwo').css('display','none');
                $('#tabThree').css('display','none');
                $('#tabFour').css('display','block');
                $('#tabFive').css('display','none');
                $('#tabSix').css('display','none');
            break;
        case 5: $('#tabOne').css('display','none');
                $('#tabTwo').css('display','none');
                $('#tabThree').css('display','none');
                $('#tabFour').css('display','none');
                $('#tabFive').css('display','block');
                $('#tabSix').css('display','none');
            break;
        case 6: $('#tabOne').css('display','none');
                $('#tabTwo').css('display','none');
                $('#tabThree').css('display','none');
                $('#tabFour').css('display','none');
                $('#tabFive').css('display','none');
                $('#tabSix').css('display','block');
            break;
    }
}

function tabFixed(n){
	var winScrollTop = $(window).scrollTop();
	if(winScrollTop > n){
		$('.fixed-tab-XiangQing').css('display','block');
	} else{
		$('.fixed-tab-XiangQing').css('display','none');
	}
}

/*function showProcessVideo() {
	layer.open({
		type: 2,
        title: '舞泡天猫商城店铺交易流程视频',
        shadeClose: true,
        shade: 0.6,
        area: ['750px', '543px'],
        content: 'tmallvideo.html'
	})
}

function showPaimaiVideo(){
	layer.open({
		type: 2,
        title: '舞泡天猫店铺拍卖流程视频',
        shadeClose: true,
        shade: 0.6,
        area: ['750px', '543px'],
        content: 'auctionvideo.html'
	})
}

function pingJsaleNew(logu,saleId) {
	
	if(logu != null && logu != "") {
		
		layer.open({
			type: 2,
	        title: '评价顾问',
	        shadeClose: true,
	        shade: 0.6,
	        area: ['617px', '356px'],
	        content: "topjsale.html?saleId="+saleId+"&shopId="+shopId
		})
		
	}else {
		window.location.href = "http://u.5pao.com/wucenter/loginback.html?fromurl=http://www.5pao.com/shopmm/shopsGet-"+shopId+".html";
	}
}

function pmPingJsale(logu,saleId,pmNo){
	if(logu != null && logu != "") {
		layer.open({
			type: 2,
	        title: '评价顾问',
	        shadeClose: true,
	        shade: 0.6,
	        area: ['617px', '356px'],
	        content: "topjsale.html?saleId="+saleId
		})
	}else {
		window.location.href = "http://u.5pao.com/spcenter/tiaozhuan.html?fromurl=auctionGet-"+pmNo;
	}
}
*/

// 标签切换
; (function($) {
    $.fn.extend({
        'tabSwtich': function(m, c) {
            var _self = this;
            var i = 0;
            var i_max = $(c, _self).length - 1;
            
            $(' .imgBox > .arrow_left', _self).click(function() {
                i--;
                i = i <= 0 ? 0 : i;
                run();
            });
            
            $(' .imgBox > .arrow_right', _self).click(function() {
                i++;
                i = i >= i_max ? i_max : i;
                run();
            });

            $(m + ' > li', this).click(function() {
                i = $(this).index();
                run();
            });

            function run(){
                $(m + ' > li', _self).eq(i).addClass('cur').siblings('li').removeClass('cur');
                $(c, _self).eq(i).css('display', 'block').siblings(c).css('display', 'none');
            }
        }
    })
})(jQuery)