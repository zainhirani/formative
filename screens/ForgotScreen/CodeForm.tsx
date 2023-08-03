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
   code: Yup.string()
    .required('Code is required')
});
interface FormValues {
  code: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
} 

const CodeForm: React.FC<Props> = ({onSubmit}) => {
  const router = useRouter();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { code: "" },
      validationSchema,
      onSubmit,
    });

  const codePlaceholder = useFormattedMessage(messages.codePlaceholder);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <InputLabel
            sx={{ color: (theme) => theme.palette.text.primary }}
            htmlFor="code"
          >
            <FormattedMessage {...messages.codeLabel} />
          </InputLabel>
          <TextField
            id="code"
            name="code"
            type="text"
            value={values.code}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={codePlaceholder}
            error={touched.code && Boolean(errors.code)}
            helperText={touched.code && errors.code}
            autoComplete="off"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box>
        <ButtonWrapper
          disabled={values.code === ""}
          type="submit"
          variant="contained"
        >
          <FormattedMessage {...messages.verify} />
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

export default CodeForm;
