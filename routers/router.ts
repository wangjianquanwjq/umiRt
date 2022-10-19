const routerConfig:any = [
    { path: '/', redirect: '/login', },
    {
        path: '/login',
        layout: false,//不让他继承layout
        component: '@/pages/Login',
    },
    {
        path: '/dashboard', name: 'dashboard', icon: 'dashboard',
        routes: [
            { path: '/dashboard/analysis', name: 'analysis', component: '@/pages/Dashboard/Analysis' },
            { path: '/dashboard/monitor', name: 'monitor', component: '@/pages/Dashboard/Monitor' },
        ],
    },
    {
        path: '/func', name: 'func', icon: 'AppstoreAddOutlined',
        routes: [
            { path: '/func/draggable', name: 'draggable', component: '@/pages/Func/draggable' },
        ],
    },
    {path:'/404', component: '@/pages/404' },
];
export default routerConfig;