import React, { FC, useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Image from "theme/Image";
import FormattedMessage from "theme/FormattedMessage";

import messages from "./messages";
import { BoxWrapper, ButtonWrapper } from "./Styled";

interface IOptionProps {
  name: string;
}

type ITakeQuizProps = {
  id: string;
  QNo: string;
  question: string;
  image?: string;
  options: IOptionProps[];
  time?: number;
  questionSelected: boolean;
};

const TakeQuizFormat: FC<ITakeQuizProps> = ({
  question,
  image,
  options,
  time,
  QNo,
  id,
  questionSelected,
}): JSX.Element => {
  const [checkedState, setCheckedState] = useState(
    new Array(options?.length).fill(false),
  );

  const [submit, setSubmit] = useState(false);

  const handleOnChange = (position: any, e: any) => {
    if (checkedState.filter((i) => i).length >= 1 && e.target.checked) return;
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      {!questionSelected ? (
        <Box
          sx={{
            background: (theme) => theme.palette.grey[300],
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: "64px", marginRight: "10px" }} />
          <Box>
            <Typography
              fontWeight={400}
              fontSize={14}
              sx={{ paddingBottom: "10px" }}
            >
              <FormattedMessage {...messages.noQuestionTitle} />
            </Typography>
            <Typography fontWeight={400} fontSize={18}>
              <FormattedMessage {...messages.noQuestionDescription} />
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            width: "100%",
            height: "100%",
            p: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              fontSize={14}
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Question {QNo}
            </Typography>
            <Typography
              fontSize={14}
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Qid = {id}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Typography sx={{ marginBottom: "30px" }} fontSize={18}>
              {question}
            </Typography>
            <Image
              alt="quiz-image"
              lazyLoadProps={{ height: 240 }}
              src={image}
              lazyLoad={true}
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Typography sx={{ marginBottom: "10px" }} fontSize={14}>
              <FormattedMessage {...messages.chooseQuestion} />
            </Typography>
            {options?.map((el, index) => (
              <Box
                key={index}
                sx={{
                  height: "56px",
                  border: "1px solid #EAEAEA",
                  borderRadius: "6px",
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  boxShadow:
                    checkedState[index] === true
                      ? "0px 0px 40px rgba(0, 0, 0, 0.1)"
                      : "",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleOnChange(index, e)}
                      checked={checkedState[index]}
                      id={`custom-checkbox-${index}`}
                      color="default"
                    />
                  }
                  label={el.name}
                />
              </Box>
            ))}
          </Box>
          {submit ? (
            <Box
              sx={{
                width: "100%",
                paddingTop: "50px",
                display: "flex",
                paddingLeft: "30px",
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ fontSize: "64px", marginRight: "10px" }}
              />
              <Box>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  sx={{ paddingBottom: "10px" }}
                >
                  <FormattedMessage {...messages.tryMore} />
                </Typography>
                <Typography fontWeight={400} fontSize={18}>
                  <FormattedMessage {...messages.select} />
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", marginTop: "30px" }}>
              <BoxWrapper>
                <Typography
                  fontSize={14}
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  <FormattedMessage
                    {...messages.answerTime}
                    values={{ value: time }}
                  />
                </Typography>
              </BoxWrapper>
              <ButtonWrapper
                onClick={() => setSubmit(true)}
                disabled={!(checkedState.indexOf(true) > -1)}
                loadingPosition="start"
                startIcon={<ArrowCircleRightOutlinedIcon />}
                sx={{
                  borderTopRightRadius: (theme) => theme.borderRadius.radius1,
                  borderBottomRightRadius: (theme) =>
                    theme.borderRadius.radius1,
                  width: "30%",
                }}
                variant="contained"
              >
                <FormattedMessage {...messages.submit} />
              </ButtonWrapper>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default TakeQuizFormat;
