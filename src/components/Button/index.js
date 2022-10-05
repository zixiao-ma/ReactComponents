/**
 * @author MaZiXiao
 * @date 2022-10-05 18:12
 */
import React from "react";
import './button.css'

export default function RlButton(props) {
    const className = `rl-button rl-button-${props.type || 'default'} ${props.round ? 'rl-button-round' : ''} ${props.size ? `rl-button-${props.size}` : ''} ${props.block ? 'rl-button-block' : ''}`;
    return (
        <button className={className} disabled={props.disabled} onClick={props.onclick}>
            {props.loading ? <div className={'iconfont icon-jiazai6 icon-loading'}></div> : null}
            {props.icon && <i className={`iconfont icon-${props.icon}`}></i>}
            {props.children && <span>{props.children}</span>}
        </button>
    )
}
