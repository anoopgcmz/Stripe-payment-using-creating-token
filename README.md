# Stripe-payment-using-creating-token

if you are using multiple payment gateways and you need to create token in stripe to create charge you can follow the app.js file

`npm install stripe` For acessing stripe

create a stripe account and get your secret key from API Keys tab.

`stripe.tokens.create` is used to create the token. card details are passed in this function

`stripe.charges.create` is used for making the payment.
#happpy coding
