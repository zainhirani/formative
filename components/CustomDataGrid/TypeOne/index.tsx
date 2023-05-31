import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxPaginate, ButtonWrapper, ShowingBox } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "../type";

interface TypeOneProps {
  pageSizeData: number;
  rows: TableRow[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
  checkboxSelection?: boolean;
}

const TypeOne: React.FC<TypeOneProps> = ({
  pageSizeData,
  rows,
  columns,
  buttonArray,
  ...props
}) => {
  const [page, setPage] = useState(1);

  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / pageSizeData);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const getRowHeight = () => {
    return 50;
  };

  const paginatedRows = rows.slice(
    (page - 1) * pageSizeData,
    page * pageSizeData,
  );

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            pagination
            hideFooter
            rows={paginatedRows}
            columns={columns}
            getRowHeight={getRowHeight}
            disableColumnMenu
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            {...props}
          />
        </Grid>
        <BoxPaginate>
          <Grid item xs={6}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              className="customPagination"
            />
          </Grid>
          <Grid item xs={6} className="showing-text">
            <ShowingBox>
              Showing {paginatedRows.length} of {rows.length}
            </ShowingBox>
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
        </BoxPaginate>
      </Grid>
    </>
  );
};

export default TypeOne;