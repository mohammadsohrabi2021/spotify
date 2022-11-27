import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import imageFooter from "../image/Rectangle 9.png";
import image from "../image/Rectangle15.png";
import Vector2 from "../image/image/btn/Vector@2x.png";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Vector1 from "../image/image/btn/Vector.svg";
import Vector3 from "../image/Spotify Desktop App Clone (Community)/Vector.png";
import Rectangle14 from "../image/Rectangle 14.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
const Footer = () => {
  return (
    <Grid
      width={"100%"}
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
      <Grid item xs={2} lg={1.5}>
        <Image src={imageFooter} alt="imageFooter" />
      </Grid>
      <Grid item xs={2} display={"flex"}>
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
      <Grid item xs={5} lg={6.4}>
        <Grid
          my={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            width={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Image src={Vector1} alt="Vector1" />
            <SkipPreviousIcon />
            <PlayCircleIcon />
            <SkipNextIcon />
            <Image src={Vector2} alt="Vector2" />
          </Grid>
        </Grid>
        <Grid display={"flex"} alignItems={"center"} gap={1} width={"3000px"}>
          <Typography>{"0:00"}</Typography>
          {/* <Image src={image} /> */}
          <Grid border={2} borderRadius={5} item width={{ xs: "12%", lg: "22%" }} />
          <Typography>{"2:50"}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={3} lg={2} display={"flex"} alignItems={"center"} gap={1} pl={7}>
        <PlaylistPlayIcon />
        <ZoomOutMapIcon />
        <Image src={Vector3} alt="Vector3" />
        <Image src={Rectangle14} alt="Rectangle14" />
      </Grid>
    </Grid>
  );
};

export default Footer;
