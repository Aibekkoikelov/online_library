import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {SetTabName} from "../../store/actionCreator/booksCreator";
import {Container} from "@mui/material";
import List from "../List";
import {IAuthor} from "../../types/types";
import AuthorItem from "../author/AuthorItem";
import CategoryItem from "./CategoryItem";

const CategoryPage = () => {
    const category = useAppSelector(state => state.books.category)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(SetTabName("Category"))
    },[])
    return (
        <Container>
            <List items={category} renderItem={(category:IAuthor)=> <CategoryItem category={category} key={category.name}/>}/>
        </Container>
    );
};

export default CategoryPage;