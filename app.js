const express = require('express');
const helmet = require('helmet');

const app = express();
const port = 3000;

// Use Helmet as the first middleware
app.use(helmet());

// Explicitly disable 'X-Powered-By' header
app.disable('x-powered-by');

// Define a simple route
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
