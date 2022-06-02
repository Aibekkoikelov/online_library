import React, {FC} from 'react';
import List from "../List";
import BooksItem from "./BooksItem";
import {IBook} from "../../types/types";
import {Container} from "@mui/material";

const BooksPage :FC = () => {

    const books: IBook[] = [
        {
            id: 1,
            title: 'Артур Конан Дойл',
            author: 'Шекспир',
            category: 'Фантастика',
            favorite: true
        }, {
            id: 1,
            title: 'Артур Конан Дойл',
            author: 'Шекспир',
            category: 'Фантастика',
            favorite: true
        }]
    return (
        <Container>
           <List items={books} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default BooksPage ;