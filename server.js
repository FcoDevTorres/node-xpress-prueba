const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 8081;

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + "/views/partials", () => {})


app.get("/", (req, res) => {
    res.render('index', {
        Pueblo: 'México'
    })
});

app.get("/contacto", (req, res) => {
    res.render('contacto', {
        autor: 'saSuke UcHIha'
    })
});


app.listen(port, () => {
    console.log("no pues si es mas simple que una app de java");
});