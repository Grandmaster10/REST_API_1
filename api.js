const express = require('express');
const fs = require('fs');
const app =  express();
const port = 3000;

app.use(express.json());

//Book details are stored in a mixed array
const books = []

//GET: Details of all books. Simply run using http://localhost:3000/books
app.get('/books', (req, res) => {
    console.log('Book details have been outputted');
    res.json({books});
});

//POST: Enter a new Book. Simply run using http://localhost:3000/books
//Book Details should be in JSON format
//For Example:
/*{
    "id" : "12345",
    "book" : "Pride and Prejudice",
    "author" : "Jane Austen",
    "type" : "soft-copy"
  }
*/ 
app.post('/books', (req,res) => {
    const newBook = req.body;
    let flag = 0;
    //Checks if there is already an item with the same ID
    for (const item of books){
        if(item.id === newBook.id){
            console.log('Book with same ID already present');
            flag = 1
        }
    }
    if(!flag){
        books.push(newBook);
        res.json({message : 'New Book Added', book:newBook});
    }
    else{
        res.json({message : 'Book with same ID already present'});
    }
});

//GET by ID: Details of a book by its ID. Simply run using http://localhost:3000/books/id/:id
//For Example: http://localhost:3000/books/id/12345
app.get('/books/id/:id', (req,res) => {
    const bookID = req.params.id;
    console.log(`Returning the details of ${bookID}`);
    for (const item of books){
        if(item.id === bookID){
            console.log(item.book);
            res.json({item});
        }
    }
});


//GET by book type: Filters all the books which are available in the same type i.e soft-copy or paper-back. Simply run using http://localhost:3000/books/type/:type
//For Example: http://localhost:3000/books/type/soft-copy
app.get('/books/type/:type', (req,res) => {
    const bookType = req.params.type;
    console.log(`Returning all books of type: ${bookType}`);
    const filtered_books = [];
    for (const item of books){
        if(item.type === bookType){
            console.log(item.book);
            filtered_books.push(item);
        }
    }
    res.json({filtered_books});
});


//GET by Author: Filters all the books written by the same author. Simply run using http://localhost:3000/books/author/:author
//For Example: http://localhost:3000/books/author/Jane Austen
app.get('/books/author/:author', (req,res) => {
    const authorName = req.params.author;
    console.log(`Returning all books of author: ${authorName}`);
    const filtered_books = [];
    for (const item of books){
        if(item.author === authorName){
            console.log(item.book);
            filtered_books.push(item);
        }
    }
    res.json({filtered_books});
});


//PUT: UPDATE the details of any book by ID. Simply run using http://localhost:3000/books/update/:id
//For Example: http://localhost:3000/books/update/12345
app.put('/books/update/:id', (req,res) => {
    const bookID = req.params.id;
    console.log(`Details of ${bookID} updated`);
    let count = 0;
    for(const item of books){
        count++;
        if(item.id === bookID){
            item.id = req.body.id;
            item.book = req.body.book;
            item.author = req.body.author;
            item.type = req.body.type;
            res.json({item});
        }
        if(count > books.length){
            res.json({message : `Book with ID: ${bookID} doesnt exist`});
            return;
        }
    };
});

//DELETE: Delete the an entire book from the catalogue by its ID. Simply run using http://localhost:3000/books/delete/:id
//For Example: http://localhost:3000/books/delete/12345
app.delete('/books/delete/:id', (req,res) => {
    const bookID = req.params.id;
    let delInd = 0;//Index of the book to be deleted
    for (const item of books){
        if(item.id === bookID){
            books.splice(delInd, 1);
            break;
        }
        delInd++;
    }
    res.json({message: `book with ID ${bookID} has been deleted`});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});