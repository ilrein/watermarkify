const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const ShopifyToken = require('shopify-token');

exports.getAccessToken = functions.https.onRequest((request, response) => {
 cors(request, response, () => {
   const shopifyToken = new ShopifyToken({
     sharedSecret: request.get.shared_secret,
     redirectUri: request.get.redirect_uri,
     apiKey: request.get.api_key
   });

   shopifyToken.getAccessToken(request.get.hostname, request.get.code)
    .then(token => response.status(200).json(token))
    .catch(e => response.status(500).json({ error: e }));
 })
});
