import { SvgIconProps } from "@mui/material";
export interface LoadingButtonConfig {
  key: string;
  startIcon?: React.ReactElement<SvgIconProps>;
  render: () => JSX.Element;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}
