import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table1 = ({ rows, columns }) => {
  return <DataGrid rows={rows} columns={columns} getRowId={(row) => row._id} pageSize={5} rowsPerPageOptions={[5]} />;
};

export default Table1;
