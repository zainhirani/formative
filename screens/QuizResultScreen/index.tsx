import React, { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Tooltip } from 'react-tooltip'

import HelpModal from "components/HelpPage";
import PageLayout from "components/PageLayout";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import QuizesListing from "./QuizesListing";
import messages from "./messages";
import { helpContent } from "./data";

const QuizResultScreen = () => {
  const [open, setOpen] = useState(false)
  const modalTitle = useFormattedMessage(messages.helpTitle)
  return (
    <PageLayout title="Quiz Results" icon={ <HelpRoundedIcon /> } onIconClick={() => setOpen(true)}>
      <>
        <QuizesListing />
        <HelpModal isOpen={open} onClose={() => setOpen(false)} title={modalTitle} heading={<FormattedMessage {...messages.helpHeading} />} description={<FormattedMessage {...messages.helpDescription} />} content={helpContent} />
      </>
    </PageLayout>
  );
};

export default QuizResultScreen;
