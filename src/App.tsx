import React from 'react';
import Header from "./components/Header";
import BooksPage from "./components/books/BooksPage";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
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