/**
 * @author MaZiXiao
 * @date 2022-10-05 17:18
 */
import React from 'react';
import './layout.css'

function RlCol(props) {
    const span = props.span || 24;
    const offset = props.offset || 0;
    const defaultWidth = (100 / 24) * span;
    const defaultOffset = (100 / 24) * offset;
    return (<div className={'rl-col-default'}
                 style={{width: defaultWidth + '%', marginLeft: defaultOffset + '%'}}>{props.children}</div>)
}

function RlRow(props) {
    return (<div className={'rl-row-default'}>
        {props.children}
    </div>)
}

export {
    RlCol,
    RlRow
}
