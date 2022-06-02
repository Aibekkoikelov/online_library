import {IBook} from "../types/types";


export default class BookDao{
  static async postAllBook (book: IBook[]): Promise<IBook[]> {
      await  localStorage.setItem('books', JSON.stringify(book));
      const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        return books;
  }
    static async getAllBooks (){
        const books: IBook[] = await localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') as string) : [];
        return books;
    }
}