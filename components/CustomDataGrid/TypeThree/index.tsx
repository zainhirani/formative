import React from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonConfig, TableColumn, TableRow } from "../type";

interface TypeThreeProps {
  pageSizeData?: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
  checkboxSelection?: boolean;
}

const TypeThree: React.FC<TypeThreeProps> = ({
  rows,
  columns,
  buttonArray,
  ...props
}) => {
  const getRowHeight = () => {
    return 50;
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            pagination
            hideFooter
            rows={rows}
            columns={columns}
            getRowHeight={getRowHeight}
            disableColumnMenu
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            {...props}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TypeThree;
