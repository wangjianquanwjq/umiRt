
import NavRight from '@/components/NavRight'
import ErrPage from '@/pages/404'
import { MenuDataItem } from '@ant-design/pro-layout';
import { history, RunTimeLayoutConfig } from "umi";
// 模拟render  里面调用菜单数据      里面的icon  失效的
let routerArr = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        layout: false,//不让他继承layout
        component: require('@/pages/Login').default
    },
    {
        path: '/dashboard', name: 'dashboard', icon: 'dashboard',
        routes: [
            { path: '/dashboard/analysis', name: 'analysis', component: require('@/pages/Dashboard/Analysis').default },
            { path: '/dashboard/monitor', name: 'monitor', component: require('@/pages/Dashboard/Monitor').default },
        ],
    },
    {
        path: '/func', name: 'func', icon: 'AppstoreAddOutlined',
        routes: [
            { path: '/func/draggable', name: 'draggable', component: require('@/pages/Func/draggable').default },
        ],
    },
    { path: '/404', name: '404', component: require('@/pages/404').default, hideInMenu: true },
];
// render 函数在 patchRoutes 之前执行，所以要在 render 中获取后端返回的路由数据。
//  oldRender方法至少被调用一次
export const render = (oldRender: any) => {
    oldRender();
}
// 菜单
export const layout: RunTimeLayoutConfig = (initialState: any) => {
    return {
        logout: () => {
            history.push({
                pathname: "/"
            })
        },
        // 把路由渲染成左侧的菜单
        menu: {
            // params: {
            //     userId: initialState?.currentUser?.userid,
            // },
            request: async (params, defaultMenuData) => {
                return routerArr;
            },
        },
        ErrorComponent:ErrPage
        // 自定义顶部导航右边
        // rightRender: (initInfo: any) => { return 'NavRight'; },// return string || ReactNode;
        // rightRender: NavRight,
        // footerRender: NavRight,
    };
};
// 路由
export function patchRoutes(routes: any) {
    if (routerArr.length > 0) {
        routes.routes = routerArr
    }
}