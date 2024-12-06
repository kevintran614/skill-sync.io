const express = require("express");
const app = express();

// port
const port = 5001;

// middleware
app.use(express.json());

// routes

// test server
app.get("/test", async (req, res) => {
  res.status(200).json({
    message: "Request was successfully sent",
  });
});

app.listen(port, () => {
  console.log(`Express Server listening on Port ${port}`);
});
