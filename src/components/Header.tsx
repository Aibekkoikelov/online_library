import React, {useState} from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";


const Header = () => {
    const pages = ['All books', 'Author', 'Category'];
    const [activePage, setActivePage] = useState<string>('All books');
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 10,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Online Library
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => {}}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily:"Roboto" }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {activePage}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;