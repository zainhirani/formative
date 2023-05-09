import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import RegisterForm from "./RegisterForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import ThemeSwitcher from "components/ThemeSwitch";

const RegisterScreen: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
        <BoxWrapper
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        >
          <img
            src="https://collax-react.netlify.app/assets/img/contact/login.png"
            alt=""
          />
        </BoxWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <BoxWrapper>
          <Box sx={{ width: "80%" }}>
            <Box sx={{ float: "right", mt: -4 }}>
              <ThemeSwitcher />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" component="h3" mb={2}>
                <FormattedMessage {...messages.title} />
              </Typography>
              <Typography variant="subtitle2" component="p" mb={5}>
                <FormattedMessage {...messages.description} />
              </Typography>
            </Box>
            <Box>
              <RegisterForm />
            </Box>
          </Box>
        </BoxWrapper>
      </Grid>
    </Grid>
  );
};

export default RegisterScreen;

// import { useState, useCallback } from "react";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import {
//   Typography,
//   FormGroup,
//   FormControlLabel,
//   Switch,
//   Box,
//   Link,
// } from "@mui/material";
// import { ArrowForward } from "@mui/icons-material";
// import Zoom from "@mui/material/Zoom";
// import Alert from "@mui/material/Alert";
// import ErrorIcon from "@mui/icons-material/Error";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import LoadingButton from "@mui/lab/LoadingButton";

// import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";

// import ThemeSwitcher from "components/ThemeSwitch";
// import { useAuthContext } from "contexts/AuthContext";

// import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
// import Image from "theme/Image";

// import { LoginBox, MainWrapper, Description, SocialButton } from "./Styled";
// import messages from "./messages";

// const validationSchema = yup.object().shape({
//   email: yup.string().email().required("Required"),
//   password: yup
//     .string()
//     .min(6, "Minimum six character required")
//     .required("Required"),
// });

// export default function LoginScreen() {
//   const { signIn } = useAuthContext();
//   const [error, setError] = useState("");
//   const [showLoader, setShowLoader] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const emailLabel = useFormattedMessage(messages.emailLabel);
//   const passwordLabel = useFormattedMessage(messages.passwordLabel);
//   const rememberLabel = useFormattedMessage(messages.rememberLabel);

//   const onSubmit = useCallback(
//     async (data: any) => {
//       setShowLoader(true);
//       if (error) {
//         setError("");
//       }
//       const resp: any = await signIn("credentials", {
//         ...data,
//         redirect: false,
//       });
//       setShowLoader(false);
//       if (resp?.error) {
//         setError(resp.error);
//       }
//     },
//     [error],
//   );

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//     validationSchema,
//     onSubmit,
//   });

//   const {
//     values,
//     setFieldValue,
//     errors,
//     handleChange,
//     handleSubmit,
//     handleBlur,
//   } = formik;

//   return (
//     <MainWrapper>
//       <Box
//         sx={{
//           px: 5,
//           py: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <ThemeSwitcher />
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 2,
//         }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             color: (theme) => theme.palette.secondary.dark,
//             fontWeight: (theme) => theme.typography.fontWeightBold,
//             fontSize: "56px",
//           }}
//         >
//           <FormattedMessage {...messages.title} />
//         </Typography>
//         <Description variant="h6">
//           <FormattedMessage {...messages.description} />
//         </Description>
//       </Box>
//       <LoginBox component={"form"} onSubmit={handleSubmit as any}>
//         {/* <Typography
//           variant="h6"
//           sx={{
//             fontWeight: (theme) => theme.typography.fontWeightMedium,
//           }}
//         >
//           <FormattedMessage {...messages.signin} />
//         </Typography> */}
//         {/* <SocialButton>
//           <img src="/icons/Google_Icon.svg" alt="Google_Icon" />
//         </SocialButton> */}
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: (theme) => theme.typography.fontWeightLight,
//             mb: 3,
//           }}
//         >
//           <FormattedMessage {...messages.signinOption} />
//         </Typography>
//         {error ? (
//           <Zoom in>
//             <Alert severity="error" sx={{ mb: 4 }}>
//               {error}
//             </Alert>
//           </Zoom>
//         ) : null}
//         <FormControl sx={{ width: "100%", mb: 5 }}>
//           <InputLabel htmlFor="email">{emailLabel}</InputLabel>
//           <OutlinedInput
//             aria-label="email"
//             id="email"
//             autoFocus
//             name="email"
//             label={emailLabel}
//             placeholder={emailLabel}
//             autoComplete="off"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             error={formik.submitCount >= 1 ? !!errors?.email : undefined}
//             sx={{ mb: 4 }}
//           />
//           {errors.email && formik.submitCount >= 1 ? (
//             <FormHelperText
//               id="email"
//               sx={{ display: "flex", alignItems: "center", ml: 0 }}
//             >
//               <ErrorIcon fontSize="small" sx={{ mr: 1 }} />
//               {errors?.email}
//             </FormHelperText>
//           ) : null}
//         </FormControl>
//         <FormControl sx={{ width: "100%", mb: 5 }}>
//           <InputLabel htmlFor="email">{passwordLabel}</InputLabel>
//           <OutlinedInput
//             aria-label="password"
//             id="password"
//             name="password"
//             label={passwordLabel}
//             placeholder={passwordLabel}
//             autoComplete="off"
//             type={showPassword ? "text" : "password"}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={() => setShowPassword(!showPassword)}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             error={formik.submitCount >= 1 ? !!errors?.password : undefined}
//           />
//           {errors.password && formik.submitCount >= 1 ? (
//             <FormHelperText
//               id="email"
//               sx={{ display: "flex", alignItems: "center", ml: 0 }}
//             >
//               <ErrorIcon fontSize="small" sx={{ mr: 1 }} />
//               {errors?.password}
//             </FormHelperText>
//           ) : null}
//         </FormControl>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Switch
//                 id="rememberMe"
//                 name="rememberMe"
//                 checked={values.rememberMe}
//                 onChange={(e) =>
//                   setFieldValue("rememberMe", e.target.checked, true)
//                 }
//               />
//             }
//             label={rememberLabel}
//           />
//         </FormGroup>
//         <Box sx={{ mt: 3, position: "relative" }}>
//           <LoadingButton
//             aria-label="login"
//             fullWidth
//             size="large"
//             type="submit"
//             endIcon={<ArrowForward />}
//             loading={showLoader}
//             loadingPosition="end"
//             variant="contained"
//             sx={{
//               height: "56px",
//               borderRadius: (theme) => theme.borderRadius.radius2,
//             }}
//           >
//             <FormattedMessage {...messages.submit} />
//           </LoadingButton>
//         </Box>
//         <Typography sx={{ mt: 3 }}>
//           <FormattedMessage {...messages.problem} />
//           <Link
//             sx={{
//               pl: 1,
//               fontWeight: (theme) => theme.typography.fontWeightMedium,
//               cursor: "pointer",
//             }}
//           >
//             <FormattedMessage {...messages.request} />
//           </Link>
//         </Typography>
//       </LoginBox>
//     </MainWrapper>
//   );
// }
