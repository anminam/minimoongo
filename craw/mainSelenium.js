/* eslint-disable prettier/prettier */

const file = require('./file');
const bestSeller = require('./bestSeller');


const {
    Builder,
    By,
    Key,
    until,
    WebDriver,
    Capabilities
} = require('selenium-webdriver');
const BASE_URL = "http://www.kyobobook.co.kr/"
const BESTSELLER_URL = BASE_URL + "bestSellerNew/bestseller.laf";

// 숨기기
const chromeCapablities = Capabilities.chrome();
// const chromeOptions = {
//     "args": ['--headless', '--no-sandbox']
// }
// // chromeCapablities.set('chromeOptions', chromeOptions);
let driver;

(async () => {
    driver = new Builder().withCapabilities(chromeCapablities).build();
    try {
        const bestSellerList = await bestSeller(driver, BESTSELLER_URL);
        file.save('fff', bestSellerList);

    } catch (err) {
        console.log(err);

    } finally {
        // await driver.quit();
    }
})();