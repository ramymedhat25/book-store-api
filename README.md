# Node.js Book Shop API

This is a back-end application built with Node.js and Express to provide API endpoints for interacting with a book shop's data. It includes functionality for both general users and registered users.

## Features

**General Users**

*   Get the list of all available books.
*   Search for books by ISBN.
*   Search for books by author.
*   Search for books by title.
*   Get reviews for a specific book.
*   Register a new user account.
*   Log in as a registered user.

**Registered Users**

*   Add or modify a book review.
*   Delete their own book reviews.

**Additional Tasks**

*   Get all books using an async callback function.
*   Search for books by ISBN using Promises.
*   Search for books by author using Promises.
*   Search for books by title using Promises.

## Getting Started

1.  Clone this repository: `git clone https://github.com/ramymedhat25/book-store-api`
2.  Install dependencies: `npm install`
3.  Start the server: `npm start`
4.  The API will be available at `http://localhost:3000`

## API Endpoints

**General Users**

*   `GET /books`: Get all books
*   `GET /books/isbn/:isbn`: Get book by ISBN
*   `GET /books/author/:author`: Get books by author
*   `GET /books/title/:title`: Get books by title
*   `GET /books/:bookId/reviews`: Get reviews for a book
*   `POST /users/register`: Register a new user
*   `POST /users/login`: Log in as a registered user

**Registered Users**

*   `PUT /reviews`: Add or modify a book review
*   `DELETE /reviews/:reviewId`: Delete a book review

**Additional Tasks**

*   `GET /async/books`: Get all books (async callback)
*   `GET /promise/books/isbn/:isbn`: Search by ISBN (Promises)
*   `GET /promise/books/author/:author`: Search by author (Promises)
*   `GET /promise/books/title/:title`: Search by title (Promises)

## Data Storage

*   This project currently uses in-memory storage for books and reviews. For a production environment, consider using a database for persistent data storage.

## Important Notes

*   This project is a simplified implementation for educational purposes.
*   In a real-world application, you would need to implement robust security measures, including password hashing, secure token generation for authentication, and input sanitization.

## Author

*   [Ramy Medhat] 

## License

*   This project is licensed under the [MIT License](LICENSE).
