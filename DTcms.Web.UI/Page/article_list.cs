using System;
using System.Collections.Generic;
using System.Web;
using System.Text;
using DTcms.Common;

namespace DTcms.Web.UI.Page
{
    public partial class article_list : Web.UI.BasePage
    {
        #region
        /// <summary>
        /// 频道名称
        /// </summary>
        protected string channel = string.Empty; 
        
        /// <summary>
        /// 当前页码
        /// </summary>
        protected int page;         

        /// <summary>
        /// 类别ID
        /// </summary>
        protected int category_id;  

        /// <summary>
        /// OUT数据总数
        /// </summary>
        protected int totalcount;   

        /// <summary>
        /// 分页页码
        /// </summary>
        protected string pagelist;  

        /// <summary>
        /// 商城类型
        /// </summary>
        protected int shopStyleId; 

        /// <summary>
        /// 注册类型
        /// </summary>
        protected int regiserStyleId; 

        /// <summary>
        /// 商标类型
        /// </summary>
        protected int chopStyleId;    

        /// <summary>
        /// 所属行业
        /// </summary>
        protected int tradeStyleId;

        /// <summary>
        /// 价格范围
        /// </summary>
        protected int priceStyleId;   

        /// <summary>
        /// 地区范围
        /// </summary>
        protected int areaId;          

        /// <summary>
        /// 扣分情况
        /// </summary>
        protected int deductPointId;  

        /// <summary>
        /// 纳税人资质
        /// </summary>
        protected int aptitudeId;      

        /// <summary>
        /// 是否带货
        /// </summary>
        protected int takeGoodsId;    

        /// <summary>
        /// 提供货源
        /// </summary>
        protected int supplyGoodsId;  
        
        /// <summary>
        /// 商标类别
        /// </summary>
        protected int chopTypeId; 
        
        /// <summary>
        /// 商标过户
        /// </summary>
        protected int chopTransferId; 
        
        /// <summary>
        /// 团队转让
        /// </summary>
        protected int teamTransferId; 
        
        /// <summary>
        /// 经验传授
        /// </summary>
        protected int experienceId;  
        #endregion

        protected Model.article_category model = new Model.article_category(); //分类的实体

        /// <summary>
        /// 重写虚方法,此方法将在Init事件前执行
        /// </summary>
        protected override void ShowPage()
        {
            this.Init += new EventHandler(article_list_Init);
        }

        /// <summary>
        /// OnInit事件,让频道名称变量先赋值
        /// </summary>
        void article_list_Init(object sender, EventArgs e)
        {
            page = DTRequest.GetQueryInt("page", 1);
            category_id = DTRequest.GetQueryInt("category_id");
            BLL.article_category bll = new BLL.article_category();
            model.title = "所有类型";

            shopStyleId = DTRequest.GetQueryInt("shopStyleId", 0);
            regiserStyleId = DTRequest.GetQueryInt("regiserStyleId", 0);
            chopStyleId = DTRequest.GetQueryInt("chopStyleId", 0);
            tradeStyleId = DTRequest.GetQueryInt("tradeStyleId", 0);
            priceStyleId = DTRequest.GetQueryInt("priceStyleId", 0);
            areaId = DTRequest.GetQueryInt("areaId", 0);
            deductPointId = DTRequest.GetQueryInt("deductPointId", 0);
            aptitudeId = DTRequest.GetQueryInt("aptitudeId", 0);
            takeGoodsId = DTRequest.GetQueryInt("takeGoodsId", 0);
            supplyGoodsId = DTRequest.GetQueryInt("supplyGoodsId", 0);
            chopTypeId = DTRequest.GetQueryInt("chopTypeId", 0);
            chopTransferId = DTRequest.GetQueryInt("chopTransferId", 0);
            teamTransferId = DTRequest.GetQueryInt("teamTransferId", 0);
            experienceId = DTRequest.GetQueryInt("experienceId", 0);

            if (category_id > 0) //如果ID获取到，将使用ID
            {
                if (bll.Exists(category_id))
                {
                    model = bll.GetModel(category_id);
                    if (!string.IsNullOrEmpty(model.link_url))
                    {
                        HttpContext.Current.Response.Redirect(model.link_url);
                    }
                }
            }
        }

    }
}
