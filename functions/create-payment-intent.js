require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, livraison, total_price } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      let total = livraison + total_price
      return total.toFixed(2) * 100;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "eur",
      });
      return {
        statusCode: 200,
        body: JSON.stringify(
          { clientSecret: paymentIntent.client_secret }
        ),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
