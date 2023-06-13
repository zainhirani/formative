import { BoxWrapper } from "./Styled";
import {
  columnsManageHowAmiDoing,
  pageSizeManageHowAmiDoing,
  rowsManageHowAmiDoing,
} from "mock-data/Student/HowAmiDoingData";
import CustomDataGrid from "components/CustomDataGrid";
import { useState } from "react";
import QuizQuestionFormat from "components/QuizQuestionFormat";

const TableSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOnRowClick = () => setDrawerOpen(true);
  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        onRowClick={handleOnRowClick}
        rows={rowsManageHowAmiDoing}
        columns={columnsManageHowAmiDoing}
        pageSizeData={pageSizeManageHowAmiDoing}
        type={"1"}
        isCheckbox={false}
      />
      {/* @ts-ignore */}
      <QuizQuestionFormat
        quizOptions={[
          { id: 1, optionText: "Roses are red!" },
          { id: 2, optionText: "Grass is green!" },
          { id: 3, optionText: "Violets are blue" },
          { id: 4, optionText: "Humpty Dumpty sat on a wall" },
        ]}
        title="Quiz review for Zakira Akbari on Group Final"
        questionContext="In the child's poem ..., ..., sugar is sweet! and so are you!"
        actualQuestion="What is the first phrase?"
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        answerStats={[]}
      />
    </BoxWrapper>
  );
};

export default TableSection;
