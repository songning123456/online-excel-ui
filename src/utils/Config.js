import util from './Common';

const _config_ = {};


_config_.setConfig = function (config) {
    if (typeof config === 'string') {
        config = util.jsonToObject(config) || {};
    }
};

export default _config_;
