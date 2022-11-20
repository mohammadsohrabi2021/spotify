import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import styles from "../styles/Home.module.css";


const search = () => {
  return (
    <Grid xs={12} container>
      <Grid item xs={12} display={"flex"} justifyContent={"space-between"}>
        <Sidebar />
        <Grid ml={{ xs: "25%", lg: "17%" }}  p={10} className={styles.rightSide_TopBox} xs={10}>Search Page</Grid>
      </Grid>
      <Grid item sx={{ position: "relative" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default search;
