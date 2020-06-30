/* eslint-disable prettier/prettier */

const cheerio = require("cheerio");
const request = require('request');

const BASE_URL = "http://www.kyobobook.co.kr";
const BESTSELLER_URL = BASE_URL + "/bestSellerNew/bestseller.laf";

request({
    method: 'GET',
    url: BESTSELLER_URL
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let main = $('main');

    let fel = main.children().first();
    let lel = main.children().last();

    console.log(fel.get(0).tagName);
    console.log(lel.get(0).tagName);
});