import React, {FC} from 'react';
import List from "../List";
import BooksItem from "./BooksItem";
import {IBook} from "../../types/types";
import {Container} from "@mui/material";

const BooksPage :FC = () => {

    const books: IBook[] = [
        {
            id: 1,
            title: 'Книга 1',
            author: 'Автор 1',
            category: 'Категория 1',
            favorite: true
        }]
    return (
        <Container>
           <List items={books} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default BooksPage ;