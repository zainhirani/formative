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

interface MyData {
  dynamicData: object;
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  margin: "0px 50px",
  "&:first-of-type": {
    margin: "0px 50px 0px 0px",
  },
  [theme.breakpoints.between("sm", "xl")]: {
    margin: "0px 30px",
    "&:first-of-type": {
      margin: "0px 30px 0px 0px",
    },
  },
}));
const ItemTwo = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  margin: "0px 60px",
  "&:first-of-type": {
    margin: "0px 60px 0px 0px",
  },
  [theme.breakpoints.between("sm", "xl")]: {
    margin: "0px 54px",
    "&:first-of-type": {
      margin: "0px 54px 0px 0px",
    },
  },
}));

const CusQuizDetails = (props: any) => {
  const { handleChange, setFieldValue, values } = props;
  const scoringList = useScoringListing();
  const [scoringId, setScoringId] = useState(null);
  const { data: scoringByIdData, refetch: cusRefetch } = useScoringByID({
    id: scoringId ? scoringId : null,
    scoringId,
  });
  const data = scoringByIdData?.dynamicData;

  console.log(data, "data");

  useEffect(() => {
    if (scoringId) {
      cusRefetch(scoringId);
    }
  }, [scoringId]);

  const optionsScoring = useMemo(() => {
    return scoringList?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.scheme,
    }));
  }, [scoringList?.data]);

  const onChangeScoring = (e: any) => {
    const obj = {
      value: e.value,
      label: e.label,
    };
    setScoringId(e.value);
    setFieldValue("scoringId", obj);
  };

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
                defaultValue={0}
                inputProps={{ min: 0 }}
                variant="standard"
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
              {/* <CustomSelect
                placeholder="120"
                controlText="Time Limit per response (sec):"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionsScheme}
              /> */}
            </SchemeBoxWrapper>
          </Grid>
          <Grid item className="item" md={2}>
            <SchemeBoxWrapper gridColumn="span 2">
              <FormControlLabel
                value="Reviewable:"
                control={<Checkbox />}
                label="Reviewable:"
                labelPlacement="start"
                style={{ padding: 0 }}
              />
            </SchemeBoxWrapper>
          </Grid>
        </Grid>
      </BoxMatrixDropDownWrapper>

      <BoxScoringWrapper>
        <BoxMatrixWrapper className="customBorder">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* {data?.map((item: any, index: number) => {
              return (
                <Item key={item?.id}>
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
                      Two:
                    </Typography>
                    <Typography className="heading-p">{item?.value}</Typography>
                  </BoxMatrix>
                </Item>
              );
            })} */}
            <Item>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Two:
                </Typography>
                <Typography className="heading-p">11 :0</Typography>
              </BoxMatrix>
            </Item>
            <Item>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Three:
                </Typography>
                <Typography className="heading-p">13 :3 :0</Typography>
              </BoxMatrix>
            </Item>
            <Item>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Four:
                </Typography>
                <Typography className="heading-p">13 :7 :2 :0</Typography>
              </BoxMatrix>
            </Item>
            <Item>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Five:
                </Typography>
                <Typography className="heading-p">13 :8.5 :5 :1 :0</Typography>
              </BoxMatrix>
            </Item>
            <Item>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Six:
                </Typography>
                <Typography className="heading-p">13 :9 :6.5</Typography>
              </BoxMatrix>
            </Item>
          </Stack>
        </BoxMatrixWrapper>

        <BoxMatrixWrapper>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <ItemTwo>
              <BoxMatrix>
                <Typography variant="h2" component="h2" className="heading-h2">
                  Seven:
                </Typography>
                <Typography className="heading-p">
                  13 :9 :8 :5 :3 :1 :0
                </Typography>
              </BoxMatrix>
            </ItemTwo>
            <ItemTwo>
              <BoxMatrix>
                <Typography variant="h2" component="h2" className="heading-h2">
                  Eight:
                </Typography>
                <Typography className="heading-p">
                  13 :9.5 :8 :6 :4 :3 :1 :0
                </Typography>
              </BoxMatrix>
            </ItemTwo>
          </Stack>
        </BoxMatrixWrapper>
      </BoxScoringWrapper>
    </BoxWrapper>
  );
};

export default React.memo(CusQuizDetails);
