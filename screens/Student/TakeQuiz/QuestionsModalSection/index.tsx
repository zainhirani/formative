import React, { useEffect, useState } from "react";
import SideDrawer from "components/Drawer";
import { Box, Typography } from "@mui/material";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import GroupedButton from "components/GroupedButton";
import { TypographyStyled } from "../Styled";
import QuestionsStepper from "./QuestionsStepper";

const QuestionsModal = (props: any) => {
  const {
    drawerOpen,
    setDrawerOpen,
    selectedRowId,
    quesQuizByIdData,
    refQuesQuizById,
    questionOptionNew,
    setQuestionOptionNew,
    handleNext,
    handleTimerEnd,
    handleRemainingTimer,
    remainingTime,
  } = props;
  const [showQuestionScreen, setShowQuestionScreen] = useState(false);
  const [undertakingScreen, setUndertakingScreen] = useState(true);
  const underTakingTitle = useFormattedMessage(messages.underTakingTitle);
  const modalTitleHead = useFormattedMessage(messages.modalTitle);
  const underTakingDesc = useFormattedMessage(messages.underTakingDesc);
  const underTakingLongDesc = useFormattedMessage(messages.underTakingLongDesc);
  const confirmUnderTaking = useFormattedMessage(messages.confirmUnderTaking);
  const [modalTitle, setModalTitle] = useState(underTakingTitle);
  const questionTitle = quesQuizByIdData?.title;
  const selectedQuizId = selectedRowId[0];
  const quizKeyExistOutof = quesQuizByIdData?.outof;
  const quizKeyExistScore = quesQuizByIdData?.score;

  useEffect(() => {
    if (!drawerOpen) {
      setUndertakingScreen(true);
    }
  }, [!drawerOpen]);
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
        setUndertakingScreen(false);
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

  return (
    <>
      <SideDrawer
        title={
          undertakingScreen && quizKeyExistOutof == undefined
            ? "Undertaking"
            : quizKeyExistOutof == undefined && quizKeyExistScore == undefined
            ? questionTitle
            : "Quiz Score"
        }
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
      >
        <Box sx={{ p: "30px 20px" }}>
          {showQuestionScreen || quizKeyExistOutof !== undefined ? (
            <Box>
              <QuestionsStepper
                handleChangeState={handleDrawerCloseQuestion}
                setModalTitle={setModalTitle}
                quesQuizByIdData={quesQuizByIdData}
                selectedQuizId={selectedQuizId}
                questionOptionNew={questionOptionNew}
                setQuestionOptionNew={setQuestionOptionNew}
                handleNext={handleNext}
                remainingTime={remainingTime}
                handleTimerEnd={handleTimerEnd}
                handleRemainingTimer={handleRemainingTimer}
              />
            </Box>
          ) : (
            <Box>
              <Typography
                color="primary"
                fontSize="18px"
                sx={{ marginBottom: "15px" }}
              >
                {underTakingDesc}
              </Typography>
              <TypographyStyled sx={{ mb: "20px" }}>
                {underTakingLongDesc}
              </TypographyStyled>
              <TypographyStyled sx={{ mb: "20px" }}>
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
