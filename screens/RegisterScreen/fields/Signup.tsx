import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { RegisterProps } from "./formProps";
import { genderSelect, programSelect } from "./data";
import messages from "../messages";
import { useState } from "react";

export const StepOne: React.FC<RegisterProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  disable,
}) => {
  const firstNamePlaceholder = useFormattedMessage(
    messages.firstNamePlaceholder,
  );
  const lastNamePlaceholder = useFormattedMessage(messages.lastNamePlaceholder);
  const nickNamePlaceholder = useFormattedMessage(messages.nickNamePlaceholder);
  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const rfuIDPlaceholder = useFormattedMessage(messages.rfuPlaceholder);
  const graduationPlaceholder = useFormattedMessage(
    messages.graduationPlaceholder,
  );
  const birthPlaceholder = useFormattedMessage(messages.birthPlaceholder);
  const userPlaceholder = useFormattedMessage(messages.userPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const confirmPasswordPlaceholder = useFormattedMessage(
    messages.confirmPasswordPlaceholder,
  );
  const [genders, setGenders] = useState("Select from the list");
  const [programs, setPrograms] = useState("Select from the list");
  const [year, setYear] = useState(2000);
  return (
    <>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.stepOneTitle} />}
      />
      <Typography sx={{ marginLeft: "15px" }}>
        <FormattedMessage {...messages.description} />
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="first-name">
              <FormattedMessage {...messages.firstNameLabel} />
            </InputLabelWrapper>
            <TextField
              id="first-name"
              name="firstName"
              placeholder={firstNamePlaceholder}
              fullWidth
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.firstName && errors.firstName)}
              disabled={disable}
              variant="standard"
            />
            {touched.firstName && errors.firstName && (
              <FormHelperText error id="standard-weight-helper-text-firstName">
                {errors.firstName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="last-name">
              <FormattedMessage {...messages.lastNameLabel} />
            </InputLabelWrapper>
            <TextField
              id="last-name"
              name="lastName"
              placeholder={lastNamePlaceholder}
              fullWidth
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.lastName && errors.lastName)}
              disabled={disable}
              variant="standard"
            />
            {touched.lastName && errors.lastName && (
              <FormHelperText error id="standard-weight-helper-text-lastName">
                {errors.lastName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="nick-name">
              <FormattedMessage {...messages.nickNameLabel} />
            </InputLabelWrapper>
            <TextField
              id="nick-name"
              name="nickName"
              placeholder={nickNamePlaceholder}
              fullWidth
              value={values.nickName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.nickName && errors.nickName)}
              disabled={disable}
              variant="standard"
            />
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="gender">
              <FormattedMessage {...messages.genderLabel} />
            </InputLabelWrapper>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genders}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("gender", e.target.value);
                }
                setGenders(e.target.value);
              }}
              disabled={disable}
              variant="standard"
              fullWidth
              sx={{
                ".MuiSvgIcon-root ": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              {genderSelect?.map((gender) =>
                gender.id === 0 ? (
                  <MenuItem disabled value={gender.name} key={gender.id}>
                    {gender.name}
                  </MenuItem>
                ) : (
                  <MenuItem value={gender.name} key={gender.id}>
                    {gender.name}
                  </MenuItem>
                ),
              )}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="email">
              <FormattedMessage {...messages.emailLabel} />
            </InputLabelWrapper>
            <TextField
              id="email"
              name="email"
              placeholder={emailPlaceholder}
              fullWidth
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.email && errors.email)}
              disabled={disable}
              variant="standard"
            />
            {touched.email && errors.email && (
              <FormHelperText error id="standard-weight-helper-text-email">
                {errors.email}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="rfuID">
              <FormattedMessage {...messages.rfuLabel} />
            </InputLabelWrapper>
            <TextField
              id="rfuID"
              name="rfuID"
              placeholder={rfuIDPlaceholder}
              fullWidth
              type="number"
              value={values.rfuID}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.rfuID && errors.rfuID)}
              disabled={disable}
              variant="standard"
            />
            {touched.rfuID && errors.rfuID && (
              <FormHelperText error id="standard-weight-helper-text-rfuID">
                {errors.rfuID}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="program">
              <FormattedMessage {...messages.programLabel} />
            </InputLabelWrapper>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={programs}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("program", e.target.value);
                  setPrograms(e.target.value);
                }
              }}

              disabled={disable}
              variant="standard"
              fullWidth
              sx={{
                ".MuiSvgIcon-root ": {
                  color: (theme) => theme.palette.primary.main,
                }}}
            >
              {programSelect?.map((program) =>
                program.id === 0 ? (
                  <MenuItem disabled value={program.name} key={program.id}>
                    {program.name}
                  </MenuItem>
                ) : (
                  <MenuItem value={program.name} key={program.id}>
                    {program.name}
                  </MenuItem>
                ),
              )}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="graduation">
              <FormattedMessage {...messages.graduationLabel} />
            </InputLabelWrapper>
            <TextField
              id="graduation"
              name="graduation"
              placeholder={graduationPlaceholder}
              fullWidth
              type="number"
              value={year}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.graduation && errors.graduation)}
              disabled={disable}
              variant="standard"
            />
            {touched.graduation && errors.graduation && (
              <FormHelperText error id="standard-weight-helper-text-graduation">
                {errors.graduation}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="birth-place">
              <FormattedMessage {...messages.birthLabel} />
            </InputLabelWrapper>
            <TextField
              id="birth-place"
              name="birthPlace"
              placeholder={birthPlaceholder}
              fullWidth
              value={values.birthPlace}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.birthPlace && errors.birthPlace)}
              disabled={disable}
              variant="standard"
            />
            {touched.birthPlace && errors.birthPlace && (
              <FormHelperText error id="standard-weight-helper-text-birthPlace">
                {errors.birthPlace}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="user-name">
              <FormattedMessage {...messages.userLabel} />
            </InputLabelWrapper>
            <TextField
              id="user-name"
              name="userName"
              placeholder={userPlaceholder}
              fullWidth
              value={values.userName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.userName && errors.userName)}
              disabled={disable}
              variant="standard"
            />
            {touched.userName && errors.userName && (
              <FormHelperText error id="standard-weight-helper-text-userName">
                {errors.userName}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="password">
              <FormattedMessage {...messages.passwordLabel} />
            </InputLabelWrapper>
            <TextField
              id="password"
              name="password"
              placeholder={passwordPlaceholder}
              fullWidth
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.password && errors.password)}
              disabled={disable}
              variant="standard"
            />
            {touched.password && errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password">
                {errors.password}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="confirmPassword">
              <FormattedMessage {...messages.confirmPasswordLabel} />
            </InputLabelWrapper>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              placeholder={confirmPasswordPlaceholder}
              fullWidth
              type="password"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              disabled={disable}
              variant="standard"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <FormHelperText
                error
                id="standard-weight-helper-text-confirmPassword"
              >
                {errors.confirmPassword}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};
