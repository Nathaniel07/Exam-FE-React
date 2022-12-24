
const PORT = 3001; // Port

const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql2");

let database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_express_books'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const timeNow = new Date(); // Current DateTime

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/api/books/get", (req, res) => {

    const id = req.body.id;

    const sqlQuery = "SELECT * FROM books where id = ?;";
    database.query(sqlQuery, id, (err, result) => {
        console.log('result', result);
        res.send(result);
    });
});

app.get("/api/books/get-all", (req, res) => {

    const sqlQuery = "SELECT * FROM books";
    database.query(sqlQuery, (err, result) => {
        console.log('result', result);
        res.send(result);
    });
});

app.post("/api/books/add", (req, res) => {

    const bookTitle = req.body.bookTitle;
    const genre = req.body.genre;
    const author = req.body.author;

    const sqlQuery = "INSERT INTO books (id, book_title, genre, author, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?);";
    database.query(sqlQuery, ['', bookTitle, genre, author, timeNow, ''], (err, result) => {
        console.log('result', result);
        res.send(result);

    });
});

app.post("/api/books/update", (req, res) => { //app.put //api/books/update:id //req.params

    const id = req.body.id;
    const bookTitle = req.body.bookTitle;
    const genre = req.body.genre;
    const author = req.body.author;

    const sqlQuery = "UPDATE books SET book_title = ?, genre = ?, author = ?, updated_at = ? where id = ?;";
    database.query(sqlQuery, [bookTitle, genre, author, timeNow, id], (err, result) => {
        console.log('result', result);
        res.send(result);
    });
});

app.post("/api/books/delete", (req, res) => { //app.delete //api/books/delete:id //req.params

    const id = req.body.id;

    const sqlQuery = "DELETE FROM books where id = ?;";
    database.query(sqlQuery, id, (err, result) => {
        console.log('result', result);
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log('running on port '+PORT);
});