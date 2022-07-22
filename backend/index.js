require ('colors')
require ('dotenv').config()
const express = require('express')
const pdf = require('html-pdf')
const pdfTemplate = require('./documents')

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/questions', require('./routes/questionRoutes'))

var config = {
  "format": "A4",
  "border": "2.5cm",
  "footer": {
    "height": "3mm",
    "contents": {
      default: '<table style="width: 100%; table-layout: fixed;"><tr><td style="text-align: left;"><span style="color: red;">Document confidentiel</span></td><td style="text-align: center;"><span style="color: #444;">{{page}}</span>/<span>{{pages}}</span></td><td style="text-align: right;"><img style="height: 50px; margin-left: auto;" src="data:image/png;base64,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"" alt="AT"</td></tr></table>'
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