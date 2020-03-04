const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()






app.use(express.static(path.join(__dirname, 'Gold-Rush')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false}))









app.listen(3000, function(){

    console.log('server runs');

})