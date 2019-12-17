backend of MERN Project

this set up to provide an API for front end by performing CRUD operations on MongoDB using Mongoose package

Built with:
Express
Mongoose & MongoDB

ENV.:
MONGO_COLLECTION=test
EXPRESS_PORT=4000
EXPRESS_HOST="localhost"

HTTP methos used:
GET, POST, PUT, DELETE

Mongoose Model used: ToDo model;

Routes:

GET:
/todo/reset
re seeds the database from todoSeed.js

/todo/find/all
returns all task lists in database

/todo/find/:id
returns single task list by ID

POST:

/todo/new  
Create a new task list, returns ID and other status info

DELETE:

todo/delete/:id
Delete a task by ID

PUT:

todo/update/:id
Update todolist by ID
