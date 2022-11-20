import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import logo from "../image/spotify-logo.png";
import userImage from "../image/Rectangle 16.png";
import { List1 } from "../Data/dataSidebar";
import { Playlists } from "../Data/dataSidebar";
import Link from "next/link";
const Sidebar = () => {
  return (
    <Grid
      xs={2.6}
      lg={2}
      bgcolor={"#000"}
      width={"100%"}
      height={"100vh"}
      sx={{ position: "fixed" }}
    >
      <Grid p={"10px 0 0 10px"}>
        <Image src={logo} width={129} height={39} />
      </Grid>
      <List>
        {List1.map((item) => (
          <Link href={item.href} key={item.id}>
            {item.name ? (
             <Grid boxShadow={10} bgcolor={'#282828'} borderRadius={1}>
               <ListItemButton >
                <ListItemIcon sx={{ color: "#B3B3B3" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.lable} />
              </ListItemButton>
             </Grid>
            ) : (
              <ListItemButton>
                <ListItemIcon sx={{ color: "#B3B3B3" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.lable} />
              </ListItemButton>
            )}
          </Link>
        ))}
        <Typography p={2}>{"Playlists"}</Typography>
        {Playlists.map((item) => (
          <Link href={item.href} key={item.id}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#B3B3B3" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.lable} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Grid border={1} mb={2} width={"80%"} ml={2.5} />
      <Grid>
        <Image src={userImage} width={220} height={230} />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
