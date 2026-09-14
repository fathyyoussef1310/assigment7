const express = require('express')
const app = express();
const authorRouter = require('./features/authors/author.router');
const bookRouter = require('./features/books/books.router');
const logsRouter = require('./features/logs/logs.Router');
app.use(express.json());

app.use('/books', bookRouter);
app.use('/authors' , authorRouter);
app.use('/logs' , logsRouter);

app.use((err, req, res, next)=>{
    res.status(500).json({
        error: err.message,
        status: 500,
        message: err.message,
        stack: err.stack,
    })
})

app.listen(3000 , ()=>{
    console.log("http://localhost:3000");
});
