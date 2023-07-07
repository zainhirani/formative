import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { ButtonConfig } from "components/GroupedButton/types";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { BoxWrapper } from "./Styled";
import { UploadQuestions } from "components/UploadQuestions";
import Head from "next/head";
const UploadQuestionScreen = () => {
  return (
    <>
      <Head>
        <title>Upload Question</title>
      </Head>
      {/* <PageLayout
        iconAngle={true}
        subText="Upload Questions"
        icon={<HelpRoundedIcon />}
        title={"Questions"}
      > */}
      <BoxWrapper>
        <UploadQuestions />
      </BoxWrapper>
      {/* </PageLayout> */}
    </>
  );
};
export default UploadQuestionScreen;
