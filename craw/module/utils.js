/* eslint-disable prettier/prettier */

const utils = {
    getIdFormSrc: (str) => {
        return str.split('/').pop().replace('.jpg', '');
    }
}
module.exports = {
    utils
}