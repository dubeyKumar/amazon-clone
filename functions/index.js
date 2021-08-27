const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("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");

// Api

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("", (request, response) => {
  response.status(200).send("Hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example end-point
