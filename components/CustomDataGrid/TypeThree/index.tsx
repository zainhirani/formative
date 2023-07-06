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
  onRowClick?: () => void;
}

const TypeThree: React.FC<TypeThreeProps> = ({
  rows,
  columns,
  buttonArray,
  onRowClick = () => {},
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
            onRowClick={onRowClick}
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
            sx={{ 
              '.MuiDataGrid-iconButtonContainer': {
                visibility: 'visible',
              },
              '.MuiDataGrid-sortIcon': {
                opacity: 'inherit !important',
                color: theme => theme.palette.primary.main
              },
              '.MuiDataGrid-columnSeparator': {
                visibility: 'inherit !important',
              },   
            }}
            localeText={{
              noRowsLabel: "No data found"
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TypeThree;
