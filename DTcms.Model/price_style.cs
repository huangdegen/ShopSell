using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTcms.Model
{
    /// <summary>
    /// 价格区间
    /// </summary>
    [Serializable]
    public partial class price_style
    {
        public price_style()
        { }

        #region Model
        private int _id;
        private int _type=0;
        private int _max_price = 0;
        private int _min_price = 0;
        private int _status = 1;
        /// <summary>
        /// 自增ID
        /// </summary>
        public int id
        {
            set { _id = value; }
            get { return _id; }
        }

        public int type 
        {
            set { _type = value; }
            get { return _type; }
        }

        /// <summary>
        /// 最高价
        /// </summary>
        public int max_price
        {
            set { _max_price = value; }
            get { return _max_price; }
        }
        /// <summary>
        /// 最低价
        /// </summary>
        public int min_price
        {
            set { _min_price = value; }
            get { return _min_price; }
        }
        /// <summary>
        /// 是否启用
        /// </summary>
        public int status
        {
            set { _status = value; }
            get { return _status; }
        }
        #endregion

    }
}
