import React, { ReactNode } from "react";
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
  handleClick?: (item: any) => void;
  render: (item: any) => ReactNode;
  onRowClick?: (item?: any) => void;
}

interface DataTableProps {
  config: ConfigItem[];
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ config = [], data = [] }) => {
  if (!config.length || !data.length) return null;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {config.map((item, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "400",
                  color: (theme) => theme.palette.primary.main,
                  fontSize: "14px",
                }}
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
              onClick={(e) => console.log(e)}
            >
              {config.map((configItem, index) => (
                <TableCell
                  key={index}
                  align="center"
                  onClick={(evt) => configItem.onCellClick?.(evt)}
                  sx={{ fontSize: "14px" }}
                >
                  <div
                    onClick={() => configItem?.handleClick?.(dataSourceItem)}
                  >
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
