import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Clock from "./Clock";
import { Grid } from "@mui/material";
export default function Weathertable(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Clock />
      </Grid>
      <Grid item xs={12}>
        <TableContainer
          component={Paper}
          sx={{ bgcolor: "#90beef", marginTop: 10 }}
        >
          <Table sx={{ minWidth: 350, maxWidth: 1 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#ffffff", fontSize: "1.3rem" }}>
                  City
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Feels like
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Humidity
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Pressure
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Temperature
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Maximum Temperature
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  Minimum Temperature
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.nam}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.feels_like}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.humidity}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.pressure}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.temp}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.temp_max}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#ffffff", fontSize: "1.3rem" }}
                >
                  {props.dat.temp_min}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
