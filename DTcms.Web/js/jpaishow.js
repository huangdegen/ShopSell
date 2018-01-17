
//倒计时:
var nowTimeNum = 0;
var newEndTime = "";
function PmNowTimeShow() {
	//dwr.engine.setAsync(false);
	spIndexDwr.PmNowTime(
	{
	      callback:function(data) {
	    	  nowTimeNum = new Date(data).getTime();
		  }
	});
}
function show_time(nowTime,endTime) {
	PmNowTimeShow();
	var time_end = new Date(newEndTime).getTime(); //设定目标时间
	nowTimeNum = parseInt(nowTimeNum);
    //计算时间差:
    var time_distance = time_end - nowTimeNum;
    var int_hour = Math.floor(time_distance/3600000);
    time_distance -= int_hour * 3600000;
    //分
    var int_minute = Math.floor(time_distance/60000);
    time_distance -= int_minute * 60000;
    //秒 
    var int_second = Math.floor(time_distance/1000);
    //时分秒为单数时、前面加零:
    var isEnd = 0;
    if(int_hour < 10) {
    	if(int_hour < 0) {
    		isEnd = 1;
    		int_hour = 0;
    	}
        int_hour = "0" + int_hour;
    }
    int_minute = (isEnd == 1) ? 0 : int_minute;
    if(int_minute < 10) {
    	int_minute = (int_minute < 0) ? 0 : int_minute;
        int_minute = "0" + int_minute; 
    }
    int_second = (isEnd == 1) ? 0 : int_second;
    if(int_second < 10) {
    	int_second = (int_second < 0) ? 0 : int_second;
        int_second = "0" + int_second; 
    }	
    //显示时间:
    if(int_hour == "00" && int_minute == "00" && int_second == "00") {
    	document.getElementById("iendShow").innerHTML = "拍卖已结束!";
    }else {
	    $("#time_h").text(int_hour);
	    $("#time_m").text(int_minute);
	    $("#time_s").text(int_second);
    }
}
var interval = "";
function PmEndTimeShow(pmNo) {
	
	//dwr.engine.setAsync(false);
	spIndexDwr.PmEndTime(pmNo,
	{
	      callback:function(data) {
	    	  if(data != null && data == "end") {
	    		  document.getElementById("iendShow").innerHTML = "拍卖已结束!";
	    	  }else if(data != null && data == "nostart") {
	    		  document.getElementById("iendShow").innerHTML = "拍卖未开始!";
	    	  }else if(data != null && data.indexOf(",") > 0) {
	    		  var strs = new Array();
				  strs = data.split(",");
	    		  document.getElementById("iendShow").innerHTML = "距离结束 <strong class=\"colr_black\" id=\"time_h\">00</strong>时<strong class=\"colr_black\" id=\"time_m\">00</strong>分<strong class=\"colr_black\" id=\"time_s\">00</strong>秒";
	    		  if(interval != "") {
	    			  window.clearInterval(interval);
	    		  }
	    		  newEndTime = strs[1];
	    		  show_time("",""); //首先启动;
	    		  interval = window.setInterval("show_time('','')",1000);
	    	  }else {
	    		  document.getElementById("iendShow").innerHTML = "出价后倒计时 <strong class=\"colr_black\">24</strong> 小时，最终出价最高者得!";
	    	  }
		  }
	});
}

