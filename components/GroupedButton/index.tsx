import React, { FC } from "react";
import { ButtonGroup } from "@mui/material";
import { ButtonWrapper } from "./Styled";
import { ButtonConfig } from "./types";

interface GroupedButtonProps {
  config: ButtonConfig[];
}

const GroupedButton: FC<GroupedButtonProps> = ({ config }) => {
  return (
    <ButtonGroup variant="contained" aria-label="Grouped button">
      {config?.map((button) => (
        <ButtonWrapper
          key={button?.key}
          onClick={button?.onClick}
          startIcon={button?.startIcon}
          disabled={button?.disabled}
        >
          {button?.render()}
        </ButtonWrapper>
      ))}
    </ButtonGroup>
  );
};

export default GroupedButton;
