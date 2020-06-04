import React, { useState } from 'react';
import "Styles/index.scss";
import List1 from '../Lists/List1';
import { IGoods, TGoods } from 'Interfaces/IGoods';


interface IBoxWelcome1 {
    title: string
    href: string
    list: TGoods[]
}

const BoxWelcome1 = ({ title, href, list }:IBoxWelcome1) => {
    return (
        <div className="box box-welcome1 left-title container_lg">
            <h3 className="title">
                <a href={href}>{title}</a>
            </h3>
            <div className="contents-container">
                <div className="section">
                    <h3><a href="/">국내도서</a></h3>
                    <List1 goods={list} />
                </div>
                <div className="section">
                    <h3><a href="/">외국도서</a></h3>
                </div>
                <div className="section">
                    <h3><a href="/">eBook</a></h3>
                </div>
                <div className="section">
                    <h3><a href="/">sam</a></h3>
                </div>
            </div>
        </div>
    )
}

export default BoxWelcome1;