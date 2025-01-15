import { generateId } from "./utils.js";

export let books = [];

export function addBook(title, author, year) {
    const id = generateId(books);
    const book = {id, title, author, year};
    books.push(book)
    // console.log(books)
}

export function removeBook(id) {
    books = books.filter(book => book.id !== id);
}

export function findBookByTitle(title) {
    return books.find(book => book.title == title)
}
