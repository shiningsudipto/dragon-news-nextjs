"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '@/assets/logo-news.png'
import Image from 'next/image';
import SocialIcons from '../ui/SocialIcons';
import MenuItems from '../ui/MenuItems';

const Navbar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <Image src={Logo} height={100} width={100} alt='Logo' />
                    </Box>
                    <Box className="w-full text-center text-white">
                        <MenuItems />
                    </Box>
                    <Box>
                        <SocialIcons/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;