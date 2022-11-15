import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CartShop = ({ title, dis, image }) => {
    return (
        <Grid display={'flex'}  gap={2}  p={2} alignItems={'center'}  my={2} bgcolor={'gray'} boxShadow={10}>
            <Grid >
                <Image src={image} width={158} height={158} />
                <h5>{title}</h5>
                <p>{dis}</p>
            </Grid>
        </Grid>
    );
};

export default CartShop;