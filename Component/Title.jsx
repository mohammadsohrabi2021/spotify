import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import play from "../image/Spotify Desktop App Clone (Community) (22)/btn/play.png";
import icon from "../image/Spotify Desktop App Clone (Community) (20)/ic/icon.png";
const Title = () => {
  return (
    <Grid sx={{cursor:"pointer"}} p={'20px 10px'} display={'flex'} gap={2} alignItems={'center'}>
      <Image src={play} alt="play" />
      <FavoriteBorderIcon />
      <Image src={icon} alt="icon" />
    </Grid>
  );
};

export default Title;
