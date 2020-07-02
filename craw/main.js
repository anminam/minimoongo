/* eslint-disable prettier/prettier */

const file = require('./module/file');
const bestSeller = require('./module/bestSeller');


const {
    Builder,
    By,
    Key,
    until,
    WebDriver,
    Capabilities
} = require('selenium-webdriver');
const {
    BESTSELLER_URL,
    FILE_FOLDER_BASE,
    BESTSELLER_OTHER_URL
} = require('./constant');


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
        // kor
        const bestSellerList = await bestSeller(driver, BESTSELLER_URL, {
            categoryId: "korbook"
        });
        file.save(FILE_FOLDER_BASE, 'korbook', bestSellerList);
        // other
        const bestSellerListOther = await bestSeller(driver, BESTSELLER_OTHER_URL, {
            categoryId: "otherbook"
        });
        file.save(FILE_FOLDER_BASE, 'otherbook', bestSellerListOther);

    } catch (err) {
        console.log(err);

    } finally {
        // await driver.quit();
    }
})();