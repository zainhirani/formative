import React from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, Input, Button } from "@mui/material";
import { TextFieldStyled, ButtonWrapper, BoxWrapper } from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import GroupedButton from "components/GroupedButton";
import { ButtonConfig } from "components/GroupedButton/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  columnsManageQuestion,
  pageSizeManageQuestion,
  rowsManageQuestion,
} from "mock-data/Teacher/ManageQuestion";
import { useSnackbar } from "notistack";

const ManageQuestionsScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const config = [
    {
      key: "addStudents",
      startIcon: <AddCircleOutlineIcon />,
      customClass: "filled",
      render: () => {
        return <Box>Create New</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
      },
    },
  ];
  return (
    <PageLayout title="Courses" icon={<HelpRoundedIcon />}>
      <BoxWrapper>
        <CustomDataGrid
          rows={rowsManageQuestion}
          columns={columnsManageQuestion}
          pageSizeData={pageSizeManageQuestion}
          type={"1"}
          buttonArray={config}
        />
      </BoxWrapper>
    </PageLayout>
  );
};

export default ManageQuestionsScreen;
