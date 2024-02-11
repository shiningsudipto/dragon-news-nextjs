"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IconButton, Stack } from '@mui/material';
import Logo from '@/assets/logo-news.png'
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'Category',
        pathname: '/category'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    },
    {
        route: 'About',
        pathname: '/about'
    },
];

const Navbar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <Image src={Logo} height={100} width={100} alt='Logo' />
                    </Box>
                    <Box className="w-full text-center">
                        {pages.map((item) => (
                            <Link key={item} href={item?.pathname}>
                                <Button className='text-white'>
                                    {item?.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction={"row"}
                            sx={{
                                "& svg": {
                                    color: "white",
                                }
                            }}
                        >
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;