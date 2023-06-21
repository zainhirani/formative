import React from "react";
import { BoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  pageSizeManageQuestion,
  rowsManageQuestion,
} from "mock-data/Teacher/ManageQuestion";
import editSvg from "/public/quiz/edit.svg";
import copySvg from "/public/quiz/copy.svg";
import trashSvg from "/public/quiz/trash.svg";
import imagePlaceholder from "/public/image_placeholder.svg";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { Grid, IconButton, Box } from "@mui/material";
import Image from "next/image";
import { useQuestionsListing } from "providers/Teacher_Questions";
import { removeHTMLTags } from "utils";

interface ListingProp {}

const Listing: React.FC = ({}: ListingProp) => {
  let questions = useQuestionsListing({});

  let COLUMNS_CONFIG = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "id",
      headerName: "ID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "diff",
      headerName: "Difficulty",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "detail",
      headerName: "Details",
      minWidth: 400,
      flex: 1,
      renderCell: (data: any) => removeHTMLTags(data.row.detail),
    },
    {
      field: "image",
      headerName: "Image",
      minWidth: 150,
      flex: 1,
      renderCell: (data: any) => {
        if (data.row.media) {
          return (
            <IconButton>
              <Image
                alt="quiz-logo"
                src={imagePlaceholder}
                width={20}
                height={20}
              />
            </IconButton>
          );
        }
      },
    },
    {
      field: "quick_actions",
      headerName: "Quick Actions",
      width: 200,
      headerClassName: "super-app-theme--header",
      renderCell: (params: any) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs>
              <IconButton>
                <Image alt="quiz-logo" src={editSvg} />
              </IconButton>
              <IconButton>
                <Image alt="quiz-logo" src={copySvg} />
              </IconButton>
              <IconButton>
                <Image alt="quiz-logo" src={trashSvg} />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  const FOOTER_CONFIG = [
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
        rows={questions?.data}
        columns={COLUMNS_CONFIG}
        // pageSizeData={pageSizeManageQuestion}
        type={"1"}
        buttonArray={FOOTER_CONFIG}
        loading={questions?.isFetching}
      />
    </BoxWrapper>
  );
};

export default Listing;
