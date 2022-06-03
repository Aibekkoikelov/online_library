import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, MenuItem, Select} from "@mui/material";
import loginValidation from "../../validation/inputValidation";
import style from './index.module.css';
import {IAuthor, IBook} from "../../types/types";
import { v4 as uuid} from "uuid";
interface InputProps  {
    createNewBook?: (book: IBook) => void
    book?: IBook
}
export default function InputForm (props: InputProps)  {
  const authorList: IAuthor[] = [
        {id: 1, name: "Александр HUan"},
        {id: 2, name: "Александр Karlos"},
        {id: 3, name: "Александр"}]

    return (
        <div>
            <h1 className={style.inputTitle}>Add new book</h1>
            <Formik
                initialValues={{
                    title:  '',
                    author: {id: 1, name: ''},
                    category: '',
                    favorite: false
                }}
                validationSchema={loginValidation}
                onSubmit={(values,{ setSubmitting,setFieldValue }) => {
                    setSubmitting(true);
                    props.createNewBook? props.createNewBook({id:uuid() , ...values  }): null
                    setTimeout(() => {
                        setFieldValue('title', '');
                        setFieldValue('author', {id: '', name: ''});
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
                                {authorList.map(author => (
                                    <option key={author.id} value={author.id}>{author.name}</option>
                                ))}
                                {/*<option value="red">Red</option>*/}
                                {/*<option value="green">Green</option>*/}
                                {/*<option value="blue">Blue</option>*/}
                            </Field>
                        <ErrorMessage name='author' component="div" className={style.error}   />
                        </div>
                        <div className={style.registerForm}>
                            <Field className={style.select} as="select" name="category">
                                    <option unselectable="on" value="">Chose Category</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
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

