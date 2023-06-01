import React, { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface ConfigItem {
  columnName: string;
  onCellClick?: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => void;
  handleClick: (item: any) => void;
  render: (item: any) => ReactNode;
}

interface DataTableProps {
  config: ConfigItem[];
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ config = [], data = [] }) => {
  if (!config.length || !data.length) return null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {config.map((item, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: "bolder" }}
                align="center"
              >
                {item.columnName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dataSourceItem, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {config.map((configItem, index) => (
                <TableCell
                  key={index}
                  align="center"
                  onClick={(evt) => configItem.onCellClick?.(evt)}
                >
                  <div onClick={() => configItem.handleClick(dataSourceItem)}>
                    {configItem.render(dataSourceItem)}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
