import styles from "../styles/Home.module.css";

import Grid from "@mui/material/Grid";
import Cart from "../Component/Cart";
import Sidebar from "../Component/Sidebar";
import CartShop from "../Component/CartShop";
import data from "../Data/data";
import dataMain from "../Data/dataMain";
import Footer from "../Component/Footer";
export default function Home() {
  return (
    <>
      <Grid  container>
        <Grid item container className={styles.container}>
          <Grid item container ml={30} className={styles.rightSide}>
            <Grid item container className={styles.rightSide_TopBox}>
              <h2>{"Good afternoon"}</h2>
              <Grid item className={styles.rightSide_TopBox__cart}>
                {data.map((item) => (
                  <Cart image1={item.image} title={item.title} />
                ))}
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item ml={5}>
                <h2>{"Recently played"}</h2>
              </Grid>
              <Grid pb={30}  item className={styles.rightSide_TopBox__cart}>
                {dataMain.map((item) => (
                  <CartShop
                    image={item.image}
                    title={item.title}
                    dis={item.dis}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item sx={{position:'relative'}}>
          <Footer/>
        </Grid>
      </Grid>
      
    </>
  );
}
