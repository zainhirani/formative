import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import PageLayout from "components/PageLayout";
import ImageSection from "./addImage";
import QuestionListSection from "./listSection";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import messages from "./messages";
import Editor from "./Editor";
import {
  BoxWrapper,
  FieldBoxWrapper,
  InputLabelWrapper,
  SelectWrapper,
  TextFieldWrapper,
} from "./Styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircle, Delete } from "@material-ui/icons";
import { ButtonConfig } from "components/GroupedButton/types";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GroupedButton from "components/GroupedButton";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { SelectAllSharp } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  authorName: Yup.string().required().label("Author Name"),
  password: Yup.string().required().min(6).label("Password"),
});

const questionSelect = [
  { id: 1, name: "2573/1" },
  { id: 2, name: "2574/1" },
  { id: 3, name: "2574/1" },
];
const typeSelect = [
  { id: 1, name: "MCR" },
  { id: 2, name: "NCR" },
  { id: 3, name: "SCR" },
];

const CreateNewScreen = () => {
  const authorName = useFormattedMessage(messages.authorName);
  const [questions, setQuestions] = useState("2573/1");
  const [types, setTypes] = useState("MCR");

  const config: ButtonConfig[] = [
    {
      key: "submit",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Submit</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
      },
    },
    {
      key: "duplicate",
      startIcon: <ContentCopyIcon />,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {
        // console.log("Save");
      },
    },
    {
      key: "delete",
      startIcon: <Delete />,
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        // console.log("Duplicate");
      },
    },
  ];

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
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
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
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <InputLabelWrapper
                      sx={{ width: "100%" }}
                      htmlFor="authorName"
                    >
                      <FormattedMessage {...messages.statusLabel} />
                    </InputLabelWrapper>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: (theme) => theme.additionalColors?.primaryYellow,
                      }}
                    >
                      <SaveAsIcon style={{ fontSize: "20px" }} />{" "}
                      <FormattedMessage {...messages.status} />
                    </Box>
                  </Box>
                </Box>
                {/* <Typography>
                  <FormattedMessage {...messages.author} />
                  <FormattedMessage {...messages.authorName} />
                </Typography>
                <Typography>
                  <FormattedMessage {...messages.status} />
                </Typography> */}
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  // justifyContent: "space-between",
                  px: "20px",
                  py: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <FieldBoxWrapper sx={{ width: "50%" }}>
                    <InputLabelWrapper
                      sx={{ width: "80%" }}
                      htmlFor="authorName"
                    >
                      <FormattedMessage {...messages.questNo} />
                    </InputLabelWrapper>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={questions}
                      IconComponent={ExpandCircleDownOutlinedIcon}
                      onChange={(e) => {
                        if (setFieldValue) {
                          setFieldValue("question", e.target.value);
                          setQuestions(e.target.value);
                        }
                      }}
                      variant="standard"
                      fullWidth
                      sx={{
                        ".MuiSvgIcon-root ": {
                          color: (theme) => theme.palette.text.secondary,
                        },
                        ".MuiInputBase-root": {
                          "&::before": {
                            display: "none",
                          },
                          "&::after": {
                            display: "none",
                          },
                        },
                      }}
                    >
                      {questionSelect?.map((question) => (
                        <MenuItem value={question.name} key={question.id}>
                          {question.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FieldBoxWrapper>
                  <FieldBoxWrapper sx={{ width: "50%" }}>
                    <InputLabelWrapper htmlFor="authorName">
                      <FormattedMessage {...messages.questType} />
                    </InputLabelWrapper>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={types}
                      IconComponent={ExpandCircleDownOutlinedIcon}
                      onChange={(e) => {
                        if (setFieldValue) {
                          setFieldValue("type", e.target.value);
                          setTypes(e.target.value);
                        }
                      }}
                      variant="standard"
                      fullWidth
                      sx={{
                        ".MuiSvgIcon-root ": {
                          color: (theme) => theme.palette.text.secondary,
                        },
                      }}
                    >
                      {typeSelect?.map((type) => (
                        <MenuItem value={type.name} key={type.id}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FieldBoxWrapper>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: "20px",
                  py: "24px",
                }}
              >
                {/* <Typography>
                  <FormattedMessage {...messages.author} />
                  <FormattedMessage {...messages.authorName} />
                </Typography>
                <Typography>
                  <FormattedMessage {...messages.status} />
                </Typography> */}
              </Box>
              {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
              </Box> */}
              {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                  <FormattedMessage {...messages.questNoValue} />
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
              </Box> */}

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
            <Box
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Box>{/* <Editor /> */}</Box>
              <Box>
                <ImageSection />
              </Box>
              <BoxWrapper sx={{ p: "20px" }}>
                <QuestionListSection />
              </BoxWrapper>
            </Box>
          </Box>
          <Box sx={{ p: "40px 20px", float: "right" }}>
            <GroupedButton config={config} />
          </Box>
        </form>
      </PageLayout>
    </>
  );
};
export default CreateNewScreen;
