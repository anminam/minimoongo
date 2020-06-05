import { categoryActions } from "./actions";
import { IMainCategory } from "Interfaces/IMainCategory";
import { ActionType } from 'typesafe-actions';
import { CategoryData } from "./categoryData";
import {ICategory, ICategories} from 'Interfaces/ICategory';

type CategoryAction = ActionType<typeof categoryActions>

export const categoryReducer = (state = CategoryData, action:CategoryAction) => {
    switch (action.type) {
        default:
            return state;
    }
}