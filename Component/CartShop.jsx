import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CartShop = ({ title, dis, image }) => {
    return (
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} my={2} flexDirection={'column'}  borderRadius={'4px'} bgcolor={'#181818'} width={'20%'}>
            <Image src={image} width={'158px'} height={'158px'} />
            <Typography my={2} pr={6}>{title}</Typography>
            <Typography pr={1} sx={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '16px',
                color: '#B3B3B3',
                width: '70%'
            }}>{dis}</Typography>
        </Grid>
    );
};

export default CartShop;