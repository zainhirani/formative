import React from "react";
import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxWrapper, ButtonWrapper, Showed, TableBox } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "../type";

interface TypeTwoProps {
  pageSizeData?: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
}

const TypeTwo: React.FC<TypeTwoProps> = ({
  pageSizeData,
  rows,
  columns,
  buttonArray,
}) => {
  return (
    <>
      <TableBox>
        <BoxWrapper>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  height: 470,
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
                />
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Showed>
                Showing {rows.length} of {rows.length}
              </Showed>
            </Grid>
            <Grid item xs={9} className="table_row_btn">
              {buttonArray?.map((button) => {
                return (
                  <>
                    <ButtonWrapper
                      key={button?.key}
                      onClick={button?.onClick}
                      startIcon={button?.startIcon}
                      className={"print_arrow_btn"}
                    >
                      {button?.render()}
                    </ButtonWrapper>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </BoxWrapper>
      </TableBox>
    </>
  );
};

export default TypeTwo;
