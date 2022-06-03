import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import List from "../List";
import BooksItem from "../books/BooksItem";
import {IAuthor, IBook} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../store";
import useFetching from "../../hooks/useFetching";
import BookDao from "../../dao/book.dao";
import {Container} from "@mui/material";
import {AddBook} from "../../store/actionCreator/booksCreator";
import getAllBooksFromAuthor from "../../utils/getAllBooksFromAuthor";

const AuthorBookList = () => {
    const state = useAppSelector(state => state.books.books)
    const author = useAppSelector(state => state.books.author)
    const {authorId} = useParams()
    const authorName =  author.filter(author => author.id === Number(authorId))[0].name
    // @ts-ignore
    const booksByAuthor = state.filter(book => book.author == authorName)
    if (booksByAuthor.length === 0) {
        return <Container>
            <h1 style={{textAlign:"center"}}>No books</h1>
            </Container>
    }
    return (
        <Container>
           <List items={booksByAuthor} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default AuthorBookList;