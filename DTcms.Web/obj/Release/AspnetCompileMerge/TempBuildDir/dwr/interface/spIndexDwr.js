// Provide a default path to dwr.engine
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.spIndexDwr');

if (typeof this['spIndexDwr'] == 'undefined') spIndexDwr = {};

spIndexDwr._path = '/shopmm/dwr';

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.SetRegMsgNum = function(p0, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'SetRegMsgNum', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.queryJingShops = function(p0, p1, p2, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'queryJingShops', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.PmPayRecs = function(p0, p1, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'PmPayRecs', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.PmsameToSee = function(p0, p1, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'PmsameToSee', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.PmEndTime = function(p0, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'PmEndTime', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.PmNowTime = function(callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'PmNowTime', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.SaveSearchRec = function(p0, p1, p2, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'SaveSearchRec', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.sendKingShop = function(p0, p1, p2, p3, p4, p5, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'sendKingShop', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class org.directwebremoting.io.FileTransfer} p5 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.SendTmallShow = function(p0, p1, p2, p3, p4, p5, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'SendTmallShow', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.SaveCrazyRes = function(p0, p1, p2, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'SaveCrazyRes', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.FievYearCj = function(p0, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'FievYearCj', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.DayTopShops = function(callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'DayTopShops', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.SendXuqiu = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'SendXuqiu', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.querySameShops = function(p0, p1, p2, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'querySameShops', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
spIndexDwr.queryShops = function(p0, p1, p2, callback) {
  return dwr.engine._execute(spIndexDwr._path, 'spIndexDwr', 'queryShops', arguments);
};


