import { SvgIconProps } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export interface TableRow {
  id: number;
  [key: string]: string | number;
}

export interface TableColumn extends Omit<GridColDef, "renderCell"> {
  renderCell?: (params: GridRenderCellParams) => React.ReactNode;
}

export interface ButtonConfig {
  key: string;
  customClass?: string;
  startIcon?: React.ReactElement<SvgIconProps>;
  render: () => JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}
