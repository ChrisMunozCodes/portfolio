const express = require('express')
const app = express()
const dotenv = require('dotenv')

require('dotenv').config({path: '.env'})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())