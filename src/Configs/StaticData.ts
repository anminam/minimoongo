import { ILink } from "../Interfaces/ILink";
import { IEventListItem } from "Interfaces/IEventList";


export const navItemList:ILink[] = [
    {
        id:'a',
        displayName: '국내도서',
        href: '/korbook'
        
    },
    {
        id:'ab',
        displayName: '외국도서',
        href: '/otherbook'
    },
    {
        id:'abc',
        displayName: 'eBook',
        href: '/ebook'
    },
    {
        id:'abd',
        displayName: '웹소설',
        href: 'webnovel'
    },
    {
        id:'abe',
        displayName: '기프트',
        href: 'http://www.naver.com'
    },
    {
        id:'abf',
        displayName: '음반',
        href: 'http://www.naver.com'
    },
    {
        id:'abg',
        displayName: '중고장터',
        href: 'http://www.naver.com'
    },
];

export const mainEventList:IEventListItem[] = [
    {
        id:'a1',
        displayName: '요즘 이 책',
        list: [
            {
                id:'a1',
                displayName: '안녕',
                href: 'http://www.naver.com'
            },
            {
                id:'a2',
                displayName: '나도안녕',
                href: 'http://www.naver.com'
            },
            {
                id:'a3',
                displayName: '너도',
                href: 'http://www.naver.com'
            },
        ]
    },
    {
        id:'a2',
        displayName: '핫이슈',
        list: [
            {
                id:'123213',
                displayName: '하니슈',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'a3',
        displayName: '새로나온책',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'a4',
        displayName: '기획/테마',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'a5',
        displayName: 'ebook',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'a6',
        displayName: 'sam',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'a7',
        displayName: '한정특가',
        list: [
            {
                id:'123213',
                displayName: '한정특가',
                href: 'http://www.naver.com'
            }
        ]
    }
]