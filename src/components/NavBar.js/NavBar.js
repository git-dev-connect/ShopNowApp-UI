import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '../assets/menu-icon.svg';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const hoverStyle = {
        '&:hover': {
          backgroundColor: '#ff5e5e',
          borderRadius :'5px',
          color :'black'
        },
      };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem disablePadding sx={hoverStyle}>
                    <ListItemButton >
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={hoverStyle}>
                    <ListItemButton>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={hoverStyle}> 
                    <ListItemButton>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={hoverStyle}>
                    <ListItemButton>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1C1C1C', padding: '5px 0' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img src={MenuIcon} alt="Menu Icon" height={'30px'} style={{ cursor: 'pointer' }} onClick={toggleDrawer(true)} />
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                <p style={{ margin: 0 }}>ShopNow</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='hello' style={{ position: 'relative', borderRadius: '30px', backgroundColor: '#363636', marginLeft: '17rem', marginRight: '24px', width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center' }}>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ color: 'inherit', padding: '12px 370px 12px 8px', marginLeft: '15px', transition: 'width 200ms ease-in-out', width: '100%', borderRadius: '30px', fontFamily: 'Lato, sans-serif' }}
                        />
                        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className='col-md-3'>
                    <IconButton color="inherit">
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
