# 📚 Book Catalogue API

A simple RESTful API built with **Node.js** and **Express.js** to manage a collection of books. It supports full CRUD operations and filters based on book ID, type, and author.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository or download the code:

   ```bash
   git clone https://github.com/Grandmaster10/REST_API_1
   cd REST_API_1
   ```

### Install dependencies (only Express is used):

   ```bash
   npm install 
   ```
   Run the server:

   ```bash
   node server.js
   Open your browser or API client and navigate to:
   ```

   ```bash
   http://localhost:3000
   ```

# 📖 API Endpoints

## ✅ Get All Books

-> URL: GET /books

-> Description: Returns a list of all books.

## ➕ Add a New Book

-> URL: POST /books

-> Content-Type: application/json

-> Body Example:

```json

{
  "id": "12345",
  "book": "Pride and Prejudice",
  "author": "Jane Austen",
  "type": "soft-copy"
}
```
-> Response: Success or error if ID already exists.

## 🔍 Get Book by ID

-> URL: GET /books/id/:id

-> Example: /books/id/12345

-> Description: Returns the book with the given ID.

## 🔍 Get Books by Type

-> URL: GET /books/type/:type

-> Example: /books/type/soft-copy

-> Description: Filters and returns books by their type (soft-copy or paper-back).

## 🔍 Get Books by Author

-> URL: GET /books/author/:author

-> Example: /books/author/Jane Austen

-> Description: Filters and returns books written by the specified author.

## ✏️ Update Book by ID

-> URL: PUT /books/update/:id

-> Example: /books/update/12345

-> Body Example:

```json

{
  "id": "12345",
  "book": "Emma",
  "author": "Jane Austen",
  "type": "paper-back"
}
```
-> Description: Updates the book's details.

## ❌ Delete Book by ID

-> URL: DELETE /books/delete/:id

-> Example: /books/delete/12345

-> Description: Deletes the book with the given ID.

## ⚠️ Notes & Considerations

-> Book entries are stored in memory (in an array), so all data is lost when the server restarts.

-> Duplicate IDs are not allowed.

-> Ensure JSON format is used when sending POST/PUT requests.
