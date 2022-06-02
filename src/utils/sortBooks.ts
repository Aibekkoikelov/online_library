import {IBook} from "../types/types";


export default function sortBooks(books: IBook[]): IBook[] {
       const sortBooks = books.sort((a, b) => {
              if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
       })
    return  sortBooks;

}