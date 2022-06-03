import React from 'react';
import {useAppSelector} from "../../store";
import {useParams} from "react-router-dom";
import {Container} from "@mui/material";
import List from "../List";
import {IBook} from "../../types/types";
import BooksItem from "../books/BooksItem";

const CategoryBookList = () => {
    const state = useAppSelector(state => state.books.books)
    const author = useAppSelector(state => state.books.category)
    const {categoryId} = useParams()
    const categoryName =  author.filter(author => author.id === Number(categoryId))[0].name
    const booksByCategory = state.filter(book => book.author == categoryName)
    if (booksByCategory.length === 0) {
        return <Container>
            <h1 style={{textAlign:"center"}}>No books</h1>
        </Container>
    }
    return (
        <Container>
            <List items={booksByCategory} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default CategoryBookList;