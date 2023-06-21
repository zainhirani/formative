import React, { FC } from "react";
import { ButtonGroup } from "@mui/material";
import { LoadingButtonWrapper } from "./Styled";
import { LoadingButtonConfig } from "./types";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

interface GroupedButtonProps {
  config: LoadingButtonConfig[];
}

const LoadingGroupedButton: FC<GroupedButtonProps> = ({ config }) => {
  return (
    <ButtonGroup variant="contained" aria-label="Grouped button">
      {config?.map((button) => (
        <LoadingButtonWrapper
          key={button?.key}
          onClick={button?.onClick}
          startIcon={button?.startIcon}
          disabled={button?.disabled}
          loading={button?.loading}
          loadingPosition="start"
          sx={{
            ":disabled": {
              background: (theme) => theme.palette.text.secondary,
              color: (theme) => theme.palette.primary.light,
            },
          }}
        >
          {button?.render()}
        </LoadingButtonWrapper>
      ))}
    </ButtonGroup>
  );
};

export default LoadingGroupedButton;
