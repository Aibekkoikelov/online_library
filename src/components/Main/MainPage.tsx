import React, {useEffect} from 'react';
import {Box, Container, Grid} from "@mui/material";
import style from "./main.module.css";
import InputForm from "../../ui/input/InputForm";
import BookDao from "../../dao/book.dao";
import {allBooks} from "../../data";
import useFetching from "../../hooks/useFetching";
const MainPage = () => {
    const [bookFetching] = useFetching(async () =>{
       const response =  await BookDao.postAllBook(allBooks)

    })
    useEffect( () => {
      bookFetching().then((data:any)  => console.log(data))
    }, [])

    return (
        <div className={style.mainPage}>
            <Grid height="100%" container columns={12}>
                <Grid className={style.leftSide} item lg={6}>
                    <InputForm/>
                </Grid>
                <Grid className={style.rightSide}  item lg={6}>
                   <div className={style.allCount}>All books </div>
                   <div className={style.allCount}>All category </div>
                </Grid>
            </Grid>

        </div>

    );
};

export default MainPage;