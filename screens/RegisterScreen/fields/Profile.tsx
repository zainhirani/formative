import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

import {
  CardHeaderWrapper,
  IconButtonWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { RegisterProps } from "./formProps";
import {
  learnRadioGroup,
  radioChoice,
  sequenceRadioGroup,
  studyRadioGroup,
  playRadioGroup,
  mathSkillsSelect,
} from "./data";
import messages from "../messages";
import { useState } from "react";

export const StepTwo: React.FC<RegisterProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  disable,
}) => {
  const dobPlaceholder = useFormattedMessage(messages.dobPlaceholder);
  const pharmacyPlaceholder = useFormattedMessage(messages.pharmacyPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const hobbiesPlaceholder = useFormattedMessage(messages.hobbiesPlaceholder);
  const [math, setMath] = useState("Select an option for the list");
  const [experience, setExperience] = useState(0);
  const increment = () => {
    if (experience < 50) {
      setExperience((experience) => experience + 1);
    }
  };

  const decrement = () => {
    if (experience > 0) {
      setExperience((experience) => experience - 1);
    }
  };
  return (
    <>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="dob">
              <FormattedMessage {...messages.dobLabel} />
            </InputLabelWrapper>
            <TextField
              id="dob"
              name="dob"
              placeholder={dobPlaceholder}
              fullWidth
              type="date"
              value={values.dob}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.dob && errors.dob)}
              disabled={disable}
              variant="standard"
            />
            {touched.dob && errors.dob && (
              <FormHelperText error id="standard-weight-helper-text-dob">
                {errors.dob}
              </FormHelperText>
            )}
          </Grid>
          <Grid sx={{ position: "relative" }} item xs={12} md={6}>
            <InputLabelWrapper htmlFor="pharmacy">
              <FormattedMessage {...messages.pharmacyLabel} />
            </InputLabelWrapper>
            <TextField
              id="pharmacy"
              name="pharmacy"
              placeholder={pharmacyPlaceholder}
              fullWidth
              type="number"
              value={experience}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.pharmacy && errors.pharmacy)}
              disabled={disable}
              variant="standard"
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                right: 0,
                bottom: "10%",
              }}
            >
              <IconButtonWrapper onClick={increment}>
                <ArrowDropUpOutlinedIcon />
              </IconButtonWrapper>
              <IconButtonWrapper onClick={decrement}>
                <ArrowDropDownOutlinedIcon />
              </IconButtonWrapper>
            </Box>
            {touched.pharmacy && errors.pharmacy && (
              <FormHelperText error id="standard-weight-helper-text-pharmacy">
                {errors.pharmacy}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="part-time">
              <FormattedMessage {...messages.partTimeLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("partTime", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {radioChoice?.map((choice) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={choice.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={choice.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="bio-chemistry">
              <FormattedMessage {...messages.bioLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("bioChemistry", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {radioChoice?.map((choice) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={choice.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={choice.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="maths">
              <FormattedMessage {...messages.mathLabel} />
            </InputLabelWrapper>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={math}
              IconComponent={KeyboardArrowDownIcon}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("maths", e.target.value);
                  setMath(e.target.value);
                }
              }}
              disabled={disable}
              variant="standard"
              fullWidth
              sx={{
                ".MuiSvgIcon-root ": {
                  color: (theme) => theme.palette.primary.main,
                },
                marginTop: "7px",
              }}
            >
              {mathSkillsSelect?.map((math) =>
                math.id === 1 ? (
                  <MenuItem disabled value={math.name} key={math.id}>
                    {math.name}
                  </MenuItem>
                ) : (
                  <MenuItem value={math.name} key={math.id}>
                    {math.name}
                  </MenuItem>
                ),
              )}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="learn">
              <FormattedMessage {...messages.learnLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("learn", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {learnRadioGroup?.map((learn) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={learn.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={learn.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="sequence">
              <FormattedMessage {...messages.sequenceLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("sequence", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {sequenceRadioGroup?.map((sequence) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={sequence.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={sequence.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="study">
              <FormattedMessage {...messages.studyLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("study", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {studyRadioGroup?.map((study) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={study.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={study.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={15}>
            <InputLabelWrapper htmlFor="play">
              <FormattedMessage {...messages.playLabel} />
            </InputLabelWrapper>
            {playRadioGroup?.map((play) => (
              <FormControlLabel
                sx={{
                  width: { md: "25%", xs: "100%" },
                  borderBottom: "1px solid",
                  marginBottom: 3,
                  margin: 0,
                  color: (theme) => theme.palette.secondary.dark,
                }}
                value={play.name}
                control={
                  <Checkbox
                    sx={{ color: (theme) => theme.palette.secondary.dark }}
                    onChange={(e) => {
                      if (setFieldValue) {
                        setFieldValue("played", e.target.value);
                      }
                    }}
                  />
                }
                label={play.name}
              />
            ))}
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="volunteer">
              <FormattedMessage {...messages.volunteerLabel} />
            </InputLabelWrapper>
            <RadioGroup
              sx={{ gap: "20px" }}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("volunteer", e.target.value);
                }
              }}
              name="radio-buttons-group"
              row
            >
              {radioChoice?.map((choice) => (
                <FormControlLabel
                  sx={{
                    width: { md: "50%", xs: "100%" },
                    marginRight: 0,
                    borderBottom: "1px solid",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={choice.name}
                  control={
                    <Radio
                      sx={{ color: (theme) => theme.palette.secondary.dark }}
                    />
                  }
                  label={choice.name}
                />
              ))}
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="hobbies">
              <FormattedMessage {...messages.hobbiesLabel} />
            </InputLabelWrapper>
            <TextField
              id="hobbies"
              name="hobbies"
              placeholder={hobbiesPlaceholder}
              fullWidth
              value={values.hobbies}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.hobbies && errors.hobbies)}
              disabled={disable}
              variant="standard"
              sx={{ marginTop: "12px" }}
            />
            {touched.hobbies && errors.hobbies && (
              <FormHelperText error id="standard-weight-helper-text-hobbies">
                {errors.hobbies}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};
