import { Grid } from '@mui/material';
import React from 'react';
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
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Sidebar = () => {
    return (
        <Grid>
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
              <AddIcon sx={{ color: '#b2b2b2', fontSize: 30 }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Create Playlist</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', gap: '10px', height: '35px' }}>
              <FavoriteBorderIcon sx={{ color: '#b2b2b2', fontSize: 30 }} />
              <Typography sx={{ color: '#b2b2b2', fontSize: '12px', fontWeight: 'bolder' }}>Liked Songs</Typography>
            </ListItem>
          </Box>
        </List>
      </Drawer>
        </Grid>
    );
};

export default Sidebar;