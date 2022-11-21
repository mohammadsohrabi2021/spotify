import React from "react";
import user from "../image/user.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Image from "next/image";


const CardLibrary = () => {
  return (
    <Card  sx={{ display: "flex", bgcolor: "#7B958F" }}>
      <Image src={user} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography mt={6} variant="h6" color={'#fff'}>
            PLAYLIST
          </Typography>
          <Typography
            sx={{
              fontSize: "60px",
              color: "#fff",
              fontWeight: 900,
              lineHeight: "114px",
            }}
          >
            Pop Right Now
          </Typography>
          <Typography
            sx={{
              width: "426px",
              fontSize: "14px",
              color: "#fff",
              fontWeight: 400,
              lineHeight: "146.9%",
              opacity: 0.7,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          </Typography>
          <Typography display={'flex'}gap={1} alignItems={'center'}
            sx={{
              width: "426px",
              fontSize: "14px",
              color: "#fff",
              fontWeight: 400,
              lineHeight: "146.9%",
              opacity: 0.7,
            }}
          >
            <Typography
              sx={{
                width: "49px",
                height: "22px",
                fontSize: "15px",
                color: "#fff",
                fontWeight: 700,
                lineHeight: "146.9%",
                opacity: 0.7,
              }}
            >
              Spotify
            </Typography>
            860,305 likes 100 songs, 5 hr 5 min
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardLibrary;
