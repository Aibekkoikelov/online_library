import {createAction, PrepareAction} from "@reduxjs/toolkit";
import {BooksActionTypes, IBook} from "../../types/types";


export const AddBook = createAction(BooksActionTypes.ADD_BOOK, (books:IBook) => ({payload: books}));