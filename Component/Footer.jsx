import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import imageFooter from "../image/Rectangle 9.png";
import image from "../image/Rectangle15.png";
import Vector2 from '../image/image/btn/Vector@2x.png'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Vector1 from '../image/image/btn/Vector.svg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
const Footer = () => {
  return (
    <Grid
      p={1}
      xs={12}
      container
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      boxShadow={10}
      bgcolor={"#181818"}
      sx={{ position: "fixed", left: "0", right: "0", bottom: "0" }}
    >
      <Grid item xs={1.5}>
        <Image src={imageFooter} alt={"imageFooter"} />
      </Grid>
      <Grid item xs={1.5} display={"flex"}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            textAlign: "center",
            position: "absolute",
            left: "89px",
            top: "25px",
          }}
        >
          Hold On
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "15px",
            opacity: 0.6,
            position: "absolute",
            left: "89px",
            top: "45px",
          }}
        >
          Justin Bieber
        </Typography>
        <FavoriteBorderIcon />
        <Typography px={2}>
          <BrandingWatermarkIcon />
        </Typography>
      </Grid>
      <Grid>
        <Grid my={1} display={"flex"} alignItems={"center"} justifyContent={'center'}>
           <Grid width={"50%"}  display={"flex"} alignItems={"center"} justifyContent={'space-evenly'}>
           <Image src={Vector1} alt={'Vector1'}/>
            <SkipPreviousIcon/>
            <PlayCircleIcon/>
            <SkipNextIcon/>
            <Image src={Vector2} alt={'Vector2'}/>
           </Grid>
        </Grid>
        <Grid  display={"flex"} alignItems={"center"} gap={1}>
          <Typography>{"0:00"}</Typography>
          <Image src={image} />
          <Typography>{"2:50"}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;