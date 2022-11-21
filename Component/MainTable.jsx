import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import TableLibrary from "./TableLibrary";
import { DataTable, TableTitle } from "../Data/libraryData";
import Title from "./Title";
const MainTable = () => {
  return (
    <Grid ml={3}>
      <Title />
      <TableContainer>
        <Table sx={{ minWidth: "650px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {TableTitle.map((item) => (
                <TableCell align={item.align}>
                  <Typography color={"#fff"}>{item.name}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {DataTable.map((item) => (
              <TableLibrary
                id={item.id}
                title={item.title}
                image={item.image}
                name={item.name}
                dis={item.dis}
                date={item.date}
                time={item.time}
                icon={item.icon}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default MainTable;
