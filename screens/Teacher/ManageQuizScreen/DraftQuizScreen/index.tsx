import type { NextPage } from "next";
import PageLayout from "components/PageLayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CusQuizDetails from "./CusQuizDetails";
import TableSection from "./tableSection";
import { Box } from "@mui/material";
import FiltersSection from "./filters";

const DraftQuizScreen: NextPage = () => {
  return (
    <PageLayout title="All Quiz" icon={<ArrowForwardIcon />}>
      <Box>
        <FiltersSection />
        <CusQuizDetails />
        <TableSection />
      </Box>
    </PageLayout>
  );
};

export default DraftQuizScreen;
