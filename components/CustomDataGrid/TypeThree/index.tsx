import React, { useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxPaginate, ButtonWrapper, ShowingBox } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "../type";

interface TypeThreeProps {
  pageSizeData?: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
}

const TypeThree: React.FC<TypeThreeProps> = ({
  rows,
  columns,
  buttonArray,
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
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TypeThree;
