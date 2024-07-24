const express = require("express");
const helmet = require("helmet");

const app = express();
const port = 8080;

// Middleware to log request
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

// Use Helmet as the first middleware
app.use(helmet());

// Define a simple route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// User story 3

const activities = [
  {
    "id": "54321234",
    "activity_submitted": Date.now().toString(),
    "activity_type": "run",
    "activity_duration": "30"
  },
  {
    "id": "12345678",
    "activity_submitted": Date.now().toString(),
    "activity_type": "walk",
    "activity_duration": "45"
  },
  {
    "id": "87654321",
    "activity_submitted": Date.now().toString(),
    "activity_type": "bike",
    "activity_duration": "60"
  }
];



app.get("/activities", (req, res) => {
  res.status(200).json({data: activities});
});




app.get("/activities",  (req, res) => {
  
  try {

    res.status(200).json({
      success: true,
      payload: response.data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      payload: error.message,
    })
  }
})
  