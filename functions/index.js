const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 cors(request, response, () => {
   response.status(200).json('Hello from Firebase!');
 })
});
