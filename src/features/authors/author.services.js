const authorRepository = require('./author.repository');
const createAuthor = async (authorData) => {
    const authorExist = await authorRepository.checkAuthorExist(authorData.name , authorData.nationality)
    if (authorExist) {
        throw new Error('Author is already Exists')
    }
    const author = await authorRepository.createAuthor(authorData);
    return author;
}

module.exports = {
    createAuthor,
}