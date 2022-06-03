import {createAction} from "@reduxjs/toolkit";
import {BooksActionTypes, IBook} from "../../types/types";


export const AddBook = createAction<IBook[]>(BooksActionTypes.ADD_BOOK);
export const SetTabName = createAction(BooksActionTypes.SET_TAB_NAME, (tabName: string) => ({payload: tabName}));
export const Add_Book_Wish_List = createAction(BooksActionTypes.ADD_WISH_BOOK, (bookId: string) => ({payload: bookId}));
export const Remove_Book_Wish_List = createAction(BooksActionTypes.REMOVE_WISH_BOOK, (bookId: string) => ({payload: bookId}));
export const ToogleFavorite = createAction(BooksActionTypes.TOOGLE_FAVORITE, (bookId: string) => ({payload: bookId}));