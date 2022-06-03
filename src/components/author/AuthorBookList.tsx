import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import List from "../List";
import BooksItem from "../books/BooksItem";
import {IBook} from "../../types/types";
import {useAppSelector} from "../../store";
import useFetching from "../../hooks/useFetching";
import BookDao from "../../dao/book.dao";
import {Container} from "@mui/material";

const AuthorBookList = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const {authorId} = useParams()
    const [booksCountFetching] = useFetching(async () =>{
        const count = await BookDao.getAllBooks()
        setBooks(count)
    })
    useEffect(() => {
        booksCountFetching()
    },[])
    // @ts-ignore
    const booksByAuthor = books.filter(book => book.author == authorId)
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