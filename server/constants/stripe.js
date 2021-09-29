const configureStripe = require('stripe');
 
const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_51JeTwgFrHokNzP1a6Hf2O9HvWg44Vb7HS4xgtNkgLI4YRDsLNEbLDOAfQ2OfOIpzoG1B35MOf0mBHY3HT8AKhzHD00tUC3xyUG';
 
const stripe = configureStripe(STRIPE_SECRET_KEY);
 
module.exports = stripe;