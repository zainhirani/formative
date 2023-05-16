import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
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

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { RegisterProps } from "./formProps";
import { genderSelect, programSelect } from "./data";
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
  const [year, setYear] = useState(2023);
  return (
    <>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.stepTwoTitle} />}
      />
      <Typography sx={{ marginLeft: "15px" }}>
        <FormattedMessage {...messages.description} />
      </Typography>
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
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="pharmacy">
              <FormattedMessage {...messages.pharmacyLabel} />
            </InputLabelWrapper>
            <TextField
              id="pharmacy"
              name="pharmacy"
              placeholder={pharmacyPlaceholder}
              fullWidth
              type="number"
              value={values.pharmacy}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.pharmacy && errors.pharmacy)}
              disabled={disable}
              variant="standard"
            />
            {touched.pharmacy && errors.pharmacy && (
              <FormHelperText error id="standard-weight-helper-text-pharmacy">
                {errors.pharmacy}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="part-time">
              <FormattedMessage {...messages.partTimeLael} />
            </InputLabelWrapper>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {touched.nickName && errors.nickName && (
              <FormHelperText error id="standard-weight-helper-text-nickName">
                {errors.nickName}
              </FormHelperText>
            )}
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <InputLabelWrapper htmlFor="gender">
              <FormattedMessage {...messages.genderLabel} />
            </InputLabelWrapper>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={values.gender}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("gender", e.target.value);
                }
              }}
              disabled={disable}
              variant="standard"
              fullWidth
            >
              {genderSelect?.map((gender) =>
                gender.id === 0 ? (
                  <MenuItem
                    selected={true}
                    disabled
                    value={gender.name}
                    key={gender.id}
                  >
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
              value={values.program}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("program", e.target.value);
                }
              }}
              disabled={disable}
              variant="standard"
              fullWidth
            >
              {programSelect?.map((program) =>
                program.id === 0 ? (
                  <MenuItem selected value={program.name} key={program.id}>
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
              value={values.graduation}
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
          </Grid> */}
        </Grid>
      </CardContent>
    </>
  );
};
