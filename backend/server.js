const express = require("express");
const app = express();

const { AffindaCredential, AffindaAPI } = require("@affinda/affinda");
const { affindaToken } = require("./affinda_token.js");
const fs = require("fs");

// port
const port = 5001;

// middleware
app.use(express.json());

// routes

// GET Route: tests whether Express Server is running
app.get("/test", async (req, res) => {
  res.status(200).json({
    message: "Request was successfully sent",
  });
});

const credential = new AffindaCredential(affindaToken);
const client = new AffindaAPI(credential);

const filePath = "/Users/kevintran/Downloads/Kevin_Tran_Resume.pdf";
const readStream = fs.createReadStream(filePath);

client
  .createDocument({ file: readStream })
  .then((result) => {
    console.log("Returned data:");
    console.dir(result);
  })
  .catch((err) => {
    console.log("An error occurred:");
    console.error(err);
  });

app.listen(port, () => {
  console.log(`Express Server listening on Port ${port}`);
});
