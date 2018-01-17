<%@ Page Language="C#" AutoEventWireup="true" Inherits="DTcms.Web.UI.Page.article_list" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="DTcms.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by DTcms Template Engine at 2018/1/16 0:12:46.
		本页面代码由DTcms模板引擎生成于 2018/1/16 0:12:46. 
	*/

	base.channel = "buyshop";
	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);
	const int pagesize = 3;

	templateBuilder.Append("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"zh\">\r\n<head>\r\n    <title>天猫网店店铺【出售,转让,交易,多少钱】天猫入驻|入驻天猫-舞泡</title>\r\n    <meta name=\"keywords\" content=\"网店转让,淘宝店铺出售,天猫转让,开网店,购买淘宝网店,卖网店,网店过户,淘宝店出售\" />\r\n    <meta name=\"Description\" content=\"舞泡天猫入驻平台,首家专业入驻天猫网店交易服务平台.提供天猫网店转让,天猫网店出售,天猫商城转让,购买天猫网店,天猫商城过户,开网店免费交流等综合性服务,至力打造天猫网店交易新体验!\" />\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/list.css\" />\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/ion.rangeSlider.css\" />\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/ion.rangeSlider.skinNice.css\" />\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\r\n    <meta http-equiv=\"Cache-Control\" content=\"no-siteapp\" />\r\n    <link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/base.css\" type=\"text/css\" rel=\"stylesheet\" />\r\n    <link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/newControl.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/respond.src.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/jquery-1.7.2.min.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/layer.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/base.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/device.js\"></");
	templateBuilder.Append("script>\r\n    <!--<script type=\"text/javascript\" src=\"dwr/engine.js\"></");
	templateBuilder.Append("script>-->\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("dwr/interface/spIndexDwr.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/indexTop.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/main");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n</head>\r\n<body>\r\n    <div id=\"totop\">\r\n        <div class=\"topBar\">\r\n            <div class=\"wrapper clearfix\">\r\n                <a href=\"http://www.5pao.com\" class=\"logo f-l\" target=\"_self\"></a>\r\n                <div class=\"topNav f-r\">\r\n                    <div class=\"entry\">\r\n                        <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/welshow0.js\"></");
	templateBuilder.Append("script>\r\n                    </div>\r\n                    <div class=\"mainNav\">\r\n                        <input type=\"hidden\" id=\"ioutflag\" value=\"\" />\r\n                        <ul class=\"nav clearfix\">\r\n                            <li class=\"tohome\">\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("index"));

	templateBuilder.Append("\" target=\"_self\">首页<i class=\"underline\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"imenu2\" href=\"/buyshop52-0-0-0-0-0-0-0-0-0-0-0-0-0/1.html\" target=\"_blank\">购买网店<i class=\"underline\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"imenu6\" href=\"");
	templateBuilder.Append(linkurl("shopsell"));

	templateBuilder.Append("\" target=\"_blank\">出售网店<i class=\"underline\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"imenu7\" href=\"");
	templateBuilder.Append(linkurl("spevaluate"));

	templateBuilder.Append("\" target=\"_blank\">网店估价<i class=\"underline\"></i></a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"imenu8\" href=\"/auctionshop.html\" target=\"_blank\">网店拍卖<i class=\"underline\"></i></a>\r\n                            </li>\r\n                            <!--<li class=\"listbox\">\r\n                                <a id=\"iwupao\" href=\"javascript:void(0)\" onmouseover=\"xialashow()\" onmouseout=\"hrefout()\" rel=\"nofollow\" class=\"more\" target=\"_self\">更多服务<i class=\"downIcon\"></i></a>\r\n                                <dl id=\"imy5pao\" class=\"nav_in_downlist\" onmouseover=\"xialashow()\" onmouseout=\"xialahide()\" style=\"display:none;\">\r\n                                    <dd><a href=\"http://www.5pao.com/shopmm/tmallruzhu.html\" target=\"_blank\">网店代入驻</a></dd>\r\n                                    <dd><a href=\"http://www.5pao.com/shopmm/daimanage.html\" target=\"_blank\">网店代运营</a></dd>\r\n                                    <dd>\r\n                                        <a href=\"http://www.weishengsheng.com?f=wupao\" target=\"_blank\">公众号交易</a>\r\n                                    </dd>\r\n                                    <dd>\r\n                                        <a href=\"http://dianshang.liyida.com/index.html?flag=wupao\" target=\"_blank\">电商贷款</a>\r\n                                    </dd>\r\n                                    <dd>\r\n                                        <a href=\"http://www.5pao.com/shopsv/index.html\" target=\"_blank\">企业服务</a>\r\n                                    </dd>\r\n                                    <dd>\r\n                                        <a href=\"http://www.5pao.com/shopmm/supertools.html\" target=\"_blank\">优选服务商</a>\r\n                                    </dd>\r\n                                </dl>\r\n                            </li>-->\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"header-placeholder\"></div>\r\n    </div>\r\n\r\n    <script type=\"text/javascript\">\r\n        var ig = \"2\";\r\n        if (ig != \"\") {\r\n            document.getElementById(\"imenu\" + ig).className = \"isNow\";\r\n        }\r\n    </");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/tmallIndex.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/ion.rangeSlider.js\"></");
	templateBuilder.Append("script>\r\n    <form name=\"tmallform\" id=\"index\">\r\n       \r\n\r\n\r\n\r\n        <div class=\"wrapper\" style=\"margin-top:20px;\">\r\n            <div class=\"listBanner\"></div>\r\n        </div>\r\n        <div class=\"wrapper\" style=\"margin-top:16px;\">\r\n            <div class=\"filtrateList listBg clearfix\">\r\n                <div class=\"searchbox clearfix\">\r\n                    <div class=\"f-l guide\">\r\n                        <h1>当前位置</h1>：\r\n                        <a href=\"/\" target=\"_self\">网店转让/出售</a> >\r\n                        <h1>天猫网店出售转让</h1>\r\n                    </div>\r\n                    <div class=\"f-r search\">\r\n                        <input type=\"text\" name=\"keywords\" id=\"keywords\"  class=\"searchTxt\" onkeydown=\"if(event.keyCode==13){SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');return false};\" placeholder=\"填写关键词或网店编号\" x-webkit-speech=\"\"/>\r\n                        <input type=\"button\" class=\"searchBtn\" value=\"搜索\" onclick=\"SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');\" />\r\n                    </div>\r\n                </div>\r\n                <dl class=\"yourSel clearfix\" style=\"display:none;\">\r\n                    <dt>您的选择</dt>\r\n                    <dd id=\"onselect\"></dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>所在平台</dt>\r\n                    <dd class=\"szpt\">\r\n                        <!--<span class=\"fltTabTo\"><a href=\"#\" class=\"cur\" id=\"\">天猫商城</a></span>-->\r\n                        ");
	DataTable categoryList = getDefaultCategory(0,0);

	foreach(DataRow cdr in categoryList.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\"><a href=\"#\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),category_id,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["title"]) + "</a></span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>商城类型</dt>\r\n                    <dd class=\"sclx\">\r\n                        ");
	DataTable sclxs = getDictionaryList(1);

	foreach(DataRow cdr in sclxs.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\"><a href=\"#\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),shopStyleId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a></span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>注册类型</dt>\r\n                    <dd class=\"zclx\">\r\n                        ");
	DataTable zclxs = getDictionaryList(2);

	foreach(DataRow cdr in zclxs.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\" style=\"width:136px;\"><a href=\"#\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),regiserStyleId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a></span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>商标类型</dt>\r\n                    <dd class=\"sblx\">\r\n                        ");
	DataTable sblxs = getDictionaryList(3);

	foreach(DataRow cdr in sblxs.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\"><a href=\"#\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),chopStyleId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a></span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>所属行业</dt>\r\n                    <dd class=\"sshy\">\r\n                        ");
	DataTable sshys = getDictionaryList(4);

	foreach(DataRow cdr in sshys.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\"><a href=\"#\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),tradeStyleId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a></span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</dt>\r\n                    <dd style=\"position:relative;\" class=\"jg\">\r\n                        ");
	DataTable jgs = getPriceStyleList(1);

	foreach(DataRow cdr in jgs.Rows)
	{

	templateBuilder.Append("\r\n                        <span class=\"fltTabTo\">\r\n                            <a id=\"" + Utils.ObjectToStr(cdr["id"]) + "\" href=\"javascript:void(0)\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),priceStyleId,"cur").ToString());

	templateBuilder.Append("'>\r\n                                " + Utils.ObjectToStr(cdr["min_price"]) + "万\r\n                                ");
	if (int.Parse(cdr["max_price"].ToString())==0)
	{

	templateBuilder.Append("\r\n                                以上\r\n                                ");
	}
	else
	{

	templateBuilder.Append("\r\n                                -" + Utils.ObjectToStr(cdr["max_price"]) + "万\r\n                                ");
	}	//end for if

	templateBuilder.Append("\r\n                            </a>\r\n                        </span>\r\n                        ");
	}	//end for if

	templateBuilder.Append("\r\n                        <!--<span class=\"priceRange\">\r\n                            <input class=\"sxTxt\" type=\"text\" id=\"ilusprice\" value=\"\" /> - <input class=\"sxTxt\" type=\"text\" id=\"ilueprice\" value=\"\" /><input class=\"sxBtn\" type=\"button\" value=\"确认\" onclick=\"lujiaGo()\" />\r\n                        </span>-->\r\n                    </dd>\r\n                </dl>\r\n                <dl class=\"clearfix\">\r\n                    <dt>其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他</dt>\r\n                    <dd class=\"otherFlt\">\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">地区范围<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">扣分情况<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">纳税人资质<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">是否带货<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">提供货源<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">商标类别<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">商标过户<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                        <span class=\"fltTabTo\">\r\n                            <div class=\"selectBox\">\r\n                                <a href=\"javascript:void(0);\" rel=\"nofollow\" target=\"_self\">团队转让<i class=\"unfold\"></i></a>\r\n                            </div>\r\n                        </span>\r\n                    </dd>\r\n                </dl>\r\n                <dl id=\"otherQueryItem\" class=\"options clearfix\" style=\"display:none;\">\r\n                    <dd id=\"isareaDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,areaId,"cur").ToString());

	templateBuilder.Append("'>地区不限</a>\r\n                            </li>\r\n                            ");
	DataTable dqfws = getDictionaryList(5);

	foreach(DataRow cdr in dqfws.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),areaId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.sarea\" id=\"isarea\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"iskoufDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,deductPointId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable kfqks = getDictionaryList(6);

	foreach(DataRow cdr in kfqks.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),deductPointId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.skouf\" id=\"iskouf\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"nsrzzDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,aptitudeId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable nsrzzs = getDictionaryList(7);

	foreach(DataRow cdr in nsrzzs.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),aptitudeId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.nsrzz\" id=\"nsrzz\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"isdaihDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,takeGoodsId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable sfdhs = getDictionaryList(8);

	foreach(DataRow cdr in sfdhs.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),takeGoodsId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.sdaih\" id=\"isdaih\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"ishuoyDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,supplyGoodsId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable tghys = getDictionaryList(8);

	foreach(DataRow cdr in tghys.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),supplyGoodsId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.shuoy\" id=\"ishuoy\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"sbleibDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,chopTypeId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable sblbs = getDictionaryList(9);

	foreach(DataRow cdr in sblbs.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),chopTypeId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.sbleib\" id=\"sbleib\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"sbguohDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,chopTransferId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable sbghs = getDictionaryList(10);

	foreach(DataRow cdr in sbghs.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),chopTransferId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--<input type=\"hidden\" name=\"ssBean.sbguoh\" id=\"sbguoh\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                    <dd id=\"isteamDd\" style=\"display:none;\">\r\n                        <ul class=\"clearfix\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"0\" class='");
	templateBuilder.Append(Utils.strSelected(0,teamTransferId,"cur").ToString());

	templateBuilder.Append("'>不限</a>\r\n                            </li>\r\n                            ");
	DataTable tdzrs = getDictionaryList(8);

	foreach(DataRow cdr in tdzrs.Rows)
	{

	templateBuilder.Append("\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" idvalue=\"" + Utils.ObjectToStr(cdr["id"]) + "\" class='");
	templateBuilder.Append(Utils.strSelected(int.Parse(cdr["id"].ToString()),teamTransferId,"cur").ToString());

	templateBuilder.Append("'>" + Utils.ObjectToStr(cdr["name"]) + "</a>\r\n                            </li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                        <!--input type=\"hidden\" name=\"ssBean.steam\" id=\"isteam\" value=\"\" class=\"otherVal\" />-->\r\n                    </dd>\r\n                </dl>\r\n            </div>\r\n        </div>\r\n        <div class=\"wrapper tmall\">\r\n            <div class=\"recommend\">\r\n                <div class=\"hd listBg\">\r\n                    <a href=\"javascript:void(0)\" onclick=\"OrderResume();\" target=\"_self\" class=\"cur\">默认排序</a>\r\n\r\n                    <a href=\"javascript:void(0)\" onclick=\"jgfsOrder('1');\" target=\"_self\" class=\"up\">出售价格</a>\r\n                    <!--\r\n                    <a href=\"javascript:void(0)\" onclick=\"xyfsOrder('1');\" target=\"_self\" class=\"down\">收藏人气</a>\r\n                    -->\r\n                    <a href=\"javascript:void(0)\" onclick=\"sjpxOrder('1');\" target=\"_self\">独家店铺<img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/new.png\" border=\"0\" /></a>\r\n                </div>\r\n                ");
	DataTable goodsList = get_article_list("buyshop", 52,shopStyleId,regiserStyleId,chopStyleId,tradeStyleId,priceStyleId,areaId,deductPointId,aptitudeId,takeGoodsId,supplyGoodsId,chopTypeId,chopTransferId,teamTransferId,experienceId,pagesize, page, "status=0", out totalcount, out pagelist, "buyshop_list", category_id,shopStyleId,regiserStyleId,chopStyleId,tradeStyleId,priceStyleId,areaId,deductPointId,aptitudeId,takeGoodsId,supplyGoodsId,chopTypeId,chopTransferId,teamTransferId,experienceId, "__id__");

	foreach(DataRow dr in goodsList.Rows)
	{

	templateBuilder.Append("\r\n                <div class=\"listItem listBg\">\r\n                    <div class=\"rightBox clearfix\">\r\n                        <h2 class=\"linkTitle\">\r\n                            <a href=\"");
	templateBuilder.Append(linkurl("buyshop_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\" title=\"" + Utils.ObjectToStr(dr["title"]) + "\" target=\"_blank\"><img style=\"margin-left:0;margin-right:5px;\" src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" border=\"0\" />" + Utils.ObjectToStr(dr["title"]) + "</a>\r\n                            <a href=\"javascript:void(0)\" onclick=\"QQToAsk('199135','0','2')\" class=\"dujia\" title=\"如何让自己的网店获得该标识？点击免费获取\">独家</a>\r\n                            <a href=\"javascript:void(0)\" onclick=\"QQToAsk('199135','0','2')\" title=\"咨询服务顾问\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/listzx.png\" alt=\"咨询服务顾问\" border=\"0\" /></a>\r\n                        </h2>\r\n                        <ul>\r\n                            <li><span>所属行业：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["trade_style_id"])).ToString());

	templateBuilder.Append("</li>\r\n                            <li><span>消 保 金：</span>" + Utils.ObjectToStr(dr["fire_insurance"]) + "元(退还)</li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><span>所在地区：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["area_id"])).ToString());

	templateBuilder.Append("地区</li>\r\n                            <li><span>技术年费：</span>" + Utils.ObjectToStr(dr["Technology_fee"]) + "元(退还)</li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><span>商城类型：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["shop_style_id"])).ToString());

	templateBuilder.Append("</li>\r\n                            <li>\r\n                                <span>动态评分：</span>\r\n                                <div class=\"dtpfxht\"><i class=\"over\"></i><i class=\"over\"></i><i class=\"over\"></i></div>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li>\r\n                                <span>商标类型：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["chop_style_id"])).ToString());

	templateBuilder.Append("\r\n                                <a title=\"第25类-服装鞋帽\" style=\"text-decoration:underline;cursor:default;color:#c00000;\"></a>\r\n                            </li>\r\n                            <li><span>违规扣分：</span>" + Utils.ObjectToStr(dr["simple_score"]) + " - " + Utils.ObjectToStr(dr["serious_score"]) + " - " + Utils.ObjectToStr(dr["verybad_score"]) + "</li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><span>纳税资质：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["aptitude_id"])).ToString());

	templateBuilder.Append("</li>\r\n                            <li><span>是否带货：</span>");
	templateBuilder.Append(GetDictionaryName(Utils.ObjectToStr(dr["take_goods_id"])).ToString());

	templateBuilder.Append("</li>\r\n                        </ul>\r\n                        <ul class=\"storeMark\">\r\n                            <li>\r\n                                <span>卖家描述：</span>\r\n                                <a class=\"mjmsDetail\" href=\"shopsGet-199135.html\" target=\"_blank\">" + Utils.ObjectToStr(dr["zhaiyao"]) + "</a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul class=\"storeMark markLine2 clearfix\">\r\n                            <li class=\"f-l\"><span>一级类目：</span>" + Utils.ObjectToStr(dr["LeverCate"]) + "</li>\r\n                            <li class=\"f-r mark\">\r\n\r\n                                <i class=\"markNl\">公司认证</i>\r\n                                <i class=\"markNl\">可当面交易</i>\r\n                                <i class=\"markNl\">动态全红</i>\r\n\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"Pricebox clearfix\">\r\n                            <div class=\"f-r\">\r\n                                <div class=\"price\"><span>" + Utils.ObjectToStr(dr["sell_price"]) + "万</span></div>\r\n                                <a href=\"shopsGet-199135.html\" class=\"go-detail\" target=\"_blank\">查看详情></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n            </div>\r\n            <div class=\"pageNew clearfix\">\r\n                <div class=\"borderBox\">");
	templateBuilder.Append(Utils.ObjectToStr(pagelist));
	templateBuilder.Append("</div>\r\n                <!--<div class=\"borderBox\">\r\n                    <a href=\"tmallIndexNew-3-----------------------------1.html\" class=\"numpage cur\">1</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------2.html\" class=\"numpage \">2</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------3.html\" class=\"numpage \">3</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------4.html\" class=\"numpage \">4</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------5.html\" class=\"numpage \">5</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------6.html\" class=\"numpage \">6</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------7.html\" class=\"numpage \">7</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------8.html\" class=\"numpage \">8</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------9.html\" class=\"numpage \">9</a>\r\n                    <a href=\"tmallIndexNew-3-----------------------------2.html\" class=\"nextPage\">下一页&gt;</a>\r\n                </div>\r\n                <div class=\"goTo\"><span class=\"pageText\">共820页 跳转到第</span><input type=\"text\" name=\"tzfy\" id=\"itzfy\" value=\"1\" class=\"pageTxtBox\" /><span class=\"pageText\">页</span><input type=\"button\" class=\"pageOkBtn\" value=\"确定\" onclick=\"fytz()\" /></div>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"postwant-lf\">\r\n            <div class=\"wrapper\">\r\n                <img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/nofindwant.png\" alt=\"没有心仪网店\" style=\"vertical-align:middle;\" />\r\n                <div class=\"shixiaoms\">\r\n                    <h2 class=\"title ibvm\">暂未找到心仪网店？</h2>\r\n                    <p class=\"ibvm\">\r\n                        <a href=\"javascript:void(0)\" class=\"zixun\" onclick=\"SjQqToAsk('1')\">咨询服务顾问<img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/zixun.png\" border=\"0\" /></a>\r\n                    </p>\r\n                    <p style=\"margin-top:5px;\">不要急哦，好多好店没有展示出来，马上联系服务顾问获取！</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <script type=\"text/javascript\">\r\n        queryConditionOhter();\r\n        //showOtherSearch();\r\n        //iePlaceholder('.searchTxt');\r\n        $(document).ready(function () {\r\n            $('#sid').bind('keyup', function (event) {\r\n                if (event.keyCode == \"13\") {\r\n                    searchQue();\r\n                }\r\n            });\r\n        });\r\n    </");
	templateBuilder.Append("script>\r\n\r\n    <div class=\"kf_border\"></div>\r\n    <div class=\"function\">\r\n        <div class=\"fix\" style=\"position:absolute;top:0;right:0;\">\r\n            <div class=\"type\">\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"javascript:void(0);\" class=\"type-l lsjl\"></a>\r\n\r\n                        <div class=\"lsjldiv typeshow\" style=\"display:none;\">\r\n                            <i class=\"icon\"></i>\r\n                            <div class=\"hd\">历史浏览</div>\r\n                            <div class=\"history\">\r\n                                <div class=\"history-list\">\r\n\r\n                                    <div class=\"list list-first\">\r\n                                        <span class=\"imgbox\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-tmall.png\" /></span>\r\n                                        <a href=\"shopsGet-199135.html\" class=\"linkTitle\" title=\"上海地区女鞋旗舰店3字中文名字好听低价转让\" target=\"_blank\">上海地区女鞋旗舰店3字中文名字好听低价...</a>\r\n                                        <span class=\"price\"><b>¥</b>150000.0</span>\r\n                                        <span class=\"line\"></span>\r\n                                    </div>\r\n\r\n                                    <div class=\"list\">\r\n                                        <span class=\"imgbox\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-tmall.png\" /></span>\r\n                                        <a href=\"shopsGet-183788.html\" class=\"linkTitle\" title=\"浙江温地区户外野营类目渔具11年专营店带商标经营良好诚意上拍\" target=\"_blank\">浙江温地区户外野营类目渔具11年专营店...</a>\r\n                                        <span class=\"price\"><b>¥</b>245000.0</span>\r\n                                        <span class=\"line\"></span>\r\n                                    </div>\r\n\r\n                                    <div class=\"list\">\r\n                                        <span class=\"imgbox\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-tmall.png\" /></span>\r\n                                        <a href=\"shopsGet-198125.html\" class=\"linkTitle\" title=\"江浙沪地区三字商标箱包旗舰店好听又好记卖家诚心出售\" target=\"_blank\">江浙沪地区三字商标箱包旗舰店好听又好记...</a>\r\n                                        <span class=\"price\"><b>¥</b>123000.0</span>\r\n                                        <span class=\"line\"></span>\r\n                                    </div>\r\n\r\n                                    <div class=\"list\">\r\n                                        <span class=\"imgbox\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-tmall.png\" /></span>\r\n                                        <a href=\"shopsGet-133901.html\" class=\"linkTitle\" title=\"杭州地区家居日用雨伞旗舰店商标好小规模营业额完成诚意转\" target=\"_blank\">杭州地区家居日用雨伞旗舰店商标好小规模...</a>\r\n                                        <span class=\"price\"><b>¥</b>200000.0</span>\r\n                                        <span class=\"line\"></span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://u.5pao.com/spcenter/collectionList-1.html\" target=\"_blank\" class=\"type-l scdp\"></a>\r\n                        <div class=\"typeshow\" style=\"display:none;\">\r\n                            <i class=\"icon\"></i>\r\n                            <a href=\"http://u.5pao.com/spcenter/collectionList-1.html\" class=\"golink\" target=\"_blank\">我的收藏</a>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0);\" class=\"type-l gfrx\"></a>\r\n                        <div class=\"typeshow gfrxdiv\" style=\"display:none;\"><i class=\"icon\"></i>官方热线<span class=\"hotline\">400-969-8688</span></div>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"/theuser/servCenter.html\" target=\"_blank\" class=\"type-l bzzx\"></a>\r\n                        <div class=\"typeshow\" style=\"display:none;\">\r\n                            <i class=\"icon\"></i>\r\n                            <a href=\"/theuser/servCenter.html\" class=\"golink\" target=\"_blank\">帮助中心</a>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://u.5pao.com/wucenter/tojianyi.html\" target=\"_blank\" class=\"type-l yjfk\"></a>\r\n                        <div class=\"typeshow\" style=\"display:none;\">\r\n                            <i class=\"icon\"></i>\r\n                            <a href=\"http://u.5pao.com/wucenter/tojianyi.html\" class=\"golink\" target=\"_blank\">投诉建议</a>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0);\" onclick=\"showKefuqqValid();\" class=\"type-l kfjy\"></a>\r\n                        <div class=\"typeshow jiaoyan\" style=\"display:none;\">\r\n                            <i class=\"icon\"></i>\r\n                            <a href=\"javascript:void(0);\" onclick=\"showKefuqqValid();\" class=\"golink\" target=\"_self\">客服QQ校验</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"Top\">\r\n                        <a href=\"#totop\" target=\"_self\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/totop.png\" /></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"to-Top\">\r\n        <a href=\"#totop\" target=\"_self\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/totop.png\" /></a>\r\n    </div>\r\n    <div class=\"service-Kefu\">\r\n        <div class=\"fix1\" style=\"position:absolute;bottom:0;right:0;\">\r\n            <a href=\"javascript:void(0);\" onclick=\"serviceSwitch();\" class=\"tx\" target=\"_self\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/unfold.gif\" /></a>\r\n            <div class=\"kefu\">\r\n                <div class=\"hd clearfix\">\r\n                    <span class=\"newtitle\">客服咨询</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"c_service\" class=\"service-Kefu service-Kefu-up\" style=\"display:none;\">\r\n        <a href=\"javascript:void(0);\" onclick=\"serviceSwitch();\" class=\"tx\" target=\"_self\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/packup.gif\" /></a>\r\n        <div class=\"kefu\">\r\n            <div class=\"hd clearfix\">\r\n                <span class=\"newtitle\">客服咨询</span>\r\n            </div>\r\n            <div class=\"bd\">\r\n                <div class=\"contact-list contact-list-first clearfix\">\r\n                    <div class=\"f-l\">\r\n                        <span class=\"imgbox ibvm\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/logo-tmall.png\" /></span>\r\n                        <span class=\"ibvm\">买天猫店</span>\r\n                    </div>\r\n                    <div class=\"f-r\">\r\n                        <a href=\"javascript:void(0);\" onclick=\"SjQqToAsk('1')\" class=\"contact\" target=\"_self\"><i class=\"icon_qq\"></i>联系他</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"contact-list clearfix\">\r\n                    <div class=\"f-l\">\r\n                        <span class=\"imgbox ibvm\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/logo-taobao.png\" /></span>\r\n                        <span class=\"ibvm\">买淘宝店</span>\r\n                    </div>\r\n                    <div class=\"f-r\">\r\n                        <a href=\"javascript:void(0);\" onclick=\"SjQqToAsk('2')\" class=\"contact\" target=\"_self\"><i class=\"icon_qq\"></i>联系他</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"contact-list clearfix\">\r\n                    <div class=\"f-l\">\r\n                        <span class=\"imgbox ibvm\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/logo-other.png\" /></span>\r\n                        <span class=\"ibvm\">买其它店</span>\r\n                    </div>\r\n                    <div class=\"f-r\">\r\n                        <a href=\"javascript:void(0);\" onclick=\"SjQqToAsk('3')\" class=\"contact\" target=\"_self\"><i class=\"icon_qq\"></i>联系他</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"contact-list clearfix\">\r\n                    <div class=\"f-l\">\r\n                        <span class=\"imgbox ibvm\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/logo-ruzhu.png\" /></span>\r\n                        <span class=\"ibvm\">卖天猫店</span>\r\n                    </div>\r\n                    <div class=\"f-r\">\r\n                        <a href=\"javascript:void(0);\" onclick=\"QaqqToAsk('4')\" class=\"contact\" target=\"_self\"><i class=\"icon_qq\"></i>联系他</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"contact-list clearfix\">\r\n                    <div class=\"f-l\">\r\n                        <span class=\"imgbox ibvm\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/logo-yunying.png\" /></span>\r\n                        <span class=\"ibvm\">卖淘宝店</span>\r\n                    </div>\r\n                    <div class=\"f-r\">\r\n                        <a href=\"javascript:void(0);\" onclick=\"SjQqToAsk('2')\" class=\"contact\" target=\"_self\"><i class=\"icon_qq\"></i>联系他</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"feedback\" class=\"feedback boxShade\" style=\"display:none;\">\r\n        <div class=\"tab\">\r\n            <a href=\"javascript:void(0);\" class=\"cur\">意见反馈<i></i></a>\r\n            <a href=\"javascript:void(0);\">投诉留言<i></i></a>\r\n        </div>\r\n        <div class=\"tab_con clearfix\" style=\"display:block;\">\r\n            <div class=\"form-row\">\r\n                <textarea class=\"input-txt\" placeholder=\"请输入你要反馈的内容\"></textarea>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"row-title\">联系方式</div>\r\n                <div class=\"col f-l\">\r\n                    <input type=\"text\" class=\"input-txt\" placeholder=\"手机号、QQ均可\">\r\n                </div>\r\n                <div class=\"col f-r\">\r\n                    <input type=\"submit\" class=\"btn\" value=\"提交反馈\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab_con clearfix\">\r\n            <div class=\"form-row\">\r\n                <textarea class=\"input-txt\" placeholder=\"事件描述\"></textarea>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"col f-l\">\r\n                    <input type=\"text\" class=\"input-txt\" placeholder=\"投诉人姓名\">\r\n                </div>\r\n                <div class=\"col f-r\">\r\n                    <input type=\"text\" class=\"input-txt\" placeholder=\"手机\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"col f-l\">\r\n                    <input type=\"text\" class=\"input-txt\" placeholder=\"QQ号\">\r\n                </div>\r\n                <div class=\"col f-r\">\r\n                    <input type=\"submit\" class=\"btn\" value=\"提交反馈\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Footer\">\r\n        <div class=\"JieShao wrapper\">\r\n            <div class=\"part clearfix\">\r\n                <div class=\"part-list f-l list-one\">\r\n                    <h3>新手入门</h3>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-32287.html\" target=\"_blank\"><b></b>合同法律效力</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/getHelpcenter-26.html\" target=\"_blank\"><b></b>出售流程</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/getHelpcenter-27.html\" target=\"_blank\"><b></b>购买流程</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/helpcenterList-123.html\" target=\"_blank\"><b></b>如何充值</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/getHelpcenter-36.html\" target=\"_blank\"><b></b>如何提现</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"part-list f-l go-wp\">\r\n                    <h3>走进舞泡</h3>\r\n                    <ul class=\"f-l\">\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-1.html\" target=\"_blank\">舞泡介绍</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-32681.html\" rel=\"nofollow\" target=\"_blank\">上海总公司</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-52271.html\" rel=\"nofollow\" target=\"_blank\">杭州分公司</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-52535.html\" rel=\"nofollow\" target=\"_blank\">深圳分公司</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-32057.html\" rel=\"nofollow\" target=\"_blank\">北京分公司</a>\r\n                        </li>\r\n                    </ul>\r\n                    <ul class=\"f-l ml-50\">\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-38931.html\" rel=\"nofollow\" target=\"_blank\">武汉分公司</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-29106.html\" rel=\"nofollow\" target=\"_blank\">长沙分公司</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.5pao.com/theuser/noticedeatil-50484.html\" rel=\"nofollow\" target=\"_blank\">成都分公司</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"part-list f-l follow\">\r\n                    <h3>关注我们</h3>\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"javascript:WeiXinShow()\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-1.png\" />微信平台</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://e.weibo.com/wupaowang\" rel=\"nofollow\" target=\"_blank\"><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/icon-2.png\">新浪微博</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"part-list f-l\">\r\n                    <h3>服务热线</h3>\r\n                    <ul>\r\n                        <li><img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("images/hotline.png\" /></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"part\">\r\n                <h3>荣誉认证</h3>\r\n                <div class=\"honor clearfix\">\r\n                    <a href=\"https://ss.knet.cn/verifyseal.dll?sn=2011090700100014515&amp;ct=df&amp;pa=807445\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/land-kxwz.jpg\" border=\"0\"></a>\r\n                    <a href=\"http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20110905165719441\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/land-yyzz.jpg\" border=\"0\"></a>\r\n                    <a href=\"http://www.isc.org.cn/account/TopSearch.html?searchtext=%E8%88%9E%E6%B3%A1\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/land-hydw.png\" border=\"0\"></a>\r\n                    <a href=\"http://www.zx110.org/\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/hugw.jpg\" width=\"116\" height=\"46\" border=\"0\" /></a>\r\n                    <a href=\"https://credit.szfw.org/CX20160730011106380175.html\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/cxwz.jpg\" border=\"0\"></a>\r\n                    <a href=\"https://trustsealinfo.websecurity.norton.com/splash?form_file=fdf/splash.fdf&dn=www.5pao.com&lang=zh_cn\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/ndlogo.jpg\" border=\"0\" /></a>\r\n                    <a href=\"http://www.anquan.org/authenticate/cert/?site=www.5pao.com&at=business\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/xalm.jpg\" border=\"0\"></a>\r\n                    <a href=\"http://www.315online.com.cn/member/315110099.html\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/land-wsjy.jpg\" border=\"0\"></a>\r\n                    <a href=\"http://si.trustutn.org/info?sn=578171101030851750538\" rel=\"nofollow\" target=\"_blank\"><img src=\"http://www.5pao.com/theuser/images/land-mwz.png\" border=\"0\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"Link\">\r\n            <div class=\"FriendlyLink wrapper\">\r\n                <div class=\"bd\">\r\n                    <div class=\"aboutUs clearfix\">\r\n                        <div class=\"f-l about-L\">\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-1.html\" rel=\"nofollow\" target=\"_blank\">关于我们</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-10.html\" rel=\"nofollow\" target=\"_blank\">业务伙伴</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-5.html\" rel=\"nofollow\" target=\"_blank\">商务合作</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-4.html\" rel=\"nofollow\" target=\"_blank\">隐私保护</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-11.html\" rel=\"nofollow\" target=\"_blank\">免责声明</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/hyinfo.html\" target=\"_blank\">新闻中心</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-7.html\" rel=\"nofollow\" target=\"_blank\">版权说明</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/Sitemap.html\" target=\"_blank\">Sitemap</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-9.html\" target=\"_blank\">友情链接</a><i>|</i>\r\n                            <a href=\"http://www.5pao.com/theuser/siteinfo-5.html\" rel=\"nofollow\" target=\"_blank\">加入我们</a><i>|</i>\r\n                            <a href=\"#totop\">返回顶部</a>\r\n                        </div>\r\n                        <div class=\"f-r about-R\">\r\n                            <a href=\"http://m.5pao.com\" class=\"tophone\" target=\"_blank\">手机版</a>\r\n                            <a href=\"http://www.sh148.org/web/join/8651.htm\" rel=\"nofollow\" class=\"guwen\" target=\"_blank\" name=\"trz\">常年法律顾问：陈志群</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"copyright\">\r\n                        <span>提供淘宝店铺出售转让、天猫商城出售转让等网店购买及卖出服务，开网店就上舞泡！</span>\r\n                        <span class=\"ml-50\">上海舞泡网络科技有限公司 版权所有 2011-2017 沪ICP备09092101号-1</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/jquery_netpet.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("js/Netpet.js\"></");
	templateBuilder.Append("script>\r\n</body>\r\n\r\n</html>");
	Response.Write(templateBuilder.ToString());
}
</script>
