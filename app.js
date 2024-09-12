// express: Importing the Express framework which is used to build web servers in Node.js.
// helmet: Importing Helmet, which helps secure Express apps by setting various HTTP headers.
// uuidv4: Importing the UUID library to generate unique IDs for activities.

import express from 'express'; 
import helmet from 'helmet';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 8080;




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
    id: "54321234",
    activity_submitted: Date.now().toString(),
    activity_type: "run",
    activity_duration: "30"
  },
  {
    id: "12345678",
    activity_submitted: Date.now().toString(),
    activity_type: "walk",
    activity_duration: "45"
  },
  {
    id: "87654321",
    activity_submitted: Date.now().toString(),
    activity_type: "bike",
    activity_duration: "60"
  }
];

// GET request
app.get("/activities", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      payload: activities
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});


const createActivity = async (newActivity) => {

  newActivity.id = Date.now().toString();
  newActivity.activity_submitted = Date.now().toString();
  activities.push(newActivity);
  return newActivity;
};

// POST a new activity
app.post("/activities", async (req, res) => {

  const newActivity = req.body;


  if (!newActivity) {
    return res.status(400).json({
      error: true,
      data: null
    });
  }

  try {
    const activity = await createActivity(newActivity);

    res.status(201).json({
      error: false,
      data: activity
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      data: null
    });
  }
});

// PUT request 
app.put("/activities/:id", (req, res) => {
  const { id } = req.params;
  const { activity_type, activity_duration } = req.body;

  const activityIndex = activities.findIndex(activity => activity.id === id);

  if (activityIndex === -1) {
    return res.status(400).json({
      error: true,
      data: null
    });
  }

  const updatedActivity = {
    ...activities[activityIndex],
    activity_type,
    activity_duration,
    activity_submitted: Date.now().toString()
  };

  activities[activityIndex] = updatedActivity;

  res.status(200).json({
    error: false,
    data: updatedActivity
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});