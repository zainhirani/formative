import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FormattedMessage from "theme/FormattedMessage";
import Image from "theme/Image";
import messages from "./messages";
import { BoxWrapper, ButtonWrapper } from "./Styled";

interface IOptionProps {
  name: string;
  valid: string;
}

type ITakeQuizProps = {
  id?: string;
  QNo?: string;
  question?: string;
  image?: string;
  options?: IOptionProps[];
  time?: number;
  questionSelected?: boolean;
  setSubmit?: any;
  submit?: boolean;
  setCheckedStateAns?: any;
  checkedStateAns?: any;
  questionData?: any;
  setRemainingTime?: any;
  remainingTime?: any;
  timer?: any;
  questionTitle?: string;
  questionID?: number;
  questionDetail?: string;
  questionMedia?: File;
  questionOption?: string;
  timelimit?: number;
};

const TakeQuizFormat: React.FC<ITakeQuizProps> = ({
  question,
  image,
  options,
  time,
  QNo,
  id,
  questionSelected,
  setSubmit,
  submit,
  checkedStateAns,
  setCheckedStateAns,
  questionData,
  setRemainingTime,
  remainingTime,
  timer,
  questionTitle,
  questionID,
  questionDetail,
  questionMedia,
  questionOption,
  timelimit,
}): JSX.Element => {
  const [ansCorrect, setAnsCorrect] = React.useState(false);

  // Timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime: number | undefined) => {
        const currentTime = prevTime ?? 0;
        if (currentTime > 0) {
          return currentTime - 1;
        }
        return currentTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [ansCorrect]);

  React.useEffect(() => {
    setRemainingTime(timer);
  }, [ansCorrect]);

  const handleOnChange = (position: any, e: any) => {
    if (checkedStateAns.filter((i: any) => i).length >= 1 && e.target.checked)
      return;
    const updatedCheckedStateAns = checkedStateAns.map(
      (item: any, index: number) => (index === position ? !item : item),
    );
    setCheckedStateAns(updatedCheckedStateAns);
  };

  const getTimeColor = () => {
    if (remainingTime <= 10) {
      return "#ff0000";
    } else if (remainingTime <= 30) {
      return "orange";
    } else if (remainingTime <= 60) {
      return "#005E84";
    } else {
      return "#225A41";
    }
  };

  // Timer

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
            borderRadius: "6px",
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: "64px", marginRight: "10px" }} />
          <Box>
            <Typography
              fontWeight={400}
              fontSize={14}
              sx={{ paddingBottom: "5px", paddingTop: "7px" }}
            >
              <FormattedMessage {...messages.noQuestionTitle} />
            </Typography>
            <Typography fontWeight={400} fontSize={18} sx={{ margin: "0px" }}>
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
            borderRadius: "6px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              fontSize={14}
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Question {questionTitle}
            </Typography>
            <Typography
              fontSize={14}
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Qid = {questionID}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Typography sx={{ marginBottom: "5px" }} fontSize={18}>
              {questionDetail}
            </Typography>
            {submit === false ? (
              <Image
                alt="quiz-image"
                lazyLoadProps={{ height: 240 }}
                src={questionMedia}
                lazyLoad={true}
                style={{ maxWidth: "100%", marginTop: "30px" }}
              />
            ) : (
              <></>
            )}
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Typography sx={{ marginBottom: "10px" }} fontSize={14}>
              <FormattedMessage {...messages.chooseQuestion} />
            </Typography>
            {options?.map((el, index) => {
              const valNew = el.valid;
              return (
                <Box
                  key={index}
                  sx={{
                    justifyContent: "space-between",
                    height: "56px",
                    border: "1px solid #EAEAEA",
                    borderRadius: "6px",
                    paddingLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    boxShadow:
                      checkedStateAns[index] === true
                        ? "0px 0px 40px rgba(0, 0, 0, 0.1)"
                        : "",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => handleOnChange(index, e)}
                        checked={checkedStateAns[index]}
                        id={`custom-checkbox-${index}`}
                        color="default"
                        disabled={submit ? true : false}
                      />
                    }
                    label={el.name}
                  />
                  {submit && checkedStateAns[index] ? (
                    valNew === "true" ? (
                      <Box sx={{ color: "#225A41", marginRight: "20px" }}>
                        Correct Answer!
                      </Box>
                    ) : (
                      <Box sx={{ color: "#8C2531", marginRight: "20px" }}>
                        Incorrect Answer!
                      </Box>
                    )
                  ) : (
                    ""
                  )}
                </Box>
              );
            })}
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
                  sx={{ paddingBottom: "5px", paddingTop: "5px" }}
                >
                  <FormattedMessage {...messages.tryMore} />
                </Typography>
                <Typography fontWeight={400} fontSize={17}>
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
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    {remainingTime ? (
                      <>
                        <FormattedMessage
                          {...messages.answerTime}
                          // values={{ value: time }}
                        />
                        <Typography
                          style={{ fontSize: "14px", color: getTimeColor() }}
                        >
                          {remainingTime} seconds
                        </Typography>
                      </>
                    ) : (
                      <>
                        <FormattedMessage
                          {...messages.answerTime}
                          // values={{ value: time }}
                        />
                        <Typography
                          style={{ fontSize: "14px", color: "#ff0000" }}
                        >
                          0 seconds
                        </Typography>
                      </>
                    )}
                  </Box>
                </Typography>
              </BoxWrapper>
              <ButtonWrapper
                onClick={() => setSubmit(true)}
                disabled={!(checkedStateAns.indexOf(true) > -1)}
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
