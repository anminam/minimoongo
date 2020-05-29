import React, { useState } from 'react';
import AllCategory from './AllCategory';
import { ILink } from '../Interfaces/ILink';
import { INavItem } from '../Interfaces/INavItem';


interface IHeaderNav {
    list:INavItem[]
}

const HeaderNav = ({list}:IHeaderNav) => {
    const [navlist, setNavList] = useState<INavItem[]>(list);

    return (
        <ul className="header__navbar">
            {
                list && 
                navlist.map((item => {
                    return (
                        <li>
                            <a href={item.href}>
                                <span>{item.displayName}</span>
                            </a>
                        </li>
                    )
                }))
            }
        </ul>
    )
}

export default HeaderNav;