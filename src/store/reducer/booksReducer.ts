import {createReducer} from "@reduxjs/toolkit";
import {IBook} from "../../types/types";
import {AddBook} from "../actionCreator/booksCreator";
interface BooksState {
    books: IBook[];
}
const initialState: BooksState= {
    books: []
}

export const booksReducer = createReducer(initialState, (builder) => {
     builder
         .addCase(AddBook, (state, action) => {
        state.books.push(action.payload)
    })
})

