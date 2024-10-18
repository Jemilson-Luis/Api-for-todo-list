import { Sequelize } from 'sequelize'
import app from './app'
import config from './database/config/database'
require('dotenv').config()

const PORT = process.env.PORT || 2000

const sequelize = new Sequelize(config)

sequelize.authenticate()
  .then(()=> app.listen(PORT ,()=> console.log(`Listen in ${PORT}`)) )
  .catch((error)=> console.log('[DATABASE] - Error in database connection ', error))


