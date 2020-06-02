import React, { useState } from 'react';
import { INavItem } from 'Interfaces/INavItem';

interface IAllCategoryMenu {
    list: INavItem[];
    visible: Boolean
}
const AllCategoryMenu = ({list, visible}:IAllCategoryMenu) => {

    const [seletedId, setSeletedId] = useState<string>('');
    const [navlist] = useState<INavItem[]>(list);

    const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = event.currentTarget.id;
        setSeletedId(id);
    }
    
    return (
        <div className={`all-category-menu ${visible ? '': 'none'}`}>
            <ul className="all-category-menu__list">
            {
                navlist && 
                navlist.map((item => {
                    return (
                        <li key={item.id}>
                            <button itemID={item.id} id={item.id} className={`${item.id === seletedId ? 'on': ''}`} onMouseOver={handleMouseOver}>
                                <span>{item.displayName}</span>
                            </button>
                        </li>
                    )
                }))
            }
        </ul>
        </div>
    )
}

export default AllCategoryMenu;