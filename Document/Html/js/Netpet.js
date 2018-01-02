   /*
    * 功能:继承功能,能复制所有参数以及参数内部的参数,类似jquery中的extend功能
    * @param {Object} target 目标对象。
    * @param {Object} source 源对象。
    * @param {boolean} deep 是否复制(继承)对象中的对象。
    * @returns {Object} 返回继承了source对象属性的新对象。
    * 例子:
    *    使用示例：
         var source = {id:1, name:'Jack Source'}, target = {name:'Jack Target', gender:1,tel:{homeTel:"158255",officeTel:"02112585"}};
         var newObj1 = Object.extend(target, source);
    */
//ss

Object.extend = function(destination, source) { // 一个静态方法表示继承, 目标对象将拥有源对象的所有属性和方法
	for (var property in source) {
    destination[property] = source[property];   // 利用动态语言的特性, 通过赋值动态添加属性与方法
}
  return destination;   // 返回扩展后的对象
}
 
Object.extend(Object, { 
inspect: function(object) {   // 一个静态方法, 传入一个对象, 返回对象的字符串表示
    try {
      if (object == undefined) return 'undefined'; // 处理undefined情况
      if (object == null) return 'null';     // 处理null情况
      // 如果对象定义了inspect方法, 则调用该方法返回, 否则返回对象的toString()值
      return object.inspect ? object.inspect() : object.toString(); 
    } catch (e) {
      if (e instanceof RangeError) return '...'; // 处理异常情况
      throw e;
    }
},
keys: function(object) {     // 一个静态方法, 传入一个对象, 返回该对象中所有的属性, 构成数组返回
    var keys = [];
    for (var property in object)
      keys.push(property);     // 将每个属性压入到一个数组中
    return keys;
},
values: function(object) {   // 一个静态方法, 传入一个对象, 返回该对象中所有属性所对应的值, 构成数组返回
    var values = [];
    for (var property in object) values.push(object[property]); // 将每个属性的值压入到一个数组中
    return values;
},
clone: function(object) {    // 一个静态方法, 传入一个对象, 克隆一个新对象并返回
    return Object.extend({}, object);
}
});

//获取绝对x坐标
function getX(obj){  
            return obj.offsetLeft + (obj.offsetParent ? getX(obj.offsetParent) : obj.x ? obj.x : 0);  
        }   
//获取绝对Y坐标
 function getY(obj){  
            return (obj.offsetParent ? obj.offsetTop + getY(obj.offsetParent) : obj.y ? obj.y : 0);  
 } 
//获取高度和宽度
 var Style = {
 		  //获取元素最终的样式
 		  getFinalStyle: function(elem, css){
 		    if (window.getComputedStyle) {
 		      return window.getComputedStyle(elem, null)[css];
 		    } else if (elem.currentStyle) {
 		      return elem.currentStyle[css];
 		    } else {
 		      return elem.style[css];
 		    }
 		  },
 		  height: function(elem){
 		    if (this.getFinalStyle(elem, "display") !== "none") {
 		      return elem.offsetHeight || elem.clientHeight;
 		    } else {
 		      //获取隐藏掉的函数的高度，先让它显示，获取到高度之后再隐藏，下同
 		      elem.style.display = "block";
 		      var h = elem.offsetHeight || elem.clientHeight;
 		      elem.style.display = "none";
 		      return h;
 		    }
 		  },
 		  width: function(elem){
 		    if (this.getFinalStyle(elem, "display") !== "none") {
 		      return elem.offsetWidth || elem.clientWidth;
 		    } else {
 		      elem.style.display = "block";
 		      var w = elem.offsetWidth || elem.clientWidth;
 		      elem.style.display = "none";
 		      return w;
 		    }
 		  }
 		};
 /**
  *功能：创建一个随机ID
  *参数：无
  */
 function numberID(){
   return Math.round(Math.random()*10000)*Math.round(Math.random()*10000);
 }
//弹出框插件
function T$(i){return document.getElementById(i)}
//针对自动关闭的计数，如果已经关闭过了就不自动关闭了
var sysCloseCount=0;
NetBox=function(){
	var p,m,b,fn,ic,iw,ih,oe,ir,f=0;//p:最外层对象 m:蒙板层对象 b:内容容器   oe:old element 原来的元素
	var oeT,oeL,oeW,oeH,currT,currL;//原尺寸的位置和大小,当前顶部 当前左边距离
	var showing=false;//是否整处于显示中
	var firstResied=false;//是否已经第一次缩放过了,发现会会发缩放两次
	var cc='';//当前内容
	return{ 
		//显示 c:内容  w 宽度   h:高度   t >0说明这些秒后返回
		show:function(c,w,h,tb,r){
		
		//参数c:内容    宽度高度 w:宽度  h:高度   t:是否在指定的秒之后关闭   rresize的缩放id,如果存在的话就用这个进行缩放
		ir=r;
			if(!f){//如果不存在包含容器就先创建一个容器
				p=document.createElement('div'); p.id='tinybox';
				m=document.createElement('div'); m.id='tinymask';
				b=document.createElement('div'); b.id='tinycontent';
				document.body.appendChild(m); document.body.appendChild(p); p.appendChild(b);
			//	m.onclick=NetBox.hide;
				// window.onresize=NetBox.resize; 
				f=1
			}
			cc=c;
			 var t=(NetPage.height()/2)-(h/2); t=t<10?10:t;
				var endtop=0;
				 if(h<100)
					endtop=(t+NetPage.top()-60);
				 else
					 endtop=(t+NetPage.top());
				var endLeft=(NetPage.width()/2)-(w/2);
				
			if(!showing){
			    ic=c;  iw=w; ih=h;
			    if(r){
			    currT=oeT=getY(r);
			    currL=oeL=getX(r);
			    oeW=Style.width(r)+12;
			     oeH=Style.height(r)+12;
			    
			    }
			    //如果需要缩放显示
				p.style.backgroundImage='none';p.innerHTML='';
				if(r){
				  p.style.width=(oeW-12)+'px'; 
				  p.style.height=(oeH-12)+'px';
				  p.style.top=(oeT-6)+'px';
				  p.style.left=(oeL-6)+'px';
				}else{
					  p.style.width=w+'px'; 
					  if(h>99){
						  p.style.height=h+'px';
						  p.style.top=(endtop-6)+'px';
						  p.style.left=(endLeft-6)+'px';
					   //   p.style.height="auto";//h+'px';
					 // else
					  }
					  else{
						  p.style.height='auto';
						  p.style.top=(endtop+37)+'px';
						  p.style.left=(endLeft)+'px';
					  }
	
				}
				
			   this.mask();  
			  
			   if(r){
			    //this.alpha(m,1,50,3);
			    //	FadeTo("tinymask",50,10);
				   p.style.display='block';
				   
				   $("#tinybox").animate({left:endLeft,top:endtop,width:w,height:h},150,'',function(){
					   p.innerHTML=cc;
					   p.style.height="auto";
					 //  p.style.height=($(p).find("div:first-child").outerHeight())+'px';
				   });
			    }else
			    {
			    	//this.mask(); 
			    	p.innerHTML=cc;
			    	// var newW=$(p).width();
					// var newH=$(p).height();
			    //	this.resize(newW,newH);
			    	$(p).show();//fadeIn(100);	
			    }
			}
			else 
			{
				//清空内容 
				p.style.backgroundImage='none'; // p.innerHTML=cc;
				p.style.display='block';
				if(h<100)
					 endtop=endtop-50;
				//不然在auto的情况下会突然变短
				 p.style.height=$(p).height()+"px";
				 p.innerHTML=cc;
				 var newW=w;
				 var newH=0;
				 if(h==99){
				 if($(p).find("iframe:first").length>0)
					 newH=$(p).find("iframe:first").height();
				 else
					 newH=$(p).find("div:first").height(); 
				     this.resize(newW,newH,null,99); 
				 }
				 else{
					 newH=h; 
				    this.resize(newW,newH);
				 }
				// $("#tinybox").animate({left:endLeft,top:endtop,width:w,height:h},200,'',function(){
					// p.innerHTML=cc; 
					 //if(h==99)//自动高度
					 //  p.style.height=($(p).find("div:first-child").outerHeight())+'px';
				 //  });
//				emile('tinybox', 'left:'+endLeft+'px;top:'+endtop+'px;width:'+w+'px;height:'+h+'px;', {
//		               duration: 200,
//		          after: function(){
//			             p.innerHTML=cc;
//		            }
//		        });
			}
			showing=true;
			if(tb){
				sysCloseCount=0;//还原到可以关闭的状态
				setTimeout(function(){
				if(sysCloseCount==0)//如果没有关闭过就关闭
				{
				   NetBox.hide()
				}
				},1000*tb)}
},
		//隐藏
		hide:function(callback){
//	    if(!showing || sysCloseCount==0)
//		  return;
	        sysCloseCount=-1;
			//NetBox.alpha(p,-1,0,5); 
			showing=false;
//			 FadeTo("tinymask",0,5,function(){
//				 m.style.display="none";
//			 });
			 $(m).fadeOut(150);
			 if(ir){
				      p.style.height=$(p).height()+"px";
				      p.innerHTML='';
				   $("#tinybox").animate({left:(oeL-6),top:(oeT)-6,width:(oeW-12),height:(oeH-12)},200,'',function(){
					  p.style.display="none";
				   });
			 }
			 else
			 {
				 $(p).fadeOut(150);
				// NetBox.alpha(p,-1,0,5);
				// p.style.display="none";
				// m.style.display='none';
			 }
		},
		//重设大小 w:宽度 h:高度  callback:选填回调函数 ,h2:原始高度
		resize:function(w,h,callback,h2){ 
		
			 var t=(NetPage.height()/2)-(h/2); t=t<10?10:t;
				var endtop=(t+NetPage.top());
				var endLeft=(NetPage.width()/2)-(w/2);
				if(iw==w)
					w=0;
				if(ih==h)
					h=0;
				if(w>0&&h>0){
				  $("#tinybox").animate({left:endLeft,top:endtop,width:w,height:h},150,'',function(){
					if(h2==99)  p.style.height='auto';
					$("#fancybox-frame").css("height","100%");
					  if(callback!=null)
			                 callback; 
			                
				   });
				}else if(w>0){
					$("#tinybox").animate({left:endLeft,width:w},150,'',function(){
						if(h2==99)  p.style.height='auto';
						$("#fancybox-frame").css("height","100%");
						 if(callback!=null)
				                 callback; 
				           
					   });
				}else if(h>0){
					$("#tinybox").animate({top:endtop,height:h},150,'',function(){
						if(h2==99)  p.style.height='auto';
						$("#fancybox-frame").css("height","100%");
						  if(callback!=null)
				                 callback;
				                
					   });
				}else
				{
					if(h2==99)  p.style.height='auto';
				//	$("#fancybox-frame").css("height","100%");
					if(callback!=null)
		                 callback;
				}	
		},
		//遮罩
		mask:function(){
			//if(ir){
				m.style.opacity=0.5; m.style.filter='alpha(opacity=50)';
			//}else
			//{	m.style.opacity=0.5; m.style.filter='alpha(opacity=50)';}
			m.style.display="block";
			m.style.height=NetPage.theight()+'px';
			m.style.width=NetPage.twidth()+'px';
			 
			// $(m).fadeTo(150,0.5);
		},
		//位置
		pos:function(){
			//$("body").append("d ");测试是否没有结束
		},
		//大小  
		size:function(e,w,h,s){ 
			e=typeof e=='object'?e:T$(e); clearInterval(e.si);
			var ow=e.offsetWidth, oh=e.offsetHeight,
			wo=ow-parseInt(e.style.width), ho=oh-parseInt(e.style.height);
			var wd=ow-wo>w?-1:1, hd=(oh-ho>h)?-1:1; 
			e.si=setInterval(function(){NetBox.twsize(e,w,wo,wd,h,ho,hd,s)},10)
		},
		twsize:function(e,w,wo,wd,h,ho,hd,s){ 
			var ow=e.offsetWidth-wo, oh=e.offsetHeight-ho;
			if(ow==w&&oh==h){
				clearInterval(e.si); p.style.backgroundImage='none'; b.style.display='block';
				p.innerHTML=cc;
			}else{
				if(ow!=w){e.style.width=ow+(Math.ceil(Math.abs(w-ow)/s)*wd)+'px'}
				if(oh!=h){e.style.height=oh+(Math.ceil(Math.abs(h-oh)/s)*hd)+'px'}
				this.pos();
				if(lastWidth==ow&&lastHeight==oh){
					
					 clearInterval(e.si);
					 }
				lastWidth=ow;
				lastHeight=oh;
				//$("body").append(" 9"+ow+"+"+w);测试是否没有结束
			}
		}
	}
	var lastWidth=0;
	var lastHeight=0;
}();
//页面  
NetPage=function(){
	return{
		top:function(){return document.body.scrollTop||document.documentElement.scrollTop},
		width:function(){return self.innerWidth||document.documentElement.clientWidth},
		height:function(){return self.innerHeight||document.documentElement.clientHeight},
		theight:function(){
			var d=document, b=d.body, e=d.documentElement;
			return Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight))
		},
		twidth:function(){
			var d=document, b=d.body, e=d.documentElement;
			return Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))
		}
	}
}();


