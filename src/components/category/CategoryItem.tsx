import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../store";
import getAllBooksFromAuthor from "../../utils/getAllBooksFromAuthor";
import style from "../author/author.module.css";
import getBooksFromCategory from "../../utils/getBooksFromCategory";
import {ICategory} from "../../types/types";
import getCountBooksFromCategory from "../../utils/getCountBooksFromCategory";
interface CategoryProps  {
    category: ICategory
}
const CategoryItem:FC<CategoryProps> = ({category}) => {
    const router = useNavigate();
    const state = useAppSelector(state => state.books.books)
    const booksCount = getCountBooksFromCategory( category.name, state)
    function clickHandler() {
        router(`/author/${category.id}`)
    }
    return (
        <div onClick={clickHandler} className={style.authorItem}>
            <div>{category.name}</div>
            <div>{booksCount}</div>
        </div>
    );
};

export default CategoryItem;