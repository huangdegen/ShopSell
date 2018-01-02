(function($){
		    $.fn.extend({
		        'slide':function(m,c,n,auto,event){
		            var aSlideCon = $(c, this);
		            var aSlidePage = $(m, this);
		            var iSize = aSlideCon.size();
		            var iNow = n;
		            var timer = null;
		            function slideRun(){
		                if(aSlidePage.length) aSlidePage.eq(iNow).addClass('current').siblings().removeClass('current');
		                aSlideCon.eq(iNow).css('display','block').siblings(c).css('display','none');
		            };
		            function autoRun(){
		                if(auto){
		                    timer = setInterval(function(){
		                        iNow++;
		                        if(iNow>iSize-1) iNow=0;
		                        slideRun();
		                    },3000)
		                }
		            }
		            slideRun();
		            autoRun();
		            switch(event){
		                case 'click': eventClick(); break;
		                case 'hover': eventHover(); break;
		            }
		            function eventClick(){
		                aSlidePage.each(function(index){
		                    $(this).click(function(){
		                        clearInterval(timer);
		                        iNow = index;
		                        slideRun();
		                    });
		                });
		            };
		            function eventHover(){
		                aSlideCon.hover(function(){
		                    clearInterval(timer);
		                },function(){
		                    slideRun();
		                    autoRun();
		                });
		                if(aSlidePage.length){
		                    aSlidePage.each(function(index){
		                        $(this).hover(function(){
		                            clearInterval(timer);
		                            iNow = index;
		                            slideRun();
		                        }, function(){
		                            slideRun();
		                            autoRun();
		                        });
		                    });
		                }
		            };
		            
		        }
		    })
		})(jQuery)
		
		$('#brief_tab').slide('.tabBar span','.tabCon',0,false,'click');
		$('#shopkeeperPhoto').slide('.tab_menu li','.tab_box',0,true,'hover');
		
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			var timer = null;
			var wow = new WOW({
			    callback: function(box){
			    	if($(box).hasClass('resetAnimate')){
			    		timer = setInterval(function(){
			    			$(box).css('display','none');
			    			setTimeout(function(){
			    				$(box).css('display','block');
			    			},1000)
			    		}, 13200)
			    	}
			    }
			});
			wow.init();
		};