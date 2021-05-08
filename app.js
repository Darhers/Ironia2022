const { render } = require('ejs');
const e = require('express');
const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

//Index route
app.get("/", (req,res) => {
    res.render('index');
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Listening at port ' + process.env.PORT);
});
