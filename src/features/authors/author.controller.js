const  authorService = require('./author.services');

const createAuthor = async (req, res , next) => {
    try {
        const author = await authorService.createAuthor(req.body);
        res.status(201).json({
            message: 'Author successfully created',
            success: true,
            author
        });
    }catch (err) {
        next(err);
    }
}

module.exports = {
    createAuthor,
}