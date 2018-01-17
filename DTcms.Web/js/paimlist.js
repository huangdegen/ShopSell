
//倒计时:
var nowTimeNum = 0;
function PmNowTimeShow() {
	dwr.engine.setAsync(false);
	spIndexDwr.PmNowTime(
	{
	      callback:function(data) {
	    	  nowTimeNum = new Date(data).getTime();
		  }
	});
}
function show_time(idx,endTime) {
    var time_end = new Date(endTime).getTime(); //设定目标时间
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
    $("#time_h"+idx).text(int_hour);
    $("#time_m"+idx).text(int_minute);
    $("#time_s"+idx).text(int_second);
}

function NowTimeAdd() {
	PmNowTimeShow();
}
function PaimTimeAdd(nowTime) {
	nowTimeNum = new Date(nowTime).getTime();
	//window.setInterval("NowTimeAdd()",1000);
}
function PaimTimeShow(idx,endTime) {
	show_time(idx,endTime);
	//window.setInterval("show_time('"+idx+"','"+endTime+"')",1000);
}

function acfytz() {
	var fy = document.getElementById("itzfy").value;
	window.location.href = "auctionListNew.html?page="+fy;
}

function PmstrShowLi(spid,pmNo) {

	dwr.engine.setAsync(false);
	spIndexDwr.PmsameToSee(spid,pmNo,
	{
		callback:function(data) {
			
			if(data != null && data == "noLogin") {
				SplbToLogin(pmNo);
			}else if(data != null && data == "noRenz") {
				SpxqToGet();
			}else if(data != null && data == "noRight") {
				alert("温馨提示：该店铺卖家进行了信息保护，请进入详情页面联系服务顾问查看店铺！");
			}else if(data != null && data == "spHide") {
				alert("温馨提示：该店铺卖家进行了信息保护，如需查看请联系服务顾问！");
			}else if(data != null && data.indexOf("End") > 0) {
				var strs = new Array();
				strs = data.split(",");
				document.getElementById("li_"+spid).innerHTML = strs[0];
			}else {
				alert("温馨提示：系统忙，请稍后重试！");
			}
		}
	});
}
