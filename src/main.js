// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import store from './store/store';
import ZMessage from './configure/util/ZMessage';
import Config from './utils/Config';
import './style/elementui/elementui.scss';
import router from './router';
import App from './App';

Vue.config.productionTip = false;

// 自定义配置
ZMessage.setConfig({max: 1, isQueue: false, showNewest: true});

Vue.use(ElementUI);
// * 自定义Zmessage放在ElementUI后面
Vue.prototype.$message = ZMessage;
Vue.use(Vuex);
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
/**
 * 获取配置项
 */
axios.get('../static/config/base-config.json').then(({data}) => {
    Config.setConfig(data);
}).catch(e => {
    console.error('获取基本配置失败! ', e.message);
});
/* eslint-disable no-new */
let vue = new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

export default vue;
