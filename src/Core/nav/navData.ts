import { Record } from "immutable";
import { INavReducer } from "./reducer";

export const NavData: Record.Factory<INavReducer> = Record({
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