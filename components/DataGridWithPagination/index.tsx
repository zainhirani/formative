import React, { useState } from "react";
import { Pagination, Grid } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { BoxPaginate } from "./Styled";

interface TableRow {
  id: number;
  [key: string]: string | number;
}

interface TableColumn extends Omit<GridColDef, "renderCell"> {
  renderCell?: (params: GridRenderCellParams) => React.ReactNode;
}

interface DataGridWithPaginationProps {
  pageSizeData: number;
  rows: TableRow[];
  columns: TableColumn[];
}

const DataGridWithPagination: React.FC<DataGridWithPaginationProps> = ({
  pageSizeData,
  rows,
  columns,
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
            Showing {paginatedRows.length} of {rows.length}
          </Grid>
        </BoxPaginate>
      </Grid>
    </>
  );
};

export default DataGridWithPagination;
