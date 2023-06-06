import React, { ReactNode, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import { makeStyles } from "@material-ui/core/styles";

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

// const useStyles = makeStyles({
//   selectedRow: {
//     backgroundColor: "lightblue",
//   },
// });

const DataTable: React.FC<DataTableProps> = ({ config = [], data = [] }) => {
  if (!config.length || !data.length) return null;

  // const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    if (selectedRows?.includes(index)) {
      setSelectedRows(selectedRows?.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };
  return (
    <TableContainer>
      {/* <Table sx={{ minWidth: 650 }}> */}
      <Table>
        <TableHead>
          <TableRow>
            {config.map((item, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "400",
                  color: (theme) => theme.palette.primary.main,
                  fontSize: "14px",
                  "&:first-child": {
                    width: "15px",
                    padding: "10px 0px 10px 10px",
                  },
                }}
                // align="center"
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
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&.cus-selected": { background: "#EAEAEA" },
              }}
              // onClick={(e) => console.log(e)}
              // className={selectedRows.includes(index) ? "cus-selected" : ""}
              onClick={() => handleRowClick(index)}
            >
              {config.map((configItem, index) => (
                <TableCell
                  key={index}
                  // align="center"
                  onClick={(evt) => configItem.onCellClick?.(evt)}
                  sx={{
                    fontSize: "14px",
                    "&:first-child": {
                      width: "15px",
                      padding: "10px 0px 10px 10px",
                    },
                  }}
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
