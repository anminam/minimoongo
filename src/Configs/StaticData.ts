import { ILink } from "../Interfaces/ILink";
import { IEventList } from "Interfaces/IEventList";


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
        id:'ab',
        displayName: 'eBook',
        href: '/ebook'
    },
    {
        id:'ab',
        displayName: '웹소설',
        href: 'webnovel'
    },
    {
        id:'ab',
        displayName: '기프트',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: '음반',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: '중고장터',
        href: 'http://www.naver.com'
    },
];

export const mainEventList:IEventList[] = [
    {
        id:'asdf',
        displayName: '요즘 이 책',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'asdf',
        displayName: '핫이슈',
        list: [
            {
                id:'123213',
                displayName: '좋은책',
                href: 'http://www.naver.com'
            }
        ]
    },
    {
        id:'asdf',
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
        id:'asdf',
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
        id:'asdf',
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
        id:'asdf',
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
        id:'asdf',
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