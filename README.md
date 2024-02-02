# VE- Request credits

Request credtis project is for managing users, departments, and file uploads. Below are the details of the endpoints, their functionalities, and how they interact with a MongoDB database and AWS S3.

## Summary
- [Features](#features)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Environment](#environment)

## Features

- **User Management**
  - Add a new user.
  - Retrieve paginated list of users.
  - Find a user by their ID.

- **Department Management**
  - Retrieve list of departments with their related municipalities.

- **File Upload**
  - Upload a file to AWS S3 and retrieve its URL.

## Endpoints

### User Endpoints

1. **Add User**
   - **Method**: POST
   - **URL**: `/users`
   - **Description**: Validates the incoming user data using Zod schema and adds a new user to the database.
   - **Body**:
     ```json
     {
       "name": "string",
       "email": "string",
       ...
     }
     ```
   - **Response**: Returns the created user object with a 201 status code.

2. **Get Users**
   - **Method**: GET
   - **URL**: `/users`
   - **Description**: Retrieves a paginated list of users. Supports query parameters for pagination (`skip` and `limit`).
   - **Query Parameters**:
     - `skip`: Number of records to skip for pagination.
     - `limit`: Limit number of records to return.
   - **Response**: Returns a list of users, the current page, and the total number of users.

3. **Find User by ID**
   - **Method**: GET
   - **URL**: `/users/:id`
   - **Description**: Retrieves a single user by their ID.
   - **Response**: Returns the user object or a 404 status code if the user is not found.

### Department Endpoints

1. **Get Departments**
   - **Method**: GET
   - **URL**: `/departments`
   - **Description**: Retrieves a list of departments along with their related municipalities.
   - **Response**: Returns a list of departments.

### File Upload Endpoints

1. **Upload File**
   - **Method**: POST
   - **URL**: `/upload`
   - **Description**: Generates a presigned URL for file upload to AWS S3.
   - **Body**:
     ```json
     {
       "fileName": "string"
     }
     ```
   - **Response**: Returns the presigned URL and key for the uploaded file.

## Technologies

- **Express.js**: Framework for handling HTTP requests.
- **MongoDB**: Database for storing user and department data.
- **Mongoose**: ODM for MongoDB.
- **AWS S3**: Cloud storage service for file uploads.
- **Zod**: Schema validation library.

# Environment

| Variable              |
|-----------------------|
| MONGODB_URI           |
| AWS_REGION            |
| AWS_ACCESS_KEY_ID     |
| AWS_SECRET_ACCESS_KEY |
| AWS_BUCKET_NAME       |
| AWS_BUCKET_HOST       |