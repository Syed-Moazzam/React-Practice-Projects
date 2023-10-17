const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe')("sk_test_51NHrzDESxeXqLxczCh7hKOBPd3CLyx30kAqhFBYjGJiBHDm1lx2q0UmzBvVUuqzt7Ga8URIC6eOxbHKPbRLexmmu00MveaY4IS");
var cors = require('cors');

// require('dotenv').config();
// const Stripe = require('stripe')("sk_test_51IxTFRAotqhqkVaWEyWvavAUgMdlW42O39LO78mKBKuNBtOsnokpQxp4cvKeRp7Fa36muyRN9E7BTDbNut1EnkyD00ke20dxDG");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, error => {
  if (error) throw error;
  console.log('Your server is running on port 5000');
});

app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'pkr',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});
