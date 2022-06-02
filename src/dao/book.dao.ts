import {IBook, IBookItemProps} from "../types/types";
import sortBooks from "../utils/sortBooks";
interface IBookId{
    id: string;
}

export default class BookDao{
  static async postBook (book: IBook): Promise<IBook[]> {
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        books.push(book);
        await  localStorage.setItem('books', JSON.stringify(books));
        return sortBooks(books);
  }
    static async getAllBooksCount (){
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        return books.length;
    }
    static async getAllBooks (){
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        return books;
    }
    static async deleteBookById (id: string): Promise<IBook[]> {
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        const newBooks = books.filter(book => book.id !== id);
        await  localStorage.setItem('books', JSON.stringify(newBooks));

        return sortBooks(newBooks);
    }
}