# J0123-Build

server >> storing certain book data
       >> user register
       >> suscriber


This is book record management API server/backend for library system or management os records or books.

## Routes and endpoints

Fine system
User 06/03/2023 - 06/06/2023
09/06/2023 => 50*3=150

## Subscription types
3 months(basic)
6 months(standarad)
12 months(premium)



## /users
POST: Create a user
GET: Get all the user info here

## /users/{id}
GET: Get user by id
PUT: Update a user by id
DELETE: Delete a user by id(chk if he/she still have a issued book) && (is there any fine to be paid)

## /users/subscription-details{id}
GET: Get user subscription details
     >> Date of subscription
     >> Valid till
     >> Is there any fine

## /books
GET: Get all the books
POST: Create/add new books


## /books/{id}
GET: Get a book by id
PUT: Update a book by id

## /books/issued
GET: Get all the issued books here

## /books/issued/Withfine
GET: Get all issued books with their fine