import React from 'react';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const SocialIcons = () => {
    return (
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
    );
};

export default SocialIcons;