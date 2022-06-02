import React, {useEffect} from 'react';
import Header from "./components/Header";
import BooksPage from "./components/books/BooksPage";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import useFetching from "./hooks/useFetching";
import BookDao from "./dao/book.dao";
import {useAppDispatch, useAppSelector} from "./store";
import {AddBook} from "./store/actionCreator/booksCreator";

const App = () => {
    const dispatch = useAppDispatch();
    const [fetchAllBooks]= useFetching(async () =>{
        const books = await BookDao.getAllBooks()
        dispatch(AddBook(books))
    })
    useEffect(() => {
        fetchAllBooks()
    },[])

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>

        </div>
    );
};

export default App;