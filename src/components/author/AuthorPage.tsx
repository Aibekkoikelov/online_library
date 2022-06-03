import React, {useEffect} from 'react';
import List from "../List";
import AuthorItem from "./AuthorItem";
import {IAuthor} from "../../types/types";
import {Container} from "@mui/material";
import {v4 as uuid} from "uuid";
import {useAppDispatch, useAppSelector} from "../../store";
import {SetTabName} from "../../store/actionCreator/booksCreator";

const AuthorPage = () => {
    const author = useAppSelector(state => state.books.author)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(SetTabName("Authors"))
    },[])
    return (
        <Container>
            <List items={author} renderItem={(author:IAuthor)=> <AuthorItem author={author} key={author.name}/>}/>
        </Container>
    );
};

export default AuthorPage;