import React, { ReactNode, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BoxWrapper } from "./Styled";
import { Box, Typography } from "@mui/material";

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
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  if (!config.length || !data.length)
    return (
      <Box
        sx={{
          height: "320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center" }}>Nothing to show</Typography>
      </Box>
    );

  const handleRowClick = (index: number) => {
    if (selectedRows?.includes(index)) {
      setSelectedRows(selectedRows?.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };
  return (
    <BoxWrapper>
      <TableContainer>
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
                    "&:first-of-type": {
                      width: "15px",
                      padding: "10px 0px 10px 10px",
                    },
                  }}
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
                className={
                  dataSourceItem?.correct === true
                    ? "correct"
                    : dataSourceItem?.attempted
                    ? "wrong"
                    : ""
                }
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&.cus-selected": { background: "#EAEAEA" },
                }}
                onClick={() => handleRowClick(index)}
              >
                {config.map((configItem, index) => (
                  <TableCell
                    key={index}
                    onClick={(evt) => configItem.onCellClick?.(evt)}
                    sx={{
                      fontSize: "14px",
                      "&:first-of-type": {
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
    </BoxWrapper>
  );
};

export default DataTable;
