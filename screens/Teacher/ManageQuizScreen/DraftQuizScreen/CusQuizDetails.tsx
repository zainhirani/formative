import React from "react";
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
} from "@mui/material";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  margin: "0px 50px",
  "&:first-child": {
    margin: "0px 50px 0px 0px",
  },
  [theme.breakpoints.between("sm", "xl")]: {
    margin: "0px 30px",
    "&:first-child": {
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
  "&:first-child": {
    margin: "0px 60px 0px 0px",
  },
  [theme.breakpoints.between("sm", "xl")]: {
    margin: "0px 54px",
    "&:first-child": {
      margin: "0px 54px 0px 0px",
    },
  },
}));

const CusQuizDetails = () => {
  const optionsScheme = [
    { value: "Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
    { value: "1Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
    { value: "2Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
  ];
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
                options={optionsScheme}
              />
            </SchemeBoxWrapper>
          </Grid>
          <Grid item className="item" md={3}>
            <SchemeBoxWrapper gridColumn="span 2">
              <CustomSelect
                placeholder="120"
                controlText="Time Limit per response (sec):"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionsScheme}
              />
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

export default CusQuizDetails;
