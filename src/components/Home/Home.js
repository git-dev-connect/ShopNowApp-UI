import React from 'react';
import NavBar from '../NavBar.js/NavBar';
import { Container, Box, Typography, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <NavBar />


            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '65px 0px 60px' }}>
                    <Box sx={{}}>
                        <div style={{ paddingRight: '200px', marginTop: '15px',fontWeight:'900' }}>
                            <span style={{ fontSize: '48px', display: 'flex',fontWeight:'900' }}>Best Prices</span>
                            <span style={{ fontSize: '48px' }}>Best Quality Shop</span>
                        </div>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap:'30px',
                                backgroundColor: 'white',
                                padding: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    alt="Free Delivery"
                                    src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                                    width={88}
                                    height={32}
                                    style={{ color: 'transparent' }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 'medium', color: 'grey', fontSize: '16px', marginTop: 1 }}
                                >
                                    Free Delivery
                                </Typography>
                            </Box>

                            {/* Cash on Delivery */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    alt="Cash on Delivery"
                                    src="https://images.meesho.com/images/pow/cod_jamun.svg"
                                    width={32}
                                    height={32}
                                    style={{ color: 'transparent' }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 'medium', color: 'grey', fontSize: '16px', marginTop: 1 }}
                                >
                                    Cash on Delivery
                                </Typography>
                            </Box>

                            {/* Easy Returns */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    alt="Easy Returns"
                                    src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                                    width={32}
                                    height={32}
                                    style={{ color: 'transparent' }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 'medium', color: 'grey', fontSize: '16px', marginTop: 1 }}
                                >
                                    Easy Returns
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <img style={{width:'88vh'}} src='https://images.meesho.com/images/marketing/1722839152228_512.webp' alt="" />
                    </Box>

                </Box>


            </Box>
        </div>

    )
}
export default Home;
