// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Sidebar from "../components/sidebar/sidebar";
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../image/spotify-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import IconButton from '@mui/material/IconButton';
import image1 from '../image/1.png'
import Cart from '../Component/Cart';
export default function Home() {
  return (
   
    <Grid>
       <Grid className={styles.container}>
        <Grid className={styles.leftSide}>
            {/* <Sidebar/> */}
        </Grid>
        <Grid ml={5} className={styles.rightSide}>
            <Grid  className={styles.rightSide_TopBox}>
               <h2>
                   {"Good afternoon"}
               </h2>
                <Grid className={styles.rightSide_TopBox__cart}>
                  <Cart image1={image1} title={'Pop Right Now'}/>
               
                </Grid>
                <Grid className={styles.rightSide_TopBox__cart}>
                    <p>Pop Right Now</p>
                    <p>Pop Right Now</p>
                    <p>Pop Right Now</p>
                    <p>Pop Right Now</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
     
      <Drawer variant="permanent" PaperProps={{ sx: { width: "18%", backgroundColor: '#000' }, }}>
        <Box sx={{ backgroundColor: '#000', padding: '22px 0 10px 22px' }}>
          <Image
            src={logo}
            width={120}
            height={36}
          />
        </Box>
        <List>
          <Box sx={{ marginBottom: '30px' }}>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <HomeIcon sx={{ color: '#fff', fontSize: 30 }} />
              <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'bolder' }}>Home</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <SearchIcon sx={{ color: '#b2b2b2', fontSize: 30 }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Search</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <VideoLibraryIcon sx={{ color: '#b2b2b2' }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Your Library</Typography>
            </ListItem>
          </Box>
          <Box>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <AddBoxIcon sx={{ color: '#b2b2b2', fontSize: 30 }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Create Playlist</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <BookmarkAddIcon sx={{ color: '#b2b2b2', fontSize: 30 }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Liked Songs</Typography>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </Grid>
  )
}
