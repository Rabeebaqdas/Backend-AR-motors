const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JxoMHHrzVE2nXkk3p3pmah5PrujAtgeHrjcDCUSpOuPTJETv98beIQHCAJu4EjLzghIzYZGwbVULRdKfSPql8sy00Nfndv0mr");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "pkr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;