import React from "react";
import { ButtonConfig, TableColumn, TableRow } from "./type";
import TypeOne from "./TypeOne";
import TypeThree from "./TypeThree";
import TypeTwo from "./TypeTwo";

interface CustomDataGridProps {
  pageSizeData: number;
  rows: TableRow[];
  columns: TableColumn[];
  type: string;
  buttonArray?: ButtonConfig[];
  isCheckbox?: boolean;
  onRowClick?: () => void;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  pageSizeData,
  rows,
  columns,
  type,
  buttonArray,
  isCheckbox,
  onRowClick = () => {},
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
        />
      ) : type == "3" ? (
        <TypeThree
          onRowClick={onRowClick}
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          checkboxSelection={isCheckbox}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CustomDataGrid;
