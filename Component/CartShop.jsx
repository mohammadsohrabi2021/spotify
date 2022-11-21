import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CartShop = ({ title, dis, image }) => {
    return (
 
          <Card sx={{maxWidth: "200px",minHeight: "300px",bgcolor: "#181818",color: "#fff",mt: "10px",}}>
            <CardActionArea >
              <Grid display={"flex"} alignItems={"center"} ml={2} mt={3} justifyContent={"center"} width={"158px"} height={"158px"} >
                <Image src={image} />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={5}>
                  {title}
                </Typography>
                <Typography variant="body2" color="#FFF" width={'80%'}>
                  {dis}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
       
      
    );
};

export default CartShop;