/*	
功能：flash插入组件，会自动检测客户端是否允许插入
SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
$.fn.extend({
	jscroll:function(j){
		return this.each(function(){
			j = j || {}
			j.Bar = j.Bar||{};//2级对象
			j.Btn = j.Btn||{};//2级对象
			j.Bar.Bg = j.Bar.Bg||{};//3级对象
			j.Bar.Bd = j.Bar.Bd||{};//3级对象
			j.Btn.uBg = j.Btn.uBg||{};//3级对象
			j.Btn.dBg = j.Btn.dBg||{};//3级对象
			var jun = { W:"15px"
						,BgUrl:""
						,Bg:"#efefef"
						,Bar:{  Pos:"up"
								,Bd:{Out:"#b5b5b5",Hover:"#ccc"}
								,Bg:{Out:"#fff",Hover:"#fff",Focus:"orange"}}
						,Btn:{  btn:true
								,uBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"}
								,dBg:{Out:"#ccc",Hover:"#fff",Focus:"orange"}}
						,Fn:function(){}}
			j.W = j.W||jun.W;
			j.BgUrl = j.BgUrl||jun.BgUrl;
			j.Bg = j.Bg||jun.Bg;
				j.Bar.Pos = j.Bar.Pos||jun.Bar.Pos;
					j.Bar.Bd.Out = j.Bar.Bd.Out||jun.Bar.Bd.Out;
					j.Bar.Bd.Hover = j.Bar.Bd.Hover||jun.Bar.Bd.Hover;
					j.Bar.Bg.Out = j.Bar.Bg.Out||jun.Bar.Bg.Out;
					j.Bar.Bg.Hover = j.Bar.Bg.Hover||jun.Bar.Bg.Hover;
					j.Bar.Bg.Focus = j.Bar.Bg.Focus||jun.Bar.Bg.Focus;
				j.Btn.btn = j.Btn.btn!=undefined?j.Btn.btn:jun.Btn.btn;
					j.Btn.uBg.Out = j.Btn.uBg.Out||jun.Btn.uBg.Out;
					j.Btn.uBg.Hover = j.Btn.uBg.Hover||jun.Btn.uBg.Hover;
					j.Btn.uBg.Focus = j.Btn.uBg.Focus||jun.Btn.uBg.Focus;
					j.Btn.dBg.Out = j.Btn.dBg.Out||jun.Btn.dBg.Out;
					j.Btn.dBg.Hover = j.Btn.dBg.Hover||jun.Btn.dBg.Hover;
					j.Btn.dBg.Focus = j.Btn.dBg.Focus||jun.Btn.dBg.Focus;
			j.Fn = j.Fn||jun.Fn;
			var _self = this;
			var Stime,Sp=0,Isup=0;
			$(_self).css({overflow:"hidden",position:"relative",padding:"0px"});
			var dw = $(_self).width(), dh = $(_self).height()-1;
			var sw = j.W ? parseInt(j.W) : 21;
			var sl = dw - sw
			var bw = j.Btn.btn==true ? sw : 0;
			if($(_self).children(".jscroll-c").height()==null){//存在性检测
		$(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:8000;zoom:1;position:relative'></div>");
			$(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");
			$(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:1px;-moz-user-select:none;position:absolute;overflow:hidden;z-index:8002;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>");
			}
			var jscrollc = $(_self).children(".jscroll-c");
			var jscrolle = $(_self).children(".jscroll-e");
			var jscrollh = jscrolle.children(".jscroll-h");
			var jscrollu = jscrolle.children(".jscroll-u");
			var jscrolld = jscrolle.children(".jscroll-d");
			if($.browser.msie){document.execCommand("BackgroundImageCache", false, true);}
			jscrollc.css({"padding-right":sw});
			jscrolle.css({width:sw,background:j.Bg,"background-image":j.BgUrl});
			jscrollh.css({top:bw,background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out,width:sw-2});
			jscrollu.css({height:bw,background:j.Btn.uBg.Out,"background-image":j.BgUrl});
			jscrolld.css({height:bw,background:j.Btn.dBg.Out,"background-image":j.BgUrl});
			jscrollh.hover(function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Hover,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Hover})},function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})})
			jscrollu.hover(function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})})
			jscrolld.hover(function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})})
			var sch = jscrollc.height();
			//var sh = Math.pow(dh,2) / sch ;//Math.pow(x,y)x的y次方
			var sh = (dh-2*bw)*dh / sch
			if(sh<10){sh=10}
			var wh = sh/6 //滚动时候跳动幅度
		//	sh = parseInt(sh);
			var curT = 0,allowS=false;
			jscrollh.height(sh);
			if(sch<=dh){jscrollc.css({padding:0});jscrolle.css({display:"none"})}else{allowS=true;}
			if(j.Bar.Pos!="up"){
			curT=dh-sh-bw;
			setT();
			}
			jscrollh.bind("mousedown",function(e){
				j['Fn'] && j['Fn'].call(_self);
				Isup=1;
				jscrollh.css({background:j.Bar.Bg.Focus,"background-image":j.BgUrl})
				var pageY = e.pageY ,t = parseInt($(this).css("top"));
				$(document).mousemove(function(e2){
					 curT =t+ e2.pageY - pageY;//pageY浏览器可视区域鼠标位置，screenY屏幕可视区域鼠标位置
						setT();
				});
				$(document).mouseup(function(){
					Isup=0;
					jscrollh.css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})
					$(document).unbind();
				});
				return false;
			});
			jscrollu.bind("mousedown",function(e){
			j['Fn'] && j['Fn'].call(_self);
				Isup=1;
				jscrollu.css({background:j.Btn.uBg.Focus,"background-image":j.BgUrl})
				_self.timeSetT("u");
				$(document).mouseup(function(){
					Isup=0;
					jscrollu.css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})
					$(document).unbind();
					clearTimeout(Stime);
					Sp=0;
				});
				return false;
			});
			jscrolld.bind("mousedown",function(e){
			j['Fn'] && j['Fn'].call(_self);
				Isup=1;
				jscrolld.css({background:j.Btn.dBg.Focus,"background-image":j.BgUrl})
				_self.timeSetT("d");
				$(document).mouseup(function(){
					Isup=0;
					jscrolld.css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})
					$(document).unbind();
					clearTimeout(Stime);
					Sp=0;
				});
				return false;
			});
			_self.timeSetT = function(d){
				var self=this;
				if(d=="u"){curT-=wh;}else{curT+=wh;}
				setT();
				Sp+=2;
				var t =500 - Sp*50;
				if(t<=0){t=0};
				Stime = setTimeout(function(){self.timeSetT(d);},t);
			}
			jscrolle.bind("mousedown",function(e){
					j['Fn'] && j['Fn'].call(_self);
							curT = curT + e.pageY - jscrollh.offset().top - sh/2;
							asetT();
							return false;
			});
			function asetT(){				
						if(curT<bw){curT=bw;}
						if(curT>dh-sh-bw){curT=dh-sh-bw;}
						jscrollh.stop().animate({top:curT},100);
						var scT = -((curT-bw)*sch/(dh-2*bw));
						jscrollc.stop().animate({top:scT},1000);
			};
			function setT(){				
						if(curT<bw){curT=bw;}
						if(curT>dh-sh-bw){curT=dh-sh-bw;}
						jscrollh.css({top:curT});
						var scT = -((curT-bw)*sch/(dh-2*bw));
						jscrollc.css({top:scT});
			};
			$(_self).mousewheel(function(){
					if(allowS!=true) return;
					j['Fn'] && j['Fn'].call(_self);
						if(this.D>0){curT-=wh;}else{curT+=wh;};
						setT();
			})
		});
	}
});
$.fn.extend({//添加滚轮事件//by jun
	mousewheel:function(Func){
		return this.each(function(){
			var _self = this;
		    _self.D = 0;//滚动方向
			if($.browser.msie||$.browser.safari){
			   _self.onmousewheel=function(){_self.D = event.wheelDelta;event.returnValue = false;Func && Func.call(_self);};
			}else{
			   _self.addEventListener("DOMMouseScroll",function(e){
					_self.D = e.detail>0?-1:1;
					e.preventDefault();
					Func && Func.call(_self);
			   },false); 
			}
		});
	}
});
//通用的简化Close方法
function Close(){
	NetBox.hide();
}
/***************************
Labels
***************************/
var jqTransformGetLabel = function(objfield){
	var selfForm = $(objfield.get(0).form);
	var oLabel = objfield.next();
	if(!oLabel.is('label')) {
		oLabel = objfield.prev();
		if(oLabel.is('label')){
			var inputname = objfield.attr('id');
			if(inputname){
				oLabel = selfForm.find('label[for="'+inputname+'"]');
			} 
		}
	}
	if(oLabel.is('label')){return oLabel.css('cursor','pointer');}
	return false;
};
//询问插件
function Ask(options){
	var defaults = {
		     CloseTime:0,//几秒钟后自动关闭 
		     Msg:'？',//信息
		     Title:'？',
		     Height:99,
		     callback:"Close()",  //点击确定时的回调函数
		     callback2:"Close()",  //点击否时的回调函数
		     fromObj        :null  //从这个地方弹出来,如果是null就不弹
		};
		options=Object.extend(defaults, options);
		if(options.Title!='？')
		  options.Msg=options.Title;
		var content='<div class="AlertMessage"><div class="MessageTitle"></div><div class="MessageHelp"><div class="Message">'+options.Msg+'</div></div><div class="MessageControl">'+
	 '<a onfocus="this.blur()"  class="noback" href="javascript:'+options.callback2+';"></a>'+
	 '<a onfocus="this.blur()"  class="ok" href="javascript:'+options.callback+';"></a>'+
	 '</div></div>';
	NetBox.show(content,380,options.Height,options.CloseTime,options.fromObj);
}
/**
* 功能:询问功能
* 这是为了保持兼容写的，跟以前的不参数不太一样
*/
function Ask2(options)
{
	 var defaults = {
	       call:function(data){
	       }, //返回处理函数 
	         data:'', //需要携带的参数
	       CloseTime:0,//几秒钟后自动关闭 
		     Msg:'？',//信息
		     Height:99,
		     Title:"？",
		     callback2:"Close()",  //点击否时的回调函数
		     fromObj        :null  //从这个地方弹出来,如果是null就不弹 
		     };
	   options= $.extend(defaults, options);
	   if(options.Title!='？')
			  options.Msg=options.Title;
	   //$(this).bind("click",function(){
			var content='<div class="AlertMessage"><div class="MessageTitle"></div><div class="MessageHelp"><div class="Message">'+options.Msg+'</div></div><div class="MessageControl">'+
		 '<a onfocus="this.blur()" id="noButton"  class="noback" href="javascript:Close()"></a>'+
		 '<a onfocus="this.blur()" id="okButton" class="ok" href="javascript:void(0);"></a>'+
		 '</div></div>';
		 NetBox.show(content,380,options.Height,options.CloseTime,options.fromObj);
		   $("#okButton").bind("click",function(){
			   options.call(options.data);
			     return false;
		   });
		   //Ask({callback:options.});
	   //}); 
}
//用Iframe来显示一个网页地址
$.fn.Ask = function(options){  
  $(this).click(function(){
	Ask2(options);
	return false;
 });
}


