import React from "react";
import {
  BoxMatrix,
  BoxMatrixDropDownWrapper,
  BoxMatrixWrapper,
  BoxScoringWrapper,
  BoxWrapper,
  SchemeBoxWrapper,
  SelectBoxWrapper,
} from "./Styled";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const CusQuizDetails = () => {
  const optionsScheme = [
    { value: "Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
    { value: "1Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
    { value: "2Bonus Test (ave=3.75)", label: "Bonus Test (ave=3.75)" },
  ];
  return (
    <BoxWrapper>
      <BoxMatrixDropDownWrapper>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Typography>Scoring Matrix</Typography>
          </Grid>
          <Grid item md={3}>
            <SchemeBoxWrapper gridColumn="span 2">
              <CustomSelect
                placeholder="Bonus Test (ave=3.75)"
                controlText="Scheme:"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionsScheme}
              />
            </SchemeBoxWrapper>
          </Grid>
          <Grid item md={3}>
            <SchemeBoxWrapper gridColumn="span 2">
              <CustomSelect
                placeholder="120"
                controlText="Time Limit per response (sec):"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionsScheme}
              />
            </SchemeBoxWrapper>
          </Grid>
          <Grid item md={2}>
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
        <Grid container spacing={3}>
          <Grid item md={12}>
            <BoxMatrixWrapper className="customBorder">
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Two:
                </Typography>
                <Typography className="heading-p">11 :0</Typography>
              </BoxMatrix>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Three:
                </Typography>
                <Typography className="heading-p">13 :3 :0</Typography>
              </BoxMatrix>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Four:
                </Typography>
                <Typography className="heading-p">13 :7 :2 :0</Typography>
              </BoxMatrix>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Five:
                </Typography>
                <Typography className="heading-p">13 :8.5 :5 :1 :0</Typography>
              </BoxMatrix>
              <BoxMatrix className="boxMatrix-b">
                <Typography variant="h2" component="h2" className="heading-h2">
                  Six:
                </Typography>
                <Typography className="heading-p">13 :9 :6.5</Typography>
              </BoxMatrix>
            </BoxMatrixWrapper>
            <BoxMatrixWrapper>
              <BoxMatrix>
                <Typography variant="h2" component="h2" className="heading-h2">
                  Seven:
                </Typography>
                <Typography className="heading-p">
                  13 :9 :8 :5 :3 :1 :0
                </Typography>
              </BoxMatrix>
              <BoxMatrix>
                <Typography variant="h2" component="h2" className="heading-h2">
                  Eight:
                </Typography>
                <Typography className="heading-p">
                  13 :9.5 :8 :6 :4 :3 :1 :0
                </Typography>
              </BoxMatrix>
            </BoxMatrixWrapper>
          </Grid>
        </Grid>
      </BoxScoringWrapper>
    </BoxWrapper>
  );
};

export default CusQuizDetails;
