import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import imageFooter from '../image/Rectangle 9.png'
const Footer = () => {
    return (
        <Grid  zIndex={99} boxShadow={10} bgcolor={'#181818'} sx={{position:'fixed' ,left:'0',right:'0',bottom:'0'}} >
            <Image  src={imageFooter}/>
        </Grid>
    );
};

export default Footer;