//去掉当前一个的链接请求
$.fn.LineOne=function(){
	$(this).bind('focus',function(){
        if(this.blur){
            this.blur();
    };
});
}
//用Iframe来显示一个网页地址
//调用方法:
//function testCloseback(a,b){
//    alert(a+b);
//    NetBox.resize(500,500);
//}

//T$('all').onclick=function(){
//    Wrong({Msg:"测试的消息",Height:130,CloseTimme:0,fromObj:this,callback:'testCloseback(45,56)'});
//};
//也可以直接  Alert("googf");
function Message(msg,style,options){ 
var defaults = {
     CloseTime:0,//几秒钟后自动关闭
     Msg:'',//信息
     Style:'Alert',//使用的样式
     Height:99,  //如果是这个高度就自动高度
     callback:"Close()",  //从这个地方弹出来,如果是null就不谈
     fromObj        :null  //从这个地方弹出来,如果是null就不弹
};
options=Object.extend(defaults, options);
if(msg.length>0)
	options.Msg=msg;
if(style) 
	options.Style=style;
   var content='<div class="AlertMessage">'+
   '<div class="MessageTitle"> &nbsp;提示：</div><div class="Message'+options.Style+'">'+
   '<div class="Message">'+options.Msg+'</div></div>'+
   '<div class="MessageControl">'+
'<a onfocus="this.blur()" class="know" href="javascript:'+options.callback+';"></a>'+
'</div></div>';
   NetBox.show(content,360,options.Height,options.CloseTime,options.fromObj);
}
//弹出警告对话框
function Alert(msg,options)
{
  Message(msg+"","Alert",options);
}
//信息对话框
function Info(msg,options)
{
Message(msg+"","Info",options);
}
//信息对话框
function msg(msg,options)
{
Message(msg+"","Info",options);
}
//信息对话框
function Msg(msg,options)
{
Message(msg+"","Info",options);
}
//信息对话框
function Wrong(msg,options)
{
Message(msg+"","Wrong",options);
}
//正确信息对话框
function Right(msg,options)
{
Message(msg+"","Right",options);
}
//帮助/询问信息对话框
function Help(msg,options)
{
Message(msg+"","Help",options);
}
//用Iframe来显示一个网页地址
function Iframe(options){ 
var defaults = {
     Url:'',
     zoomSpeedIn		: 100,
     zoomSpeedOut	: 100, 
     Width:540,
     Height:190, 
     Title:"",
     overlayShow     : false,
     modal : true,
     isShowIframeTitle:true,
     isIframeAutoHeight:false,
     scrolling:"auto",
     overlayOpacity	: 0.5,
     overlayColor	: '#000000',
     padding	    : 0, 
     IsShow         :false,
     fromObj        :null  //从这个地方弹出来,如果是null就不谈
};
options=Object.extend(defaults, options);  
//options.fromObj=T$(options.fromObj); 
	var iframeHeight=(options.height-36)+"px"; 
	var content='';
	if(options.isShowIframeTitle)
	{
	  if(options.isIframeAutoHeight)//需要自适应高度 
	  {
		 content='<div class="popIframeTitle"><div class="popIframeTitle">&nbsp;&nbsp;'+options.Title+'</div><div class="popIframeCloseC">'+
				  '<a class="popIframeClose" onfocus="this.blur()" href="javascript:Close()">关闭</a></div></div><iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0"   hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + options.scrolling + '" onload="$(this).height($(this).contents().height());NetBox.resize(0,($(this).contents().height()+36));" src="' + options.Url + '"></iframe>';
	  } 
	  else{   
		 content='<div class="popIframeTitle"><div class="popIframeTitle">&nbsp;&nbsp;'+options.Title+'</div><div class="popIframeCloseC">'+ 
	     '<a class="popIframeClose" onfocus="this.blur()" href="javascript:Close()">关闭</a></div></div><iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0"  scrolling="' + options.scrolling + '" style="height:'+(options.Height-36)+'px"  src="' + options.Url + '"></iframe>';
	  }
	}
	else
	{
		if(options.isIframeAutoHeight)//需要自适应高度
			content='<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + '  onload="$(this).height($(this).contents().height());NetBox.resize(0,($(this).contents().height()));" scrolling="' + options.scrolling + '" src="' + options.Url + '"></iframe>';		
		else 						
			content='<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + options.scrolling + '" src="' + options.Url + '"></iframe>';		
	}
	 NetBox.show(content,options.Width,options.Height,0,options.fromObj);
}

//用Iframe来显示一个网页地址
$.fn.Iframe = function(options){  
  $(this).click(function(){
	Iframe(options);
	return false;
 });
}
$.extend({
	 Iframe : function(options){
	Iframe(options);
}
});



   


/**
*功能：客户端cookie函数相关操作组件,标准第三方组件
*使用方法：
* @example $.cookie('the_cookie', 'the_value');
* @设置cokie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
*/
jQuery.cookie = function(name, value, options) {
   if (typeof value != 'undefined') { // name and value given, set cookie
       options = options || {};
       if (value === null) {
           value = '';
           options.expires = -1;
       }
       var expires = '';
       if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
           var date;
           if (typeof options.expires == 'number') {
               date = new Date();
               date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
           } else {
               date = options.expires;
           }
           expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
       }
       // CAUTION: Needed to parenthesize options.path and options.domain
       // in the following expressions, otherwise they evaluate to undefined
       // in the packed version for some reason...
       var path = options.path ? '; path=' + (options.path) : '';
       var domain = options.domain ? '; domain=' + (options.domain) : '';
       var secure = options.secure ? '; secure' : '';
       document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
   } else { // only name given, get cookie
       var cookieValue = null;
       if (document.cookie && document.cookie != '') {
           var cookies = document.cookie.split(';');
           for (var i = 0; i < cookies.length; i++) {
               var cookie = jQuery.trim(cookies[i]);
               // Does this cookie string begin with the name we want?
               if (cookie.substring(0, name.length + 1) == (name + '=')) {
                   cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                   break;
               }
           }
       }
       return cookieValue;
   }
};
//联动控制区域
$.fn.DropSelecter=function(options){
	   var defaults = {
	       StyleHover:'hover', //悬停状态的style，必须有的
	       StyleSelect: '',  //，选中状态的style，不是必须的，对于类似下拉框的样式会存在三种样式，正常，悬停，下拉，这里为空就不起作用
	       ControlSeleter:'',
	       Left:0,
	       Top:0,
	       IsShow:false,//初始状态是否显示
	       Auto:true //是否鼠标悬停自动显示，鼠标移出自动消失
	  };
	    options= $.extend(defaults,options);  
	    if(options.StyleSelect=='')
	    	options.StyleSelect=options.StyleHover;
	   var $this=$(this);
	   var $control=$(options.ControlSeleter);
	   var timer;
	   var sleep=100;
	   var offset =$this.offset(); 
	   if(!offset)
	      return;
      
	  $control.css({left:offset.left+options.Left,top:offset.top+$this.height()+options.Top});
	  var id="";
	  if(!$(this).data("DropSelecterId"))
	  {
	    id=numberID();
	    $this.data("DropSelecterId",id);
	      
	     if(!options.Auto){
	    	 $("body").click(function(){
	    		 if($this.data("opened"))
	    		 {
		    		    $control.hide(); 
		    		    $this.removeClass(options.StyleSelect);
		    		    $this.removeData("opened");
		    	 }  
	    	 });
	    	 //如果需要点击才下拉出来
	    	 $this.click(function(event){
	    		 if($this.data("opened"))
	    		 {
	    		    $control.hide(); 
	    		    $this.removeClass(options.StyleSelect);
	    		    $this.removeData("opened");
	    		 }
	    		 else
	    		 { 
	    			 //先触发一次body点击，主动促使其他浮动框关闭
		    		 $("body").trigger("click");  
	    			 $this.data("opened",true);
	    			 $control.show(); 
	    			 $this.addClass(options.StyleSelect);
	    		 }
	    		 event.stopPropagation();
	    	 });
	    	 //阻止点击的时间传播
	    	 $control.click(function(event){
	    		 event.stopPropagation(); 
	    	 });
	     }
	     else
	     {
	    	 
	    		 $control.mouseenter(function(){
	    			 clearTimeout(timer);
	    	    	 timer=setTimeout(function(){
	    	    		 $control.show();
					      $this.addClass(options.StyleHover);
	    	    	 },sleep);
				 }).mouseleave(function(){
					 clearTimeout(timer);
	    	    	 timer=setTimeout(function(){
	    	    		 $control.hide();
			                $this.removeClass(options.StyleHover);  
	    	    	 },sleep);
		         });
	     }
	     
	   //控制鼠标放上去的那个a

    		$this.focus(function(){
			      $(this).blur();
		    }).mouseover(function(){
		    	 clearTimeout(timer);
		     	 timer=setTimeout(function(){
		     		if(options.Auto){
			    		  $control.show(); 
			    	  }
		     		$this.addClass(options.StyleHover);
		     	 },sleep);
	         }).mouseleave(function(){
	        	 clearTimeout(timer);
		     	 timer=setTimeout(function(){
		     		if(options.Auto)
				       $control.hide();
			           $this.removeClass(options.StyleHover);
		     	 },sleep);
	           
	        });

	     $(window).resize(function(){  
		     var offset =$this.offset(); 
	        $control.css({left:offset.left+options.Left,top:offset.top+$this.height()+options.Top});
		 });
	      //控制下拉出来的那一块    
	    if(options.IsShow)
  	    { 
//	    	 $this.data("opened",true);
//			 $control.show(); 
//			 $this.addClass(options.StyleSelect);
	    }
	  }
};



$.fn.UiTitle = function (){
	$(this).MyTitle({defaultCss:'tipsr',title:$(this).attr("mytitle"),html:true});
};
///////////////////////////////按钮部分//////////////////////////////////////
$.fn.UIButton = function() { 
//按钮的样式 
 if($(this).attr("NewStyle")){//如果已经格式化过了就直接返回
   return ;
  }
  $(this).attr("NewStyle","true");  
   $(this).wrap("<a  href='javascript:void(0)'></a>");
   if(!$(this).attr("StyleName"))
       $(this).attr("StyleName","buttonCommon");  // 如果没有就设置一个通用的按钮函数
       
   if($(this).attr("disabled"))
      $(this).parent().addClass($(this).attr("StyleName")+"Disabled");
   else
     $(this).parent().addClass($(this).attr("StyleName"));

   $(this).bind('focus', function(){
    if(this.blur){ //如果支持this.blur
        this.blur();
    }
 });
}
/***************************
	文本框,输入框美化
***************************/
$.fn.UiText = function () {
	  if (!$(this).attr("NewStyle")){
		  $(this).attr("NewStyle");
	      var $input = $(this);
	      //加上提示信息
	      if($input.attr("mytitle"))
          {
			$input.MyTitle({defaultCss:'tipsr',title:$input.attr("mytitle"),trigger:"manual"});
			// $input.data("mytitle",true);//标示已经打开过了标题栏
          }
	      //加上默认值
	      if($(this).attr("valueDemo"))
   	      {
	      	if($(this).val()==""){
	            $(this).val($(this).attr("valueDemo"));
	            $(this).css({"color":"#C7C7C7"});
	      	}
   	      }
	      //绑定获取焦点的值
	      	 $(this).bind("focus",function(){
	      		
	      		 //移除错误信息
	      		  $(this).removeAttr("errorStyle");
	      	 if($(this).attr("valueDemo"))
	   	      {
	         	 if($(this).attr("valueDemo")==$(this).val()){
	         		$(this).val("");
	         	 $(this).css({"color":"#333333"});
	         	 }
	   	      }
	         	$input.addClass("inputFocue");
	         	if($input.data('tipsy'))
	        	  $input.MyTitle("show"); 
			  	
	         }).bind("blur",function(){//绑定失去焦点的值
	        	 
	         if($(this).attr("valueDemo"))
	   	      {
	        	 if($(this).val()=="") {
	              		$(this).val($(this).attr("valueDemo"));
	              		$(this).css({"color":"#C7C7C7"});
	        	 }	 
	   	      }
	        	 $input.removeClass("inputFocue"); 
	        	 if($input.data('tipsy'))
			        $input.MyTitle("hide"); 
			    if($(this).val().length>0)
                   CheckTextBox($(this)); 
	         });

	      //就是输入的时候不隐藏提示框信息
	      if(!$(this).attr("noHide") && $input.data('tipsy')){
	    	  $input.keydown(function(){
	    		 
	    		     $input.MyTitle("hide");
					//$(".TitleRight").fadeOut("fast"); 
				}); 
	      }  
  }
};


