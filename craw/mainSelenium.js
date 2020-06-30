/* eslint-disable prettier/prettier */

const cheerio = require("cheerio");


const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');
const BASE_URL = "http://www.kyobobook.co.kr/"
const BESTSELLER_URL = BASE_URL + "bestSellerNew/bestseller.laf";

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(BESTSELLER_URL);
        const el = await driver.findElement(By.className("list_type01"));
        el.findElements('li').then(value => {
            console.log(value);
        })
    } finally {
        await driver.quit();
    }
})();