const _c = require("../constant");

const mainSlider = require("../module/mainSlider");
const pageTopSlider = require("../module/pageTopSlider");
const pageNormalBox = require("../module/pageNormalBox");
const file = require("../module/file");

const pageUrl = _c.PAGE_OTHER_URL;

const start = async (driver) => {
  // otherPageTopSlider
  if (_c.IS_CRAW_OTHERPAGE_TOP_SLRIDER) {
    const id = "otherPageTopSlider";
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

  // 베스트셀러
  if (_c.IS_CRAW_OTHERPAGE_TOP_SLRIDER) {
    const id = "otherPageBestseller";
    const paramObj = {
      id: id,
      title: "베스트셀러",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#bestSeller",
      ul: ".list_main_choice",
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await pageNormalBox(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }

  // 오늘의 책
  if (_c.IS_CRAW_OTHERPAGE_SLRIDER) {
    const id = "otherPageToday";
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

  if (false) {
    const id = "otherPageYongMi";
    const paramObj = {
      id: id,
      title: "영미도서 MD선택",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#mdChoiceEng",
      ul: ".content ul.list_main_choice",
      isSection: false,
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await mainSlider(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }
};

module.exports = { start };
