/* eslint-disable prettier/prettier */
const fs = require("fs");

/**
 * 파일 저장
 * @param {string} fileName 파일이름 - .json 제외
 * @param {*} target 
 */
const fileSave = (path, fileName, target) => {
    const jsonContent = JSON.stringify(target);

    const filePathName = `${path}/${fileName}.json`;

    fs.writeFile(filePathName, jsonContent, "utf8", function (err) {
        if (err) {
            return console.log('fs.writeFile', err);
        }

        console.log(`${filePathName} 저장 완료`);
    });
};

module.exports = {
    save: fileSave
}