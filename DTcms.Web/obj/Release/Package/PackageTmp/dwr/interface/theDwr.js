// Provide a default path to dwr.engine
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.theDwr');

if (typeof this['theDwr'] == 'undefined') theDwr = {};

theDwr._path = '/theuser/dwr';

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
theDwr.SetRegMsgNum = function(p0, callback) {
  return dwr.engine._execute(theDwr._path, 'theDwr', 'SetRegMsgNum', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
theDwr.CheckImgYzm = function(p0, callback) {
  return dwr.engine._execute(theDwr._path, 'theDwr', 'CheckImgYzm', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
theDwr.getPhotoImg = function(p0, callback) {
  return dwr.engine._execute(theDwr._path, 'theDwr', 'getPhotoImg', arguments);
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
theDwr.ajform = function(p0, p1, p2, p3, p4, p5, callback) {
  return dwr.engine._execute(theDwr._path, 'theDwr', 'ajform', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
theDwr.CheckLoginName = function(p0, callback) {
  return dwr.engine._execute(theDwr._path, 'theDwr', 'CheckLoginName', arguments);
};


