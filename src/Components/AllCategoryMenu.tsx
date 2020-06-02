import React, { useState } from 'react';
import AllCategoryMenuSub from './AllCategoryMenuSub';
import { Utils } from 'Core/Utils';
import { ICategories } from 'Interfaces/ICategory';
import {bookCategories } from 'Core/StaticData';
import { IMainCategory } from 'Interfaces/IMainCategory';

interface IAllCategoryMenu {
    list: IMainCategory[];
    visible: Boolean
}
const AllCategoryMenu = ({list, visible}:IAllCategoryMenu) => {

    const [seletedId, setSeletedId] = useState<string>('');
    const [seletedItem, setSeletedItem] = useState<IMainCategory>();
    const [categories, setCategories] = useState<ICategories>();
    const [navlist] = useState<IMainCategory[]>(list);

    const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = event.currentTarget.id;
        setSeletedId(id);
        const item = Utils.findObject(navlist, id);
        setSeletedItem(item);
        if(item?.categoryId) {
            setCategories(Utils.findObject(bookCategories, item.categoryId));
        }
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
            <div className='all-category-menu__sub-list'>
                {
                    categories && <AllCategoryMenuSub title={seletedItem?.displayName} categories={categories}/>
                }
            </div>
        </div>
    )
}

export default AllCategoryMenu;