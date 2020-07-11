/* eslint-disable prettier/prettier */

const BASE_URL = "http://www.kyobobook.co.kr";
const BESTSELLER_URL = BASE_URL + "/bestSellerNew/bestseller.laf";
const BESTSELLER_OTHER_URL =
  BASE_URL + "/bestSellerNew/steadyseller.laf?mallGb:ENG";
const PAGE_KOR_URL = BASE_URL + "/indexKor.laf";
const PAGE_OTHER_URL = BASE_URL + "/indexEng.laf";

const main = {
  BASE_URL,
  BESTSELLER_URL,
  BESTSELLER_OTHER_URL,
  PAGE_KOR_URL,
  PAGE_OTHER_URL,

  FILE_FOLDER_BASE: "./craw/files",

  // 크롤링
  IS_CRAW_BSSTSELLR_KOR: false,
  IS_CRAW_BSSTSELLR_OTHER: false,

  IS_CRAW_MAINPAGE_SLRIDER: false,

  IS_CRAW_KORPAGE_TOP_SLRIDER: false,
  IS_CRAW_OTHERPAGE_TOP_SLRIDER: false,

  IS_CRAW_KORPAGE_SLRIDER: false,
  IS_CRAW_OTHERPAGE_SLRIDER: false,

  IS_CRAW_KORPAGE_BESTSELLER: false,
  IS_CRAW_OTHERPAGE_BESTSELLER: false,

  IS_CRAW_KORPAGE_ADBOXMAP: false,
  IS_CRAW_OTHERPAGE_ADBOXMAP: false,

  // 크롤링 페이지 개수
  // CRAW_BESTSELLER_PAGE: -1,
  CRAW_BESTSELLER_PAGE: 1,
};

module.exports = main;
