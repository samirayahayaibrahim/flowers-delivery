# flowers-delivery

**Description**This is the backend and Admin for the Flowers Delivery application, built using Node.js, Express.js,MongoDB and React. It handles authentication,file uploads, and API endpoints for the frontend,and Admin handles uploading the flower details and reviewing it.


##Table of contents                        

1.[project name](Flowers-delivery)

2.[table content]

3.[introduction]

4.[live demo]

5.[features]

6.[technologies used]

7.[setup and installation]

8.[license]

9.[author(s)]

##Overview

The project is build using Node.js providing a backend data from Mongodb and Postman also an frontend for Admin use for uploading information from frontend(ADMIN FOLDER) to MongoDB.it include pages such as:

##Backend
models         # Database models (Mongoose schemas)
routes         # API routes
controllers    # Request handling logic
uploads        # Storage for uploaded images
.env           # Environment variables (not included in repo)
server.js      # Entry point of the backend
README.md      # Project documentation
package.json   # Dependencies and scripts
Multer         #image uploads

##Admin(frontend)   
adminpanel     #form for adding new flowers
component      #contains flower details
context        #reaps the whole project for saving
hooks          #hook for flower context
pages          #for fetching flower detail to display


##feature

**Product Management**
Add, update, delete flower products
Store product images in the uploads folder using Multer
Fetch product details with categories & prices

**User Authentication**
Secure JWT-based authentication (Register/Login)
Password hashing with bcrypt
Role-based access control (Admin & User)

**Image Uploads**
Upload flower images with Multer
Store files in the uploads/ directory
Serve images via API

**API with Express & MongoDB**
RESTful API with Express.js
MongoDB integration via Mongoose

##setup instruction##

1.**clone repository**:
git clone 

2.**Navigate to the project directory**:
cd flowers-flowers-delivery

3.**Install dependencies:**:
npm install

##Folder Details

##backend

1. Models (models/ folder)

Contains Mongoose schemas for database collections

2. Routes (routes/ folder)

Defines API endpoints
Handles authentication & user operations,Handles flowers & product listings

3. Controllers (controllers/ folder)

Contains functions that handle API requests

4. Multer (multer/ folder)

uploading images for flowers and user profile pictures.

4. Uploads (uploads/ folder)

Stores uploaded images for flowers and user profile pictures.


##Admin

1. Addflowers  (Admin panel folder)

added flower details from the frontend to the backend api

2. AddflowerRoutes (Admin panel folder)

router that navigates from addflower page to the flower details

3. flower details (Components folder)

contain flower details e.g image,name,category and price

4. flower context (hooks folder)

wraps the whole content/body of the project

5. home (pages folder)

fetch flowers details from the backend to display on server


##license##     

the project is licensed under MIT LICENSE


##Author##

**Samira Yahaya Ibrahim**

##Email

**samirayahayaibraheem@gmail.com**

##Github##

**https://github.com/samirayahayaibrahim** 

##Render
**https://flowers-delivery-amin.onrender.com/**

##Loom
****

