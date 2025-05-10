# 🚀 MeetX Assignment

This is a RESTful backend built using **Node.js** and **Express.js**. It supports user authentication, activity booking and management end points.

## 🛠️ Tech Stack

-   Node.js
-   Express.js
-   MongoDB / Mongoose
-   JSON Web Tokens (JWT) for authentication

## Base URL

https://meetttx.vercel.app/api/v1/

## API Endpoints

### User Routes

#### Register User

`POST /user/register`

Registers a new user.

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "9876543210",
    "password": "SecurePass123!"
}
```

**Success Response:**

```json
{
    "message": "User registered successfully"
}
```

#### Login User

`POST /user/login`

Logs in a registered user.

**Request Body:**

```json
{
    "email": "john@example.com",
    "password": "SecurePass123!"
}
```

**Success Response:**

```json
{
    "message": "Login successful!",
    "token": "jwt_token_here"
}
```

#### Activity Routes

`POST /activity`

Adds a new activity.

**Request Body:**

```json
[
    {
        "title": "Cricket Match - India vs Australia",
        "description": "Exciting ODI match between India and Australia at Chinnaswamy Stadium.",
        "location": "Chinnaswamy Stadium, Bangalore",
        "date": "2025-06-15T15:30:00Z"
    }
]
```

**Success Response:**

```json
{
    "message": "Activities added successfully!",
    "createdActivities": [
        {
            "id": "822ec750-14b7-459e-bae9-5cded23f8314",
            "title": "Cricket Match - India vs Australia",
            "description": "Exciting ODI match between India and Australia at Chinnaswamy Stadium.",
            "location": "Chinnaswamy Stadium, Bangalore",
            "date": "2025-06-15T15:30:00.000Z",
            "_id": "681cefc0976cc4cdf80a5b5d"
        }
    ]
}
```

#### Get All Activities

`GET /activity`

Returns a list of all activities.

**Success Response:**

```json
[
    {
        "_id": "681cc6803bd35f40e216e6ec",
        "id": "5f949713-f759-463d-b0f8-d94e520abf94",
        "title": "Cricket Match - India vs Australia",
        "description": "Exciting ODI match between India and Australia at Chinnaswamy Stadium.",
        "location": "Chinnaswamy Stadium, Bangalore",
        "date": "2025-06-15T15:30:00.000Z"
    }
]
```

Booking Routes (Protected route)

`POST /booking`

Books a spot for a user for an activity.

**Request Body:**

```json
{
    "activity": "activity_id_here"
}
```

**Success Response:**

```json
{
    "message": "Booking added successfully!",
    "createdBooking": {
        "user": "9d7efa0e-0437-4f10-b988-286de397536a",
        "activity": "a854ed70-1b66-4acf-bfa3-279647c2e858",
        "_id": "681cf10f8ec31a9dbe8cf52c",
        "bookedAt": "2025-05-08T17:59:43.215Z"
    }
}
```

#### Get All Bookings

`GET /booking`

Fetches all bookings.

**Success Response:**

```json
[
    {
        "activity": {
            "_id": "681cc6803bd35f40e216e6ec",
            "id": "5f949713-f759-463d-b0f8-d94e520abf94",
            "title": "Cricket Match - India vs Australia",
            "description": "Exciting ODI match between India and Australia at Chinnaswamy Stadium.",
            "location": "Chinnaswamy Stadium, Bangalore",
            "date": "2025-06-15T15:30:00.000Z",
        },
        "booking_id": "681ccc27a319d215752a30de",
        "user": "9d7efa0e-0437-4f10-b988-286de397536a"
    }
]
```

#### Authentication

For protected routes, include the JWT token in the cookies:

Cookie : token=jwt_token_here

---
