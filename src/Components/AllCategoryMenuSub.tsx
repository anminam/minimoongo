import React, { useState, useEffect } from 'react';
import { ICategory, IMainCategoryId } from 'Interfaces/ICategory';
import { connect } from 'react-redux';
import { ICategoryReducer } from 'Core/category/categoryData';
import { Utils } from 'Core/Utils';
import {NavUtils} from 'Core/nav/utils';


interface IAllCategoryMenuSub {
    // title?: string;
    navCategoryId?: IMainCategoryId;
    categoryData: ICategoryReducer
}

interface IDisplayCategory {
    id: string;
    list: ICategory[];
}
const AllCategoryMenuSub = ({ categoryData, navCategoryId }:IAllCategoryMenuSub) => {

    const [displayCategoryList, setDisplayCategoryList] = useState<IDisplayCategory[]>();
    const [title, setTitle]  = useState<string>('');

    useEffect(()=> {
        if( navCategoryId ) {
            setTitle(NavUtils.getCategoryName(navCategoryId));

            const categoryObj = Utils.findObject(categoryData.categoryList, navCategoryId);
            if (categoryObj) {
                makeCategoryList(categoryObj.list);
            }
        }

    },[categoryData, navCategoryId]);

    const makeCategoryList = (categories:ICategory[]) => {
        const newCategories:IDisplayCategory[] = [];

        categories.forEach((item, i) => {
            const saveArray = Utils.findObject(newCategories, item.categoryIndex);
            if(saveArray) {
                saveArray.list.push(item);
            } else {
                newCategories.push({
                    id: item.categoryIndex,
                    list: [item],
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
                                        return <li key={ii}>
                                            <a href={iitem.id} className={`${iitem.isBig ? 'bold' : ''}`}>{iitem.displayName}</a>
                                        </li>
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


const mapStateToProps = (state:any) => {

    const {category} = state;
    return {
        categoryData: category
    }
}

export default connect(mapStateToProps)(AllCategoryMenuSub);