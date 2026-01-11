# Flower-delivery

**Description**This is the backend for the Flower Delivery application, built using Node.js, Express.js, and MongoDB. It handles authentication,file uploads, and API endpoints for the frontend.


##Table of contents                        

1.[project name](Flower-delivery)

2.[table content]

3.[introduction]

4.[live demo]

5.[features]

6.[technologies used]

7.[setup and installation]

8.[license]

9.[author(s)]

##Overview

The project is build using Node.js providing a backend data from Mongodb and Postman.it include pages such as:

models         # Database models (Mongoose schemas)
routes         # API routes
controllers    # Request handling logic
uploads        # Storage for uploaded images
.env           # Environment variables (not included in repo)
server.js      # Entry point of the backend
README.md      # Project documentation
package.json   # Dependencies and scripts
Multer         #image uploads


##feature

**Product Management**
Add, update, delete flower products
Store product images in the uploads folder using Multer
Fetch product details with categories & prices

**User Authentication***
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
git clone https://github.com/flower-delivery/flower-website-backend.git

2.**Navigate to the project directory**:
cd flower-website-backend

3.**Install dependencies:**:
npm install

##Folder Details
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



##license##     

the project is licensed under MIT LICENSE


##Author##

**Samira Yahaya Ibrahim**

##Email

**samirayahayaibraheem@gmail.com**

##Github##

**https://github.com/samirayahayaibrahim** 

##Render
**https://flower-delivery-1-pd16.onrender.com/api/flowerRoutes**

##Loom
**https://www.loom.com/share/8bc8691c96fc42db949e220dbe2ec19d?sid=1730916c-3e5a-473c-a110-72e638986cab**

