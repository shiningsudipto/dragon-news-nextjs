import React from 'react';
import MenuItems from '../ui/MenuItems';
import SocialIcons from '../ui/SocialIcons';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box className="py-10 px-3 bg-black">
            <Container className='text-center flex flex-col items-center'>
                <Box>
                    <MenuItems />
                </Box>
                <SocialIcons />
                <Typography variant='body2' color={"gray"}>@ The Dragon News, Developed by Sudipta Das</Typography>
            </Container>
        </Box>
    );
};

export default Footer;