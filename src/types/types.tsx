


export interface IBook{
    id: number;
    title: string;
    author: string;
    category: string;
    favorite: boolean;
}

export  enum BooksActionTypes {
    ADD_BOOK = 'ADD_BOOK',
}
