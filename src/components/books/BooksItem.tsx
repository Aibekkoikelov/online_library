import React, {FC} from 'react';
import {IBook} from "../../types/types";
import {Container} from "@mui/material";

interface BooksItemProps {
   book: IBook
}
const BooksItem: FC<BooksItemProps> = ({book}) => {

    return (
        <Container  maxWidth="md">

        </Container>
    );
};

export default BooksItem;