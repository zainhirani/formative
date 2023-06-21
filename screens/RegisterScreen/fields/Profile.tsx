//@ts-nocheck
import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  styled,
  useRadioGroup,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

import {
  IconButtonWrapper,
  InputLabelWrapper,
  LoadingButtonWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import * as Yup from "yup";
import {
  learnRadioGroup,
  radioChoice,
  sequenceRadioGroup,
  studyRadioGroup,
  playRadioGroup,
  mathSkillsSelect,
} from "./data";
import messages from "../messages";
import { useEffect, useState, useCallback, ChangeEvent } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useProfile } from "providers/Users";
import { useSnackbar } from "notistack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomeDatePicker from "components/CustomeDatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.additionalColors?.primaryBlack,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const validationSchema = Yup.object().shape({
  dob: Yup.string().label("Date of Birth"),
  pharmacy: Yup.string().required().label("Pharmacy"),
  partTime: Yup.string().required().label("Part Time"),
  bioChemistry: Yup.string().required().label("Bio Chemistry"),
  maths: Yup.string().required().label("Maths"),
  learn: Yup.string().required().label("Learn"),
  sequence: Yup.string().required().label("Sequence"),
  study: Yup.string().required().label("Study"),
  played: Yup.string().required().label("Played"),
  volunteer: Yup.string().required().label("Volunteer"),
  hobbies: Yup.string().required().label("Hobbies"),
});

