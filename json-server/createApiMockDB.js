/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const seedData = require('./seedDB')

const { books, authors } = seedData
const data = JSON.stringify({ books, authors })

const filepath = path.join(__dirname, 'mockDB.json')

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log('Mock DB created')
})
