import { defineConfig } from 'umi';
import routerConfig from "./routers/router";
export default defineConfig({
  title: "umiRt项目",//游览器tab的名字
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: 'https://himg.bdimg.com/sys/portraitn/item/public.1.33c69058.WQPs9kmOBkKP4f9VBLI2NQ', // 修改浏览器上的icon
  theme: {
    //全局主色
    '@primary-color': '#1890FF',
  },
  layout: {
    name: '数据管理菜单',
    locale: true,//国际化
    // layout: 'mix',
    // splitMenus: true,
    // layout: "top",
    // menuHeaderRender:false,//左边导航顶部的log和文字要不要
    // headerRender:false,//右边顶部要不要
  },
  locale: {
    default: 'zh-CN', // 默认语言，当检测不到具体语言时，展示 default 中指定的语言。
    antd: true, // 开启后，支持 antd 国际化
    title: true, // 在项目中配置的 title 及路由中的 title 可直接使用国际化 key，自动被转成对应语言的文案
    baseNavigator: true, // 开启浏览器语言检测。
    baseSeparator: '-' // 国家（lang） 与 语言（language） 之间的分割符。
  },
  routes: routerConfig,
  fastRefresh: {},
});
