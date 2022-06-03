import {IBook} from "../types/types";


export default function getCountBooksFromCategory(category: string, books: IBook[]): number {
    const booksFromCategory = books.filter(book => book.category === category);
    return booksFromCategory.length;
}