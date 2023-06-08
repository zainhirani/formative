import PageLayout from "components/PageLayout";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const HowAmiDoingScreen = () => {
  return (
    <PageLayout title="Ho Am I Doing" icon={<HelpRoundedIcon />}>
      <>
        <SearchSection />
        <TableSection />
      </>
    </PageLayout>
  );
};

export default HowAmiDoingScreen;
