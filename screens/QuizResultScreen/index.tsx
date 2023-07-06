import React, { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

import HelpModal from "components/HelpPage";
import PageLayout from "components/PageLayout";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import QuizesListing from "./QuizesListing";
import messages from "./messages";
import { helpContent } from "./data";
import Head from "next/head";

const QuizResultScreen = () => {
  const [open, setOpen] = useState(false);
  const modalTitle = useFormattedMessage(messages.helpTitle);
  return (
    // <PageLayout title="Quiz Results" icon={<HelpRoundedIcon />}>
    <>
      <Head>
        <title>Quiz Results</title>
      </Head>
      <QuizesListing />
    </>
    // </PageLayout>
  );
};

export default QuizResultScreen;
