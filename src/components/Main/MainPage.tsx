import React, {useEffect, useState} from 'react';
import { Grid} from "@mui/material";
import style from "./main.module.css";
import InputForm from "../ui/input/InputForm";
import BookDao from "../../dao/book.dao";
import useFetching from "../../hooks/useFetching";
import {IBook} from "../../types/types";
import {useAppDispatch} from "../../store";
import {AddBook, SetTabName} from "../../store/actionCreator/booksCreator";

const MainPage = () => {

    const dispatch = useAppDispatch();
    const [count, setCount] = useState<number>(0);
    const [bookFetching, loading, error] = useFetching(async (data) =>{
    const response =  await BookDao.postBook(data)
        dispatch(AddBook(response))
    })
    const [booksCountFetching] = useFetching(async () =>{
     const count =await BookDao.getAllBooksCount()
        setCount(count)
    })
   useEffect(() => {
         booksCountFetching()
         dispatch(SetTabName('Main'))
   },[])
      function createNewBook(book: IBook) {
          bookFetching(book)
          booksCountFetching()
          // redirect('/all')
    }
  if (loading) {
        return <div>Loading...</div>
  }
  if (error) {
        return <div>Error: {error.message}</div>
  }

    return (
        <div className={style.mainPage}>
            <Grid height="100%" container columns={12}>
                <Grid className={style.leftSide} item md={6}>
                    <InputForm createNewBook={createNewBook}/>
                </Grid>
                <Grid className={style.rightSide}  item md={6}>
                   <div className={style.allCount}>All books {count} </div>
                   {/*<div className={style.allCount}>All category 200 </div>*/}
                </Grid>
            </Grid>

        </div>

    );
};

export default MainPage;