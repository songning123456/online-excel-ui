let Common = {};

/**
 * 深拷贝
 * @param obj
 * @returns {*}
 */
Common.deepClone = function clone(obj) {
    let result = obj;
    if (typeof obj === 'object' && obj !== null) {
        result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
        for (let prop in obj) {
            result[prop] = clone(obj[prop]);
        }
    }
    return result;
};

/**
 * 驼峰转下划线
 * @param param
 * @returns {string}
 */
Common.camelToUnderline = function (param) {
    return param.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/**
 * 下划线转驼峰
 * @param param
 */
Common.underlineToCamel = function (param) {
    return param.replace(/_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
};

/**
 * 根据属性获取对象
 * @param object
 * @param array
 */
Common.getObjByAttribute = function (object = {}, array = []) {
    let result = {};
    if (JSON.stringify(object) !== '{}' && array.length !== 0) {
        array.forEach(item => {
            result[item] = object[item];
        });
    }
    return result;
};

/**
 * 对象转json字符串
 */
Common.objectToJson = (object) => {
    try {
        return JSON.stringify(object);
    } catch (e) {
        console.error('JSON.stringify 出错！');
    }
    return '';
};

/**
 * json字符串转对象
 */
Common.jsonToObject = (json) => {
    if (typeof json === 'object') {
        return json;
    }
    try {
        return JSON.parse(json);
    } catch (e) {
        console.error('JSON.parse 出错！');
    }
    return null;
};

export default Common;
