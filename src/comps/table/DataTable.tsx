import "./module.css";
import { tableHeaders } from "../../data/constants";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { Field } from "../../types";

export default function DataTable({dataToShow}:{dataToShow:Field[]}) {
  
  const createTitles = () => {
    return tableHeaders.map((val) => (
      <TableCell className="table-header-cell" key={val.name}>
        {val.title}
      </TableCell>
    ));
  };

  const createRows = () => {
    return dataToShow.map((row, rowIndex) => (
      <TableRow
      className="table-data-row"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        key={rowIndex}
      >
        {tableHeaders.map((col) => (
          <TableCell className="table-data-cell" key={`${rowIndex}-${col.name}`}>
            {row[col.name] || "-"}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <div>
      <TableContainer component={Paper} className="app-data-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>{createTitles()}</TableRow>
          </TableHead>
          <TableBody>{createRows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
