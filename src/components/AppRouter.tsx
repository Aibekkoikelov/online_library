import React from 'react';
import BooksPage from "./books/BooksPage";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <div style={{marginTop: "20px"}}>
            <Routes>
                <Route path="/" element={<BooksPage/>}/>
            </Routes>

        </div>
    );
};

export default AppRouter;