import React from 'react';
import { AppBar } from './style';
import { Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ open, setOpen, setMode, mode }) => {
    const changeTheme = () => {
        setMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
        );
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="fixed" open={open} >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    Material-UI ReactJS
                </Typography>
                <IconButton onClick={changeTheme} color="inherit">
                    {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar