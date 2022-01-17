# Nodejs REST API Case Study

This is the implementation of REST API case study for Getir built with Nodejs by using Express Web Framework.

## Table of contents

- [Deliverables](#deliverables)
- [Installation](#installation)
- [Documentation](#documentation)
- [Built with](#built-with)
- [Author](#author)

## Deliverables

- [Public Repo URL](https://github.com/fatihozoglu/nodejs-rest-api-case-study)
- [Public Endpoint URL](https://fozoglu-nodejs-rest-api.herokuapp.com/)

## Installation

- Download or clone the repository and install dependencies:

```
npm install
```

- Create .env file and set MONGO_URI environment variable in it:

MONGO_URI=mongodb_uri_string_for_connecting_to_the_database

- Start development server

```
npm run dev
```

- Run tests:

```
npm run test
```

## Documentation

- Endpoint URL: https://fozoglu-nodejs-rest-api.herokuapp.com/
- Method: POST
- Request Body:
  ```
  {
    "startDate": "2016-01-26",    // date format: YYYY-MM-DD
    "endDate": "2018-02-02",      // date format: YYYY-MM-DD
    "minCount": 2700,             // integer
    "maxCount": 3000              // integer
  }
  ```
- Success Response:

  ```
  Status Code: 200 OK
  {
    "code":0,
    "msg":"Success",
    "records":[
        {
          "key":"TAKwGc6Jr4i8Z487",
          "createdAt":"2017-01-28T01:22:14.398Z",
          "totalCount":2800
        },
        {
          "key":"NAeQ8eX7e5TEg7oH",
          "createdAt":"2017-01-27T08:19:14.135Z",
          "totalCount":2900
        }
        ...
    ]
  }
  ```

  Error Responses:

- Endpoint URL: https://fozoglu-nodejs-rest-api.herokuapp.com/
- Method: POST
- Request Body: Invalid or missing input fields

  ```
    Status Code: 400 Bad Request
    {
    "code": 1,
    "msg": "Please enter valid inputs",
    "errors": [
        {
            "value": "Hello",
            "msg": "maxCount must be an integer",
            "param": "maxCount",
            "location": "body"
        }
    ]
  }
  ```

- Endpoint URL: https://fozoglu-nodejs-rest-api.herokuapp.com/
- Methods: Any HTTP method other than POST
- Response:

  ```
  Status Code: 404 Not Found
  {
    "code": 2,
    "msg": "Resource Not Found"
  }
  ```

## Built with

- Javascript Runtime Environment: [NodeJs](https://nodejs.org/en/)
- Web Framework for NodeJs: [ExpressJs](https://expressjs.com/)
- Database: [Mongodb](https://www.mongodb.com/)
- Nodejs ODM for Mongodb: [MongooseJs](https://mongoosejs.com/)
- Validations: [Express Validator](https://express-validator.github.io/docs/)
- Deployment: [Heroku](https://www.heroku.com/)

## Author

- Linkedin - [Fatih Özoğlu](https://www.linkedin.com/in/fatihozoglu/)
