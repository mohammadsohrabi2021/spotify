
import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import image1 from '../image/1.png'
import image2 from '../image/2.png'
import image3 from '../image/Rectangle 5.png'
import image4 from '../image/3.png'
import image5 from '../image/1.png'
import image6 from '../image/5.png'
import img1 from '../image/Rectangle.png'
import img2 from '../image/Rectangle1.png'
import Cart from '../Component/Cart';
import Sidebar from '../Component/Sidebar';
import CartShop from '../Component/CartShop';
export default function Home() {
  return (

    <Grid >
      <Grid className={styles.container}>
        <Grid ml={25} className={styles.rightSide}>
          <Grid className={styles.rightSide_TopBox}>
            <h2>
              {"Good afternoon"}
            </h2>
            <Grid className={styles.rightSide_TopBox__cart}>
              <Cart image1={image1} title={'Pop Right Now'} />
              <Cart image1={image2} title={'Pop Right Now'} />
              <Cart image1={image3} title={'Pop Right Now'} />


            </Grid>
            <Grid className={styles.rightSide_TopBox__cart}>
              <Cart image1={image4} title={'Pop Right Now'} />
              <Cart image1={image5} title={'Pop Right Now'} />
              <Cart image1={image6} title={'Pop Right Now'} />
            </Grid>
          </Grid>
          <Grid>
            <Grid ml={5}>
              <h2>
                {"Recently played"}
              </h2>
            </Grid>
            <Grid className={styles.rightSide_TopBox__cart}>
              <CartShop image={img1} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
              <CartShop image={img2} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
              <CartShop image={img1} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
            </Grid>
            <Grid className={styles.rightSide_TopBox__cart}>
              <CartShop image={img1} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
              <CartShop image={img2} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
              <CartShop image={img1} title={'Hot Hits USA'} dis={'The hottest tracks in the United States'} />
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
