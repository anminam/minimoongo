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
let driver;

/**
 * 베스트셀러 크롤링
 * @param {driver} driver 
 * @param {string} url
 */
const getBestSellerList = async (d, url) => {
    let list = [];
    driver = d;
    try {
        await driver.get(url);

        // 가져오기
        const pagingUl = await driver.findElement(By.className("list_paging"));
        const pagingLis = await pagingUl.findElements(By.css("li"));
        // const pagingLen = pagingLis.length;
        const pagingLen = 1;

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
            const items = await getList("list_type01");
            list = [...list, ...items];
            console.log(`${i} 번째 크롤링 완료`);
        }
    } catch (e) {
        console.log(e);
    }

    return list;
};

const getList = async (className) => {
    const resultList = [];

    try {
        const el = await driver.findElement(By.className(className));

        const html = await el.getAttribute("innerHTML");
        // console.log(html)
        const $ = cheerio.load(html);

        // 찾은거 반복
        $("li").each((i, item) => {
            const obj = {
                author: "",
                company: "",
                date: "",
            };
            const $item = $(item);

            obj.rank = $item.find(".rank").text();
            obj.img = $item.find(".cover img").attr("src");
            obj.subscript = $item.find(".detail .subtitle").text().trim();
            obj.name = $item.find(".detail .title").text().trim();

            const rawAuthor = $item
                .find(".detail .author")
                .text()
                .replace(/[\n\t\r]/g, "");
            const rawAuthorList = rawAuthor.split("|");

            if (rawAuthor) {
                obj.author = rawAuthorList[0] ? rawAuthorList[0].trim() : "";
                obj.publisher = rawAuthorList[1] ? rawAuthorList[1].trim() : "";
                obj.productDate = rawAuthorList[2] ? rawAuthorList[2].trim() : "";
            }

            if (obj.rank) {
                resultList.push(obj);
            }
        });
    } catch (e) {
        console.log(e);
    }

    return resultList;
};


module.exports = getBestSellerList;