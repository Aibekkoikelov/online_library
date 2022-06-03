import React, {useEffect} from 'react';
import List from "../List";
import {IBook} from "../../types/types";
import BooksItem from "../books/BooksItem";
import {useAppDispatch, useAppSelector} from "../../store";
import getBooksFromWishList from "../../utils/getBooksFromWhishList";
import {Container} from "@mui/material";
import {SetTabName} from "../../store/actionCreator/booksCreator";

const WishList = () => {
    const wishList: string[] = useAppSelector(state => state.books.wishList) || []
    const books: IBook[] = useAppSelector(state => state.books.books)
    const allBook: IBook[] = getBooksFromWishList(wishList, books)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(SetTabName("Wish List"))
    },[])
    if (allBook.length === 0) {
        return <Container>
            <h1 style={{textAlign:"center"}}>No books</h1>
        </Container>
    }
    return (
        <Container>
            <List items={allBook} renderItem={(book:IBook)=> <BooksItem book={book} key={book.id}/>}/>
        </Container>
    );
};

export default WishList;