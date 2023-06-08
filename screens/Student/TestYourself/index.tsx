import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";
import { Checkbox } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

import Loader from "components/Loader";
import DataTable from "components/DataTable";
import TakeQuizFormat from "components/TakeQuizFormat";

import { BoxWrapper } from "./Styled";
import { questionData } from "mock-data/Student/Test-Yourself";

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
  loading: () => <Loader />,
});

const dataTestYourself = [
  {
    id: 0,
    name: "Q195",
    type: "MC",
  },
  {
    id: 1,
    name: "Q196",
    type: "MC",
  },
  {
    id: 2,
    name: "Q197",
    type: "MC",
  },
  {
    id: 3,
    name: "Q198",
    type: "MC",
  },
  {
    id: 4,
    name: "Q199",
    type: "MC",
  },
];

const TestYourself = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(dataTestYourself.length).fill(false),
  );

  const handleOnChange = (position: any, e: any) => {
    if (checkedState.filter((i) => i).length >= 1 && e.target.checked) return;
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };

  let configTestYourself = [
    {
      columnName: "Name",
      render: (item: { name: any; id: number }) => {
        return (
          <>
            <Checkbox
              checked={checkedState[item.id]}
              id={`custom-checkbox-${item.id}`}
              onChange={(e) => handleOnChange(item?.id, e)}
              size="small"
            />
            {item.name}
          </>
        );
      },
      handleClick: (item: any) => {
        console.log(item?.id, "item");
      },
    },
    {
      columnName: "Type",
      render: (item: { type: any }) => {
        return item.type;
      },
    },
  ];

  return (
    <PageLayout title="Test Yourself" icon={<HelpRoundedIcon />}>
      <Box sx={{ display: "flex" }}>
        <BoxWrapper sx={{ marginRight: "15px" }}>
          <Box
            sx={{
              height: "50px",
              background: (theme) => theme.palette.secondary.dark,
              pl: "20px",
              display: "flex",
              alignItems: "center",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
            }}
          >
            Biochem - Enzymes As Catalysts
          </Box>

          <DataTable data={dataTestYourself} config={configTestYourself} />
        </BoxWrapper>
        <BoxWrapper sx={{ width: "60%", marginLeft: "15px" }}>
          <TakeQuizFormat
            id={questionData?.id}
            QNo={questionData?.QNo}
            question={questionData?.question}
            image={questionData?.image}
            options={questionData?.options}
            time={questionData?.time}
            questionSelected={checkedState.indexOf(true) > -1}
          />
        </BoxWrapper>
      </Box>
    </PageLayout>
  );
};

export default TestYourself;
