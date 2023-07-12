// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import {
  BoxMatrix,
  BoxMatrixDropDownWrapper,
  BoxMatrixWrapper,
  BoxScoringWrapper,
  BoxWrapper,
  SchemeBoxWrapper,
} from "./Styled";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  useScoringByID,
  useScoringListing,
} from "providers/Teacher/TeacherQuiz";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";

interface MyData {
  dynamicData: object;
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  margin: "0px 30px 0px 0px",
}));

const AddSpaceAndColon = ({ originalString }) => {
  const modifiedString = originalString.replace(/:/g, ": ");

  return <div>{modifiedString}</div>;
};

const CusQuizDetails = (props: any) => {
  const {
    handleChange,
    setFieldValue,
    values,
    quizByIdData,
    quizByIdIsFetching,
  } = props;
  const router = useRouter();
  const { id: quizEditId } = router.query;
  const editPage = quizEditId == undefined ? false : true;
  const scoringList = useScoringListing();
  const [scoringId, setScoringId] = useState(null);
  const [isScoringId, setIsScoringId] = useState<Boolean>(false);
  const {
    isLoading,
    data: scoringByIdData,
    refetch,
  } = useScoringByID(scoringId, isScoringId);
  const data = scoringByIdData?.dynamicData;
  const queryClient = useQueryClient();

  // Edit Page

  useEffect(() => {
    if (!editPage) {
      queryClient.invalidateQueries("QUERY_KEYS.SCORING_LISTING_ID");
    }
  }, [!editPage]);

  useEffect(() => {
    if (quizByIdData?.scoringId) {
      setScoringId(quizByIdData?.scoringId);
    }
  }, [quizByIdIsFetching]);

  useEffect(() => {
    if (scoringId == null) {
      setIsScoringId(false);
    } else {
      refetch(scoringId);
    }
  }, [scoringId]);

  useEffect(() => {
    if (scoringId) {
      refetch(scoringId);
    }
  }, [isScoringId]);
  // Edit Page

  const optionsScoring = useMemo(() => {
    return scoringList?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.scheme,
    }));
  }, [scoringList?.data]);

  const onChangeScoring = (e: any) => {
    const obj = {
      value: e?.value,
      label: e?.label,
    };
    setScoringId(e?.value);
    setFieldValue("scoringId", obj);
  };

  // console.log(values?.reviewable, "values?.reviewable");

  // console.log("scoring");
  return (
    <BoxWrapper>
      <BoxMatrixDropDownWrapper>
        <Grid container>
          <Grid item className="item" md={4}>
            <Box className="scoring-matrix">
              <Typography>Scoring Matrix</Typography>
            </Box>
          </Grid>
          <Grid item className="item" md={3}>
            <SchemeBoxWrapper gridColumn="span 2">
              <CustomSelect
                placeholder="Bonus Test (ave=3.75)"
                controlText="Scheme:"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionsScoring}
                value={values?.scoringId}
                onChange={onChangeScoring}
                isClearable={false}
              />
            </SchemeBoxWrapper>
          </Grid>
          <Grid item className="item" md={3}>
            <SchemeBoxWrapper
              gridColumn="span 2"
              sx={{ display: "flex", alignItems: "center", height: "62px" }}
            >
              <Tooltip title={"Time Limit per response (sec):"} placement="top">
                <InputLabel htmlFor="time">
                  Time Limit per response (sec):
                </InputLabel>
              </Tooltip>
              <TextField
                id="time"
                name="time"
                fullWidth
                type="number"
                // defaultValue={values?.timeLimitPerSec}
                value={values?.timeLimitPerSec}
                // defaultValue={0}
                inputProps={{ min: 0 }}
                variant="standard"
                required
                onChange={(e: any) => {
                  setFieldValue("timeLimitPerSec", e.target.value);
                }}
                sx={{
                  maxWidth: "28px",
                  paddingLeft: "1px",
                  ".MuiInputBase-root": {
                    "&::before": {
                      display: "none",
                    },
                    "&::after": {
                      display: "none",
                    },
                  },
                }}
              />
            </SchemeBoxWrapper>
          </Grid>
          <Grid item className="item" md={2}>
            <SchemeBoxWrapper gridColumn="span 2">
              {/* <FormControlLabel
                value="Reviewable:"
                control={
                  <Checkbox
                    checked={values?.reviewable}
                    onClick={(e: any) => {
                      setFieldValue("reviewable", e.target.checked);
                    }}
                  />
                }
                label="Reviewable:"
                labelPlacement="start"
                style={{ padding: 0 }}
              /> */}
            </SchemeBoxWrapper>
          </Grid>
        </Grid>
      </BoxMatrixDropDownWrapper>

      <BoxScoringWrapper>
        <BoxMatrixWrapper className="customBorder">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexWrap: "wrap", gap: "25px", justifyContent: "flex-start" }}
          >
            {data ? (
              data?.map((item: any, index: number) => {
                return (
                  <Item key={index} sx={{ margin: "0px 30px 0px 0px" }}>
                    <BoxMatrix className="boxMatrix-b">
                      <Typography
                        variant="h2"
                        component="h2"
                        className="heading-h2"
                      >
                        {index == 0
                          ? "Two:"
                          : index == 1
                          ? "Three:"
                          : index == 2
                          ? "Four:"
                          : index == 3
                          ? "Five"
                          : index == 4
                          ? "Six"
                          : index == 5
                          ? "Seven:"
                          : index == 6
                          ? "Eight"
                          : ""}
                      </Typography>
                      <Typography className="heading-p">
                        <AddSpaceAndColon originalString={item?.value} />
                      </Typography>
                    </BoxMatrix>
                  </Item>
                );
              })
            ) : (
              <Typography sx={{ color: "#8c2531" }}>
                Please select the scheme
              </Typography>
            )}
          </Stack>
        </BoxMatrixWrapper>
      </BoxScoringWrapper>
    </BoxWrapper>
  );
};

export default React.memo(CusQuizDetails);
