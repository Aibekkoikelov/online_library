import {createAction} from "@reduxjs/toolkit";
import {BooksActionTypes, IBook} from "../../types/types";


export const AddBook = createAction(BooksActionTypes.ADD_BOOK, (book: IBook) => ({payload: book}));