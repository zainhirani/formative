import React, { useCallback, useState } from "react";
import { Box, Grid, InputLabel, Link, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useRouter } from "next/router";
import { FormHelperText, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useResetPassword } from "providers/ForgotPassword";

const validationSchema = Yup.object().shape({
   password: Yup.string().required().label("Password")
});
interface FormValues {
  password: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
} 

const ResetPassword: React.FC<Props> = ({onSubmit}) => {

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = 
    useFormik({
      initialValues: { password: "" },
      validationSchema,
      onSubmit,
    });
    
  const resetPlaceholder = useFormattedMessage(messages.resetPlaceholder);




  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <InputLabel
            sx={{ color: (theme) => theme.palette.text.primary }}
            htmlFor="password"
          >
            <FormattedMessage {...messages.resetPasswordLabel} />
          </InputLabel>
          <Box display={"flex"} flexDirection={"column"} position={"relative"}>
            <TextField
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              placeholder={resetPlaceholder}
              error={touched.password && Boolean(errors.password)}
              autoComplete="off"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            {touched.password && errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password">
                {errors.password}
              </FormHelperText>
            )}
          </Box>
        </Grid>
      </Grid>
      <Box>
        <ButtonWrapper
          disabled={values.password === ""}
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

export default ResetPassword;
