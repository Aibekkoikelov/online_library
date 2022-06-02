import {createReducer} from "@reduxjs/toolkit";
import {IBook} from "../../types/types";
import {AddBook, SetTabName} from "../actionCreator/booksCreator";
interface BooksState {
    books: IBook[];
    tabName: string;
}
const initialState: BooksState= {
    books: [],
    tabName: 'main'
}
export const booksReducer = createReducer(initialState, (builder) => {
     builder
         .addCase(AddBook, (state, action) => {
          state.books = [...action.payload]
    })
         .addCase(SetTabName, (state, action) => {
             state.tabName = action.payload
         })
})

