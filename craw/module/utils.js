/* eslint-disable prettier/prettier */

const utils = {
    getIdFormSrc: (str) => {
        return str.split('/').pop().replace('.jpg', '');
    },
    getRawPrice: (str) => {
        return str.trim().replace(/[원,]/g, '');
    }
}
module.exports = {
    utils
}