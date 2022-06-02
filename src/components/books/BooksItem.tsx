import React, {FC} from 'react';
import {IBook} from "../../types/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import style from "./book.module.css"
interface BooksItemProps {
   book: IBook
}
const BooksItem: FC<BooksItemProps> = ({book}) => {
    const [isFavorite, setIsFavorite] = React.useState<boolean>(book.favorite)

    function changeFavorite() {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={style.bookItem}>
            <div className={style.bookItem__title}>{book.title}</div>
            <div className={style.bookItem__author}>{book.author}</div>
            <div className={style.bookItem__category}>{book.category}</div>

            <div className={style.bookItem__actions}>
                <DeleteIcon onClick={()=> console.log("delete")}/>
                <EditIcon onClick={()=> console.log("edit")}/>
                <div className={style.bookItem__favorite} onClick={changeFavorite}>{isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</div>
            </div>


        </div>
    );
};

export default BooksItem;