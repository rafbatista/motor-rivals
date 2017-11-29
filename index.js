const path = require('path')
const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect('mongodb://localhost/motor-rivals', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const cars = db.collection('cars')

  app.get('/cars', (req, res) => {
    cars
      .find({})
      .toArray()
      .then(cars => {
        res.json(cars)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
  app.listen(3000, () => console.log('Test at http://localhost:3000'))
})
