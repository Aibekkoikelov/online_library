import React from 'react';
import Header from "./components/Header";
import BooksPage from "./components/books/BooksPage";

const App = () => {
    return (
        <div>
          <Header/>
          <BooksPage/>
        </div>
    );
};

export default App;