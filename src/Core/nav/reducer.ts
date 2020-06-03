import { Record } from "immutable";
import { navActions } from "./actions";
import { IMainCategory } from "Interfaces/IMainCategory";
import { ActionType } from 'typesafe-actions';


interface INavReducer {
    list: IMainCategory[]
}
export const initState: Record.Factory<INavReducer> = Record({
    list: [
        {
            id:'a',
            displayName: '국내도서',
            href: '/korbook',
            categoryId: 'korbook'
        },
        {
            id:'ab',
            displayName: '외국도서',
            href: '/otherbook',
            categoryId: 'otherbook'
        },
        {
            id:'abc',
            displayName: 'eBook',
            href: '/ebook',
            categoryId: 'ebook'
        },
        {
            id:'abd',
            displayName: '웹소설',
            href: '/webnovel',
            categoryId: 'webnovel'
        },
        {
            id:'abe',
            displayName: '기프트',
            href: '/gift',
            categoryId: 'gift'
        },
        {
            id:'abf',
            displayName: '음반',
            href: '/music',
            categoryId: 'music'
        },
        {
            id:'abg',
            displayName: '중고장터',
            href: '/usedthing',
            categoryId: 'usedthing'
        },
    ]
});

type NavAction = ActionType<typeof navActions>

export const navReducer = (state = new initState(), action:NavAction) => {
    switch (action.type) {
        case navActions.LALLALALAL:
            return state;
        case navActions.LALLALALAL1:
            return state;
        default:
            return state;
    }
}