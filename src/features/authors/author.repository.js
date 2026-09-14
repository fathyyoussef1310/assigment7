const db = require("../../common/db")


async function createAuthor(authorData) {
    const author = await db.collection('authors').insertOne(authorData);
    return author;
}
async function checkAuthorExist(name , nationality) {
    const authorExist = await db.collection('authors').findOne({
        name: name,
        nationality: nationality,
    });
    return authorExist;
}

module.exports = {
    createAuthor,
    checkAuthorExist,
}