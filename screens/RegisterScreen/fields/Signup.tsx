import {
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { RegisterProps } from "./formProps";
import { gender, program } from "./data";
import messages from "../messages";

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

  return (
    <>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.stepOneTitle} />}
        // subheader={<FormattedMessage {...messages.description} />}
      />
      <Typography sx={{ marginLeft: "15px" }}>
        <FormattedMessage {...messages.description} />
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-title">
              <FormattedMessage {...messages.firstNameLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-title"
              name="title"
              placeholder={firstNamePlaceholder}
              fullWidth
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.title && errors.title)}
              disabled={disable}
            />
            {touched.title && errors.title && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.title}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-description">
              <FormattedMessage {...messages.lastNameLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-description"
              name="description"
              placeholder={firstNamePlaceholder}
              multiline
              rows={4}
              fullWidth
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.description && errors.description)}
              disabled={disable}
            />
            {touched.description && errors.description && (
              <FormHelperText
                error
                id="standard-weight-helper-text-description"
              >
                {errors.description}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <InputLabelWrapper htmlFor="rate-price">
              <FormattedMessage {...messages.nickNameLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="rate-price"
              name="price"
              placeholder={lastNamePlaceholder}
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.price && errors.price)}
              disabled={disable}
            />
            {touched.price && errors.price && (
              <FormHelperText error id="standard-weight-helper-text-price">
                {errors.price}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};
