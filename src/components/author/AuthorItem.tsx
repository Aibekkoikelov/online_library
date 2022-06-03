import React, {FC} from 'react';
import {IAuthor} from "../../types/types";
import style from './author.module.css';
import {useNavigate} from "react-router-dom";
interface AuthorItemProps {
    author: IAuthor
}
const AuthorItem:FC<AuthorItemProps> = ({author}) => {
  const router = useNavigate();

    function clickHandler() {
        router(`/author/${author.id}`)
    }
    return (
        <div onClick={clickHandler} className={style.authorItem}>
            <div>{author.name}</div>
            <div>{}</div>
        </div>
    );
};

export default AuthorItem;