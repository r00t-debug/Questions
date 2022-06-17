require ('colors')
require ('dotenv').config()
const express = require('express')
const pdf = require('html-pdf')
const pdfTemplate = require('./documents')
const puppeteer = require("puppeteer")

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/questions', require('./routes/questionRoutes'))

var config = {
  "format": "A4",
  "border": "3cm",
  "footer": {
    "height": "3mm",
    "contents": {
      default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>'
    }
  },
};

app.post('/api/pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), config).toFile(`${__dirname}/audit.pdf`, (err) => {
    if(err) {
      return console.log('error')
    }

    res.send(Promise.resolve())
  })
})

// app.post('/api/pdf', async (req, res) => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.setContent(req.body)
//   await page.pdf({ format: "a4", path: "./audit.pdf" })
//   await browser.close()
// })

app.get('/api/pdf', (req, res) => {
  res.sendFile(`${__dirname}/audit.pdf`)
})

app.listen(port, () => console.log(`listening on port ${port}`))
