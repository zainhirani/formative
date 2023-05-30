import React from "react";
import TypeOne from "./TypeOne";
import TypeTwo from "./TypeTwo";
import { ButtonConfig, TableColumn, TableRow } from "./type";
import TypeThree from "./TypeThree";

interface CustomDataGridProps {
  pageSizeData: number;
  rows: TableRow[];
  columns: TableColumn[];
  type: string;
  buttonArray?: ButtonConfig[];
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  pageSizeData,
  rows,
  columns,
  type,
  buttonArray,
}) => {
  return (
    <>
      {type == "1" ? (
        <TypeOne
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          buttonArray={buttonArray}
        />
      ) : type == "2" ? (
        <TypeTwo
          rows={rows}
          columns={columns}
          pageSizeData={pageSizeData}
          buttonArray={buttonArray}
        />
      ) : type == "3" ? (
        <TypeThree rows={rows} columns={columns} pageSizeData={pageSizeData} />
      ) : (
        ""
      )}
    </>
  );
};

export default CustomDataGrid;
