/* eslint-disable prettier/prettier */

const file = require('./module/file');
const bestSeller = require('./module/bestSeller');
const mainSlider = require('./module/mainSlider');


const {
    Builder,
    By,
    Key,
    until,
    WebDriver,
    Capabilities
} = require('selenium-webdriver');
const con = require('./constant');


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
        if (con.IS_CRAW_BSSTSELLR_KOR) {
            // kor
            const bestSellerList = await bestSeller(driver, con.BESTSELLER_URL, {
                categoryId: "korbook"
            });
            file.save(con.FILE_FOLDER_BASE, 'korbook', bestSellerList);
        }
        // other
        if (con.IS_CRAW_BSSTSELLR_OTHER) {
            const bestSellerListOther = await bestSeller(driver, con.BESTSELLER_OTHER_URL, {
                categoryId: "otherbook"
            });
            file.save(con.FILE_FOLDER_BASE, 'otherbook', bestSellerListOther);
        }
        // mainPageSliderEvent
        if (con.IS_CRAW_MAINPAGE_SLRIDER) {
            const seleterObj = {
                main: '#todayBook',
                ul: '.content ul.list_welcome_kyobo'
            }
            const bestSellerListOther = await mainSlider(driver, con.BASE_URL, seleterObj, {
                categoryId: "mainPageSliderEvent"
            });
            file.save(con.FILE_FOLDER_BASE, 'mainPageSliderEvent', bestSellerListOther);
        }
        // korPageSliderEvent
        if (con.IS_CRAW_KORPAGE_SLRIDER) {
            const seleterObj = {
                main: '#todayBook2',
                ul: '.content ul.list_main_kyobo'
            }
            const bestSellerListOther = await mainSlider(driver, con.PAGE_KORBOOK_URL, seleterObj, {
                categoryId: "korPageSliderEvent"
            });
            file.save(con.FILE_FOLDER_BASE, 'korPageSliderEvent', bestSellerListOther);
        }

    } catch (err) {
        console.log(err);

    } finally {
        // await driver.quit();
    }
})();