import { Grid, Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../Component/Sidebar';
import styles from '../styles/Home.module.css'
const search = () => {
    return (
        <Grid>
            <Grid className={styles.container}>
                <Grid className={styles.rightSide}>
                    <Grid ml={30} className={styles.rightSide_TopBox}>
                        <h2>
                            {"search page"}
                        </h2>
                    </Grid>
                </Grid>
            </Grid>
            <Sidebar />
        </Grid>
    );
};

export default search;