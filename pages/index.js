
import Grid from "@mui/material/Grid";
import Sidebar from "../Component/Sidebar";
import Main from "../Component/Home";

import Footer from "../Component/Footer";
export default function Home() {
  return (
    <Grid  xs={12} container>
      <Grid item xs={12} display={"flex"} justifyContent={"space-between"} >
        <Sidebar />
        <Main/>
      </Grid>
      <Grid item sx={{ position: "relative" }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
