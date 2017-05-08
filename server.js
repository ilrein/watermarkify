const express = require('express');
const path = require('path');
const app = express();
const ShopifyToken = require('shopify-token');

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/access_token', (req, res) => {
  console.log('attemping to get access token...');
  const shopifyToken = new ShopifyToken({
    sharedSecret: req.headers.shared_secret,
    redirectUri: req.headers.redirect_uri,
    apiKey: req.headers.api_key
  });

  shopifyToken.getAccessToken(req.headers.hostname, req.headers.code)
   .then(token => res.status(200).json(token))
   .catch(e => res.status(500).json({ error: e }));
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
