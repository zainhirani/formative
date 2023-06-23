import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SelectBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      maxWidth: "40%",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.palette.text.secondary,
    } as any),
) as (props: BoxProps) => JSX.Element;

export const SelectPlaceholderWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      color: theme.palette.text.secondary,
      height: "100%",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      height: "100%",
      "&.react-select__dropdown-indicator svg ": {
        opacity: "1 !important",
      },
      "& .custom-select": {
        width: "100%",
        height: "100%",
        color: "black",
        placeholder: {
          color: "red",
        },
        "& svg": {
          color: theme.palette.text.secondary,
        },
      },
    } as any),
) as (props: BoxProps) => JSX.Element;
