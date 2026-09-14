const db = require('../../common/db');
async function checkBookExits(author , title ){
    const bookExits = await db.collection('books').findOne({
        author: {$exists: true , $ne:null , $eq:author},
        title: {$exists: true , $ne:null , $eq:title},
    })
    return bookExits;
}
async function createBook(bookData) {
    const book = await db.collection('books').insertOne(bookData);
    return book;
}
async function insertMultipleBooks(bookData) {
    const book = await db.collection('books').insertMany(bookData);
    return book;
}
async function updateBookTitle(title , year){
    const book = await db.collection('books').findOne({
        title: title,
    })
    if (!book) {
        throw new Error("Book doesn't exist");
    }
    return await db.collection('books').updateOne({
        title: title,
    }, {
        $set: {
        year: year,
        }
    });
}
async function createIndex(){
    const book = await db.collection('books').createIndex({
        title: 1,
    })
    return book;
}
async function getBooksAt(yearOne,yearTwo){
    const books= await db.collection('books').find({
        year:{
            $gte:Number(yearOne),
            $lte:Number(yearTwo),
        }
    }).toArray();
    return books;
}
async function getBooksByGenre(genres){
    const books = await db.collection('books').find({
        genres:{
            $eq:genres
        }
    }).toArray();
    return books;
}
async function getBookByTitle(title){
    const book = await db.collection('books').findOne({
        title: title
    })
    return book;
}
async function descYearSort(skip = 0, limit = 3) {
    const books = await db.collection('books').aggregate([
        {
            $match: {}
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        },
        {
            $sort: {
                year:-1
            }
        },
        {
          $lookup: {
              from: 'books',
              localField: 'year',
              foreignField: 'year',
              as: 'year'
          }
        }
    ]).toArray();

    return books;
}
module.exports = {
    createBook,
    checkBookExits ,
    updateBookTitle,
    insertMultipleBooks,
    createIndex,
    getBooksAt,
    getBooksByGenre,
    getBookByTitle,
    descYearSort
};