//checkbox美化 
$.fn.UiCheckbox=function(options){
	
			$(':checkbox+label',this).each(function(){
				$(this).addClass('checkbox');
	            if($(this).prev().is(':disabled')==false){
	                if($(this).prev().is(':checked'))
					    $(this).addClass("checked");
	            }else{
	                $(this).addClass('disabled');
	            }
			}).click(function(event){
					if(!$(this).prev().is(':checked')){
					    $(this).addClass("checked");
	                    $(this).prev()[0].checked = true;
	                }
	                else{
	                    $(this).removeClass('checked');			
	                    $(this).prev()[0].checked = false;
	                }
	                event.stopPropagation();
				}
			).prev().hide();
}
/***************************
Radio Buttons
***************************/	
$.fn.UiRadio = function(){
	return this.each(function(){
	 if (!$(this).attr("NewStyle")) {
		if($(this).hasClass('jqTransformHidden')) {return;}
		var $input = $(this);
		var inputSelf = this;		
		oLabel = jqTransformGetLabel($input);
		oLabel && oLabel.click(function(){aLink.trigger('click');});
		var aLink = $('<a href="#" class="jqTransformRadio" rel="'+ this.name +'"></a>');
		$input.addClass('jqTransformHidden').wrap('<span class="jqTransformRadioWrapper"></span>').parent().prepend(aLink);
		
		$input.change(function(){
			inputSelf.checked && aLink.addClass('jqTransformRadioChecked') || aLink.removeClass('jqTransformRadioChecked');
			return true;
		});
		// Click Handler
		aLink.click(function(){
			if($input.attr('disabled')){return false;}
			$input.trigger('click').trigger('change');

			// uncheck all others of same name input radio elements
			$('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
				$(this).attr('type')=='radio' && $(this).trigger('change');
			});

			return false;					
		});
		// set the default state
		inputSelf.checked && aLink.addClass('jqTransformRadioChecked');
		$input.hide();
	   }
	});
};


//选择框美化
$.fn.UiSelect=function(options){
	   var defaults = {
	       StyleNormal: 'SelectGray',  //正常状态的样式
	       StyleHover: 'SelectBlue',  //悬停的样式
	       StyleDropDown: 'SelectDropDown',  //下拉的样式
	       itemHeight:21, //下拉项每项的高度
	       InnerWidth:0,//如果是0就自动计算，否则就是用这个固定的大小
	       InnerWidthOffset:-15,//内部的便宜量，对于多种样式的可能需要设置改变
	       OuterWidth:0,//如果是0就自动计算，否则就是用这个固定的大小
	       OuterWidthOffset:12,//外部自动偏移量（对于多种样式的需要改变）
	       MaxShow:10,//最多显示多少项
	       Top:0,//下拉部分上偏移量
	       Left:0,//下拉部分左偏移量
	       ControlSeleter:'',//被控制区域，如果为空就创建一个
	       Auto:false,//是否需要鼠标悬停就下拉
	       IsShow:true //是否显示，true为显示 
	  };
	   if($(this).attr("NewStyle"))
	      return;
	  options= $.extend(defaults,options);  
	  var $this=$(this);
	   var $selecter=$(this);//先设定类型为jauery
	   var id="0";
	   var again=false;//是否是第二次更新
	  if($this.attr("SelectId"))
	  {//如果有就先移除一下
		  id=$this.attr("SelectId").split('_')[1];
		//  $("#"+$this.attr("SelectId")).remove();
		  //移除原有的下拉部分
		 // $("#down_"+ids).remove();
		 $selecter=$("#select_"+id); 
		 // $selecter.unbind();  
		   $selecter.removeData("dropDownSelected"); 
		 //设置新的选项文字 
		 $selecter.find("span i").text($this.find("option:selected").text());
		 again=true; 
	  } 
      else{
		id=numberID();
		$this.attr("SelectId","select_"+id)
	    $selecter=$("<div id='select_"+id+"' class='"+options.StyleNormal+"'><span><i><i><span><div>").insertAfter($this); 
		//初始设置span文字
		$selecter.find("span i").text($this.find("option:selected").text());
		$selecter.mouseover(function(){
			$selecter.addClass(options.StyleHover);	
		}).mouseout(function(){
			$selecter.removeClass(options.StyleHover);
		});
	 }
	 //var cIndex=$this.get(0).selectedIndex;
	  if($.browser.safari)
		  {//sofari宽度太短
             options.InnerWidthOffset=options.InnerWidthOffset+26;
	         options.OuterWidthOffset=options.OuterWidthOffset+26;  
		  }
	    var cIndex=$this.selectedIndex;
		//先实现一个简易的状态响应，等到点击的时候再初始化下边部分
		if(options.InnerWidth==0)
			options.InnerWidth=$this.width()+options.InnerWidthOffset;
		if(options.OuterWidth==0)
			options.OuterWidth=$this.width()+options.OuterWidthOffset;
	    //设置到选中状态
		$selecter.find("span i").css('width',options.InnerWidth);  

        $selecter.mouseover(function(){ 
          //$(this).addClass(options.StyleDropDown);
		   again=$("#down_"+ id).length>0; 
			if(!$(this).data("dropDownSelected")){ 
				$(this).data("dropDownSelected",true);
				var oLi="";
	
				if(again)
				  oLi="<span id='downDiv_"+ id+"' >";
				 else
				   oLi="<p id='down_"+ id+"' ><span id='downDiv_"+ id+"' >";
				var itemCount=0;
				$('option', $this).each(function(i){
					if(cIndex==i)
					 oLi += '<a href="javascript:void(0)"  class="selected" index="'+ i +'">'+ $(this).text() +'</a>';
					else
						oLi += '<a href="javascript:void(0)"  index="'+ i +'">'+ $(this).text() +'</a>';
					itemCount++;
				});
				if(again)
				  oLi += "</span>";   
				else
				   oLi += "</span></p>"; 
				var needScrool=false;  
				var heights=itemCount*options.itemHeight;
				if(options.MaxShow<itemCount)
				{
				   needScrool=true;
				   heights=options.MaxShow*options.itemHeight;
				}
				var $ul=$(oLi);
				if(again)
				{
				   $ul= $("#down_"+id).html(oLi);
				}
			    $ul.css({'width':options.OuterWidth,'height':heights}); 
				$ul.find("span").css({'width':options.OuterWidth,'height':heights}); 
				/* Add click handler to the a */
				$ul.find('a').click(function(){
					if($selecter.data('tipsy')) 
						$selecter.MyTitle("hide"); 
					$this[0].selectedIndex=$(this).attr("index"); 
//					if($this[0].onchange){
//						alert($this[0].onchange);
//					   $this[0].onchange(); 
//					}
					$ul.find('a').removeClass('selected');
					$(this).addClass('selected');	
					$selecter.find("span i").text($(this).text());
					$this.trigger("change");
			    	  $(".TitleErrorRight:visible").hide("fast");
			    	  $(".TitleErrorTop:visible").hide("fast");
					$("body").trigger("click"); //关闭当前下拉框  
						return false; 
				});
				$ul.find('a').focus(function(){
					$(this).blur();
				});
				//alert(oLi); 
				if(!again)
				{
				   $ul.appendTo($selecter); 
				}
				//样式化他
				$selecter.DropSelecter({ControlSeleter:"#down_"+id,StyleHover:options.StyleHover,StyleSelect:options.StyleDropDown,Left:0,Top:0,Auto:false,IsShow:true});  
				//$("#downDiv_"+ id).jscroll({W:"19px",Btn:{btn:false}}); 
				if(needScrool){
					$ul.css("padding-bottom","3px"); 
				$("#downDiv_"+ id).jscroll({
					     W:"17px" 
		                 ,BgUrl:"url(/body/images/form/s_bg.png)"
		                 ,Bg:"right 0 repeat-y"
		                 ,Bar:{Pos:"up" 
		                 ,Bd:{Out:"#a3c3d5",Hover:"#b7d5e6"}
		                 ,Bg:{Out:"-51px 0 repeat-y",Hover:"-66px 0 repeat-y",Focus:"-81px 0 repeat-y"}}
		                 ,Btn:{btn:true 
		                 ,uBg:{Out:"0 0",Hover:"-17px 0",Focus:"-34px 0"}
		                 ,dBg:{Out:"0 -21px",Hover:"-17px -21px",Focus:"-34px -21px"}}
		                 ,Fn:function(){}
                    }); 
                }
                $ul.hide();
			 }
        });
         $(this).hide(); 
};

function changeCheckBox(id){
	var obj=T$("ck_"+id);
	var objo=T$(id);
	if(objo.checked){
		 obj.className="checkbox";
		 objo.checked=false;
		 
	}
	else{
	  obj.className="checkbox checked";
	  objo.checked=true;
	}
	$(objo).trigger("change");
}
//样式化一个checkbox
function UICheckbox(obj){
	   if($(obj).attr("newStyle"))
		   return;
	    var nowId=obj.getAttribute("id");
	    
        if(nowId){
        	if($("#"+nowId).attr("checked"))
        	    $(obj).after("<label onclick=\"changeCheckBox('"+nowId+"')\" class='checkbox checked' id='ck_"+nowId+"'></label>");
        	else
        		$(obj).after("<label onclick=\"changeCheckBox('"+nowId+"')\" class='checkbox' id='ck_"+nowId+"'></label>");
        }
        else
        {
        	var id=numberID();
		    obj.setAttribute("id",id);
		    if($("#"+id).attr("checked"))
		         $(obj).after("<label onclick=\"changeCheckBox('"+id+"')\" class='checkbox' id='ck_"+id+"'></label>");
		    else
		    	 $(obj).after("<label onclick=\"changeCheckBox('"+id+"')\" class='checkbox checked' id='ck_"+id+"'></label>");
        }
}


/*
*功能：判断是否为与指定对象匹配的公用pattern
*/
function matchof(s,srcid,id){
var sr=$("#"+srcid).val();
if(sr==s){
 return true;
}else {
 return false;
}
}

/*
*功能：判断是否为数字的公用pattern
*/
function num(s,id){

var patrn=/^[0-9]{1,20}$id/;
if(s.search("^-?\\d+(\\.\\d+)?$")==0){
 return true;
}else {
 if(s.toString().length==0){
  
   return true;
 }else {
 
   return false;
 }
}
}
/*
*功能：判断是否为中文字符公用pattern
*/
function cnChar(s,id){
var patrn=new RegExp("[^\x00-\xff]");
return patrn.exec(s);
}
//3 长时间，形如 (2008-07-22 13:04:06)
function strDateTime(str,id)
{
	if(str==null)
		return true;
	if(str=="")
		return true;
var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
var r = str.match(reg);
if(r==null)return false;
var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}
/*
*功能：判断是否为指定限制大小的的公用pattern
*/
function limit(s,minNum,maxNum,id){
	var b1=s;
	var len = b1.match(/[^ -~]/g) == null ? b1.length : b1.length + b1.match(/[^ -~]/g).length ;
	
	
if(len>=minNum && len<=maxNum)
	 return true;
else
	return false;

}
//不能等于
function notmatch(s,s1,id){

	if(s==s1)
		 return false;
	else
		return true;

	}
