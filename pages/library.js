import { Grid } from "@mui/material";
import React from "react";
import CardLibrary from "../Component/CardLibrary";
import Footer from "../Component/Footer";
import MainTable from "../Component/MainTable";
import Sidebar from "../Component/Sidebar";
import styles from "../styles/Home.module.css";
const library = () => {
  return (
    <Grid xs={12} container>
      <Grid item xs={12} display={"flex"} justifyContent={"space-between"}>
        <Sidebar />
        <Grid
          width={"100%"}
          ml={{ xs: "25%", lg: "17%" }}
          className={styles.rightSide_TopBox}
        >
          <CardLibrary />
          <MainTable/>
        </Grid>
      </Grid>
      <Grid item sx={{ position: "relative" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default library;
