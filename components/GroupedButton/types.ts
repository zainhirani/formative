import { SvgIconProps } from "@mui/material";
export interface ButtonConfig {
  key: string;
  startIcon?: React.ReactElement<SvgIconProps>;
  render: () => JSX.Element;
  onClick: () => void;
}
