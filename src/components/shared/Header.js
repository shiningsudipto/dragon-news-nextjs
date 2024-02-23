import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import headerImg from '@/assets/The-Dragon-News.png'
import Image from 'next/image';
import { getCurrentDateTime } from '@/utils/currentDate';

const Header = () => {
    const currentDateTime = getCurrentDateTime();
    return (
        <Box className="w-full py-4">
            <Container>
                <Image src={headerImg} height={500} width={500} alt='the dragon news' className='mx-auto'/>
                <Typography variant='body2' color='gray' textAlign='center' className='my-2'>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography variant='body1' color='gray' textAlign='center'>
                    {currentDateTime}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;