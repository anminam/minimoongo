/* eslint-disable prettier/prettier */
const BASE_URL = "http://www.kyobobook.co.kr/";
const BESTSELLER_URL = BASE_URL + "bestSellerNew/bestseller.laf";
const BESTSELLER_OTHER_URL = BASE_URL + "bestSellerNew/steadyseller.laf?mallGb=ENG";

const FILE_FOLDER_BASE = './craw/files';

module.exports = {
    BASE_URL,
    BESTSELLER_URL,
    BESTSELLER_OTHER_URL,
    FILE_FOLDER_BASE
}