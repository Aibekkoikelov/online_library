import React, {FC} from 'react';
import List from "../List";
import BooksItem from "./BooksItem";
import {IBook} from "../../types/types";

const BooksPage :FC = () => {

    const books: IBook[] = [
        {
            id: 1,
            title: 'Книга 1',
            author: 'Автор 1',
            category: 'Категория 1'
        }]
    return (
        <div>
           <List items={books} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </div>
    );
};

export default BooksPage ;