function email(s,id){
       if(s.length==0)
    	   return false;
	if(s.indexOf('.')>0&&s.indexOf('@')>0)
		 return true;
	else
		return false;

	}
function telphone(s,id){
	 var patrn=new RegExp("[0-9]{2})+-([0-9]{4})+-([0-9]{4}");
	if(!patrn.exec(s)) 
	{
	    return false;
	}
else
	return true;
}

function Ui(obj)
{
	 var str="";
	 if(!$(obj))//不存在就返回
	   return null;
		var arr=T$(obj).getElementsByTagName("*");
		for(var i=0;i<arr.length;i++)
		{
		  if(arr[i].tagName!=undefined)
		  {
			  var tagName=arr[i].tagName.toLowerCase();
			
		    var controlId=arr[i].getAttribute("id"); 
		   if(tagName=="input" ||tagName=="textarea")
		   {//处理文本框
			   if(arr[i].type.toLowerCase()=="text"||arr[i].type.toLowerCase()=="hidden"|| arr[i].type.toLowerCase()=="password"||arr[i].tagName.toLowerCase()=="textarea")
			   {
				   $(arr[i]).UiText();
			   }

			  else if(arr[i].type.toLowerCase()=="radio")
			  {
				  $(arr[i]).UiRadio(); 
			  }
			  else if(arr[i].type.toLowerCase()=="checkbox")
			  {
				  UICheckbox(arr[i]);
			  }
			  else if(arr[i].type.toLowerCase()=="button")
			  {
				  $(arr[i]).UIButton();
			  }
		   }
			else if(tagName=="select")
			{ 
				$(arr[i]).UiSelect();
			}
			
		}
  }
}

$.fn.Ui = function(){
	var arr=$(this)[0].getElementsByTagName("*"); 
	for(var i=0;i<arr.length;i++)
	{
	  if(arr[i].tagName!=undefined)
	  {
		  var tagName=arr[i].tagName.toLowerCase();
		
	    var controlId=arr[i].getAttribute("id"); 
	   if(tagName=="input" ||tagName=="textarea")
	   {//处理文本框
		   if(arr[i].type.toLowerCase()=="text"||arr[i].type.toLowerCase()=="hidden"|| arr[i].type.toLowerCase()=="password"||arr[i].tagName.toLowerCase()=="textarea")
		   {
			   $(arr[i]).UiText();
		   }

		  else if(arr[i].type.toLowerCase()=="radio")
		  {
			  $(arr[i]).UiRadio();
		  }
		  else if(arr[i].type.toLowerCase()=="checkbox")
		  {
			  UICheckbox(arr[i]);
		  }
		  else if(arr[i].type.toLowerCase()=="button")
		  {
			  $(arr[i]).UIButton();
		  }
	   }
		else if(tagName=="select")
		{ 
			$(arr[i]).UiSelect();
		}

	}
  }
}
/*
 * 功能:阻止a的自动跳转事件,用于执行javascript事件,不然即使绑定了js事件也可能因为先执行了a的跳转而失效
 * 参数:没有参数
 * 注意: 对于fancebox相关的直接绑定事件,暂时如果href写入的是#,会导致无法打开
 * 用例: $("seecter").AStop();
 */ 
$.fn.AStop= function(options) {  
				$(this).click(function(oEvent){  
					         var oEvent = oEvent ? oEvent : window.event;    
					         oEvent.preventDefault();//阻止超链接  
					         var tar;   
					         if(navigator.appName=="Microsoft Internet Explorer"){  
					             tar = oEvent.srcElement;  
					             }else{  
					                 tar=oEvent.target;  
					                 }  
					         if(tar.getAttribute("disabled")){         
					                 return false;//阻止点击事件   
					             }
					        
	 });					
}

/*
*功能:在指定的区域内fixed,不会超过该区域
*参数:offsetX 相对于x的偏移量,注意,这里不同于正常的偏移的是,因为显示在区域,所以一旦到达底部的时候就不会再继续滚动了
*             -1代表x方向始终处于被控制区域的居中位置
*     offsetY 相对于Y轴的偏移量,原理同上 
*             -1代表y方向始终处于被控制区域的居中位置 
*     selecter:被浮动者的悬着器,不用用this等直接选择器,比如传入"#id .float"类似的直接选择标识
*/

jQuery.fn.fixedIn= function (options) {
	 var defaults = {
			 offsetX:0,
			 offsetY:0,
			 selecter:""  //是否禁用
		      }; 
//再根据参数优先配置
	options= $.extend(defaults, options);  

// this.each(function (i) {
 	//母体控件
         var $tbl = $(this);
         //受控的控件

         var id=numberID();
         
         var $tblhfixed = $(options.selecter);

         //显示的偏移量,默认为浮动控件自身的高度
       
         $(window).scroll(function () {
             var sctop = $(window).scrollTop();  
             var elmtop =$tbl.offset().top;  
             var buttonsize=elmtop + $tbl.height()-2*options.offsetY-$tblhfixed.height();
             var ietop=sctop-elmtop+options.offsetY;
             var ietopbutton=sctop-elmtop+options.offsetY; 
             if (sctop > elmtop && sctop <= buttonsize) 
             {//如果还在显示区域就固定浮动 
             	if (jQuery.browser.msie && jQuery.browser.version == "6.0") 
             	{//如果是ie6
             		 $tblhfixed.css({ 
                          "position": "absolute", 
                          "top": ietop+"px",  
                          "left":options.offsetX+"px"  
                     }); 
             	}
                 else {
                 	$tblhfixed.css({ 
                     "position": "fixed",  
                     "top": options.offsetY+"px", 
                     "left":($tbl.offset().left+options.offsetX)+"px"  
                   }); 
                 }
             	//$tblhfixed.show();
             }
             else 
             {//否则就跟随文档滚动 
             	  if( sctop> buttonsize){ //下届越出
             			
             		  $tblhfixed.css({ 
                           "position": "absolute", 
                           "top": ($tbl.height()-options.offsetY-$tblhfixed.height())+"px",  
                           "left":options.offsetX+"px"
                      }); 
             	  }
             	  else //上届越出 
             	  {
             		  $tblhfixed.css({ 
                           "position": "absolute", 
                           "top": options.offsetY+"px",  
                           "left":options.offsetX+"px"  
                      }); 
             	  } 
             } 
         });
         $(window).trigger("scroll");
         
        // $(window).resize(function () { 
//             if ($clonedTable.outerWidth() != $tbl.outerWidth()) {
//                 $tblhfixed.find(headerelement).each(function (index) {
//                     var w = $(this).width();
//                     $(this).css("width", w);
//                     $clonedTable.find(headerelement).eq(index).css("width", w);
//                 });
//                 $clonedTable.width($tbl.outerWidth());
//             }
            // $tblhfixed.css("left", options.offsetX); 
       //  });
   
// });

};
/*
* 功能:显示一个lodding动画在制定的区域上面
* 例子:
* 现有问题:在生成的列表页中使用该控件,在ie6下页面会首先跳转到最上面
*/
$.fn.Loadding = function(options) { 
var defaults = {
   StyleName: 'Loadding',
   Str: 'lodding...',
   Width:0,  //宽度 <0 就不需要设置 0代表当前控件的宽度 >0的值就用这个指定的固定值
   Height:0,  //高度 <0 就不需要设置 0代表当前控件的宽度 >0的值就用这个指定的固定值
   Position:"on", //on正好在其上 top在控件上方 bottom在控件下方 left 在控件左边 right 在控件右边
   IsShow:true, //true为显示 false为隐藏 
   OffsetY:0, //Y方向的偏移量
   OffsetX:0, //X方向的偏移量
   OffsetYGIF:0, //Y方向的GIF动画偏移量
   OffsetXGIF:0 //X方向的GIF动画偏移量
};
options= $.extend(defaults, options);  
if(!options.IsShow)
{//清理工作
	 var ids=$(this).attr("LoddingId"); 
		 $("#Lodding_"+ids).remove();
		 $(this).removeAttr("LoddingId");
	 return; 
} 

 var id=numberID();
 var style=";position:absolute;";
 if(options.Position=="top")
	  style+="margin-top:-"+$(this).outerHeight()+"px;";
 else if(options.Position=="bottom")
	  style+="margin-top:0;"; 
 else if(options.Position=="left")
	  style+="margin-left:-"+$(this).outerWidth()+"px;";
 else if(options.Position=="right")
	  style+="margin-right:"+$(this).outerWidth()+"px;";
 else
	  style+="top:"+$(this).offset().top+"px;left:"+$(this).offset().left+"px;";  
  
 if(options.Width==0)  
 { 
	  style+="width:"+$(this).outerWidth()+"px;"; 
 }
 else if(options.Width>0)
	  style+="width:"+options.Width+"px;";
 
 if(options.Height==0)
	  style+="height:"+$(this).outerHeight()+"px;";
 else if(options.Height>0)
	  style+="height:"+options.Height+"px;";  

// $("#MessageContainer").append("<div id=\"Lodding_"+id+"\" class=\""+options.StyleName+"\"><div class=\"GIF\">"+options.Str+"</div></div>"); 
 $(this).after("<div id=\"Lodding_"+id+"\" class=\""+options.StyleName+"\" style=\""+style+"\" ><div class=\"GIF\">"+options.Str+"</div></div>"); 
 $(this).attr("LoddingId",id);
// $("#Lodding_"+id).fadeTo("normal",0,function(){
	  $("#Lodding_"+id).fadeTo("fast",0.6);     
// });
// $("#Lodding_"+id+" .GIF").floatdiv({left:"20px",top:$(this).offset().top+"px"});
 $(this).fixedIn({selecter:"#Lodding_"+id+" .GIF",offsetX:options.OffsetXGIF,offsetY:options.OffsetYGIF});
}

/**
 * 功能:阻止浏览器默认事件
 * @param e
 * @return
 */

function stopDefault( e ) { 
	// Prevent the default browser action (W3C) 
	if ( e && e.preventDefault ) 
	e.preventDefault(); 
	// A shortcut for stoping the browser action in IE 
	else 
	window.event.returnValue = false; 
	return false; 
}
//替换url 
var urlreplace="/ajaxList-";
//新url地址
function newUrl(e,thiss){
	var url=$(thiss).attr("href");
	if(url.indexOf('javascript')!=0&&url.indexOf('-')>0){
		//说明是正常的访问
		url=url.replace("-",urlreplace);
		ajaxUrl(url,true,true,"text");
	}
	if ( e && e.preventDefault ) 
		e.preventDefault(); 
		// A shortcut for stoping the browser action in IE 
		else 
		window.event.returnValue = false; 
		return false; 
}
function checkPageInput(e,page){
	 e.keyCode==13 && $("#JumpButton").trigger("click"); 
}
/**
 * 功能:进行跳转
 * @return
 */
function jumpPage(maxSize){
	var nowvalue=T$("PagerInput").value;
	if(nowvalue>maxSize)
	{
		Wrong("您输入的页码过大，请重新输入。",{CloseTime:1});
		return;
	}
	if(nowvalue<1)
	{
		if(nowvalue=='')
			Info('请输入页码',{CloseTime:1});
		else
		   Wrong("您输入的页码太小了，请重新输入。",{CloseTime:1});
		return;
	}
	else{
		//这个正则盖过了，以前的有误，答大页码数不进去
		var regNum =/^[0-9]+.?[0-9]*$/;
		if(regNum.test(nowvalue)){
			var url=getPageUrl();//在客户端定义
			if(url.length>0)
			  ajaxUrl(url,true,true,"text");
		}
		else
		{
			Wrong("您输入不是有效页码，请重新输入。",{CloseTime:1});
		}
		
		
	}
}

