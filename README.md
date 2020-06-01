# Documentation - API

## Description

The following API it was created with the following technologies and packages:

- Nodejs - version 12.x.x
- express - 4.17.1
- mongoose - 5.9.15

For Storage the dataset of the users:
- MongoDB

## Features

The API allows:

1. Create a new user
```
POST - /users
```
- Body
```json
{
	"name": "José",
	"lastName": "López",
	"email": "jose@gmail.com",
	"password": "hola12345",
	"confirmationPassword": "hola12345",
	"role": "administrator"
}
```
- Response
 ```json
{
	"succes": true,
	"data": {
        "user": {
            "name": "José",
	        "lastName": "López",
	        "email": "jose@gmail.com",
	        "role": "administrator"
        }
    } 
}
```

2. Update an existing user
```
PATCH - /users/:id
```

- Body
```json
{
	"name": "José",
    "role": "administrator",
	"carbonFootprint": {
        "tonsCarbon": 7.565554651013345,
        "earth": 4.2149662667175085,
        "carbonPercent": 47.471499832167844,
        "total": 5.482467414051145,
        "crop": 1.8234145199244514,
        "graz": 0.16965979673156445,
        "forest": 0.497215033612398,
        "fish": 0.18519827543389916,
        "energy": 2.602609509259946,
        "built": 0.20437027908888625,
        "food": 2.3104148866483167,
        "housing": 0.010799999999999999,
        "transport": 0.9405695430889075,
        "goods": 1.0248019353075495,
        "services": 1.19588104900637,
        "gfcfFood": 0.0,
        "gfcfHousing": 0.0,
        "gfcfTransport": 0.23443,
        "gfcfGoods": 0.0,
        "gfcfServices": 0.0
    }
}
```
- Response
 ```json
{
	"succes": true,
	"data": {
        "user": {
            "name": "José",
	        "lastName": "López",
	        "email": "jose@gmail.com",
            "role": "administrator",
            "carbonFootprint": {
                "tonsCarbon": 7.565554651013345,
                "earth": 4.2149662667175085,
                "carbonPercent": 47.471499832167844,
                "total": 5.482467414051145,
                "crop": 1.8234145199244514,
                "graz": 0.16965979673156445,
                "forest": 0.497215033612398,
                "fish": 0.18519827543389916,
                "energy": 2.602609509259946,
                "built": 0.20437027908888625,
                "food": 2.3104148866483167,
                "housing": 0.010799999999999999,
                "transport": 0.9405695430889075,
                "goods": 1.0248019353075495,
                "services": 1.19588104900637,
                "gfcfFood": 0.0,
                "gfcfHousing": 0.0,
                "gfcfTransport": 0.23443,
                "gfcfGoods": 0.0,
                "gfcfServices": 0.0
            }
        }
    } 
}
```

- Headers

```json
{
    "Authorization": token
}
```

3. Delete an existing user
```
DELETE - /users/:id
```
- Response
 ```json
{
	"success": true,
    "data": {
        "message": "User deleted successfully"
    }
}
```

- Headers

```json
{
    "Authorization": token
}
```

4. Get a list of users
```
GET - /users
```

- Response
 ```json
{
	"success": true,
    "data": {
        "users": []
    }
}
```

- Headers

```json
{
    "Authorization": token
}
```


5. Get a user
```
GET - /users/:id
```
- Response
 ```json
{
	"success": true,
    "data": {
        "user": {}
    }
}
```

- Headers

```json
{
    "Authorization": token
}
```


6. Add subscription a existing user (only one)
```
POST - /users/:idUser/subscription
```

- Body 
```json
{
	"plan": "basic",
	"cost": 1200,
	"dateRenovation": "2020-06-24"
}
```

- Response
 ```json
{
	"success": true,
    "data": {
        "user": {}
    }
}
```

- Headers

```json
{
    "Authorization": token
}
```

7. Login a user
```
POST - /auth/login
```

- Body 
```json
{
	"email": "david@gmail.com",
	"password": "hola12345"
}
```

- Response
 ```json
{
	"success": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDAzMWExZDczOGIwMGUwMmI0N2QzZiIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNTkxMDQzMzI1fQ.tFEhROPLv3sh-5Kt7K-YnQ1Ej2S_A478LBLZdINPraU"
    }
}
```


8. Get a user information by token
```
GET - /auth/me
```

- Headers

```json
{
    "Authorization": token
}
```

- Response
 ```json
{
    "success": true,
    "data": {
        "user": {
            "role": "administrator",
            "_id": "5ed031a1d738b00e02b47d3f",
            "name": "David",
            "lastName": "Palacios",
            "email": "david@gmail.com"
        }
    }
}
```

## For Run in localhost

1. Clone the repository

```shell
    $ git clone ''
    $ cd directory
```

2. Install dependecies.

```shell
    $ npm install
```

3. Start a project

```shell
    $ npm run dev
```
*NOTE*

To run successfully is necessary to create .env file to save your link your *MONGODB_URI*





