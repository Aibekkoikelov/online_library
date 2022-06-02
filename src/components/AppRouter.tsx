import React from 'react';
import BooksPage from "./books/BooksPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./Main/MainPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/all" element={<BooksPage/>}/>
            </Routes>

        </div>
    );
};

export default AppRouter;