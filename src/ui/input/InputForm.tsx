import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, MenuItem, Select} from "@mui/material";
import loginValidation from "../../validation/inputValidation";
import style from './index.module.css';
const InputForm = () => {
    return (
        <div>
            <h1 className={style.inputTitle}>Add new book</h1>
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                    category: '',
                }}
                validationSchema={loginValidation}
                onSubmit={(values,{ setSubmitting,setFieldValue }) => {
                    setSubmitting(true);
                    console.log("values", values);
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
                            <Field className={style.select} as="select" name="author">
                                <option unselectable="on" value="">Chose Author</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
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

export default InputForm;