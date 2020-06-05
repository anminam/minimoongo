import { IEventListItem } from "Interfaces/IEventList";
import { IMainCategory } from "Interfaces/IMainCategory";
import { ICategories } from "Interfaces/ICategory";



export const navItemList:IMainCategory[] = [
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
];

export const mainEventList:IEventListItem[] = [
    {
        id:'a1',
        displayName: '요즘 이 책',
        list: [
            {
                id:'b1',
                displayName: '안녕',
                href: 'http://www.naver.com'
            },
            {
                id:'b2',
                displayName: '나도안녕',
                href: 'http://www.naver.com'
            },
            {
                id:'b3',
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
                id:'b1',
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
                id:'b2',
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
                id:'b3',
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
                id:'b4',
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
                id:'b5',
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
                id:'b6',
                displayName: '한정특가',
                href: 'http://www.naver.com'
            }
        ]
    }
];
export const bookCategories:ICategories[] = [
    {
        id: 'korbook',
        list: [
            { categoryIndex: '1',     id: "daa",      displayName: "소설" },
            { categoryIndex: '1',     id: "dab",      displayName: "시/에세이" },
            { categoryIndex: '1',     id: "dag",      displayName: "경제/경영" },
            { categoryIndex: '1',     id: "dah",      displayName: "자기계발" },
            { categoryIndex: '2',     id: "dac",      displayName: "인문" },
            { categoryIndex: '2',     id: "dad",      displayName: "역사/문화" },
            { categoryIndex: '2',     id: "dae",      displayName: "종교" },
            { categoryIndex: '2',     id: "daf",      displayName: "정치/사회" },
            { categoryIndex: '2',     id: "dap",      displayName: "예술/대중문화" },
            { categoryIndex: '2',     id: "daz",      displayName: "과학" },
            { categoryIndex: '2',     id: "da1",      displayName: "기술/공학" },
            { categoryIndex: '2',     id: "da2",      displayName: "컴퓨터/IT" },
            { categoryIndex: '3',     id: "dai",      displayName: "유아(0~7세)" },
            { categoryIndex: '3',     id: "daj",      displayName: "어린이(초등)" },
            { categoryIndex: '3',     id: "dal",      displayName: "어린이전집" },
            { categoryIndex: '3',     id: "dak",      displayName: "어린이영어" },
            { categoryIndex: '3',     id: "dao",      displayName: "청소년" },
            { categoryIndex: '4',     id: "dam",      displayName: "초등참고서" },
            { categoryIndex: '4',     id: "dan",      displayName: "중/고등참고서" },
            { categoryIndex: '4',     id: "da5",      displayName: "대학교재" },
            { categoryIndex: '4',     id: "da8",      displayName: "방송통신대교재" },
            { categoryIndex: '4',     id: "da3",      displayName: "취업/수험서" },
            { categoryIndex: '4',     id: "dax",      displayName: "외국어" },
            { categoryIndex: '5',     id: "das",      displayName: "가정/육아" },
            { categoryIndex: '5',     id: "dav",      displayName: "건강" },
            { categoryIndex: '5',     id: "daq",      displayName: "여행" },
            { categoryIndex: '5',     id: "dat",      displayName: "요리" },
            { categoryIndex: '5',     id: "dar",      displayName: "취미/실용/스포츠" },
            { categoryIndex: '6',     id: "dau",      displayName: "잡지" },
            { categoryIndex: '6',     id: "daw",      displayName: "만화" },
            { categoryIndex: '7',     id: "da6",      displayName: "한국소개도서" }
        ]
    },
    {
        id: 'otherbook',
        list: [
            {categoryIndex: '1',        id:"c35",   displayName: "영미도서" },
            {categoryIndex: '1',        id:"xaa",   displayName: "문학" },
            {categoryIndex: '1',        id:"xae",   displayName: "인문/사회" },
            {categoryIndex: '1',        id:"xaf",   displayName: "경제/경영" },
            {categoryIndex: '1',        id:"xag",   displayName: "과학/기술" },
            {categoryIndex: '1',        id:"xab",   displayName: "취미/실용/여행" },
            {categoryIndex: '1',        id:"xai",   displayName: "ELT/어학/사전" },
            {categoryIndex: '1',        id:"xaj",   displayName: "교재" },
            {categoryIndex: '1',        id:"xac",   displayName: "생활/요리/건강" },
            {categoryIndex: '1',        id:"xad",   displayName: "예술/건축" },
            {categoryIndex: '2',        id:"xah",   displayName: "어린이영어" },
            {categoryIndex: '2',        id:"c37",   displayName: "유아영어" },
            {categoryIndex: '2',        id:"c38",   displayName: "영역별영어학습" },
            {categoryIndex: '2',        id:"c39",   displayName: "코스북" },
            {categoryIndex: '2',        id:"c3b",   displayName: "영어동화/그림책" },
            {categoryIndex: '2',        id:"c3a",   displayName: "미국교과서" },
            {categoryIndex: '2',        id:"c3c",   displayName: "어린이중국어" },
            {categoryIndex: '2',        id:"c3d",   displayName: "어린이일본어" },
            {categoryIndex: '3',        id:"c36",   displayName: "일본도서" },
            {categoryIndex: '3',        id:"rDq",   displayName: "잡지" },
            {categoryIndex: '3',        id:"rDv",   displayName: "실용서/예술" },
            {categoryIndex: '3',        id:"rDp",   displayName: "만화/애니" },
            {categoryIndex: '3',        id:"rDx",   displayName: "문학" },
            {categoryIndex: '3',        id:"rDt",   displayName: "문고" },
            {categoryIndex: '3',        id:"rDy",   displayName: "라이트노벨" },
            {categoryIndex: '3',        id:"rDr",   displayName: "어학/학습" },
            {categoryIndex: '3',        id:"rDs",   displayName: "엔터테인먼트" },
            {categoryIndex: '3',        id:"rDa",   displayName: "아동" },
            {categoryIndex: '3',        id:"rDw",   displayName: "인문/사회" },
            {categoryIndex: '3',        id:"rDz",   displayName: "자연/기술과학" },
            {categoryIndex: '3',        id:"rDu",   displayName: "신서" },
            // {categoryIndex: '1',        id:"c67",   displayName: "베스트셀러" },
            // {categoryIndex: '1',        id:"c68",   displayName: "새로나온책" },
            // {categoryIndex: '1',        id:"c6a",   displayName: "일본신간잡지" },
            // {categoryIndex: '1',        id:"XXA",   displayName: "일본잡지 정기구독" },
            // {categoryIndex: '1',        id:"rqe",   displayName: "이벤트 마당" },
        ]
    }
];
