import {IBook} from "../types/types";


export default function getBooksFromCategory(category: string, books: IBook[]): IBook[] {
  return books.filter((book) => book.category === category);
}