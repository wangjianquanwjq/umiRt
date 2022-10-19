import { history } from "umi";
export default () => {
    const goHome = () => {
        history.push({
            pathname: "/dashboard/analysis"
        })
    }
    return <>
        <div onClick={goHome}>
            登录页面     国际化  动态路由
        </div>
    </>
}