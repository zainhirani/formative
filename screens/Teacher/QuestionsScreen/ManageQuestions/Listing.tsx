import React, { useState } from "react";
import { BoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import editSvg from "/public/quiz/edit.svg";
import copySvg from "/public/quiz/copy.svg";
import trashSvg from "/public/quiz/trash.svg";
import viewSvg from "/public/view.svg";
import imagePlaceholder from "/public/image_placeholder.svg";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { Grid, IconButton, Box } from "@mui/material";
import Image from "next/image";
import { useQuestionsListing } from "providers/Teacher_Questions";
import { isStringNotURL, removeHTMLTags } from "utils";
import ImagePreviewModal from "components/ImagePreviewModal";
import ViewQuestion from "./ViewQuestion";

interface ListingProp {}

const Listing: React.FC = ({}: ListingProp) => {
  let questions = useQuestionsListing({});
  let [image, setImage] = useState<string>("");
  const [questionId, setQuestionId] = useState<string | undefined>(undefined);
  const [questiondrawer, setQuestionDrawer] = useState(false);

  const handleSetImage = (imageName: string) => {
    let url = "";
    if (isStringNotURL(imageName)) {
      url = `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageName}`;
    } else {
      url = imageName;
    }
    setImage(url);
  };

  const handleRemoveImage = () => setImage("");

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
          if (!isStringNotURL(data.row.media)) {
            return;
          }

          return (
            <IconButton onClick={() => handleSetImage(data.row.media)}>
              <Image
                alt="question-image"
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
      renderCell: (data: any) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs>
              <IconButton
                onClick={() => {
                  setQuestionDrawer(true);
                  setQuestionId(data.row.id);
                }}
              >
                <Image alt="view" src={viewSvg} width={15} height={15} />
              </IconButton>
              <IconButton>
                <Image alt="edit" src={editSvg} width={15} height={15} />
              </IconButton>
              <IconButton>
                <Image alt="copy" src={copySvg} width={15} height={15} />
              </IconButton>
              <IconButton>
                <Image alt="delete" src={trashSvg} width={15} height={15} />
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
        totalRows={questions?.data?.length || 0}
        pageSizeData={10}
        type={"1"}
        buttonArray={FOOTER_CONFIG}
        loading={questions?.isFetching}
      />
      <ImagePreviewModal
        open={Boolean(image)}
        onClose={handleRemoveImage}
        src={image}
      />
      <ViewQuestion
        isOpen={questiondrawer}
        onClose={() => setQuestionDrawer(false)}
        questionId={questionId?.toString() || ""}
      />
    </BoxWrapper>
  );
};

export default Listing;
