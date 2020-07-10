const _c = require("../constant");

const mainSlider = require("../module/mainSlider");
const pageTopSlider = require("../module/pageTopSlider");
const pageNormalBox = require("../module/pageNormalBox");
const pageBoxMap = require("../module/pageBoxMap");
const file = require("../module/file");

const pageUrl = _c.PAGE_KOR_URL;

const start = async (driver) => {
  // korPageTopSlider
  if (_c.IS_CRAW_KORPAGE_TOP_SLRIDER) {
    const id = "korPageTopSlider";
    const paramObj = {
      id: id,
      title: "이벤트",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#mainEventDiv",
      ul: "ul",
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await pageTopSlider(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }
  // 오늘의 책
  if (_c.IS_CRAW_KORPAGE_SLRIDER) {
    const id = "korPageToday";
    const paramObj = {
      id: id,
      title: "오늘의 책",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#todayBook2",
      ul: ".content ul.list_main_kyobo",
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await mainSlider(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }
  // 베스트셀러
  if (_c.IS_CRAW_KORPAGE_BESTSELLER) {
    const id = "korPageBestseller";
    const paramObj = {
      id: id,
      title: "베스트셀러",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#bestSeller",
      ul: ".list_main_best",
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await pageNormalBox(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }

  // korPageToday
  if (_c.IS_CRAW_KORPAGE_ADBOXMAP) {
    const id = "korPageBoxMap";
    const paramObj = {
      id: id,
      title: "이벤트",
      url: pageUrl,
    };
    const seleterObj = {
      main: ".box_main_banner",
      ul: ".list_main_banner",
    };
    const addObj = {
      // categoryId: id,
    };
    const obj = await pageBoxMap(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, obj);
  }
};

module.exports = { start };
