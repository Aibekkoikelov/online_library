import React, {FC, useEffect} from 'react';
import List from "../List";
import BooksItem from "./BooksItem";
import {IBook} from "../../types/types";
import {Container} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store";
import {SetTabName} from "../../store/actionCreator/booksCreator";

const BooksPage :FC = () => {
    const books: IBook[] = useAppSelector(state => state.books.books)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(SetTabName("All Books"))
    },[])
   if (books.length === 0) {
         return <Container>
              <h1 style={{textAlign:"center"}}>No books</h1>
         </Container>
   }
    return (
        <Container >
           <List  items={books} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default BooksPage ;