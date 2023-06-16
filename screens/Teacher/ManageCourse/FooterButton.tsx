import React from "react";
import { ButtonConfig } from "components/GroupedButton/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@material-ui/core";
import { useRouter } from "next/router";
import GroupedButton from "components/GroupedButton";

const FooterButton = (props: any) => {
  const { checked, deleteCourse } = props;
  const router = useRouter();
  const config: ButtonConfig[] = [
    {
      key: "restoreStudent",
      startIcon: <RestoreFromTrashOutlinedIcon />,
      render: () => {
        return <Box>Restore</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
        router.push("/teacher/courses/restore");
      },
    },
    {
      key: "save",
      startIcon: <ContentCopyIcon />,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {},
      disabled: checked ? false : true,
    },
    {
      key: "delete",
      startIcon: <DeleteForeverIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      disabled: checked ? false : true,
      onClick: deleteCourse,
    },
  ];
  return <GroupedButton config={config} />;
};

export default FooterButton;