/**
 * 功能:屏幕可视位置滚动到指定的元素位置
 * 参数: 1 Speed 时间,单位毫秒;2 Top int数值,滚动到距离顶部的top px距离
 * 例子: $("target").ScrollTo({Speed:500,Top:100}); 完成功能:移动到现在选定的目标具体顶部100px的位置,.05秒内完成
 */
jQuery.fn.ScrollTo = function(options){ 
	  var defaults = {
		        Speed: 300, //移动的毫秒数量
		        Top: 0      //距离顶部的距离
		      };
	  options= $.extend(defaults, options);  
	o = jQuery.speed(options.Speed);
	return this.each(function(){
		new jQuery.fx.ScrollTo(this, o,options.Top);
	});
};
jQuery.intval = function (v)
{
	v = parseInt(v);
	return isNaN(v) ? 0 : v;
};
jQuery.getClient = function(e)
{
	if (e) {
		w = e.clientWidth;
		h = e.clientHeight;
	} else {
		w = (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth;
		h = (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight;
	}
	return {w:w,h:h};
};
jQuery.getScroll = function (e) 
{
	if (e) {
		t = e.scrollTop;
		l = e.scrollLeft;
		w = e.scrollWidth;
		h = e.scrollHeight;
	} else  {
		if (document.documentElement && document.documentElement.scrollTop) {
			t = document.documentElement.scrollTop;
			l = document.documentElement.scrollLeft;
			w = document.documentElement.scrollWidth;
			h = document.documentElement.scrollHeight;
		} else if (document.body) {
			t = document.body.scrollTop;
			l = document.body.scrollLeft;
			w = document.body.scrollWidth;
			h = document.body.scrollHeight;
		}
	}
	return { t: t, l: l, w: w, h: h };
};

jQuery.getPos = function (e)
{
	var l = 0;
	var t  = 0;
	var w = jQuery.intval(jQuery.css(e,'width'));
	var h = jQuery.intval(jQuery.css(e,'height'));
	var wb = e.offsetWidth;
	var hb = e.offsetHeight;
	while (e.offsetParent){
		l += e.offsetLeft + (e.currentStyle?jQuery.intval(e.currentStyle.borderLeftWidth):0);
		t += e.offsetTop  + (e.currentStyle?jQuery.intval(e.currentStyle.borderTopWidth):0);
		e = e.offsetParent;
	}
	l += e.offsetLeft + (e.currentStyle?jQuery.intval(e.currentStyle.borderLeftWidth):0);
	t  += e.offsetTop  + (e.currentStyle?jQuery.intval(e.currentStyle.borderTopWidth):0);
	return {x:l, y:t, w:w, h:h, wb:wb, hb:hb};
};
//上面函数的内部只用函数,不对外直接使用
jQuery.fx.ScrollTo = function (e,o,top)
{
	var z = this;
	z.o = o;
	z.e = e;
	z.p = jQuery.getPos(e);
	z.s = jQuery.getScroll();
	z.clear = function(){clearInterval(z.timer);z.timer=null};
	z.t=(new Date).getTime();
	z.step = function(){
		var t = (new Date).getTime();
		var p = (t - z.t) / z.o.duration;
		if (t >= z.o.duration+z.t) {
			z.clear();
			setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);
		} else {
			st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;
			sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;
		
			z.scroll(st, sl);
		}
	};
	z.scroll = function (t, l){window.scrollTo(l-top, t-top)};
	z.timer=setInterval(function(){z.step();},13);
};
/*
 * 通用的aja的方式加载下一页,针对后台
 */
function ajaxNextPage(e){
	var urls=$(this).attr("href").replace("ForBuy","ForBuy/ajaxList");
		ajaxUrl(urls,true,true);
}

Title=function(){ 
	var box,mask,nowTop,nowLeft,nowHeight,nowWidth,f=0;
	return{
		Show:function(options){
		   var defaults = {
			     CloseTime:0,//几秒钟后自动关闭
			     Height:99,  //如果是这个高度就自动高度
			     callback:"Close()",  //从这个地方弹出来,如果是null就不谈
			     fromObj        :null  //从这个地方弹出来,如果是null就不弹
			};
			options=Object.extend(defaults, options);
			if(!f){//如果不存在包含容器就先创建一个容器
				box=document.createElement('div'); p.id='tinybox';
				mask=document.createElement('div'); m.id='tinymask';
				b=document.createElement('div'); b.id='tinycontent';
				document.body.appendChild(m); document.body.appendChild(p); p.appendChild(b);
				m.onclick=NetBox.hide;
				window.onresize=NetBox.resize; f=1
			}
			
			
	    },
	    Close:function(){
	    	
	    }
	}
	
}();

/*
*功能：这里仅仅是用于产生一个错误消息到任何对象上，正常的提示不会用于这里，为了更好地兼容以前版本
*描述：目前支持top，right两个方向
*      由此可演变出 提示 、错误的消息框，以及title和右上角的消息提示
*/
$.fn.Title = function(options){ 
var defaults ={
  StyleName: 'TitleError',
  Title:'Message',
  Position:'w', //显示位置  w:右侧  n：下面   e：左边   s: 北侧
  Offset:10, //显示位置偏移量
  OffsetY:5,
  IsShow:true
}; 
options= $.extend(defaults,options); 
if($(this).attr("TitleStyleName"))
  options.StyleName=$(this).attr("TitleStyleName"); 
  if($(this).attr("title"))
  options.Title=$(this).attr("title"); 
  if(options.Title.indexOf('#')==0)
  	options.Title=$(options.Title).html();
 if($(this).attr("Offset"))
  options.Offset=$(this).attr("Offset"); 
 if($(this).attr("TitlePosition"))
	  options.Position=$(this).attr("TitlePosition"); 
 
  var id=$(this).attr("id")+options.StyleName;
  var offsets = $(this).offset();
   
if(options.IsShow)
  {  

	//首先查明当前容器有没有创建过
	$(this).MyTitle({defaultCss:'tipsr',title:"错误消息",trigger:"manual"});
	if(!$(this).attr("errmsg")) 
		$(this).attr("errmsg",options.Title);
      $(this).attr("errorStyle","tipsr");
	 $(this).MyTitle("show"); 
  }
  else
  {
	  $(this).MyTitle("hide"); 
	  $(this).removeAttr("errorStyle"); 
	  //
	 // if(offsets!=null)
     //  $("#"+id).animate({opacity:"0",top:offsets.top},200).fadeOut(100);
  }
}
/*
*功能：检验textbox内容是否符合要求，并给出相应的提示
*参数：obj：jquery对象  要做""判断
*/  
function CheckTextBox(obj){
 var pattern=obj.attr("pattern");
 if(obj.attr("webpattern"))
		pattern=obj.attr("webpattern");
 if(pattern!=null&&pattern!=undefined&&pattern!=""){
	 if($(obj).attr("valueDemo"))
	 {
		 if($(obj).attr("valueDemo")==$(obj).val()){
			 if(!$(obj).data('tipsy'))
				   $(obj).MyTitle({defaultCss:'tipsr',title:"请重新填写本信息。",trigger:"manual"});
			   $(obj).attr("errorStyle","tipsr");
			   $(obj).MyTitle("show"); 
			 return false;
		 }
	 }
 var subs=pattern.split(";");
 for(var j=0;j<subs.length;j++){
   var paraValue=obj.val().replace(/["'\n\r\t]/g," ");
   var execStr=subs[j].replace("(","('"+paraValue+"',");
   if(execStr.indexOf(",)")>0){
     execStr=execStr.replace(")","'"+obj.name+"')"); 
   }else{
     execStr=execStr.replace(")",",'"+obj.name+"')");
   }
   if(!this.eval(execStr)){
	   if(!$(obj).data('tipsy'))
		   $(obj).MyTitle({defaultCss:'tipsr',title:"请重新填写本信息。",trigger:"manual"});
	   $(obj).attr("errorStyle","tipsr");
	   $(obj).MyTitle("show"); 
     return false;
   }
   else
   {
	   $(obj).removeAttr("errorStyle");
	   showRightIcon(obj);
   } 
  } 
   // $(obj).Title({IsShow:false});
 if($(obj).data('tipsy'))
     $(obj).MyTitle("hide"); 
    return true;
  }else{
    return true;
 }
}
//显示一个勾号icon
function showRightIcon(obj){
	var offset=$(obj).offset();
	var $this=$("<div class='rightIcon' style='left:"+(offset.left+$(obj).width()+20)+"px;top:"+(offset.top+5)+"px'></div>").appendTo("body");
	$(obj).bind("focus",function(){
		$this.remove();
	});
}
/*
*功能：检验select内容是否符合要求，并给出相应的提示
*参数 obj：jquery对象
*/
function CheckSelect(basicObj){
 var index=basicObj.selectedIndex;
 
 var pattern=basicObj.getAttribute("pattern");
	if(basicObj.getAttribute("webpattern"))
		pattern=basicObj.getAttribute("webpattern");
	
 if(pattern!=null&&pattern!=undefined&&index<=0){
  // $(basicObj).focus();
  var ui=$("#"+$(basicObj).attr("selectid"));//select_16557372

  
  
  if(!ui.data('tipsy'))
	  ui.MyTitle({defaultCss:'tipsr',title:"请选择该选项。",trigger:"manual"});
  if($(basicObj).attr("errormsg"))
	  ui.attr("errormsg",$(basicObj).attr("errormsg"));
  
  ui.attr("errorStyle","tipsr");
  ui.MyTitle("show"); 
  return false;

 }else {
// if(basicObj.getAttribute("pattern")!=null&&basicObj.getAttribute("pattern")!=undefined){
 	 //$(basicObj).parent().Title({Title:"",StyleName:"TitleRight",OffsetY:-5,IsShow:true});
 	// $(".TitleErrorRight").hide("fast");
   return true;
// }
  }
} 

//上面一个函数的继续附属函数
function GoOn(ind)
{
    var obj=window.eventList[ind];
    window.eventList[ind] = null;
    if(obj.NextStep)
      obj.NextStep();
    else
      obj();
}
function Pause(obj,pSecond)
{
/*利用window.eventList系统对象来传递Test这个弱对象，这是由于你的函数有可能是带参数的。
由面向对象的思想，传递参数尽量不要采用全局变量，因为你的对象有可能有1个也有可能有n个，而
有些时候所创建对象的个数并不是你事先可以知道的，那么要创建全局变量的个数自然很难判断了。
所以此处用一个中间载体来传递对象，而不是参数值！*/
   if(window.eventList==null) 
	   window.eventList=new Array();
   var ind=-1;
   for(var i=0;i<window.eventList.length;i++)
   {
      if(window.eventList[i]==null)
      {
        window.eventList[i]=obj;
        ind=i;
        break;
      }
    }
    if(ind==-1)
    {
      ind=window.eventList.length;
      window.eventList[ind]=obj;
    }
    setTimeout("GoOn("+ind+")",pSecond);
}
function FormToStr(obj){
	return FormToStrFun(obj,true);
}
/*
*功能：将一个网页指定ID内部的所有表单格式化成可提交的形式，并且会触发自动验证
*参数 obj:指定id
*/
function FormToStrFun(obj,scrool){
	var str="";
	  if(!T$(obj)){
	     return null;
	  } 
	  var arr=T$(obj).getElementsByTagName("*");
	  for(var i=0;i<arr.length;i++){
	  if(arr[i].tagName!=undefined){
	     if(arr[i].tagName.toLowerCase()=="input"||arr[i].tagName.toLowerCase()=="textarea"){
	      if(arr[i].type.toLowerCase()=="text"||arr[i].type.toLowerCase()=="hidden"||arr[i].type.toLowerCase()=="password"||arr[i].tagName.toLowerCase()=="textarea"){
	    	 if(arr[i].name.length>0){
	    		 if($(arr[i]).attr("valueDemo")!=$(arr[i]).val())
	                str+="&"+encodeURIComponent(arr[i].name)+"="+encodeURIComponent(arr[i].value);
	    		 else
	    			 str+="&"+encodeURIComponent(arr[i].name)+"= ";
	    	 }
	       if(!CheckTextBox($(arr[i]))){ 
	    	    if($(arr[i]).attr("errorName"))
	    	    {
	     		   Wrong("请检查"+$(arr[i]).attr("errorName"));　
	     		   Pause(this,1000);
	     		　  this.NextStep = function(){
	     		 　　 　Close();
	     		  if(scrool)
	     		 　　 $(arr[i]).ScrollTo({Top:100});
	     	     }
	    	    }
	    	    else
	    	    {if(scrool)
	    	    	　 $(arr[i]).ScrollTo({Top:100});
	    	    }
	         return null;
	       }
	     }else {
	       if(arr[i].type.toLowerCase()=="checkbox"){
		      // if(!CheckRadio($(arr[i]))){
		       //	 $(arr[i]).ScrollTo(400);
		       //  return null;
		      // }else {
	    	   if(arr[i].checked){
		         if(str.indexOf("&"+encodeURIComponent(arr[i].name)+"=")>-1){
		           str=str.replace("&"+encodeURIComponent(arr[i].name)+"=","&"+encodeURIComponent(arr[i].name)+"="+encodeURIComponent(arr[i].value)+encodeURIComponent("\u2229"));
		         }else {
		           str+="&"+encodeURIComponent(arr[i].name)+"="+encodeURIComponent(arr[i].value);
		         }
	    	   }
		      // }
	        }else {
		       if(arr[i].type.toLowerCase()=="radio"||arr[i].type.toLowerCase()=="checkbox"){
		         if(arr[i].checked){
		           str+="&"+encodeURIComponent(arr[i].name)+"="+encodeURIComponent(arr[i].value);
		         }
		       }
	        }
	     } 
	   }else if(arr[i].tagName.toLowerCase()=="select"){
	       var index=arr[i].selectedIndex;
	       if(arr[i].getAttribute("pattern")!=null&&arr[i].getAttribute("pattern")!=undefined&&index<=0){
	    	   
	         if(!CheckSelect(arr[i])){
	        	if($(arr[i]).attr("errorName"))
	     	    {
	      		   Wrong("请选择"+$(arr[i]).attr("errorName"));　
	      		   Pause(this,1000);
	      		　  this.NextStep = function(){
	      		 　　 　Close();
	      		if(scrool)
	      		 　　 $(arr[i]).parent().ScrollTo({Top:100});
	      	     }
	     	    }
	     	    else
	     	    {
	     	    	if(scrool)
	     	    	 $(arr[i]).parent().ScrollTo({Top:100});
	     	    }
	         	// $(arr[i]).ScrollTo(400);
	        	
	             return null;
	         }
	       }else {
	    	   //没救了
	    	 
	       }
	       if(index>=0){
	         if(arr[i].options){
 
	        	 if(arr[i].name.length>0){
	              str+="&"+encodeURIComponent(arr[i].name)+"="+encodeURIComponent(arr[i].options[index].value);
	              
	        	 }
	         }
	       
	     }
	   }
	  }
	 }
	
	  return str.substring(1,str.length);
}





/**
功能:定时器
描述：
  1. everyTime(时间间隔, [计时器名称], 函式名称, [次数限制], [等待函式程序完成])
  2. oneTime(时间间隔, [计时器名称], 呼叫的函式)
  3. stopTime ([计时器名称], [函式名称])
 例子：
//每1秒执行函式test()
function test(){
  //do something...
 }
$('body').everyTime('1s',test);
//每1秒执行
$('body').everyTime('1s',function(){
//do something...
});
//每1秒执行，并命名计时器名称为A
$('body').everyTime('1s','A',function(){
//do something...
});
//每20秒执行，最多5次，并命名计时器名称为B
$('body').everyTime('2das','B',function(){
//do something...
},5);
//每20秒执行，无限次，并命名计时器名称为C
//若时间间隔抵到，但函式程序仍未完成则需等待执行函式完成后再继续计时
$('body').everyTime('2das','C',function(){
  //执行一个会超过20秒以上的程式
},0,true);
//倒数10秒后执行
$('body').oneTime('1das',function(){
//do something...
});
//倒数100秒后执行，并命名计时器名称为D
$('body').oneTime('1hs','D',function(){
//do something...
});
//停止所有的在$('body')上计时器
$('body').stopTime ();
//停止$('body')上名称为A的计时器
$('body').stopTime ('A');
//停止$('body')上所有呼叫test()的计时器
$('body').stopTime (test);
* @version 1.2
*
**/
jQuery.fn.extend({
	everyTime: function(interval, label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times) {
			var counter = 0;
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			interval = jQuery.timer.timeParse(interval);
			if (typeof interval != 'number' || isNaN(interval) || interval < 0)
				return;
			if (typeof times != 'number' || isNaN(times) || times < 0) 
				times = 0;
			times = times || 0;
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			if (!timers[label])
				timers[label] = {};
			fn.timerID = fn.timerID || this.guid++;
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			handler.timerID = fn.timerID;
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			this.global.push( element );
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			if ( timers ) {
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});
//解除绑定
jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});
//转向到
function Redirect(url)
{
	self.location=url;
}
/**
 * 原Api地址:http://onehackoranother.com/projects/jquery/tipsy/#
 * 新添加了自动判断方向的功能,该功能会强制沿着顺时针方向改变控件位置
 * 现在宽度是不固定的,当页面在拉伸过成功浮动层本身的宽度也在变化,给计算带来困扰,所以现在限定在100-236像素之间
 * 目前支持两个样式,红色和黄色,黄色为默认样式,只有默认样式才会自动隐藏,其他样式由于设置的data固定了,暂时不支持
 * 并且改名原控件名称为为MyTitle,方便记忆
 */
(function($) {
 function fixTitle($ele) {
     if ($ele.attr('title') || typeof($ele.attr('mytitle')) != 'string') {
         $ele.attr('mytitle', $ele.attr('title') || '').removeAttr('title');
     }
 }
 function Tipsy(element, options) {
     this.$element = $(element);
     this.options = options;
     this.enabled = true;
     fixTitle(this.$element);
 }
 Tipsy.prototype = {
     show: function() {
         var title = this.getTitle();
         if (title && this.enabled) {
             var $tip = this.tip();
             $tip.addClass("tipsr"); 
         //alert(this.$element.attr("errorStyle"));
            var hasError=this.$element.attr("errorStyle");
            if(!hasError){
            	if(this.$element.attr("mytitle"))
                 $tip.find('.inner-inner')[this.options.html ? 'html' : 'text'](this.$element.attr("mytitle"));
            	else
            		$tip.find('.inner-inner')[this.options.html ? 'html' : 'text'](title);
              $tip[0].className = 'tipsy';
            }
            else{
            	 var errmsg=this.$element.attr("errormsg");
            	 if(this.$element.attr("errmsg"))
            		 errmsg=this.$element.attr("errmsg");
              $tip.find('.inner-inner')[this.options.html ? 'html' : 'text'](errmsg);
              $tip[0].className = 'tipsy '+hasError;
            }
      
             $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
             //这里是新添加的,对于大于236宽度的统一限制宽度
             var nowWidth=$tip.width();
             if(nowWidth>236){
            	 $tip.find(".tipsy-inner").css({"width":"236px"});
            	 nowWidth=236;
             }
             else if(nowWidth<100)
             {
            	 $tip.find(".tipsy-inner").css({"width":"236px"});
            	 nowWidth=100;
             }
             
             var pos = $.extend({}, this.$element.offset(), {
                 width: this.$element[0].offsetWidth,
                 height: this.$element[0].offsetHeight
             });
             
             var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
             var gravity = (typeof this.options.gravity == 'function')
                             ? this.options.gravity.call(this.$element[0])
                             : this.options.gravity;
           var po=this.$element.attr("position");
           if(po)
        	   gravity=po;
     //   alert(actualHeight+":"+ pos.top);
        //获取总宽度
        var docWidth=$(window).width();  
        var docHeight=$(window).height();
      //如果定义在右边并且宽度不够,那么换到下面,冗余10个像素
  		if((docWidth<(pos.left + pos.width+nowWidth+10))&& (gravity.charAt(0)=='w'))
  			gravity='n'; 
  	   //如果定义在下面并且下面不够或者放在下面还是不够宽度那么定义在左边,冗余10个像素
  		if(((docHeight<(pos.top + pos.height+actualHeight+10)) ||  docWidth<(pos.left + pos.width/2+nowWidth/2+10))&& (gravity.charAt(0)=='n'))
  			gravity='e';  
  	  //如果定义在左边并且宽度不够,那么换到上面,冗余10个像素
  		if((pos.left<(nowWidth+10))&& (gravity.charAt(0)=='e'))
  			gravity='s'; 
  	   //如果定义在下面并且下面不够那么定义在下边,冗余10个像素
  		if((pos.top<(actualHeight+10))&& (gravity.charAt(0)=='s'))
  			gravity='n';

             var tp;
             switch (gravity.charAt(0)){
                 case 'n':
                     tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                     break;
                 case 's':
                     tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                     break;
                 case 'e':
                     tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                     break;
                 case 'w':
                     tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                     break;
             }
             
             if (gravity.length == 2) {
                 if (gravity.charAt(1) == 'w') {
                     tp.left = pos.left + pos.width / 2 - 15;
                 } else {
                     tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                 }
             }
             
             $tip.css(tp).addClass("tipsy-"+ gravity);
             
             if (this.options.fade) {
                 $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
             } else {
                 $tip.css({visibility: 'visible', opacity: this.options.opacity});
             }
         }
     },
     
     hide: function() {
         if (this.options.fade) {
             this.tip().stop().fadeOut(function() { $(this).remove(); });
         } else {
             this.tip().remove();
         }
     },
     
     getTitle: function() {
         var title, $e = this.$element, o = this.options;
         fixTitle($e);
         var title, o = this.options;
         if (typeof o.title == 'string') {
             title =o.title == 'title' ? $e.attr('mytitle') : o.title;
            
         } else if (typeof o.title == 'function') {
             title = o.title.call($e[0]);
         }
         title = ('' + title).replace(/(^\s*|\s*$)/, "");
         return title || o.fallback;
     },
     
     tip: function() {
         if (!this.$tip) {
             this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"><div class="inner-inner"></div></div></div>');
         }
         return this.$tip;
     },
     validate: function() {
         if (!this.$element[0].parentNode) {
             this.hide();
             this.$element = null;
             this.options = null;
         }
     },
     enable: function() { this.enabled = true; },
     disable: function() { this.enabled = false; },
     toggleEnabled: function() { this.enabled = !this.enabled; }
 };
 
 $.fn.MyTitle = function(options){
     if (options === true){
         return this.data('tipsy');
         }else if (typeof options == 'string'){
        	 if(this.data('tipsy'))
               return this.data('tipsy')[options]();
        	 else
        		 return null;
     } 
     options = $.extend({}, $.fn.MyTitle.defaults, options);
     function get(ele) {
         var tipsy = $.data(ele,'tipsy');
         if (!tipsy) {
             tipsy = new Tipsy(ele, $.fn.MyTitle.elementOptions(ele, options));
             $.data(ele,'tipsy', tipsy);
         }
         return tipsy;
     }
     function enter() {
         var tipsy = get(this);
         tipsy.hoverState = 'in';
         if (options.delayIn == 0) {
             tipsy.show();
         } else {
             setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
         }
     };
     function leave(){
         var tipsy = get(this);
         tipsy.hoverState = 'out';
         if (options.delayOut == 0){
             tipsy.hide();
         }else{
             setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
         }
     };
     if (!options.live) this.each(function() { get(this); });
     if (options.trigger != 'manual') {
         var binder   = options.live ? 'live' : 'bind',
             eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
             eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
         this[binder](eventIn, enter)[binder](eventOut, leave);
     }
     return this;
 };
  
 $.fn.MyTitle.defaults ={
	 defaultCss:' ', //不为空的时候会使用这个css
     delayIn: 0,
     delayOut: 0,
     fade: false,
     fallback: '',
     gravity: 'w',
     html: true,
     live: false,
     offset: 0,
     opacity: 1,
     title: 'title',
     trigger: 'hover'
 };
 
 // Overwrite this method to provide options on a per-element basis.
 // For example, you could store the gravity in a 'tipsy-gravity' attribute:
 // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
 // (remember - do not modify 'options' in place!)
 $.fn.MyTitle.elementOptions = function(ele, options) {
     return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
 };
 
 $.fn.MyTitle.autoNS = function() {
     return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
 };
 
 $.fn.MyTitle.autoWE = function() {
     return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
 };
 
})(jQuery);
//兼容的Title
 

/*
 * 更改title的样式为错误或者其他,当为错误时传入的是errormsg信息采用另一个样式
 * style : true false title:标题
 */
function changeTitle(obj,style){
	if(style.length>0)
	  $(obj).attr('errorStyle',style);
	else
		 $(obj).removeAttr('errorStyle');
}


/*************************系统的顶部函数***************************/
function LoginScuess(userName,isClose){ 
	if(isClose)
	       Close();
	$("#userNameCookie").text($.cookie("userName"));
	$("#TopLeft").slideUp("fast"); 
	$("#TopLeftLogin").slideDown("fast");
}
function LoginOut(){
	 $.cookie("userID",null, { path: '/' });
	   $.cookie("loginStatus",null,{ path: '/' });
	   $.cookie("safe",null,{ path: '/' });
	   $.cookie("parentId",null,{ path: '/' });
	  
	   $("#TopLeftLogin").hide();
	   $("#TopLeft").fadeIn();
//	  if(chat)
//	  {
//		  chat.LoginOut();
//	  }
	   Right("亲爱的"+$.cookie("userName")+",您已成功注销登录！",{CloseTime:1}); 
	   
//	   $('body').oneTime('1s',function(){
//          	//Redirect("/");
//      	});
  //    $.cookie("userName",null,{ path: '/' });
}

//进行搜索
function doSearch(){
	var values=$("#topSearchInput").val();
	if(values=="请输入您要搜索的关键字" || values=="")
	    Wrong("您还未输入需要搜索的内容！",{CloseTime:1});
	else
		Alert("searching.."+$("#topSearchInput").val());
}

var inputField = $("#topSearchInput");
var searchField = $("#SearchSelect");
 var ulMain = $("#popup");
 var curIndex = 0;
 var searchcount = 0; 
 
function InitSearch(currentType){
	var local=currentType; 
	if(local.indexOf("shopantique")==0)
		$("#SearchSelect").val("0");
	else if(local.indexOf("stall")==0)
		$("#SearchSelect").val("1");
	else if(local.indexOf("auction")==0)
	{
		$("#SearchSelect").val("2");
	}
	else if(local.indexOf("evaluate")==0)
		$("#SearchSelect").val("3");
	else if(local.indexOf("contest")==0)
		$("#SearchSelect").val("4");
	else if(local.indexOf("sourcing")==0)
		$("#SearchSelect").val("7");
	else if(local.indexOf("ynews")==0)
		$("#SearchSelect").val("5");
	else if(local.indexOf("videos")==0)
		$("#SearchSelect").val("6");
	else
	    $("#SearchSelect").val("8");
	inputField = $("#topSearchInput");
	searchField = $("#SearchSelect");
	ulMain = $("#popup");
$("body").bind("click",function(){
	 ulMain.html("");
	 ulMain.css({"border":"none","font-size":"0px"});
	});
$("#topSearchInput").keyup(function(event){
	var $input=$(this);
	 var myEvent = event || window.event;  
		 var keycode = myEvent.keyCode;
		 
	  if ((keycode >= 65 && keycode<=90) || (keycode >= 48 && keycode <= 57) ||(keycode>=96 && keycode<=105) || keycode == 46 || keycode == 8 || keycode == 32)
	  //just only you select a-z A-Z execute search
	  {
	  	 	var url="/search/antique/autocomplete";  
   		$.post(url,{parms:inputField.val(),typeStr:searchField.val()},function(data)
   		{
   			var temp = "" ;
				$(data).find("DataRow").each(function(index){										
					temp = temp + "<div name='"+index+"'>"+"<span>约"+$('Count',this).text()+"条</span>"+$('KeyWord',this).text()+"</div>" ;
		}); 			
   		ulMain.html(temp);	
   		if(temp.length>0)
   		     ulMain.css({"border":"1px solid #afc2d1","font-size":"12px"});
   		else
   			ulMain.css({"border":"none","font-size":"0px"});
   		var tempUl = ulMain.children("div");
   		searchcount = tempUl.size();
   		//tempUl.eq(0).addClass("div-over");
   		//the first row have a default class ac_over
   		tempUl.hover
   				(//block add hover
						function()
						{
							tempUl.eq(curIndex).removeClass("div-over")
							//remove current index class
							curIndex = $(this).attr("name");
							//remain current index value 
							$(this).addClass("div-over");
						},  
							function(){$(this).removeClass("div-over");}  
						)
						.bind("click",function()
						{//search 
							 var clone=$(this).clone();
					  			clone.find("span").remove();
					  			$input.val(clone.text());
							 ulMain.html("");
							 ulMain.css({"border":"none","font-size":"0px"});
							 doSearch();
						});  
   		
   		     $("#popup").bind("mouseout",function()
				 {
					tempUl.eq(curIndex).addClass("div-over");
				});
   		  ulMain.children("div:odd").addClass("div-odd");
   		});  
	  }
	  else if(keycode==38||keycode==40)
	  {//click up or down 
	  		if(keycode==38)
	  		{//up
	  			 ulMain.children("div").eq(curIndex).removeClass("div-over");
	  			  curIndex-- ;
	  			 if(curIndex<0)
	  			 {
	  			 	curIndex = searchcount-1;
	  			 }
	  			 ulMain.children("div").eq(curIndex).addClass("div-over");
	  		}
	  		else
	  		{//down
	  			 ulMain.children("div").eq(curIndex).removeClass("div-over");
	  			 curIndex++ ;
	  			 if(curIndex>searchcount-1)
	  			 {
	  			 	curIndex = 0;
	  			 }			 
	  			 ulMain.children("div").eq(curIndex).addClass("div-over");			  		
	  		}
	  		 var clone=ulMain.children("div").eq(curIndex).clone();
	  			clone.find("span").remove();
	  			$input.val(clone.text());
	  }
	  else if(keycode==13)
	  {// click enter
		      ulMain.html("");
	  		 ulMain.css({"border":"none","font-size":"0px"});
	  		doSearch();
	  }
	  else
	  {// nothing
		  ulMain.html("");
		  ulMain.css({"border":"none","font-size":"0px"});
	  }			
});

}


function showLogin(){
	 Iframe({Url:'/LoginRedirect?callback=LoginScuess', fromObj:T$("login"),Width:540,Height:240,scrolling:'no',Title:'登录到艺粹网'});
}
function showLoginOut(){
	 Ask({Msg:"您确定注销登录么？",
		 fromObj:T$("logout"),
		 callback:"LoginOut()"
		 }); 
}
/**
 * 功能:初始化顶部的js函数
 * @param currentType 当前所处页面类型,也就是搜索框需要选中那个选项
 * @return
 */
function initTop(currentType){
	 var userNameCookie=$.cookie("userName");
	 var loginStatus=$.cookie("loginStatus");
	 if(loginStatus)
	 {
	 	$("#userNameCookie").text(userNameCookie);
	 	$("#TopLeft").hide();
	 	$("#TopLeftLogin").show();
	 }else{
	 	$("#TopLeftLogin").hide();
	 	$("#TopLeft").show();
	 }
	
	InitSearch(currentType); 
	
	$("#SearchSelect").UiSelect({
	 	       StyleNormal: 'SearchSelectGray',  //正常状态的样式
	 	       StyleHover: 'SearchSelectBlue',  //悬停的样式
	 	       StyleDropDown: 'SearchSelectDropDown',  //下拉的样式
	 	       itemHeight:25, //下拉项每项的高度
	 	       MaxShow:10,//最多显示多少项
	 		   InnerWidth:95,//如果是0就自动计算，否则就是用这个固定的大小
	 	       OuterWidth:108,//如果是0就自动计算，否则就是用这个固定的大
	 	       Top:0,//下拉部分上偏移量
	 	       Left:0,//下拉部分左偏移量
	 	       ControlSeleter:'',       //被控制区域，如果为空就创建一个
	 	       Auto:false,//是否需要鼠标悬停就下拉
	 	       IsShow:true //是否显示，true为显示
	 	  }); 
}
/****************************************************/


jQuery.fn.FixedHeader = function(options) { var settings = jQuery.extend({ headerrowsize: 1, highlightrow: false, highlightclass: "highlight" }, options); this.each(function(i) { var $tbl = $(this); var $parent=$(this).parent(); var $tblhfixed = $tbl.find("tr:lt(" + settings.headerrowsize + ")"); var headerelement = "th"; if ($tblhfixed.find(headerelement).length == 0) headerelement = "td"; if ($tblhfixed.find(headerelement).length > 0) { $tblhfixed.find(headerelement).each(function() { $(this).css("width", $(this).width()); }); var $clonedTable = $tbl.clone().empty(); var tblwidth = GetTblWidth($tbl); $clonedTable.attr("id", "fixedtableheader" + i).css({ "position": "fixed", "top": "0", "left": $tbl.offset().left }).append($tblhfixed.clone()).width(tblwidth).hide().appendTo($parent); if (settings.highlightrow) $("tr:gt(" + (settings.headerrowsize - 1) + ")", $tbl).hover(function() { $(this).addClass(settings.highlightclass); }, function() { $(this).removeClass(settings.highlightclass); }); $(window).scroll(function() { if (jQuery.browser.msie && jQuery.browser.version == "6.0") $clonedTable.css({ "position": "absolute", "top": $(window).scrollTop(), "left": $tbl.offset().left }); else $clonedTable.css({ "position": "fixed", "top": "0", "left": $tbl.offset().left - $(window).scrollLeft() }); var sctop = $(window).scrollTop(); var elmtop = $tblhfixed.offset().top; if (sctop > elmtop && sctop <= (elmtop + $tbl.height() - $tblhfixed.height())) $clonedTable.show(); else $clonedTable.hide(); }); $(window).resize(function() { if ($clonedTable.outerWidth() != $tbl.outerWidth()) { $tblhfixed.find(headerelement).each(function(index) { var w = $(this).width(); $(this).css("width", w); $clonedTable.find(headerelement).eq(index).css("width", w); }); $clonedTable.width($tbl.outerWidth()); } $clonedTable.css("left", $tbl.offset().left); }); } }); function GetTblWidth($tbl) { var tblwidth = $tbl.outerWidth(); return tblwidth; } };



/********图片预加载*******/
jQuery.fn.loadImgPre= function(options) {
	options = $.extend({
		 src : ""
	},options);
	var _self = this;
	_self.hide();
	var img = new Image();
	$(img).load(function(){
		_self.attr("src", options.src);
		_self.fadeIn("slow");
	}).attr("src", options.src);  //.atte("src",options.src)要放在load后面，
	return _self;
}
//js替换所有
String.prototype.replaceAll = function(s1,s2){   

	var r = new RegExp(s1.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"),"ig");
	return this.replace(r,s2);
	}

function encodeURI(str){
	str=str+"";
	str=str.replaceAll("-","__");
	str=str.replaceAll(".","___"); 
	return encodeURIComponent(str);
}