import React, { useCallback } from "react";
import { Box, Grid, InputLabel, Link, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
   email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
});
interface FormValues {
  email: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
} 

const ForgotForm: React.FC<Props> = ({onSubmit}) => {
  const router = useRouter();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "" },
      validationSchema,
      onSubmit,
    });

  const userPlaceholder = useFormattedMessage(messages.userPlaceholder);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <InputLabel
            sx={{ color: (theme) => theme.palette.text.primary }}
            htmlFor="password"
          >
            <FormattedMessage {...messages.userLabel} />
          </InputLabel>
          <TextField
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={userPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box>
        <ButtonWrapper
          disabled={values.email === ""}
          type="submit"
          variant="contained"
        >
          <FormattedMessage {...messages.submit} />
        </ButtonWrapper>
        <ButtonWrapper
          onClick={(e) => {
            e.preventDefault;
            router.push("login");
          }}
          sx={{
            color: (theme) => theme.palette.primary.main,
            background: "none",
            boxShadow: "none",
            border: "1px solid #EAEAEA",
            "&:hover": {
              color: (theme) => theme.palette.primary.light,
            },
          }}
          variant="contained"
        >
          <FormattedMessage {...messages.cancel} />
        </ButtonWrapper>
      </Box>
    </form>
  );
};

export default ForgotForm;
