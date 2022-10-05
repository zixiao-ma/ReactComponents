/**
 * @author MaZiXiao
 * @date 2022-10-05 18:14
 */
import RlButton from "../../components/Button";
import {useState} from "react";

export default function Button() {
    const [loading, setLoading] = useState(false);
    const handelClick = () => {
        return new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve()
            }, 1000)
        }).then(() => {
            setLoading(false)
        })
    }
    return (
        <div style={{padding: 10}}>
            <p>按钮样式：</p>
            <RlButton>默认按钮</RlButton>
            <RlButton type={'primary'} icon={'haoping'}>默认按钮</RlButton>
            <RlButton type={'success'}>成功按钮</RlButton>
            <RlButton type={'danger'}>危险按钮</RlButton>
            <RlButton type={'warning'} icon={'xingxing'}>警告按钮</RlButton>
            <RlButton type={'info'}>信息按钮</RlButton>
            <RlButton type={'dashed'}>虚线按钮</RlButton>
            <RlButton type={'text'}>文本按钮</RlButton>
            <p>加载状态：</p>
            <RlButton loading={loading} onclick={handelClick}>开启加载</RlButton>
            <RlButton loading={loading} type={'primary'}>默认按钮</RlButton>
            <RlButton loading={loading} type={'success'}>成功按钮</RlButton>
            <RlButton loading={loading} type={'danger'}>危险按钮</RlButton>
            <RlButton loading={loading} type={'warning'}>警告按钮</RlButton>
            <RlButton loading={loading} type={'info'}>信息按钮</RlButton>
            <RlButton loading={loading} type={'dashed'}>虚线按钮</RlButton>
            <RlButton loading={loading} type={'text'}>文本按钮</RlButton>
            <p>禁用状态：</p>
            <RlButton disabled>默认按钮</RlButton>
            <RlButton disabled type={'primary'}>默认按钮</RlButton>
            <RlButton disabled type={'success'}>成功按钮</RlButton>
            <RlButton disabled type={'danger'}>危险按钮</RlButton>
            <RlButton disabled type={'warning'}>警告按钮</RlButton>
            <RlButton disabled type={'info'}>信息按钮</RlButton>
            <RlButton disabled type={'dashed'}>虚线按钮</RlButton>
            <RlButton disabled type={'text'}>文本按钮</RlButton>
            <p>圆角按钮：</p>
            <RlButton round>默认按钮</RlButton>
            <RlButton round type={'primary'}>默认按钮</RlButton>
            <RlButton round type={'success'}>成功按钮</RlButton>
            <RlButton round type={'danger'}>危险按钮</RlButton>
            <RlButton round type={'warning'}>警告按钮</RlButton>
            <RlButton round type={'info'}>信息按钮</RlButton>
            <RlButton round type={'dashed'}>虚线按钮</RlButton>
            <RlButton round type={'text'}>文本按钮</RlButton>
            <p>图标按钮：</p>
            <RlButton icon={'wangluo'}></RlButton>
            <RlButton icon={'xingxing'} type={'primary'}></RlButton>
            <RlButton icon={'xingxing'} type={'success'}></RlButton>
            <RlButton icon={'shijian'} type={'danger'}></RlButton>
            <RlButton icon={'haoping'} type={'warning'}></RlButton>
            <RlButton icon={'xingxing'} type={'info'}></RlButton>
            <RlButton icon={'jiazai2'} type={'dashed'}></RlButton>
            <RlButton icon={'xingxing'} type={'text'}></RlButton>
            <p>按钮尺寸：</p>
            <RlButton type={'danger'} size={'mini'}>小号按钮</RlButton>
            <RlButton type={'primary'}>默认大小</RlButton>
            <RlButton type={'success'} size={'large'}>大号按钮</RlButton>
            <p>块级按钮：</p>
            <RlButton block type={'primary'} loading={loading}>默认按钮</RlButton>
        </div>
    )
}
