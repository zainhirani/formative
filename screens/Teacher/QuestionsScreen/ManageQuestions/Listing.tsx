import React from "react";
import { Box } from "@mui/material";
import { BoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  columnsManageQuestion,
  pageSizeManageQuestion,
  rowsManageQuestion,
} from "mock-data/Teacher/ManageQuestion";

import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";

interface ListingProp {}

const Listing: React.FC = ({}: ListingProp) => {
  const config = [
    {
      key: "createNew",
      startIcon: <AddCircleOutlineIcon />,
      customClass: "filled",
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.createNew} />
          </Box>
        );
      },
      onClick: () => {},
    },
  ];
  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        rows={rowsManageQuestion}
        columns={columnsManageQuestion}
        pageSizeData={pageSizeManageQuestion}
        type={"1"}
        buttonArray={config}
      />
    </BoxWrapper>
  );
};

export default Listing;
