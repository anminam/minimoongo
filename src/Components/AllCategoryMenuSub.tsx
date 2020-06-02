import React, { useState, useEffect } from 'react';
import { ICategory, ICategories } from 'Interfaces/ICategory';
import { Utils } from 'Core/Utils';

interface IAllCategoryMenuSub {
    title?: string;
    categories?: ICategories;
}

interface IDisplayCategory {
    id: string;
    list: ICategory[];
}
const AllCategoryMenuSub = ({title, categories}:IAllCategoryMenuSub) => {

    const [displayCategoryList, setDisplayCategoryList] = useState<IDisplayCategory[]>();

    // const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const id = event.currentTarget.id;
    //     setSeletedId(id);
    // }

    useEffect(() => {
        if (categories) {
            makeCategoryList(categories.list);
        }
    }, [categories]);

    const makeCategoryList = (categories:ICategory[]) => {
        const newCategories:IDisplayCategory[] = [];

        categories.forEach((item, i) => {
            const saveArray = Utils.findObject(newCategories, item.categoryIndex);
            if(saveArray) {
                saveArray.list.push(item);
            } else {
                newCategories.push({
                    id: item.categoryIndex,
                    list: [item]
                });
            }

        });
        setDisplayCategoryList(newCategories);
    }
    
    return (
        <div className={`sub-category`}>
            <div className="title">
                <a href={'/'}>{title}</a>
            </div>
            <div className={`sub-category__list_container`}>
                {
                    displayCategoryList &&
                    displayCategoryList.map((item, i) => {
                        return (
                            <ul key={i} className="category">
                                {
                                    item.list.map((iitem, ii ) => {
                                        return <li key={ii}><a href={iitem.id}>{iitem.displayName}</a></li>
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllCategoryMenuSub;