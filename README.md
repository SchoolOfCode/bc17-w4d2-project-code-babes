Getting Started
It's time to get started with your "Back End Project".

Please click the link below, accept the Github Classroom assignment and work on your project in that repository.

Once you've got the repository set up we would recommend that the next thing you do is very carefully read over the project. Make sure you really understand what you're being asked to build before you try to build it. It sounds obvious but it's very easy to get wires crossed.

Once you understand the project we'd recommend pulling the content out of the "Project Board" section (Epics/User Stories) into a linked Project Board on your Github project repo.

Don't pull across all of the project board. Just pull across the first Epic as a Milestone and the User Stories for that Epics as Issues. Also ... you don't need to plan the whole project at the start. Start by making a task level plan for the first Issue then get started.

Advice: the first User Story is just about setting up a super simple Express API. Turn the empty repo into a Node project, install express, create a simple JS file and make that "hello world" API example. 🙂👀

Objectives

You have one week as a Back End Engineering Intern, during which you will build a REST API that allows a client to track exercise activities.

Here’s what you will deliver:

Expected:
An Express based API that conforms to the common REST rules/conventions.
A basic version of the API that allows a user to read (GET) all their activities or create (POST) a new activity.
An intermediate version of the API that allows a user to remove (DELETE) an existing activity or allows a user to update (PUT) an existing activity.

Bonus:

The application should use common middleware “express validator” to validate all inputs your endpoints expect.
Project Board:
Epic: Have a basic API up and running
User Story 1: Set up basic Express application.

Description:

As Klara, a Full Stack Engineer at TrackIt I want to be able to use a framework so I can focus on building code that actually delivers the features I need to build.

As John, a project manager at TrackIt I want our engineers to use modern frameworks that that they can ship features quickly and safely.

Acceptance Criteria:

Given I am a new developer joining the team,
When I clone down the backend repo,
Then I should see a clear README that details how to install and run the application using Node through a command line. The application is an Express API.

Given I am a developer who has just followed the instructions to run and install the application (our Express APP),
When I make a GET request to “http://localhost:3000/”,
Then I should get back a response with status code of 200 and text saying “Hello World!”
Then I should also see that the Node API has also logged the request in the terminal (console.log)

User Story 2: Add basic security standards using Helmet

Description:

As Norman, a Lead Engineer at TrackIt I want to use best practice npm packages like Helmet with my APIs so that I can get a level of safety and security by default.

As Jenny, the CTO of TrackIt I lose sleep over the idea of things like data breaches because in some cases I would be legally accountable so I want all our services and applications to be as secure as possible.

As Joe, a fitness fanatic I want to know that all my data is secure because bad people having access to the type, time and location of my fitness activities is a scary idea - I wouldn’t want to use an app that doesn’t look after my data.

Acceptance Criteria:

Given I am a developer who clones down the Activity API repo,
When I look at the top level app file,
Then I should see Helmet configured as one of the first pieces of middleware.

Given I am a developer who makes a request to the Activity API,
When I inspect the response headers,
Then I should not be able to see the response header “X-Powered-By: Express”.
Epic: Allow users to get and add activities
User Story: Implement functionality to GET all activities for a particular user

Description:

As Kenny, a busy front end engineer I need to be able to send a GET request with a user_id to the API to get a users activities so that I can make a nice simple dashboard that shows a user all of their activities.

As Norman, a Tech Lead working across lots of projects I need to be able to depend on conventions like: the response object always containing a key called data or error, or the status code being an accurate indication of the success/failure (and reason) of the request.

Acceptance Criteria:

Given I am a developer who has the Activity API running,
When I make a GET request to “http://localhost:3000/activities”

Then the the request should succeed, responding with the correct status code and an array of User Activity objects in the response body (response.data).

// response object
​
{
data: [
{ }, // activity object
{ }, // activity object
{ } // activity object
]
}
​
// each activity object should look like
​
{
"id": "54321234", // UUID
"activity_submitted": "1719486190058", // simple Epoc timestamp (Date.now() in JS)
"activity_type": "run", // choose some standard types
"activity_duration": "30", // choose standard unit type (minutes probably)
}

User Story: Implement functionality to POST a new activity.

Description:

As Kenny, a busy front end engineer I need to be able to send a POST request with a JSON request body (new activity) to the API so that I can make a simple form that allows my user to submit new activity.

As Norman, a Tech Lead working across lots of projects I need to be able to depend on conventions like: the response object always containing a key called data or error, or the status code being an accurate indication of the success/failure (and reason) of the request.

Acceptance Criteria:

Given I am a developer who has the Activity API running,
When I make a POST request to “http://localhost:3000/activities” with a request body containing a JSON object (new activity),
Then the API should save the new activity to the activities.json file giving it a unique “id” (UUID) and activity_submitted (time stamp - Date.now()),
Then the the request should succeed, responding with the correct status code and the activity object that I posted as the response body (response.data).

