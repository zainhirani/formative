import React from "react";
import { LoadingButtonConfig } from "components/LoadingGroupedButton/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@material-ui/core";
import { useRouter } from "next/router";
import LoadingGroupedButton from "components/LoadingGroupedButton";

const FooterButton = (props: any) => {
  const { checked, deleteCourse, duplicateLoading, deleteLoading } = props;
  const router = useRouter();
  const config: LoadingButtonConfig[] = [
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
      loading: duplicateLoading,
    },
    {
      key: "delete",
      startIcon: <DeleteForeverIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      loading: deleteLoading,
      disabled: checked ? false : true,
      onClick: deleteCourse,
    },
  ];
  return <LoadingGroupedButton config={config} />;
};

export default FooterButton;
