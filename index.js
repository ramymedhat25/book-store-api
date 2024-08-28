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

// Task 4: Get all books based on Title
app.get("/books/title/:title", (req, res) => {
  const title = req.params.title;
  const titleBooks = books.filter((book) => book.title.includes(title));
  res.json(titleBooks);
});
// Task 5: Get book Review
app.get("/books/:bookId/reviews", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookReviews = reviews.filter((review) => review.bookId === bookId);
  res.json(bookReviews);
});

// Task 6: Register New user
app.post("/users/register", (req, res) => {
  const userData = req.body;
  res.json({ message: "User registered successfully", user: userData });
});

// Task 7: Login as a Registered user
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "password") {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Login failed" });
  }
});

// Task 8: Add/Modify a book review
app.put("/reviews", (req, res) => {
  // const reviewData = req.body;
  res.json({
    message: "Review added/modified successfully",
  });
});

// Task 9: Delete book review added by that particular user
app.delete("/reviews/:reviewId", (req, res) => {
  const reviewId = parseInt(req.params.reviewId);
  res.json({ message: "Review deleted successfully", reviewId });
});

// Task 10: Get all books (async callback function)
app.get("/async/books", async (req, res) => {
  try {
    const asyncBooks = await fetchBooksAsync();
    res.json(asyncBooks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Task 11: Search by ISBN (Using Promises)
app.get("/promise/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  searchBooksByISBN(isbn)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({ error: "Book not found" });
    });
});

// Task 12: Search by Author
app.get("/promise/books/author/:author", (req, res) => {
  const author = req.params.author;
  searchBooksByAuthor(author)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({ error: "No books found for this author" });
    });
});

// Task 13: Search by Title
app.get("/promise/books/title/:title", (req, res) => {
  const title = req.params.title;
  searchBooksByTitle(title)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({ error: "No books found with this title" });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function fetchBooksAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books);
    }, 1000);
  });
}

function searchBooksByISBN(isbn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find((book) => book.ISBN === isbn);
      if (book) {
        resolve(book);
      } else {
        reject("Book not found");
      }
    }, 1000);
  });
}

function searchBooksByAuthor(author) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const authorBooks = books.filter((book) => book.author === author);
      if (authorBooks.length > 0) {
        resolve(authorBooks);
      } else {
        reject("No books found for this author");
      }
    }, 1000);
  });
}

function searchBooksByTitle(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const titleBooks = books.filter((book) => book.title.includes(title));
      if (titleBooks.length > 0) {
        resolve(titleBooks);
      } else {
        reject("No books found with this title");
      }
    }, 1000);
  });
}