// request object - new user activity
{
"activity_type": "run",
"activity_duration": "30",
}
​
// save the newly sumbitted activity in activities.JSON
​
[
{}, // exisitng activity
{}, // exisitng activity
{
"id": "54321234", // Add a UUID
"date": "1719486190058", // Add the date time stamp
"activity_type": "run",
"activity_duration": "30",
}
]

Given I am a developer who has made an invalid POST request by missing a required request body field like, activity_type or activity_duration,
When I inspect the API response,
Then the request should fail, responding with the correct status code and a clear error message (response.error).
Epic: Allow users to update or delete activities
User Story: Implement functionality to PUT (update) an activity

Description:

As Kenny, a busy front end engineer I need to be able to send a PUT request with a JSON request body (the activity to update) to the API so that I can make a simple form that allows my user to edit an activity.

As Norman, a Tech Lead working across lots of projects I need to be able to depend on conventions like: the response object always containing a key called data or error, or the status code being an accurate indication of the success/failure (and reason) of the request.

Acceptance Criteria:

Given I am a developer who has the Activity API running,
When I make a PUT request to “http://localhost:3000/activities” with a request body containing a JSON object (updated activity),
Then the API should update the activity in the activities.json file that has a matching activity id,
Then the the request should succeed, responding with the correct status code and the activity object that I posted as the response body (response.data).

// request object - updated user activity that we send in the PUT request
{
"id": "54321234", // id of an exisiting activity
"activity_type": "cycle",
"activity_duration": "60",
}
​
// save the newly updated activity in activities.JSON as
​
[
{}, // exisitng activity
{}, // exisitng activity
{
"id": "54321234",
"activity_submitted": "1719486190058", // Update time stmap or leave it the same
"activity_type": "cycle",
"activity_duration": "60",
}
]

Given I am a developer who has made an invalid PUT request by specifying an id for a activity that does not exist,
When I inspect the API response,
Then the request should fail, responding with the correct status code and a clear error message (response.error).

User Story: Implement functionality to DELETE an activity.

Description:

As Kenny, a busy front end engineer I need to be able to send a DELETE request with an activity_id to the API so that I can allow my users to delete their activities.

As Norman, a Tech Lead working across lots of projects I need to be able to depend on conventions like: the response object always containing a key called data or error, or the status code being an accurate indication of the success/failure (and reason) of the request.

Acceptance Criteria:

Given I am a developer who has the Activity API running,
When I make a DELETE request to “http://localhost:3000/activities/activity_id_here”
Then the API should delete the activity that has a matching activity id in the activities.json file,
Then the request should succeed, responding with the correct status code and the deleted activity object in the response body (response.data).

Given I am a developer who has made an invalid DELETE request by specifying an id for a activity that does not exist,
When I inspect the API response,
Then the the API call should fail with the correct response code and a clear error message (response.error).
Epic: Make the API more robust
User Story: Improve input validation on all endpoints using Express Validator

Description:

As Klara, a Full Stack Engineer at TrackIt I want to be able to use pre-built middleware as much as possible so I can focus on building code that actually delivers the features I need to build.

As Norman, a Tech Lead working across lots of projects I care deeply about standardisation so I want us to use a consistent error format.

Acceptance Criteria:

Given I am a developer who clones down the Activity API repo,
When I look at any of the controllers (event handlers),
Then I should see that express validator is configured as middleware to check the expected request inputs,
Then the controllers are written to check for express validator errors.

Given I am a developer who has made an invalid request,
When I inspect the API response,
Then the the API call should fail with the correct response code and a clear error message in the format of express validator errors (response.error).

User Story: Protect the DELETE endpoint by writing custom auth middleware (simple function)

Description:
As Jane, a long time jogger I want to know that other users like my friend Ken cannot delete activities that I log.

As Zara, Head of Engineering at TrackIt I want to make sure that API endpoints that are “destructive” (deleting data) are protected so that only people who are authenticated and authorised (user who owns the activity) can take those actions.

Acceptance Criteria:

Given I am a developer who clones down the Activity API repo,
When I look at the DELETE controller (event handlers),
Then I should see that there is a custom function (write this) being used as middleware in front of the event handler that checks the request for a header called “Authorisation”, with the value of “Bearer TEST_TOKEN”. The middleware calls next with an error if needed.

Given I am a developer who has the Activity API running,
When I make a DELETE request to “http://localhost:3000/activity/activity_id_here”,
Then the API should check if I have a request header called “Authorisation”, with the value of “Bearer TEST_TOKEN”,
Then if I do, the request should succeed, responding with the correct status code and the deleted activity object in the response body (response.data).

Given I am a developer who has made an invalid DELETE request by not sending the “Authorisation” header,
When I inspect the API response,
Then the the API call should fail with the correct response code and a clear error message (response.error).
Milestones
This gives you a rough guide for what we think is possible in the time you have. Good luck recruits! 🫡

Day 2:

You will have started “Epic: Have a basic API up and running”.

Day 3:

You will have completed “Epic: Have a basic API up and running”.
You will have started “Epic: Allow users to get and add activities”

Day 4:

You will have completed “Epic: Allow users to get and add activities”.
You will have started “Epic: Allow users to update or delete activities”.
