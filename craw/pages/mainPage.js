const _c = require("../constant");

const mainStoryK = require("../module/mainStoryK");
const file = require("../module/file");

const pageUrl = _c.BASE_URL;

const start = async (driver) => {
  // story-k
  if (true) {
    const id = "story-k";
    const paramObj = {
      id: id,
      title: "스토리K",
      url: pageUrl,
    };
    const seleterObj = {
      main: "#storyKyobo",
      ul: "ul.list_welcome_story",
      isSection: false,
    };
    const addObj = {
      categoryId: id,
    };
    const resultObj = await mainStoryK(driver, paramObj, seleterObj, addObj);
    file.save(_c.FILE_FOLDER_BASE, id, resultObj);
  }
};

module.exports = { start };
