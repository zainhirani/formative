import React, { useState, useEffect } from "react";
import SideDrawer from "components/Drawer";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import GroupedButton from "components/GroupedButton";
import { BoxWrapper, ButtonWrapper, TypographyStyled } from "../Styled";
import QuestionsStepper from "./QuestionsStepper";

const QuestionsModal = (props: any) => {
  const { drawerOpen, setDrawerOpen } = props;
  const [showQuestionScreen, setShowQuestionScreen] = useState(false);
  const underTakingTitle = useFormattedMessage(messages.underTakingTitle);
  const modalTitleHead = useFormattedMessage(messages.modalTitle);
  const underTakingDesc = useFormattedMessage(messages.underTakingDesc);
  const underTakingLongDesc = useFormattedMessage(messages.underTakingLongDesc);
  const confirmUnderTaking = useFormattedMessage(messages.confirmUnderTaking);
  const quizScoreTitle = useFormattedMessage(messages.quizScoreTitle);
  const questionNo = useFormattedMessage(messages.questionNo);
  const quizScore = useFormattedMessage(messages.quizScore);
  const submit = useFormattedMessage(messages.submit);
  const [modalTitle, setModalTitle] = useState(underTakingTitle);
  const handleDrawerCloseQuestion = () => {
    setDrawerOpen(false);
    props?.onClose && props.onClose();
    setShowQuestionScreen(false);
    setModalTitle(underTakingTitle);
  };
  const config = [
    {
      key: "accept",
      startIcon: <CheckCircleOutlineRoundedIcon />,
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.accept} />
          </Box>
        );
      },
      onClick: () => {
        setShowQuestionScreen(true);
        setModalTitle(modalTitleHead);
      },
    },
    {
      key: "cancel",
      startIcon: <CancelOutlinedIcon />,
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.cancel} />
          </Box>
        );
      },
      onClick: handleDrawerCloseQuestion,
    },
  ];

  const handleStepperComplete = () => {
    console.log("working");

    setModalTitle(quizScoreTitle);
    handleDrawerCloseQuestion;
  };

  const handleConsole = () => {
    console.log("Submitted");
    setModalTitle(quizScoreTitle);
  };

  return (
    <>
      <SideDrawer
        // title={showQuestionScreen ? modalTitle : underTakingTitle}
        title={modalTitle}
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
      >
        <Box sx={{ p: "30px 20px" }}>
          {showQuestionScreen ? (
            <Box>
              <QuestionsStepper
                handleChangeState={handleDrawerCloseQuestion}
                setModalTitle={setModalTitle}
              />
              {/* <QuestionsStepper handleChangeState={handleStepperComplete} /> */}
            </Box>
          ) : (
            <Box>
              <Typography color="primary" fontSize="18px">
                {underTakingDesc}
              </Typography>
              <TypographyStyled sx={{ mb: "20px" }}>
                {underTakingLongDesc}
              </TypographyStyled>
              <TypographyStyled sx={{ mb: "15px" }}>
                {confirmUnderTaking}
              </TypographyStyled>
              <GroupedButton config={config} />
            </Box>
          )}
        </Box>
      </SideDrawer>
    </>
  );
};

export default QuestionsModal;
