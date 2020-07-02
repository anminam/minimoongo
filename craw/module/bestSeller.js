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
const {
    CRAW_BESTSELLER_PAGE
} = require("../constant");
let driver;

/**
 * 베스트셀러 크롤링
 * @param {driver} driver 
 * @param {string} url
 * @param {Object} addObj 추가정보
 */
const getBestSellerList = async (d, url, addObj) => {
    let list = [];
    driver = d;
    try {
        await driver.get(url);

        // 가져오기
        const pagingUl = await driver.findElement(By.className("list_paging"));
        const pagingLis = await pagingUl.findElements(By.css("li"));
        let pagingLen = pagingLis.length;
        if (CRAW_BESTSELLER_PAGE) {
            pagingLen = CRAW_BESTSELLER_PAGE;
        }

        for (let i = 1; i <= pagingLen; i++) {
            console.log(`${i} 번째 크롤링 중`);
            // 다음
            const pagingUl = await driver.findElement(By.className("list_paging"));
            await pagingUl
                .findElement(By.css(`li:nth-child(${i})`))
                .findElement(By.css("a"))
                .click();
            await driver.sleep(1000);
            // 가져오기
            const items = await getList("list_type01", addObj);
            list = [...list, ...items];
            console.log(`${i} 번째 크롤링 완료`);
        }
    } catch (e) {
        console.log(this.name, e);
    }

    return list;
};

const getList = async (className, addObj) => {
    const resultList = [];

    try {
        const el = await driver.findElement(By.className(className));

        const html = await el.getAttribute("innerHTML");
        // console.log(html)
        const $ = cheerio.load(html);

        // 찾은거 반복
        $("li").each((i, item) => {
            const obj = {
                img: '',
                id: '',
                rank: '',
                subscript: '',
                price: '',
                sellPrice: '',
                ebookPrice: '',
                author: "",
                publisher: "",
                productDate: "",
            };
            const $item = $(item);

            if ($item.find(".cover img").length === 0) {
                return;
            }

            // 대표
            obj.img = $item.find(".cover img").attr("src");
            obj.id = obj.img.split('/').pop().replace('.jpg', '');
            obj.rank = $item.find(".rank").text();
            obj.subscript = $item.find(".detail .subtitle").text().trim();
            obj.name = $item.find(".detail .title").text().trim();

            // 가격
            const price = $item.find(".detail .price .book_price").text().trim();
            obj.price = Number(price.replace(/[,원]/g, ''));
            obj.sellPrice = obj.price;
            const ebookPrice = $item.find(".detail .price .ebook_price").text().trim();
            obj.ebookPrice = Number(ebookPrice.replace(/[,원]/g, ''));

            const reviewCount = $item.find(".review img").attr('src');
            const reviewRate = $item.find(".review a").text();

            // 리뷰
            obj.reviewObj = {
                count: getReviewCount(reviewCount),
                rate: getReviewRate(reviewRate)
            }

            // 기타 작가
            const rawAuthor = $item
                .find(".detail .author")
                .text()
                .replace(/[\n\t\r]/g, "");
            const rawAuthorList = rawAuthor.split("|");

            if (rawAuthor) {
                obj.author = getAuthor(rawAuthorList[0]);
                obj.publisher = rawAuthorList[1] ? rawAuthorList[1].trim() : "";
                obj.productDate = rawAuthorList[2] ? rawAuthorList[2].trim() : "";
            }

            if (addObj) {
                Object.assign(obj, addObj);
            }

            if (obj.img) {
                resultList.push(obj);
            }
            console.log(i);
        });
    } catch (e) {
        console.log(this.name, e);
    }

    return resultList;
};

/**
 * 작가 후처리
 * 
 * @param {*} str 
 * @return {number}
 */
const getAuthor = (str) => {
    if (!str) {
        return '';
    }


    let result = str;
    try {
        result = result.split('저자')[0];

    } catch (e) {
        console.log(this.name, e);
    }
    result.trim();

    return result;

}

/**
 * 리뷰카운트 가져오기
 * 
 * @param {*} str 
 * @return {number}
 */
const getReviewCount = (str) => {

    let result = 0;
    try {
        result = str.split('/').pop().replace('.gif', '').slice(-1);
        result = Number(result);
    } catch (e) {
        console.log(this.name, e);
    }
    return result;

}
/**
 * 별점 가져오기
 * 
 * @param {*} str 
 * @return {number}
 */
const getReviewRate = (str) => {

    let result = 0;
    try {
        result = str.replace(/[()개의]/g, '').split(' ')[0];
        result = Number(result);
    } catch (e) {
        console.log(this.name, e);
    }
    return result;

}

module.exports = getBestSellerList;