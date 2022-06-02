import {IBook} from "../types/types";


export default class BookDao{
  static async postBook (book: IBook): Promise<IBook[]> {
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        books.push(book);
        await  localStorage.setItem('books', JSON.stringify(books));
        return books;
  }
    static async getAllBooksCount (){
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        return books.length;
    }
}