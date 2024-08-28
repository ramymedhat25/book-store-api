const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const books = [
  { id: 1, title: "Book 1", author: "Author 1", ISBN: "1234567890" },
  { id: 2, title: "Book 2", author: "Author 2", ISBN: "0987654321" },
  { id: 3, title: "Book 3", author: "Author 3", ISBN: "0987654321" },
  { id: 4, title: "Book 4", author: "Author 4", ISBN: "0987654321" },
];

const reviews = [
  { id: 1, bookId: 1, userId: 1, content: "Great book!" },
  { id: 2, bookId: 1, userId: 2, content: "I liked it." },
];

app.use(bodyParser.json());

// Task 1: Get the book list available in the shop
app.get("/books", (req, res) => {
  res.json(books);
});

// Task 2: Get the books based on ISBN
app.get("/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books.find((book) => book.ISBN === isbn);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Task 3: Get all books by Author
app.get("/books/author/:author", (req, res) => {
  const author = req.params.author;
  const authorBooks = books.filter((book) => book.author === author);
  res.json(authorBooks);
});
