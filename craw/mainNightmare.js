/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

const BASE_URL = "http://www.kyobobook.co.kr";
const BESTSELLER_URL = BASE_URL + "/bestSellerNew/bestseller.laf";

const nightmare = Nightmare();

nightmare
    .goto(BESTSELLER_URL)
    // .wait('.list_type01')
    // .evaluate(() => document.querySelector('.list_type01'))
    .then((res) => {
        console.log('proxy IP:');
    })

nightmare