import axios from '../configure/ajax/index';

/**
 * 测试post请求
 */
export const postUrl = (params) => {
    return axios.ajax('/xxx/xxx', 'post', params);
};
