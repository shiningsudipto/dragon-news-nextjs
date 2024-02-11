import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

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

const MenuItems = () => {
    return (
        <>
            {pages.map((item, idx) => (
                <Link key={idx} href={item?.pathname}>
                    <Button className='text-white'>
                        {item?.route}
                    </Button>
                </Link>
            ))}
        </>
    );
};

export default MenuItems;