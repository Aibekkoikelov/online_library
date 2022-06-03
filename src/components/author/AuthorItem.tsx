import React, {FC} from 'react';
import {IAuthor} from "../../types/types";
import style from './author.module.css';
import {useNavigate} from "react-router-dom";
import getAllBooksFromAuthor from "../../utils/getAllBooksFromAuthor";
import {useAppSelector} from "../../store";
interface AuthorItemProps {
    author: IAuthor
}
const AuthorItem:FC<AuthorItemProps> = ({author}) => {
  const router = useNavigate();
    const state = useAppSelector(state => state.books.books)
    const booksCount = getAllBooksFromAuthor( author.name, state)
    function clickHandler() {
        router(`/author/${author.id}`)
    }
    return (
        <div onClick={clickHandler} className={style.authorItem}>
            <div>{author.name}</div>
            <div>{booksCount}</div>
        </div>
    );
};

export default AuthorItem;