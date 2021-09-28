"use strict";

/**
 * Aplicacion Paypal
*/

const request = require('request');

const CLIENT = '<>';
const SECRET = '<>';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Paypal Sandbox

const auth = { user: CLIENT, pass: SECRET } //Credentials

/**
 * Establecemos los contraladores que vamos a usar
 */

const createPayment = (next) => {

    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'EUR',
                value: '115' // Value of my payment
            }
        }],
        application_context: {
            brand_name: `<>`,
            landing_page: 'NO_PREFERENCE', // Default
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `<>`, // Url despues de realizar el pago
            cancel_url: `<>` // Url despues de realizar el pago
        }
    }

    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        console.log("TODO with response")
    })

    next();
}

/**
 * Esta funcion captura el dinero
 * @param {*} req 
 * @param {*} res 
 */
const executePayment = () => {
    const token = req.query.token; 

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        console.log("TODO with response")
    })
}

module.exports = {
    createPayment,
    executePayment
}
