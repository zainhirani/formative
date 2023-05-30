import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import PageLayout from "components/PageLayout";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ImageSection from "./addImage";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import messages from "./messages";
import Editor from "./Editor";
import {
  BoxWrapper,
  FieldBoxWrapper,
  InputLabelWrapper,
  TextFieldWrapper,
} from "./Styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const validationSchema = Yup.object().shape({
  authorName: Yup.string().required().label("Author Name"),
  password: Yup.string().required().min(6).label("Password"),
});

const CreateNewScreen = () => {
  const authorName = useFormattedMessage(messages.authorName);
  const status = useFormattedMessage(messages.status);

  const onSubmit = useCallback(async (data: any) => {
    // try {
    //   const response: any = await signIn("credentials", {
    //     ...data,
    //     redirect: false,
    //   });
    //   setLoading(true);
    //   if (!response?.ok) {
    //     setLoading(false);
    //     throw new Error("Request failed");
    //   }
    //   // setLoading(false);
    //   enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
    //     variant: "success",
    //   });
    //   localStorage.setItem(TOKEN, response?.data.token);
    // } catch (error: any) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   enqueueSnackbar(errorMessage, {
    //     variant: "error",
    //   });
    // }
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { authorName: "", password: "" },
      validationSchema,
      onSubmit,
    });
  return (
    <>
      <PageLayout
        icon={<HelpRoundedIcon />}
        title={"Questions > Create New Question"}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", minHeight: "800px" }}>
            <BoxWrapper
              sx={{
                width: "40%",
                marginRight: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: "20px",
                  py: "24px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FieldBoxWrapper>
                    <InputLabelWrapper htmlFor="authorName">
                      <FormattedMessage {...messages.author} />
                    </InputLabelWrapper>
                    <TextFieldWrapper
                      id="authorName"
                      name="authorName"
                      type="text"
                      value={values.authorName}
                      placeholder={authorName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.authorName && Boolean(errors.authorName)}
                      helperText={touched.authorName && errors.authorName}
                      autoComplete="off"
                      variant="standard"
                      fullWidth
                    />
                  </FieldBoxWrapper>
                  <FieldBoxWrapper>
                    <InputLabelWrapper htmlFor="authorName">
                      <FormattedMessage {...messages.statusLabel} />
                    </InputLabelWrapper>
                    <TextFieldWrapper
                      id="authorName"
                      name="authorName"
                      type="text"
                      value={status}
                      placeholder={status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.authorName && Boolean(errors.authorName)}
                      helperText={touched.authorName && errors.authorName}
                      autoComplete="off"
                      variant="standard"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="draft"
                              edge="end"
                            ></IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FieldBoxWrapper>
                </Box>
                {/* <Typography>
                  <FormattedMessage {...messages.author} />
                  <FormattedMessage {...messages.authorName} />
                </Typography>
                <Typography>
                  <FormattedMessage {...messages.status} />
                </Typography> */}
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    border: "1px solid",
                    borderLeft: "0",
                    borderRight: "0",
                    width: "50%",
                    borderTopLeftRadius: "5px",
                  }}
                >
                  <FormattedMessage {...messages.questNo} />
                  <FormattedMessage {...messages.questNoValue} />
                </Typography>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    border: "1px solid",
                    width: "50%",
                    borderRight: "0",
                    borderTopRightRadius: "5px",
                  }}
                >
                  <FormattedMessage {...messages.questType} />
                  <FormattedMessage {...messages.questTypeValue} />
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    border: "1px solid",
                    borderTop: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    width: "50%",
                  }}
                >
                  <FormattedMessage {...messages.public} />
                  {/* <FormattedMessage {...messages.questNoValue} /> */}
                </Typography>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    border: "1px solid",
                    borderTop: "0",
                    borderRight: "0",
                    width: "50%",
                  }}
                >
                  <FormattedMessage {...messages.limit} />
                  <FormattedMessage {...messages.limitValue} />
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    borderBottom: "1px solid",
                    width: "100%",
                  }}
                >
                  <FormattedMessage {...messages.folder} />
                  <FormattedMessage {...messages.folderValue} />
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    borderBottom: "1px solid",
                    width: "100%",
                  }}
                >
                  <FormattedMessage {...messages.category} />
                  <FormattedMessage {...messages.categoryValue} />
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    px: "20px",
                    py: "24px",
                    borderBottom: "1px solid",
                    width: "100%",
                  }}
                >
                  <FormattedMessage {...messages.categoriesForFaculty} />
                  <FormattedMessage {...messages.categoriesForFacultyValue} />
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                  <FormattedMessage {...messages.text1} />
                </Typography>
                <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                  <FormattedMessage {...messages.text2} />
                </Typography>
                <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                  <FormattedMessage {...messages.text3} />
                </Typography>
              </Box>
            </BoxWrapper>
            <Box sx={{ width: "60%" }}>
              <Box>{/* <Editor /> */}</Box>
              <Box>3</Box>
              <Box>
                <ImageSection />
              </Box>
            </Box>
          </Box>
        </form>
      </PageLayout>
    </>
  );
};

export default CreateNewScreen;
