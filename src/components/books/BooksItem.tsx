import React, {FC} from 'react';
import {IBook} from "../../types/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import style from "./book.module.css"
import useFetching from "../../hooks/useFetching";
import BookDao from "../../dao/book.dao";
import {AddBook} from "../../store/actionCreator/booksCreator";
import {useAppDispatch} from "../../store";
import {useNavigate} from "react-router-dom";
interface BooksItemProps {
   book: IBook
}
const BooksItem: FC<BooksItemProps> = ({book}) => {
    const router = useNavigate();
    const [isFavorite, setIsFavorite] = React.useState<boolean>(book.favorite)
    const dispatch = useAppDispatch();
    const [deleteBook, loading, error] = useFetching(async (data) =>{
        const id = book.id;
        const response = await BookDao.deleteBookById(id)
        dispatch(AddBook(response))
    })
    function changeFavorite() {
        setIsFavorite(!isFavorite)
    }

    function deleteBooks(book: IBook) {
           deleteBook(book)
    }
    function editBooks(book: IBook) {
        const id = book.id;
        router(`/editing/${id}`)
    }

    return (
        <div className={style.bookItem}>
            <div className={style.bookItem__title}>{book.title}</div>
            <div className={style.bookItem__author}>{book.author.name}</div>
            <div className={style.bookItem__category}>{book.category}</div>

            <div className={style.bookItem__actions}>
                <DeleteIcon onClick={()=>deleteBooks(book)}/>
                <EditIcon onClick={()=> editBooks(book)}/>
                <div className={style.bookItem__favorite} onClick={changeFavorite}>{isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</div>
            </div>


        </div>
    );
};

export default BooksItem;