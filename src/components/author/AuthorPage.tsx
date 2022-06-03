import React from 'react';
import List from "../List";
import AuthorItem from "./AuthorItem";
import {IAuthor} from "../../types/types";
import {Container} from "@mui/material";
import {v4 as uuid} from "uuid";

const AuthorPage = () => {
    const authorList: IAuthor[] = [
        {id: 1, name: "Александр HUan"},
        {id: 2, name: "Александр Karlos"},
        {id: 3, name: "Александр"}]
    return (
        <Container>
            <List items={authorList} renderItem={(author:IAuthor)=> <AuthorItem author={author} key={author.name}/>}/>
        </Container>
    );
};

export default AuthorPage;