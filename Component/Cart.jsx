import { Grid } from '@mui/material';
import React from 'react';
import image from '../image/1.png'
const Cart = ({image1,title}) => {
    return (
        <Grid>
            <img src={image} alt='logo'/>
            <p>{title}</p>
        </Grid>
    );
};

export default Cart;