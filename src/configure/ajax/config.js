let Config = {};

let MODE_PATTERN = {
    pro: 'http://blog-server.sonin.cn',
    dev: 'http://localhost:8072'
};

if (location.hostname === 'localhost') {
    Config.REQUEST_BASE_URL = MODE_PATTERN.dev;
} else {
    Config.REQUEST_BASE_URL = MODE_PATTERN.pro;
}

Config.AJAX_TIMEOUT = 100000;

export default Config;
