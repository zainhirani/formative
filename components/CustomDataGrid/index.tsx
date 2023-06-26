// @ts-nocheck
import React from "react";
import { ButtonConfig, TableColumn, TableRow } from "./type";
import TypeFour from "./TypeFour";
import TypeOne from "./TypeOne";
import TypeThree from "./TypeThree";
import TypeTwo from "./TypeTwo";

interface CustomDataGridProps {
  pageSizeData?: number;
  rows?: any[];
  columns?: TableColumn[];
  type?: string;
  buttonArray?: ButtonConfig[];
  isCheckbox?: boolean;
  onRowClick?: (e?: any) => void;
  selectedIds?: number[];
  setChecked?: any;
  onRowSelect?: (ids: number[], details: any) => void;
  columnVisibilityModel?: any;
  loading?: boolean;
  getSelectedId?: (e?: any) => void;
  onRowSelectionModelChange?: any;
  selectionModel?: any;
  onSelectionModelChange?: any;
  page?: number;
  handlePageChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalRows?: number;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  pageSizeData,
  columnVisibilityModel,
  rows,
  columns,
  type,
  buttonArray,
  isCheckbox,
  onRowClick = (e?: any) => {},
  setChecked,
  loading,
  getSelectedId,
  handlePageChange,
  page,
  totalRows,
  ...props
}) => {
  return (
    <>
      {type == "1" ? (
        <TypeOne
          onRowClick={onRowClick}
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          buttonArray={buttonArray}
          checkboxSelection={isCheckbox}
          setChecked={setChecked}
          columnVisibilityModel={columnVisibilityModel}
          loading={loading}
          getSelectedId={getSelectedId}
          page={page}
          handlePageChange={handlePageChange}
          totalRows={totalRows}
          {...props}
        />
      ) : type == "2" ? (
        <TypeTwo
          onRowClick={onRowClick}
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          buttonArray={buttonArray}
          checkboxSelection={isCheckbox}
          loading={loading}
        />
      ) : type == "3" ? (
        <TypeThree
          onRowClick={onRowClick}
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          checkboxSelection={isCheckbox}
        />
      ) : type == "4" ? (
        <TypeFour
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          buttonArray={buttonArray}
          checkboxSelection={isCheckbox}
          onRowClick={onRowClick}
          loading={loading}
          {...props}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CustomDataGrid;
