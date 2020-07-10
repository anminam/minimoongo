/* eslint-disable prettier/prettier */

const file = require("./module/file");
const con = require("./constant");
const bestSeller = require("./module/bestSeller");
const mainSlider = require("./module/mainSlider");
const pageTopSlider = require("./module/pageTopSlider");
const pageNormalBox = require("./module/pageNormalBox");
const pageBoxMap = require("./module/pageBoxMap");

const {
  Builder,
  By,
  Key,
  until,
  WebDriver,
  Capabilities,
} = require("selenium-webdriver");
require("chromedriver");
var webdriver = require("selenium-webdriver");
const korPage = require("./pages/korPage");
const otherPage = require("./pages/otherPage");

// 숨기기
const chromeCapablities = Capabilities.chrome();
// const chromeOptions = {
//     "args": ['--headless', '--no-sandbox']
// }
// // chromeCapablities.set('chromeOptions', chromeOptions);
let driver;

(async () => {
  // driver = new Builder().withCapabilities(chromeCapablities).build();
  driver = new webdriver.Builder().forBrowser("chrome").build();

  try {
    await korPage.start(driver);
    await otherPage.start(driver);

    if (con.IS_CRAW_BSSTSELLR_KOR) {
      // kor
      const bestSellerList = await bestSeller(driver, con.BESTSELLER_URL, {
        categoryId: "korbook",
      });
      file.save(con.FILE_FOLDER_BASE, "korbook", bestSellerList);
    }
    // other
    if (con.IS_CRAW_BSSTSELLR_OTHER) {
      const bestSellerListOther = await bestSeller(
        driver,
        con.BESTSELLER_OTHER_URL,
        {
          categoryId: "otherbook",
        }
      );
      file.save(con.FILE_FOLDER_BASE, "otherbook", bestSellerListOther);
    }
    // mainPageSliderEvent
    if (con.IS_CRAW_MAINPAGE_SLRIDER) {
      const seleterObj = {
        main: "#todayBook",
        ul: ".content ul.list_welcome_kyobo",
      };
      const bestSellerListOther = await mainSlider(
        driver,
        con.BASE_URL,
        seleterObj,
        {
          categoryId: "mainPageSliderEvent",
        }
      );
      file.save(
        con.FILE_FOLDER_BASE,
        "mainPageSliderEvent",
        bestSellerListOther
      );
    }
  } catch (err) {
    console.log(err);
  } finally {
    // await driver.quit();
  }
})();
