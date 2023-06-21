import React, { useState, useEffect } from "react";
import QuizQuestionFormat from "components/QuizQuestionFormat";

interface ViewQuestionFormat {
  questionId: any;
}

const ViewQuestion: React.FC = ({ questionId = "" }: ViewQuestionFormat) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // do api call and when ever id changes
  }, [questionId]);

  return (
    <>
      <QuizQuestionFormat
        isShowScoreBar={false}
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Dr. Kevin B. this is how Question 10/2 appers to student"
        questionContext={`In the child's poem "...,..., sugar is sweet! and so are you!"`}
        actualQuestion="What is the first phrase?"
        quizOptions={[
          { id: 1, optionText: "Roses are red!" },
          { id: 2, optionText: "Grass is green!" },
          { id: 3, optionText: "Violets are blue!" },
          { id: 4, optionText: "Roses are violet!" },
          { id: 5, optionText: "Humpty Dumpty sat on a wall!" },
        ]}
      />
    </>
  );
};

export default ViewQuestion;
