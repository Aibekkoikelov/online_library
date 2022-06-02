import {createAction} from "@reduxjs/toolkit";
import {BooksActionTypes, IBook} from "../../types/types";


export const AddBook = createAction<IBook[]>(BooksActionTypes.ADD_BOOK);
export const SetTabName = createAction(BooksActionTypes.SET_TAB_NAME, (tabName: string) => ({payload: tabName}));


    // , (book: IBook[]) => ({payload: book})