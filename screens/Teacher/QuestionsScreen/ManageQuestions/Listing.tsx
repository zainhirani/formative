// @ts-nocheck
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
import {
  useDeleteQuestion,
  useDuplicateQuestion,
  useQuestionsListing,
} from "providers/Teacher_Questions";
import { isStringNotURL, removeHTMLTags } from "utils";
import ImagePreviewModal from "components/ImagePreviewModal";
import ViewQuestion from "./ViewQuestion";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";
import { LIMIT } from "configs";
import OverlayLoader from "components/OverlayLoader";

interface ListingProp {
  folder: any;
  facultyCategory: any;
  enumType: any;
  category: any;
}

const Listing: React.FC = ({
  category,
  enumType,
  facultyCategory,
  folder,
}: ListingProp) => {
  const [page, setPage] = useState(1);
  let router = useRouter();
  let questions = useQuestionsListing({
    ...(facultyCategory?.length > 0 && { facultyId: facultyCategory }),
    ...(folder && { folderId: folder }),
    ...(enumType && { type: enumType }),
    ...(category && { categories: category }),
    Limit: LIMIT,
    Page: page,
  });
  let deleteQuestion = useDeleteQuestion();
  const duplicateQuestion = useDuplicateQuestion();

  let [image, setImage] = useState<string>("");
  const [questionId, setQuestionId] = useState<string | undefined>(undefined);
  const [questiondrawer, setQuestionDrawer] = useState(false);

  const handleSetImage = (imageName: string) => {
    let url = "";
    if (isStringNotURL(imageName)) {
      url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imageName}`;
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
      field: "difficulty",
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
                <Image
                  alt="edit"
                  src={editSvg}
                  width={15}
                  height={15}
                  onClick={() =>
                    router.push(
                      `${APP_ROUTES.QUESTIONS_EDIT_QUESTIONS}/${data.row.id}`,
                    )
                  }
                />
              </IconButton>
              <IconButton onClick={() => duplicateQuestion.mutate(data.row.id)}>
                <Image alt="copy" src={copySvg} width={15} height={15} />
              </IconButton>
              <IconButton>
                <Image
                  alt="delete"
                  src={trashSvg}
                  width={15}
                  height={15}
                  onClick={() => deleteQuestion.mutate(data.row.id)}
                />
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
      onClick: () => router.push(APP_ROUTES.QUESTIONS_CREATE_NEW),
    },
  ];
  return (
    <BoxWrapper>
      <CustomDataGrid
        page={page}
        handlePageChange={(_, v) => setPage(v)}
        totalRows={questions?.data?.count}
        rows={questions?.data?.data}
        columns={COLUMNS_CONFIG}
        pageSizeData={10}
        type={"1"}
        buttonArray={FOOTER_CONFIG}
        loading={
          questions?.isFetching
          // duplicateQuestion.isLoading ||
          // deleteQuestion.isLoading
        }
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
      <OverlayLoader
        isShow={duplicateQuestion.isLoading || deleteQuestion.isLoading}
      />
    </BoxWrapper>
  );
};

export default Listing;
