const {Router} = require('express');
const authorRouter = new Router();
const authorController = require('./author.controller');

authorRouter.post('', authorController.createAuthor);

module.exports = authorRouter;