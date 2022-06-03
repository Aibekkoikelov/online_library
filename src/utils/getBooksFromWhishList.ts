import {IBook} from "../types/types";


export default function getBooksFromWishList(wishList:string [], books: IBook[] ): IBook[] {
    const booksFromWishList: IBook[] = [];
     for (let i = 0; i < wishList.length; i++) {
         const booking = books.find((book) => book.id === wishList[i]);
         if (booking) {
             booksFromWishList.push(booking);
         }
     }
     return booksFromWishList;
}