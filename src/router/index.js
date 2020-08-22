import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'OnlineExcel',
            component: () => import('../views/excel/OnlineExcel'),
            meta: {
                title: '在线excel'
            }
        },
        {
            // 路由是从上到下执行的，所以在路由配置中最后面 *
            path: '*',
            name: 'error',
            component: () => import('../views/error/Error'),
            meta: {
                title: '404'
            }
        }
    ]
})
;
