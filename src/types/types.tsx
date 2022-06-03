


export interface IBook{
    id: string;
    title: string;
    author: IAuthor;
    category: string;
    favorite: boolean;
}
export interface IAuthor{
    id: number;
    name: string;
}
export interface IBookItemProps{
    id: string;
}
export  enum BooksActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    SET_TAB_NAME = 'SET_TAB_NAME',
}

