import app from './app'
require('dotenv').config()

const PORT = process.env.PORT || 2000
app.listen(PORT ,()=> console.log(`Listen in ${PORT}`))


