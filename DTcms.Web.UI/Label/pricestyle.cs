using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace DTcms.Web.UI
{
    public partial class BasePage : System.Web.UI.Page
    {
        public DataTable getPriceStyleList(int type)
        {
            BLL.price_style bll = new BLL.price_style();
            DataTable dt = bll.GetList("type=" + type).Tables[0];
            return dt;
        }
    }
}
