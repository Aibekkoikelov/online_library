


export interface IBook{
    id: string;
    title: string;
    author: string;
    category: string;
    favorite: boolean;
}

export  enum BooksActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    SET_TAB_NAME = 'SET_TAB_NAME',
}

