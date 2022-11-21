import React from "react";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
const TableLibrary = ({id,title,name,image,dis,time,date,icon}) => {
  return (
    <TableRow   sx={{ "&:last-child td, &:last-child th": { border: 0 }}} >
      <TableCell component="th" scope="row">
        <Grid color={'#fff'} display={"flex"} sx={{cursor:"pointer"}} alignItems={"center"}>
          <Typography mr={2}>{id}</Typography>
          <Image src={image} width={40} height={40}/>
          <Grid  ml={2}>
            <Typography>{name}</Typography>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell  align="center">
        <Typography color={'#fff'}>{dis}</Typography>
      </TableCell>
      <TableCell align="right">

        <Typography color={'#fff'}>{date}</Typography>
      </TableCell>
      <TableCell  align="right">
        <Grid color={'#fff'} display={"flex"} justifyContent={"flex-end"} alignItems={'center'}>
          <Typography>{time}</Typography>
          <Image src={icon}/>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default TableLibrary;
