var stripe = require("stripe")("Secret key");

//Creating Stripe Token
stripe.tokens.create({
    card: {
        "number": '4242424242424242',
        "exp_month": 12,
        "exp_year": 2019,
        "cvc": '123'
    }
},makePayment);

//making payment using stripe
function makePayment(err, token){
    stripe.charges.create({
        amount: 2000,
        currency: "usd",
        source: token.id, // obtained with Stripe.js
        description: "Charge for test"
    }, function (err, response) {
        console.log(response);
    });
}

