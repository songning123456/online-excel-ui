import axios from 'axios';
import Config from './config';

// 开发环境
axios.setConfig = function (config, supportOld) {
    // axios.defaults.baseURL = config.BASE_URL;
    if (supportOld) { // 适配旧版本
        axios.defaults.timeout = config.AJAX_TIMEOUT;
        // // 解决跨域时丢失 cookie 问题,设置请求超时时间
        axios.defaults.withCredentials = false;
    } else {
        for (let key in config) {
            axios.defaults[key] = config[key];
        }
    }
};

const httpRequest = function (resolve, reject, config, isRetry, customize, responseState) {
    if (!customize) {
        customize = {};
    }
    if (customize.headers) {
        for (let key in customize.headers) {
            config.headers[key] = customize.headers[key];
        }
    }
    axios.defaults.timeout = Config.AJAX_TIMEOUT;
    axios(config).then(response => {
        resolve(response.data);
    }).catch(error => {
        reject(error);
    });
};

axios.ajax = function (url, method, params, form = false, customize = {}, responseState = 1) {
    return new Promise((resolve, reject) => {
        let config = null;
        if (url && (url.toLowerCase().indexOf('http://') !== 0 && url.toLowerCase().indexOf('https://') !== 0)) {
            url = Config.REQUEST_BASE_URL + url;
        }
        if (form) {
            config = {
                url: url,
                method: method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            config.transformRequest = [
                function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret +=
                            encodeURIComponent(it) +
                            '=' +
                            encodeURIComponent(data[it]) +
                            '&';
                    }
                    return ret;
                }
            ];
        } else {
            config = {
                url: url,
                method: method
            };
            config.headers = {
                'Content-type': 'application/json;charset=utf-8'
            };
        }
        if (method && method.toLowerCase() === 'get') {
            config.params = params;
        } else {
            config.data = params;
        }
        httpRequest(resolve, reject, config, false, customize, responseState);
    });
};

// 登录的时候要form表单提交请求中多了form参数，关于权限的要请求权限的服务器地址多了authorityService参数
export default axios;
