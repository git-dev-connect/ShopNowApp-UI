import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShopNow from '../assets/ShopNow.png'; // Adjust path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const NavBar = () => {
    return (

        <AppBar position="static" sx={{ backgroundColor: '#1C1C1C', padding: '5px 0' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='hello' style={{ position: 'relative', borderRadius: '30px', backgroundColor: '#363636', marginLeft: '17rem', marginRight: '24px', width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center' }}>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ color: 'inherit', padding: '12px 370px 12px 8px', marginLeft: '15px', transition: 'width 200ms ease-in-out', width: '100%', borderRadius: '30px', fontFamily: 'Lato, sans-serif'  }}
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
    )
}
export default NavBar;
