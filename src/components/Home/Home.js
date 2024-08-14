import React from 'react';
import NavBar from '../NavBar.js/NavBar';
import { Container, Box, Typography, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <NavBar />


            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center',margin: '65px 0px 60px'}}>
                    <Box sx={{}}>
                        <div style={{paddingRight: '45px',marginTop :'15px'}}>
                        <span style={{ fontSize: '48px',display :'flex' }}>Best Prices</span>
                        <span style={{ fontSize: '48px' }}>Best Quality Shop</span>
                        </div>
                    </Box>
                    <Box>
                        <img src='https://images.meesho.com/images/marketing/1722839152228_512.webp' alt=""/>
                    </Box>
                    
                </Box>
            </Box>
        </div>

    )
}
export default Home;
