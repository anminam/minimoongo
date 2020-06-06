import React, { useState } from 'react';
import NavCategory from 'Components/NavCategory';
import { IMainCategoryId } from 'Interfaces/ICategory';

const KorBook = () => {

    const [categoryId, setCategoryId] = useState<IMainCategoryId>('korbook');
    
    return (
        <div className="container_lg page">
            <div className="category-page">
                <div className="category-page__category">
                    <NavCategory navCategoryId={categoryId} />
                </div>
                <div className="category-page__contents">
                    컨텐츠
                </div>

            </div>
        </div>
    )
}

export default KorBook;