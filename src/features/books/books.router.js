const{Router} = require('express');
const bookRouter = new Router();
const bookController = require('./books.controller');


bookRouter.post('', bookController.createBook);
bookRouter.post('/batch', bookController.insertBook);
bookRouter.patch('/:title' , bookController.updateBook)
bookRouter.post('/index' , bookController.createIndex)
bookRouter.get('/year' , bookController.getYearAt)
bookRouter.get('/genre' , bookController.getBookGenre)
bookRouter.get('/title',bookController.getBookByTitle)
bookRouter.get('/skip-limit',bookController.descBooks)
module.exports = bookRouter;