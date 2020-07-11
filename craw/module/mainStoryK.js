/* eslint-disable prettier/prettier */
const cheerio = require("cheerio");
const {
  Builder,
  By,
  Key,
  until,
  WebDriver,
  Capabilities,
} = require("selenium-webdriver");

const { utils } = require("./utils");

let $;
let _d;
let _selectorObj;

/**
 * 슬라이더 크롤링
 * @param {driver} driver driver
 * @param {string} option 옵션
 * @param {Object} seleterObj 셀렉터 정보
 * @param {Object} addObj 추가정보
 * @return {Object}
 */
const main = async (driver, option, seleterObj, addObj) => {
  const obj = {
    id: option.id || "blank",
    displayName: option.title || "blank",
    list: [],
  };

  _d = driver;
  _selectorObj = seleterObj;

  try {
    await _d.get(option.url);

    // 가져오기
    const mainDiv = await _d.findElement(By.css(_selectorObj.main));
    const html = await mainDiv.getAttribute("innerHTML");
    $ = cheerio.load(html);

    let $sections = $(".section");
    if (seleterObj.isSection === false) {
      $sections = $.root();
    }
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
        displayName: $subEl.find("h2").text(),
        list: getGoodsList($subEl),
      };

      list.push(obj);
      console.log(`${i} 번째 크롤링 완료`);
    });
  } catch (e) {
    console.log(this.name, e);
  }

  return list;
};

const getGoodsList = ($el) => {
  const $liList = $el.find(`${_selectorObj.ul} li`);
  const list = [];

  try {
    $liList.each((i, el) => {
      const $subEl = $(el);

      const src = $subEl.find(".cover img").attr("src");
      const id = utils.getIdFormSrc(src);
      const price = utils.getRawPrice($subEl.find(".price strong").text());

      list.push({
        id,
        src,
        displayName: $subEl.find(".title").text().trim(),
        summaryText: $subEl.find(".summary").text().trim(),
        subCategoryText: $subEl.find(".category").text().replace(/[[\]]/g, ""),
        price,
        // category: $subEl.find('.category').text().trim(),
        // list: getSubImageList($subEl)
      });
    });
  } catch (e) {
    console.log(this.name, e);
  }

  return list;
};

module.exports = main;
