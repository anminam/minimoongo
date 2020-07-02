/* eslint-disable prettier/prettier */
const cheerio = require("cheerio");
const {
    Builder,
    By,
    Key,
    until,
    WebDriver,
    Capabilities
} = require('selenium-webdriver');
let $;
let _d;
let _selectorObj;

/**
 * 슬라이더 크롤링
 * @param {driver} driver 
 * @param {string} url
 * @param {Object} seleterObj 셀렉터 정보
 * @param {Object} addObj 추가정보
 * @return {Object}
 */
const main = async (driver, url, seleterObj, addObj) => {
    const obj = {
        id: 'korbookHaveSliderEvent',
        displayName: "오늘의 책",
        list: []
    }

    _d = driver;
    _selectorObj = seleterObj;

    try {
        await _d.get(url);

        // 가져오기
        const mainDiv = await _d.findElement(By.css(_selectorObj.main));
        const html = await mainDiv.getAttribute("innerHTML");
        $ = cheerio.load(html);

        const $sections = $('.section');
        const list = getCategoryList($sections);

        obj.list = list;
    } catch (e) {
        console.log(this.name, e);
    }

    return obj;
};

const getCategoryList = ($el) => {
    const list = [];

    try {
        $el.each((i, el) => {
            console.log(`${i} 번째 크롤링 중`);
            const $subEl = $(el);
            const obj = {
                id: i.toString(),
                displayName: $subEl.find('h3').text(),
                list: getGoodsList($subEl),
            };

            list.push(obj);
            console.log(`${i} 번째 크롤링 완료`);

            const subImageList = getSubImageList($subEl);
            list[i].list.forEach((item, ii) => {
                item.subImageList = subImageList[ii];
            });
        });


    } catch (e) {
        console.log(this.name, e);
    }

    return list;
}

const getGoodsList = ($el) => {
    const $liList = $el.find(`${_selectorObj.ul} li`);
    const list = [];

    try {

        $liList.each((i, el) => {
            const $subEl = $(el);

            list.push({
                id: $subEl.find('img').attr('src').split('/').pop().replace('.jpg', ''),
                src: $subEl.find('img').attr('src'),
                displayName: $subEl.find('img').attr('alt').trim(),
                // list: getSubImageList($subEl)
            })
        });

    } catch (e) {
        console.log(this.name, e);
    }

    return list;
}

const getSubImageList = ($el) => {
    const list = [];
    const $liList = $el.find(`${_selectorObj.ul} li .card_news`);
    try {

        $liList.each((i, el) => {
            list.push(getSubItem($(el)))
        })
    } catch (e) {
        console.log(this.name, e);
    }

    return list;
}

const getSubItem = ($el) => {
    const list = [];

    try {
        $el.find('tr td').each((i, el) => {
            const obj = {};
            const $td = $(el);
            obj.id = i.toString();
            obj.displayName = i.toString();
            obj.href = '/';
            obj.src = $td.attr('data-image');

            list.push(obj);
        })
    } catch (e) {
        console.log(this.name, e);
    }
    return list;
}

module.exports = main;