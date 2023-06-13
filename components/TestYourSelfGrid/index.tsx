import React from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxWrapper } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "./type";

interface TestYourSelfGridProps {
  pageSizeData?: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
  checkboxSelection?: boolean;
  onRowClick?: () => void;
}

const TestYourSelfGrid: React.FC<TestYourSelfGridProps> = ({
  rows,
  columns,
  buttonArray,
  onRowClick = () => {},
  ...props
}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <BoxWrapper>
            <DataGrid
              onRowClick={onRowClick}
              pagination
              hideFooter
              rows={rows}
              columns={columns}
              disableColumnMenu
              disableColumnSelector
              disableDensitySelector
              disableRowSelectionOnClick
              {...props}
            />
          </BoxWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default TestYourSelfGrid;
