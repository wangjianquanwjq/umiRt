import { useIntl } from 'umi';
import Styles from './index.less'
// locale-当前语言配置
// formatMessage-使用国际化方法，id-为语言文件中的key
// setLocale-切换当前国际化语言 setLocale('zh-CN', false); false-切换时不进行页面刷新;true-切换进行页面刷新

export const Fun = () => {
    return <>
        <div className={Styles.title}>
            页面

        </div>
    </>
}
export default () => {
    const { locale, formatMessage } = useIntl();
    return <>
        <Fun />
        {/* <div>{locale}</div> */}
        {/* <h1>
            {formatMessage({ id: 'title' })}
        </h1> */}
    </>
}