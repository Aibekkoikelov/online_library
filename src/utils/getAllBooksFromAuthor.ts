import {IBook} from "../types/types";


export default function getAllBooksFromAuthor(author: string, books: IBook[]): number {
      const booksFromAuthor = books.filter(book => book.author === author);
        return booksFromAuthor.length;
}