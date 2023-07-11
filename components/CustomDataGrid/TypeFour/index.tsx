import React from "react";
import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxWrapper, ButtonWrapper, Showed, TableBox } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "../type";

interface TypeFourProps {
  pageSizeData?: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
  checkboxSelection?: boolean;
  onRowSelectionModelChange?: any;
  selectionModel?: any;
  onSelectionModelChange?: any;
  onRowClick?: any;
  loading?: boolean;
}

const TypeFour: React.FC<TypeFourProps> = ({
  pageSizeData,
  rows,
  columns,
  buttonArray,
  onRowClick,
  loading,
  ...props
}) => {
  return (
    <>
      <TableBox>
        <BoxWrapper>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  height: { xl: "600px", md: "400px", xs: "300px" },
                }}
              >
                <DataGrid
                  hideFooter
                  rows={rows}
                  columns={columns}
                  disableColumnMenu
                  disableColumnSelector
                  disableDensitySelector
                  disableRowSelectionOnClick
                  checkboxSelection
                  onRowClick={onRowClick}
                  loading={loading}
                  {...props}
                  sx={{
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
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Showed>
                <FormControlLabel
                  value="Randomize Quiz:"
                  control={<Checkbox />}
                  label="Randomize Quiz:"
                  labelPlacement="start"
                  style={{ padding: 0, margin: 0 }}
                />
              </Showed>
            </Grid>
            <Grid item xs={8} className="table_row_btn">
              {buttonArray?.map((button) => {
                return (
                  <ButtonWrapper
                    key={button?.key}
                    onClick={button?.onClick}
                    startIcon={button?.startIcon}
                    className={`print_arrow_btn ${button?.customClass}`}
                  >
                    {button?.render()}
                  </ButtonWrapper>
                );
              })}
            </Grid>
          </Grid>
        </BoxWrapper>
      </TableBox>
    </>
  );
};

export default TypeFour;