var fenstr = "";
function ShowPmRecs(pmNo,pagen,isfirst) {
	//dwr.engine.setAsync(false);
	spIndexDwr.PmPayRecs(pmNo,pagen,
	{
	      callback:function(datalist) {
	    	
	    	var cjnumStr = 0;
	    	var nowcjia = "";
			var endTime = "";
	    	var topStr = "<table class=\"bidtbl\"><tr><th class=\"text-l\">状态</th><th>竞拍人</th><th>价格</th></tr>";
			if(datalist != null && datalist.length > 0) {
				var jpstr = "";
				var listr = "";
				for(var i=0;i<datalist.length;i++) {
					jpstr = "出局";
					listr = "";
					if(i == 0) {
						nowcjia = datalist[0].chuPrice;
						cjnumStr = parseInt(datalist[0].totalRecs);
						endTime = datalist[0].endTime;
					}					
					if(datalist[i].pm_state == "1") {
						jpstr = "领先";
						//listr = " class=\"effective\"";
					}
					if(i < 3) {
						
						topStr += "<tr><td class=\"text-l\">"+jpstr+"</td><td>"+datalist[i].userName+"</td><td>¥"+datalist[i].chuPrice+"</td></tr>";
						//topStr += "<li"+listr+"><span class=\"col_1\"><i class=\"tab\">"+jpstr+"</i></span><span class=\"col_2\">"+datalist[i].userName+"</span><span class=\"col_3\">¥ "+datalist[i].chuPrice+"</span></li>";
					}
				}
			}
			if(nowcjia != null && nowcjia != "") {
				document.getElementById("inowjia").innerHTML = nowcjia;
			}
			if(endTime != null && endTime.indexOf(":") > 0) {
				//EndTimeSet(endTime);
				newEndTime = endTime;
			}
			document.getElementById("iltcjnum").innerHTML = cjnumStr;
			document.getElementById("icjnum").innerHTML = "("+cjnumStr+")";
			document.getElementById("itoprecshow").innerHTML = topStr+"</table>";
			if(cjnumStr >= 4) {
				document.getElementById("imorerecdiv").style.display = "";
			}
		  }
	});
}
function AllPmRecs(pmNo,pagen) {
	//dwr.engine.setAsync(false);
	spIndexDwr.PmPayRecs(pmNo,pagen,
	{
	      callback:function(datalist) {
	    	
	    	var pn = parseInt(pagen); //当前页码;
			var pc = 0; //总分页数;
			var jprecAllStr = "<table class=\"bidtbl\"><tr><th class=\"text-l\">状态</th><th>竞拍人</th><th>价格</th><th>时间</th></tr>";
			if(datalist != null && datalist.length > 0) {
				var jpstr = "";
				var listr = "";
				for(var i=0;i<datalist.length;i++) {
					jpstr = "出局";
					listr = "";
					if(i == 0) {
						pc = parseInt(datalist[0].totalCount);
					}					
					if(datalist[i].pm_state == "1") {
						jpstr = "领先";
						listr = " class=\"first-tr\"";
					}
					//全部:
					jprecAllStr += "<tr"+listr+"><td class=\"text-l\">"+jpstr+"</td><td>"+datalist[i].userName+"</td><td>¥"+datalist[i].chuPrice+"</td><td>"+datalist[i].chuDate+"</td></tr>";
				}
				var upageStr = "";
				if(pn > 1) {
					upageStr = "<a href=\"javascript:void(0);\" onclick=\"AllPmRecs('"+pmNo+"','1');\" class=\"firstPage\">首页</a><a href=\"javascript:void(0);\" onclick=\"AllPmRecs('"+pmNo+"','"+(pn-1)+"');\" class=\"backPage\">&lt;上一页</a>";
				}
				var npageStr = "";
				if(pn < pc) {
					npageStr = "<a href=\"javascript:void(0);\" onclick=\"AllPmRecs('"+pmNo+"','"+(pn+1)+"');\" class=\"nextPage\">下一页&gt;</a><a href=\"javascript:void(0);\" onclick=\"AllPmRecs('"+pmNo+"','"+pc+"');\" class=\"lastPage\">尾页</a>";
				}
				fenstr = "";
				if(upageStr != "" || npageStr != "") {
					fenstr = "<div class=\"borderBox\">"+upageStr+npageStr+"</div>";
				}
			}
			document.getElementById("iallrecshow").innerHTML = jprecAllStr+"</table>";
			//document.getElementById("irecpageshow").innerHTML = fenstr;
		  }
	});
}
function DoSetEndTime(nEndTime) {
	newEndTime = nEndTime;
}
function EndTimeSet(nEndTime) {
	setTimeout("DoSetEndTime('"+nEndTime+"')",200);
}
function DoAllShow() {
	//document.getElementById("iallrecshow").innerHTML = jprecAllStr;
	//document.getElementById("irecpageshow").innerHTML = fenstr;
}
function PaimRecAll() {
	//setTimeout("DoAllShow()",300);
}
function PaimReShow(pmNo) {
	ShowPmRecs(pmNo,"1",0);
	//PaimRecAll();
}
function PaimRecSet(pmNo,jping) {
	if(jping == "1") {
		setInterval("PaimReShow('"+pmNo+"')",2000);
	}
}

function PmstrShow(spid,pmNo) {
	
	//dwr.engine.setAsync(false);
	spIndexDwr.PmsameToSee(spid,pmNo,
	{
	      callback:function(data) {
	    	  
	    	  if(data != null && data == "noLogin") {
	    		  SpxqToLogin(pmNo);
			  }else if(data != null && data == "noRenz") {
				  SpxqToGet();
			  }else if(data != null && data == "noRight") {
				  alert("温馨提示：该店铺卖家进行了信息保护，请咨询(右侧)服务顾问进行查看！");
			  }else if(data != null && data == "spHide") {
				  alert("温馨提示：该店铺卖家进行了信息保护，如需查看请联系服务顾问！");
			  }else if(data != null && data.indexOf("End") > 0) {
				var strs = new Array();
				strs = data.split(",");
				document.getElementById("ishowstr1").innerHTML = strs[0];
				document.getElementById("ishowstr2").innerHTML = strs[1];
				document.getElementById("ishowstr3").innerHTML = strs[2];
				document.getElementById("ishowstr4").innerHTML = strs[3];
			  }else {
				  alert("温馨提示：系统忙，请稍后重试！");
			  }
		  }
	});
}

//(XQ)收藏,70728:
function saveCollection() {
	
 	if(confirm("确定将此网店添加到收藏夹吗？") == true) {
 		window.open(wushop+"/toaddscj.html?shopId="+shopId,'',"");
	}
}
