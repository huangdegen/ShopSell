using System;

namespace DTcms.Model
{
    /// <summary>
    /// T数据字典
    /// </summary>
    [Serializable]
    public partial class data_dictionary
    {
        public data_dictionary()
        { }

        #region Model
        private int _id;
        private int _type = 0;
        private string _name = string.Empty;
        private string _remark = string.Empty;
        private int _status = 1;

        /// <summary>
        /// 自增ID
        /// </summary>
        public int id
        {
            set { _id = value; }
            get { return _id; }
        }
        /// <summary>
        /// 类型Id
        /// </summary>
        public int type
        {
            set { _type = value; }
            get { return _type; }
        }

        /// <summary>
        /// 名称
        /// </summary>
        public string name
        {
            set { _name = value; }
            get { return _name; }
        }

        /// <summary>
        /// 备注
        /// </summary>
        public string remark
        {
            set { _remark = value; }
            get { return _remark; }
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