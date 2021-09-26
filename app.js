'use strict';

const express = require('express')
const PDFExtract = require('pdf.js-extract').PDFExtract;
let fileupload = require('express-fileupload');

const app = express();
app.use(fileupload());


const port = 8080;
const host = '0.0.0.0';

app.post('/', async(req, res) => {
  console.log(req.files)
  // res.send({success:true})
              
  const pdfExtract = new PDFExtract();
  const options = {}; /* see below */
  await pdfExtract.extractBuffer(req.files.filePdf.data, options, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
    res.send(data);
  });

})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
