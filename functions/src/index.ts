// 試し
import * as functions from 'firebase-functions';

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
  });