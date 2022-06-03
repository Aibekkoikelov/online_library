import React, {useState} from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import style from "../index.module.css";
import {useAppSelector} from "../../store";
import Badge from '@mui/material/Badge';
const Header = () => {
    const tabName = useAppSelector(state => state.books.tabName)
    const pages = [{name:'All books',link:"/all"}, {name:'Author',link:"/author"},
        {name:'Category',link:"/category"}]
    const wishLIstCount = useAppSelector(state => state.books.wishList.length)

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
                                <NavLink  className={({isActive})=>isActive? `${style.active} ${style.links}`: `${style.links}`} to={page.link} key={page.name}>{page.name}</NavLink>
                            ))}
                            <Badge badgeContent={wishLIstCount} color="secondary">
                                <NavLink className={({isActive})=>isActive? `${style.active} ${style.links}`: `${style.links}`} to={"/wishList"}>Wish list</NavLink>
                            </Badge>
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