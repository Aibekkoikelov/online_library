import React, {useState} from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import style from  "./index.module.css";
import {useAppSelector} from "../store";

const Header = () => {
    const tabName = useAppSelector(state => state.books.tabName)
    const pages = [{name:'All books',link:"/all"}, {name:'Author',link:"/author"}, {name:'Category',link:"/category"}];
    // const [activePage, setActivePage] = useState<string>('Main');

    return (

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ mr: 10 }}>
                            <NavLink className={style.links} to={"/"}>
                                Online Library
                            </NavLink>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink className={style.links} to={page.link} key={page.name}>{page.name}</NavLink>
                            ))}
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"

                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {tabName}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};

export default Header;