import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BookDao from "../../dao/book.dao";
import useFetchById from "../../hooks/useFetchById";
import {IBook} from "../../types/types";
import InputForm from "../ui/input/InputForm";
import style from "../Main/main.module.css";
import {Grid} from "@mui/material";

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
        <div style={{background: "slateblue", height: "calc(100vh - 84px)"}} className={style.leftSide}>
            <div >
                <InputForm/>
            </div>
        </div>
    );
};

export default EditingPage;