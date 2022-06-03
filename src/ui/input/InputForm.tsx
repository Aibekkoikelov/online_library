import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, MenuItem, Select} from "@mui/material";
import loginValidation from "../../validation/inputValidation";
import style from './index.module.css';
import {IAuthor, IBook} from "../../types/types";
import { v4 as uuid} from "uuid";
import {useAppSelector} from "../../store";
interface InputProps  {
    createNewBook?: (book: IBook) => void
    book?: IBook
}
export default function InputForm (props: InputProps)  {
    const author = useAppSelector(state => state.books.author)
    return (
        <div>
            <h1 className={style.inputTitle}>Add new book</h1>
            <Formik
                initialValues={{
                    title:  '',
                    author: '',
                    category: '',
                    favorite: false
                }}
                validationSchema={loginValidation}
                onSubmit={(values,{ setSubmitting,setFieldValue }) => {
                    setSubmitting(true);
                    props.createNewBook? props.createNewBook({id:uuid() , ...values  }): null
                    setTimeout(() => {
                        setFieldValue('title', '');
                        setFieldValue('author', '');
                        setFieldValue('category', '');
                        setSubmitting(false);
                    }, 2000)}}>
                {({ isSubmitting }) => (
                    <Form className={style.inputForm}>
                            <Field
                                placeholder="Books title"
                                className={style.input}
                                name="title"
                                autoComplete="off"
                                type= "text"/>
                            <ErrorMessage name='title' component="div" className={style.error}   />
                        <div className={style.registerForm}>
                            <Field   className={style.select} as="select" name="author">
                                <option unselectable="on" value="">Chose Author</option>
                                {author.map(author => (
                                    <option key={author.id} value={author.name}>{author.name}</option>
                                ))}
                            </Field>
                        <ErrorMessage name='author' component="div" className={style.error}   />
                        </div>
                        <div className={style.registerForm}>
                            <Field className={style.select} as="select" name="category">
                                    <option unselectable="on" value="">Chose Category</option>
                                    <option value="Fantastic">Fantastic</option>
                                    <option value="Roman">Roman</option>
                                    <option value="Comedy">Comedy</option>
                            </Field>
                        <ErrorMessage name='category' component="div" className={style.error}   />
                        </div>
                            <Button
                                className="loginBtn"
                                type="submit"
                                variant="contained"
                                size="medium"
                                disabled={isSubmitting}
                            >
                               Сохранить
                            </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

