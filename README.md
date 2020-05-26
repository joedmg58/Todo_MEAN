# Todo_MEAN
Following a tutorial on how to create a TODO app with Angular and NodeJS

https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

<ul>
  <li>Single page application to create and finish todos</li>
  <li>Storing todos in a MongoDB using Mongoose</li>
  <li>Using the Express framework</li>
  <li>Creating a RESTful Node API</li>
  <li>Using Angular for the frontend and to access the API</li>
</ul>

## File Structure

    - public             holds all our files for our frontend angular application 
    ----- core.js        all angular code for our app
    ----- index.html     main view
    - package.json       npm configuration to install dependencies/modules
    - server.js          Node configuration 

## Installing Modules

>npm i express mongoose morgan body-parser method-override

## Node App 
### Main file: server.js

<ul>
  <li>Configure our application</li>
  <li>Connect to our database</li>
  <li>Create our Mongoose models</li>
  <li>Define routes for our RESTful API</li>
  <li>Define routes for our frontend Angular application</li>
  <li>Set the app to listen on a port so we can view it in our browser</li>
</ul>

