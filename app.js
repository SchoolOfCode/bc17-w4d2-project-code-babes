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

<<<<<<< HEAD
=======
// Explicitly disable 'X-Powered-By' header
app.disable("x-powered-by");

>>>>>>> 535b35ab5e304c9c06493a018b96e719734a9a5b
// Define a simple route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


fetch('http://localhost:3000')
  .then(response => {
    // Access the headers
    for (let pair of response.headers.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Process the response body if needed
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  