import React, { useState } from 'react';
import AllCategoryMenu from './AllCategoryMenu';
import { IMainCategory } from 'Interfaces/IMainCategory';


interface IAllcategory {
    list:IMainCategory[]
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