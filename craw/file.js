/* eslint-disable prettier/prettier */
const fs = require("fs");

/**
 * 파일 저장
 * @param {string} fileName 파일이름 - .json 제외
 * @param {*} target 
 */
const fileSave = (fileName, target) => {
    const jsonContent = JSON.stringify(target);

    fs.writeFile(`./${fileName}.json`, jsonContent, "utf8", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log(`./${fileName}.json 저장 완료`);
    });
};

module.exports = {
    save: fileSave
}