
import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import Cart from '../Component/Cart';
import Sidebar from '../Component/Sidebar';
import CartShop from '../Component/CartShop';
import data from '../Data/data';
import dataMain from '../Data/dataMain';
export default function Home() {
  return (

    <Grid ml={10}>
      <Grid className={styles.container}>
        <Grid ml={25} className={styles.rightSide}>
          <Grid className={styles.rightSide_TopBox}>
            <h2>
              {"Good afternoon"}
            </h2>
            <Grid className={styles.rightSide_TopBox__cart}>
              {
                data.map(item => <Cart image1={item.image} title={item.title} />)
              }

            </Grid>
          </Grid>
          <Grid>
            <Grid ml={5}>
              <h2>
                {"Recently played"}
              </h2>
            </Grid>
            <Grid className={styles.rightSide_TopBox__cart}>
              {
                dataMain.map(item => <CartShop image={item.image} title={item.title} dis={item.dis} />)
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Sidebar />
      </Grid>
    </Grid>
  )
}
