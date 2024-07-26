const express = require("express");
const helmet = require("helmet");

const app = express();
const port = 8080;

// import { activities } from "./activities.js";

// import { v4 as uuidv4 } from "uuid";

// Middleware to log request
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

app.use(express.json());

// Use Helmet as the first middleware
app.use(helmet());

// Define a simple route
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

let activities = [
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


// GET request

app.get("/activities", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      payload: activities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message,
    });
  }
});




// POST a new activity

app.post('/activities', (req, res) => {

  const newActivity = req.body.newActivity;
  
  if (!newActivity) {
    res.status(400).json({
      "error": true,
      "data": null
    });
  }

  const activity = {
    ...newActivity,
    id: uuidv4,
    activity_submitted: Date.now(),
  }

  activities.push(activity)
  console.log(activity)

  res.status(201).json({
    "error": false,
    "data": activity
  })

});





// PUT request

app.put("/activities/:id", (req, res) => {

  const { id } = req.params;
  const { activity_type, activity_duration } = req.body;

  const activityIndex = activities.findIndex(activity => activity.id === id);
  
  if (activityIndex === -1) {
    res.status(400).json({
      "error": true,
      "data": null
    });
  }


  const updatedActivity = {
    ...activities[activityIndex],
    activity_type,
    activity_duration,
    activity_submitted: Date.now(),
  }

  activities[activityIndex] = updatedActivity;
  
  // activities.push(activity)
  // console.log(activity)

  
  res.status(201).json({
    "error": false,
    "data": activity
  })

});







app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
  
