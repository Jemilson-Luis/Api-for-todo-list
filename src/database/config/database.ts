import { Options } from "sequelize"

require('dotenv').config()

const config:Options = {
  "username": process.env.USER,
  "password": process.env.PASS,
  "database": process.env.DATABASE,
  "host": process.env.HOST,
  "dialect": "mysql"
}

export = config
