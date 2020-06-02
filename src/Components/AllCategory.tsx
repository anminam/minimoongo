import React, { useState } from 'react';
import { INavItem } from 'Interfaces/INavItem';
import AllCategoryMenu from './AllCategoryMenu';


interface IAllcategory {
    list:INavItem[]
}
const AllCategory = ({list}:IAllcategory) => {
    const [isOn, setIsOn] = useState<Boolean>(false);

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOn(true);
    }
    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOn(false);
    }


    return (
        <div className="all-category" onMouseLeave={handleMouseLeave}>
            <div className={`menu ${isOn ? 'on' : ''}`} onMouseOver={handleMouseOver} />
            <AllCategoryMenu list={list} visible={isOn}/>
        </div>
    )
}

export default AllCategory;