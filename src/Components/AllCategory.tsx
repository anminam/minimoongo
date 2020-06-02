import React, { useState } from 'react';


const AllCategory = () => {

    const [isOn, setIsOn] = useState<Boolean>(true);

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOn(true);
    }
    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOn(false);
    }


    return (
        <div className="all-category">
            {/* <button type="button" /> */}
            <div className={`menu ${isOn ? 'on' : ''}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        </div>
    )
}

export default AllCategory;