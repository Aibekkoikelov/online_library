


export interface IBook{
    id: string;
    title: string;
    author: string;
    category: string;
    favorite: boolean;
}
export interface IAuthor{
    id: number;
    name: string;
}
export interface ICategory{
    id: number;
    name: string;
}

export interface IBookItemProps{
    id: string;
}
export  enum BooksActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    SET_TAB_NAME = 'SET_TAB_NAME',
    ADD_WISH_BOOK = 'ADD_WISH_BOOK',
    REMOVE_WISH_BOOK = 'REMOVE_WISH_BOOK',
    TOOGLE_FAVORITE = 'TOOGLE_FAVORITE',
}

