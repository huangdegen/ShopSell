using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTcms.Web.UI
{
    public partial class BasePage : System.Web.UI.Page
    {
        #region 列表标签======================================
        /// <summary>
        /// 文章列表
        /// </summary>
        /// <param name="channel_name">频道名称</param>
        /// <param name="top">显示条数</param>
        /// <param name="strwhere">查询条件</param>
        /// <returns>DataTable</returns>
        protected DataTable getDictionaryList(int type)
        {
            DataTable dt = new DataTable();
            BLL.data_dictionary bll = new BLL.data_dictionary();
            dt = bll.GetList("type=" + type).Tables[0];
            return dt;
        }
        #endregion
    }
}
