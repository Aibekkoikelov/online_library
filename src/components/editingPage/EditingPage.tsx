import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BookDao from "../../dao/book.dao";
import useFetchById from "../../hooks/useFetchById";
import {IBook} from "../../types/types";
import InputForm from "../../ui/input/InputForm";

const EditingPage = () => {
    const [book, setBook] = useState<IBook>()
    const {id} = useParams();
    const [getBook, loading, error] = useFetchById(async (id) =>{
        const response = await BookDao.getBookById(id)
        setBook(response)

    })
    useEffect(() => {
        getBook(id)
    }, [])
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {book && <InputForm book={book}/>}
        </div>
    );
};

export default EditingPage;