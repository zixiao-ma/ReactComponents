import {RlCol, RlRow} from "../../components/Layout";
import React, {useEffect} from "react";
import './layout.css'

/**
 * @author MaZiXiao
 * @date 2022-10-05 17:41
 */
function getColor() {
    let str = '#';
    for (let i = 0; i < 6; i++) {
        const a = parseInt(Math.random() * 16);
        const str1 = a.toString(16);
        str += str1
    }
    return str
}

export default function Layout() {
    useEffect(() => {
        const divs = document.querySelectorAll('.col-box');
        divs.forEach(el => el.style.background = getColor())
    });
    return (
        <div>
            <p>Layout 基本使用，将每一行平均分为 24 列。</p>
            <RlRow>
                <RlCol span={12}>
                    <div className={'col-box'}>12</div>
                </RlCol>
                <RlCol span={12}>
                    <div className={'col-box'}>12</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
                <RlCol span={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
                <RlCol span={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
                <RlCol span={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
                <RlCol span={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
                <RlCol span={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={4}>
                    <div className={'col-box'}>4</div>
                </RlCol>
                <RlCol span={2}>
                    <div className={'col-box'}>2</div>
                </RlCol>
                <RlCol span={4}>
                    <div className={'col-box'}>4</div>
                </RlCol>
                <RlCol span={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
                <RlCol span={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
            </RlRow>
            <p>通过 offset 设置偏移占用指定的列数。</p>
            <RlRow>
                <RlCol span={10}>
                    <div className={'col-box'}>12</div>
                </RlCol>
                <RlCol span={12} offset={2}>
                    <div className={'col-box'}>12</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
                <RlCol span={8} offset={8}>
                    <div className={'col-box'}>8</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={2}>
                    <div className={'col-box'}>2</div>
                </RlCol>
                <RlCol span={6} offset={4}>
                    <div className={'col-box'}>6</div>
                </RlCol>
                <RlCol span={6} offset={6}>
                    <div className={'col-box'}>6</div>
                </RlCol>
            </RlRow>
            <RlRow>
                <RlCol span={4}>
                    <div className={'col-box'}>4</div>
                </RlCol>
                <RlCol span={2} offset={4}>
                    <div className={'col-box'}>2</div>
                </RlCol>
                <RlCol span={4} offset={2}>
                    <div className={'col-box'}>4</div>
                </RlCol>
                <RlCol span={6} offset={2}>
                    <div className={'col-box'}>6</div>
                </RlCol>
            </RlRow>
        </div>
    )
}
