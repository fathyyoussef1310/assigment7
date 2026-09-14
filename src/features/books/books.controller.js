const bookService = require("./books.services");

 async function createBook(req, res,next) {
     try {
         console.log(req.body);
         console.log(typeof req.body);
         const book = await bookService.create(req.body);
         res.status(200).json({
             message: "Book created successfully",
             success: true,
             data:book
         });
     }catch(err){
         next(err);
     }
 }
 async function insertBook(req, res,next){
     try {
         const books = await bookService.insertMultipleBooks(req.body);
         res.status(200).json({
             message: "Successfully insert",
             success: true,
             data:books
         })
     }catch(err){
         next(err);
     }
 }
 async function updateBook(req, res,next){
     try {
         const book = await bookService.updateBookTitle(req.params.title ,
             req.body.year);
         res.status(200).json({
             message: "Successfully update",
             success: true,
             data:book,
         })
     }catch(err){
         next(err);
     }
 }
 async function createIndex(req, res,next){
     try {
         const book = await bookService.createIndex();
         res.status(200).json({
             message: "Successfully createIndex",
             success: true,
             data:book
         })
     }catch(err){
         next(err);
     }
 }
 async function getYearAt(req, res,next){
     try {
         const booksData = await bookService.getBooksAt(req.query.from ,
             req.query.to,
             );
         res.status(200).json({
             message: "Success",
             success: true,
             data:booksData
         })
     }catch(err){
         next(err)
     }
 }
 async function getBookGenre(req, res,next){
     try {
         const booksData = await bookService.getBooksByGenre(req.query.genre);
         res.status(200).json({
             message: "Success",
             success: true,
             data:booksData
         })
     }catch(err){
         next(err)
     }
 }
 async function getBookByTitle(req, res,next){
     try {
         const booksData = await bookService.getBookByTitle(req.query.title);
         res.status(200).json({
             message: "Success",
             success: true,
             data:booksData
         })
     }catch(err){
         next(err)
     }
 }
 async function descBooks(req, res,next){
     try {
         const books = await bookService.descBooksByYear(req.query.limit , req.query.page);
         res.status(200).json({
             message: "Success",
             success: true,
             data:books
         })
     }catch(err){
         next(err);
     }
 }
 module.exports = {
     createBook,
     insertBook,
     updateBook,
     createIndex,
     getYearAt,
     getBookGenre,
     getBookByTitle,
     descBooks
 };