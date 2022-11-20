import React from "react";
import CartShop from "./CartShop";
import data from "../Data/data";
import dataMain from "../Data/dataMain";
import Cart from "./Cart";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";


const Home = () => {
  return (
    <Grid xs={10} item ml={{ xs: "21.5%", lg: "17%" }}>
      <Grid item container className={styles.rightSide_TopBox}>
        <h2>{"Good afternoon"}</h2>
        <Grid item className={styles.rightSide_TopBox__cart}>
          {data.map((item) => (
            <Cart image1={item.image} title={item.title}/>
          ))}
        </Grid>
        <h2>{"Recently played"}</h2>
        <Grid item className={styles.rightSide_TopBox__cart}>
          {dataMain.map((item) => (
            <CartShop image={item.image} title={item.title} dis={item.dis} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
