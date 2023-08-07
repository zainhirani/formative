import React, { useCallback, useMemo, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { BoxPaginate, ButtonWrapper, ShowingBox } from "./Styled";
import { ButtonConfig, TableColumn, TableRow } from "../type";
import { Stack } from "@material-ui/core";

interface TypeOneProps {
  pageSizeData: number;
  rows: TableRow[];
  selectedIds: number[];
  columns: TableColumn[];
  buttonArray?: ButtonConfig[];
  checkboxSelection?: boolean;
  onRowClick?: (e?: any) => void;
  // setChecked?:  ((value: string) => void) | undefined;
  onRowSelect?: (ids: number[], details: any) => void;
  setChecked?: any;
  columnVisibilityModel: any;
  loading?: boolean;
  getSelectedId?: (e?: any) => void;
  page?: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalRows?: number | undefined;
  courseText?: boolean;
  // isChecked?:
}

const TypeOne: React.FC<TypeOneProps> = ({
  pageSizeData,
  rows,
  columns,
  buttonArray,
  onRowClick = () => {},
  setChecked = () => {},
  columnVisibilityModel,
  selectedIds,
  loading,
  onRowSelect,
  getSelectedId = () => {},
  page = 1,
  handlePageChange,
  totalRows,
  courseText,
  ...props
}) => {
  //@ts-ignore
  const totalPages = Math.ceil(totalRows / pageSizeData);

  const handleCheck = React.useCallback((e: any, details: any) => {
    onRowSelect && onRowSelect(e, details);
    if (e.length) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

  const getRowHeight = () => {
    return 50;
  };

  const customLocaleText = {
    noRowsLabel: "No data found",
    footerRowSelected: (count: number) =>
      courseText
        ? count !== 1
          ? `${count.toLocaleString()} Courses Selected`
          : `${count.toLocaleString()} Course Selected`
        : count !== 1
        ? `${count.toLocaleString()} Rows Selected`
        : `${count.toLocaleString()} Row Selected`,
  };

  function customPagination() {
    return (
      <BoxPaginate>
        <Grid item xs={6}>
          {totalPages ? (
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              className="customPagination"
            />
          ) : null}
        </Grid>
        <Grid item xs={6} className="showing-text">
          <ShowingBox>
            Showing {rows?.length} of {totalRows}
          </ShowingBox>
          {buttonArray?.map((button) => {
            return (
              <ButtonWrapper
                key={button?.key}
                onClick={button?.onClick}
                startIcon={button?.startIcon}
                disabled={button.disabled}
                className={`print_arrow_btn ${button?.customClass}`}
              >
                {button?.render()}
              </ButtonWrapper>
            );
          })}
        </Grid>
      </BoxPaginate>
    );
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            onRowClick={onRowClick}
            pagination
            rows={rows || []}
            columns={columns}
            getRowHeight={getRowHeight}
            disableColumnMenu
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            rowSelectionModel={selectedIds}
            onRowSelectionModelChange={(...e) => {
              handleCheck(...e);
              getSelectedId(e);
            }}
            columnVisibilityModel={columnVisibilityModel}
            {...props}
            sx={{
              minHeight: "400px",
              ".MuiDataGrid-sortIcon": {
                opacity: "inherit !important",
                color: (theme) => theme.palette.primary.main,
              },
              ".MuiDataGrid-columnSeparator": {
                visibility: "inherit !important",
              },
              ".MuiDataGrid-columnHeaderTitleContainer": {
                gap: "5px",
              },
              ".MuiGrid-root .css-1bv2lzm": {
                cursor: "pointer",
              },
            }}
            loading={loading}
            slots={{ pagination: customPagination }}
            localeText={customLocaleText}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TypeOne;
