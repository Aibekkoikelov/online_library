import React from 'react';
import BooksPage from "./books/BooksPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./Main/MainPage";
import EditingPage from "./editingPage/EditingPage";
import AuthorPage from "./author/AuthorPage";
import AuthorBookList from "./author/AuthorBookList";
import WishList from "./whishList/WishList";
import CategoryPage from "./category/CategoryPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/all" element={<BooksPage/>}/>
                <Route path="/editing/:id" element={<EditingPage/>}/>
                <Route path="/author" element={<AuthorPage/>}/>
                <Route path="/author/:authorId" element={<AuthorBookList/>}/>
                <Route path="/wishList" element={<WishList/>}/>
                <Route path="/category" element={<CategoryPage/>}/>
                <Route path="/category/:categoryId" element={<AuthorBookList/>}/>
            </Routes>

        </div>
    );
};

export default AppRouter;