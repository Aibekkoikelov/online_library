import {createReducer} from "@reduxjs/toolkit";
import {IAuthor, IBook} from "../../types/types";
import {
    Add_Book_Wish_List,
    AddBook,
    Remove_Book_Wish_List,
    SetTabName,
    ToogleFavorite
} from "../actionCreator/booksCreator";
interface BooksState {
    books: IBook[];
    tabName: string;
    author: IAuthor[]
    wishList: string[];
}
const initialState: BooksState= {
    books: [],
    tabName: 'main',
    author: [
        {id: 1, name: "Александр HUan"},
        {id: 2, name: "Александр Karlos"},
        {id: 3, name: "Александр"}

    ],
    wishList: []
}
export const booksReducer = createReducer(initialState, (builder) => {
     builder
         .addCase(AddBook, (state, action) => {
          state.books = [...action.payload]
    })
         .addCase(SetTabName, (state, action) => {
             state.tabName = action.payload
         })
         .addCase(Add_Book_Wish_List, (state, action) => {
             state.wishList.push(action.payload)
         })
         .addCase(Remove_Book_Wish_List, (state, action) => {
             state.wishList = state.wishList.filter(id => id !== action.payload)
         })
         .addCase(ToogleFavorite, (state, action) => {
                state.books = state.books.map(book => {
                    if (book.id === action.payload) {
                        book.favorite = !book.favorite
                    }
                    return book
                })
         })

})

