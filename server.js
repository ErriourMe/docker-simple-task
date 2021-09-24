const express = require('express')
// const os = require("os")
const fs = require('fs')

const port = 8080
const host = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  try {
    const data = fs.readFileSync('counter.txt', 'utf8')
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

app.get('/stat', (req, res) => {
  try {
    let data = fs.readFileSync('counter.txt', 'utf8')
    console.log(data)
    data = (++data).toString()
    console.log(data)
    fs.writeFileSync('counter.txt', data)
    res.send(data)
  } catch (err) {
    res.send(err)
  }
})

app.get('/about', (req, res) => {
  const name = "Vladimir"
  res.send(`
    <h3>Hello, ${name}!</h3>
  `)
})

app.listen(port, host)
console.log(`Run: http://${host}:${port}`)