"use strict";

const express = require('express');
const Paypal = require("./paypal_payments");
const Stripe = require("./stripe_payments");

const app = express();

//Login on web page (it generates a cookie for the browser)
app.use(express.urlencoded({   // to support URL-encoded bodies
    extended: true
}));
app.use(express.json()); //response body as json 

app.listen(3000, () => {
    let host = 'localhost';
    let port = 3000;
    let date = new Date();
    let d = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
    console.log(d.toGMTString() + " - " + 'App listening at http://%s:%s', host, port);
});

const pay = (method) => {
    if (method == "Paypal") {
        Paypal.createPayment(Paypal.executePayment())
    } else {
        //TODO
    }
}
const reimburse = (method) => {
    //TODO
}

app.post('/pay', (req, res) => {
    try {
        pay(req.body.method)
        res.json({ "msg": "OK" });
    } catch (err) {
        console.error(`Error processing the payment`)
        res.json({ "msg": "Error processing the payment"});
    }
});

app.post('/reimburse', (req, res) => {
    try {
        if (req.body.method == "Paypal") {
            reimburse(req.body.method)
            res.json({ "msg": "OK" });
        } else {
            res.json({ "msg": "This payment is not reimbursed " });
        }
    } catch (err) {
        console.error(`Error processing the payment`)
        res.json({ "msg": "Error processing the payment"});
    }
});