export const StepTwo = ({}) => {
  const dobPlaceholder = useFormattedMessage(messages.dobPlaceholder);
  const pharmacyPlaceholder = useFormattedMessage(messages.pharmacyPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const hobbiesPlaceholder = useFormattedMessage(messages.hobbiesPlaceholder);
  const [math, setMath] = useState("Select an option for the list");
  const [experience, setExperience] = useState(0);
  const [dobValue, setDobValue] = useState(null);
  const profile = useProfile();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

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

  let checked = false;
  const radioGroup = useRadioGroup();
  if (radioGroup) {
    checked = radioGroup.value;
  }

  useEffect(() => {
    if (profile.isSuccess) {
      enqueueSnackbar(
        <FormattedMessage {...messages.profileSuccessMessage} />,
        {
          variant: "success",
        },
      );
      router.replace("/");
      // localStorage.setItem(TOKEN, profile?.data.token);
      // handleNext();
    }
  }, [profile.isSuccess]);

  useEffect(() => {
    if (profile.isError) {
      const errorMessage = profile.error.message;
      enqueueSnackbar(errorMessage, {
        variant: "error",
      });
    }
  }, [profile.isError]);

  const onSubmit = (data: any) => {
    profile.mutate({
      date_of_birth: dobValue,
      experience: data.pharmacy,
      working_part_time: data.partTime === "Yes" ? true : false,
      athlete: data.played,
      concept: data.learn,
      hobbies: data.hobbies,
      learning_sequence: data.sequence,
      math_skills: data.maths,
      study_prefer: data.study,
      taken_biochemistry: data.bioChemistry === "Yes" ? true : false,
      volunteer: data.volunteer === "Yes" ? true : false,
    });
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      dob: "",
      pharmacy: 0,
      partTime: false,
      bioChemistry: false,
      maths: "",
      learn: "",
      sequence: "",
      study: "",
      played: "",
      volunteer: false,
      hobbies: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="dob">
                <FormattedMessage {...messages.dobLabel} />
              </InputLabelWrapper>
              <CustomeDatePicker
                value={dobValue}
                onChange={(e: any) => {
                  setDobValue(e);
                  handleChange;
                }}
                components={{ OpenPickerIcon: CalendarMonthIcon }}
                sx={{
                  ".MuiBox-root": { borderLeft: "none" },
                  width: "100%",
                  borderBottom: "1px solid",
                  ".MuiSvgIcon-root": {
                    color: (theme: any) => theme.palette.primary.main,
                  },
                  ".MuiInputBase-input": {
                    padding: "0 10px 8px 0",
                  },
                }}
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
                defaultValue={experience}
                inputProps={{ min: 0, max: 50 }}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.pharmacy && errors.pharmacy)}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        right: 0,
                        top: "5%",
                      }}
                      position="end"
                    >
                      <IconButtonWrapper onClick={increment}>
                        <ArrowDropUpOutlinedIcon />
                      </IconButtonWrapper>
                      <IconButtonWrapper onClick={decrement}>
                        <ArrowDropDownOutlinedIcon />
                      </IconButtonWrapper>
                    </InputAdornment>
                  ),
                }}
              />
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
                sx={{
                  gap: "20px",
                }}
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("partTime", e.target.value);
                  }
                }}
                name="radio-buttons-group"
                row
                id="partTime"
              >
                {radioChoice?.map((choice) => (
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                      // ".MuiFormControlLabel-label": checked && {
                      //   color: "red",
                      // },
                    }}
                    value={choice.name}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={choice.name}
                  />
                ))}
              </RadioGroup>
              {touched.partTime && errors.partTime && (
                <FormHelperText error id="standard-weight-helper-text-partTime">
                  {errors.partTime}
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
                id="bioChemistry"
              >
                {radioChoice?.map((choice) => (
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                    }}
                    value={choice.name}
                    control={
                      <Radio
                        sx={{
                          color: (theme) => theme.palette.secondary.dark,
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={choice.name}
                  />
                ))}
              </RadioGroup>
              {touched.bioChemistry && errors.bioChemistry && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-bioChemistry"
                >
                  {errors.bioChemistry}
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
                variant="standard"
                fullWidth
                sx={{
                  ".MuiSvgIcon-root ": {
                    color: (theme) => theme.palette.primary.main,
                  },
                  marginTop: "10px",
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
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                    }}
                    value={learn.name}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={learn.name}
                  />
                ))}
              </RadioGroup>
              {touched.learn && errors.learn && (
                <FormHelperText error id="standard-weight-helper-text-learn">
                  {errors.learn}
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
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                    }}
                    value={sequence.name}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={sequence.name}
                  />
                ))}
              </RadioGroup>
              {touched.sequence && errors.sequence && (
                <FormHelperText error id="standard-weight-helper-text-sequence">
                  {errors.sequence}
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
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                    }}
                    value={study.name}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={study.name}
                  />
                ))}
              </RadioGroup>
              {touched.study && errors.study && (
                <FormHelperText error id="standard-weight-helper-text-study">
                  {errors.study}
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
                    margin: 0,
                    mb: "20px",
                    color: (theme) => theme.palette.secondary.dark,
                  }}
                  value={play.name}
                  control={
                    <Checkbox
                      sx={{
                        color: (theme) => theme.palette.secondary.dark,
                        ".MuiFormControlLabel-label": {
                          color: (theme) =>
                            theme.additionalColors?.primaryBlack,
                        },
                        "&.Mui-checked": {
                          ".MuiSvgIcon-root": {
                            background: (theme) =>
                              theme.additionalColors?.primaryBlack,
                            color: (theme) => theme.palette.primary.light,
                          },
                        },
                      }}
                      onChange={(e) => {
                        if (setFieldValue) {
                          setFieldValue("played", e.target.value);
                        }
                      }}
                    />
                  }
                  label={play.name}
                  // sx={{
                  //   color: Object.values(checkedItems).some(
                  //     (isChecked) => isChecked,
                  //   )
                  //     ? (theme) => theme.additionalColors?.primaryBlack
                  //     : (theme) => theme.palette.secondary.dark,
                  // }}
                />
              ))}
              {touched.played && errors.played && (
                <FormHelperText error id="standard-weight-helper-text-played">
                  {errors.played}
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
                  <MyFormControlLabel
                    sx={{
                      width: { md: "50%", xs: "100%" },
                      marginRight: 0,
                      borderBottom: "1px solid",
                      color: (theme) => theme.palette.secondary.dark,
                      // ".MuiFormControlLabel-label": checked && {
                      //   color: (theme) => theme.palette.primary.main,
                      // },
                    }}
                    value={choice.name}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: (theme) =>
                              theme.additionalColors?.primaryBlack,
                          },
                        }}
                      />
                    }
                    label={choice.name}
                  />
                ))}
              </RadioGroup>
              {touched.volunteer && errors.volunteer && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-volunteer"
                >
                  {errors.volunteer}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              width: { md: "75%", xs: "100%", xl: "65%" },
              display: "flex",
              mt: "10px",
              justifyContent: { xs: "center", md: "end" },
            }}
          >
            <LoadingButtonWrapper
              variant="contained"
              type="submit"
              disabled={
                // values.dob &&
                (values.pharmacy &&
                  values.partTime &&
                  values.bioChemistry &&
                  values.maths &&
                  values.learn &&
                  values.sequence &&
                  values.study &&
                  values.played &&
                  values.volunteer &&
                  values.hobbies) === ""
              }
              loading={profile.isLoading}
              loadingPosition="start"
              sx={{
                width: { xs: "100%", md: "500px" },
                ".MuiLoadingButton-loadingIndicator": {
                  top: "35%",
                  left: "35%",
                },
              }}
            >
              <FormattedMessage {...messages.profile} />
            </LoadingButtonWrapper>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "end", xs: "center" },
              width: { md: "25%", xs: "100%", xl: "35%" },
              mr: 1,
              mt: { xs: "10px", md: 0 },
            }}
          >
            <Button
              onClick={() => {
                router.push("/");
              }}
              sx={{
                textDecoration: "none",
                color: (theme) => theme.palette.primary.main,
                textTransform: "initial",
                fontWeight: "500",
              }}
            >
              <FormattedMessage {...messages.skip} />
              <IconButtonWrapper>
                <ArrowForwardIcon />
              </IconButtonWrapper>
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
