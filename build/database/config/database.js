"use strict";
require('dotenv').config();
const config = {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
};
module.exports = config;
