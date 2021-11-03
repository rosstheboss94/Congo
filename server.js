const stripe = require("stripe")(
  "sk_test_51JeTwgFrHokNzP1a6Hf2O9HvWg44Vb7HS4xgtNkgLI4YRDsLNEbLDOAfQ2OfOIpzoG1B35MOf0mBHY3HT8AKhzHD00tUC3xyUG"
);
const express = require("express");
const app = express();
app.use(express.json())
app.use(express.static("public"))
const cors = require('cors');
//app.use(cors({
 // origin: "http://localhost:3000"
//}))
const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.amount,
          },
          quantity: item.quantity,
        };
      }),
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({error: err.message})
  }
  
});

app.listen(4242, () => console.log("Running on port 4242"));
