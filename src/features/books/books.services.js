const booksRepository = require("./books.repository");

async function create(bookData) {
    const bookExist = await booksRepository.checkBookExits(bookData.author , bookData.title);
    if (bookExist) {
        throw new Error("Book already exists");
    }
    const book = await booksRepository.createBook(bookData);
    return book;
}
async  function insertMultipleBooks(bookData) {
    const book = await booksRepository.insertMultipleBooks(bookData);
    return book;
}
async function updateBookTitle(title,year) {
    const book = await booksRepository.updateBookTitle(title,year);
    return book;
}
async function createIndex(bookData) {
    const bookIndex =await booksRepository.createIndex();
    return bookIndex;
}
async function getBooksAt(yearOne,yearTwo) {
    return await booksRepository.getBooksAt(yearOne,yearTwo);
}
async function getBooksByGenre(genres) {
    const book =  await booksRepository.getBooksByGenre(genres);
    if (book.length === 0 ){
        throw new Error("No Books Found with This Genre");
    }
    return book;
}
async function getBookByTitle(title) {
    const book = await booksRepository.getBookByTitle(title);
    if (book.length === 0 ){
        throw new Error("No Books Found with This Title");
    }
    return book;
}
async function descBooksByYear(limit = 3 , page =1) {
    const skip = ((page - 1) * limit)
    const books = await booksRepository.descYearSort(+skip, +limit);
    return books;
}
async function findYearInteger() {
    const book = await booksRepository.findBooksYearInteger();
    return book;
}
async function findBooksByGenreExceptOnes(genres) {
    const books= await booksRepository.findBooksByGenreExceptOnes(genres);
    return books;
}
async function deleteBooksBeforeYear(yearOne){
    const book = await booksRepository.deleteBeforeYear(yearOne);
    return book;
}
module.exports = {
    create,
    insertMultipleBooks,
    updateBookTitle,
    createIndex,
    getBooksAt,
    getBooksByGenre,
    getBookByTitle,
    descBooksByYear,
    findYearInteger,
    findBooksByGenreExceptOnes,
    deleteBooksBeforeYear,
}