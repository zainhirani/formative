import React, { useCallback } from "react";
import { Box, Grid, InputLabel, Link, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "./Styled";
// import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  user: Yup.string().required().label("User Name or E-mail Address"),
});

const ForgotForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  // const { signIn } = useAuthContext();

  const onSubmit = useCallback(async (data: any) => {
    // await signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // })
    //   .then((userCredential: any) => {
    //     const user = userCredential.user;

    //     if (user) {
    //       enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
    //         variant: "success",
    //       });
    //     } else if (userCredential.error) {
    //       enqueueSnackbar(userCredential.error, {
    //         variant: "error",
    //       });
    //     }
    //   })
    //   .catch((error: any) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     enqueueSnackbar(errorMessage, {
    //       variant: "error",
    //     });
    //   });
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { user: "" },
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
            id="user"
            name="user"
            type="text"
            value={values.user}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={userPlaceholder}
            error={touched.user && Boolean(errors.user)}
            helperText={touched.user && errors.user}
            autoComplete="off"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box>
        <ButtonWrapper
          disabled={values.user === ""}
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
