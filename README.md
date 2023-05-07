# nodejs-clean-architecture-api

NodeJS API build on Clean Architecture using express framework and mongodb.

## Run in docker

Make sure you have docker installed. At the root folder run the following command:

```bash
  docker-compose up -d
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/shashankbiet/nodejs-clean-architecture-api
```

Go to the project directory

```bash
  cd nodejs-clean-architecture-api
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all students

```http
  GET /api/student
```

#### Get student by id

```http
  GET /api/student/${_id}
```

#### Create student

```http
  POST /api/student
```

```bash
  {
    "id": 101,
    "name": "John",
    "gender":"male",
    "email":"john@test.com",
    "mobileNo":1234567890
}
```

#### Update student by id

```http
  PUT /api/student/${_id}
```

```bash
  {
    "id": 101,
    "name": "Johnny",
    "gender":"male",
    "email":"johnny@test.com",
    "mobileNo":2224567890
}
```

#### Delete student by id

```http
  DELETE /api/student/${_id}
```
