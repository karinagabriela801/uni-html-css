import { addBook, removeBook,findBookByTitle } from "./bookManager.js";
import { printBooks, generateId } from "./utils.js";
import { books } from "./bookManager.js";
//Bücher adden
addBook('To Kill a Mockingbird', 'Harper Lee', 1960);
addBook('1984', 'George Orwell', 1949);

//Bücher removen
// removeBook(1);

//Buch finden - title
const book = findBookByTitle('1984')
// console.log(books);

printBooks(books);





