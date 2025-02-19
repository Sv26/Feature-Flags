# Feature Flag Management API 🚀

A simple Node.js + Express + MongoDB application that allows users to create, update, and manage feature flags.

## 📌 Features

✔️ **CRUD Operations:** Create, Read, Update, and Delete feature flags.

✔️ **MongoDB Support:** Works with MongoDB Atlas (Cloud) and Local MongoDB.

✔️ **MVC Architecture:** Organized into Models, Views, and Controllers.

✔️ **EJS-Based Views:** Manage feature flags via a simple frontend UI.

✔️ **REST API:** Can be used for external integrations.

✔️ **Authentication (if added later):** Secure feature flag management.

## 📥 Setup Instructions

1️⃣ **Clone the Repository**

```sh
git clone https://github.com/Sv26/Feature-Flags
cd feature-flag-api
content_copy
download
Use code with caution.
Markdown

Replace your-username/feature-flag-api.git with the actual repository URL.

2️⃣ Install Dependencies

npm install


3️⃣ Configure Environment Variables

Create a .env file in the project root and add the following:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000



🔹 Replace your_mongodb_connection_string with your MongoDB Atlas or Local MongoDB connection string. Refer to the MongoDB documentation for instructions on creating a connection string. Example for a local MongoDB instance: mongodb://localhost:27017/featureflags

🔹 Replace your_jwt_secret_key with a strong, randomly generated secret key. This is important for security if you implement authentication.

4️⃣ Start the Server

npm start


or if using nodemon for auto-restart:

npm run dev


Make sure you have nodemon installed globally: npm install -g nodemon

5️⃣

Visit: http://localhost:3000/flags

🛠 API Endpoints (Postman Collection)

This API provides the following endpoints for managing feature flags:

Method	Endpoint	Description
POST	/flags	Create a new feature flag
GET	/flags	Get all feature flags
GET	/flags/:id	Get a specific feature flag
PUT	/flags/:id	Update a feature flag
DELETE	/flags/:id	Delete a feature flag

Note: Replace :id with the actual ID of the feature flag.



Create a new feature flag:

curl -X POST -H "Content-Type: application/json" -d '{"name": "new_feature", "description": "This is a new feature", "enabled": false}' http://localhost:3000/flags


Get all feature flags:

curl http://localhost:3000/flags


Get a specific feature flag (replace <id> with the actual ID):

curl http://localhost:3000/flags/<id>


Update a feature flag (replace <id> with the actual ID):

curl -X PUT -H "Content-Type: application/json" -d '{"enabled": true}' http://localhost:3000/flags/<id>


Delete a feature flag (replace <id> with the actual ID):

curl -X DELETE http://localhost:3000/flags/<id>



```
