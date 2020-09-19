// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const next = require("next");

const app = next({ dev });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest(async (req, res) => {
	console.log("File: " + req.originalUrl); // log the page.js file that is being requested
	await app.prepare();
	handle(req, res);
});
