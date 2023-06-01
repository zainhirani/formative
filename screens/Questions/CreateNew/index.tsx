import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
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
import CancelIcon from "@mui/icons-material/Cancel";
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
import TinyMCEEditor from "./Editor";

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
const folderSelect = [
  { id: 1, name: "/MedChem" },
  { id: 2, name: "/Physics" },
  { id: 3, name: "/Maths" },
];
const categorySelect = [
  { id: 1, name: "MC05 - Diuretics" },
  { id: 2, name: "MC06 - Diuretics" },
  { id: 3, name: "MC07 - Diuretics" },
];
const facultyCategorySelect = [
  { id: 1, name: "Select Multiple" },
  { id: 2, name: "BC06- Amino Acids" },
  { id: 3, name: "Appendix" },
  { id: 4, name: "B01 Biochemistry" },
];

const CreateNewScreen = () => {
  const authorName = useFormattedMessage(messages.authorName);
  const [questions, setQuestions] = useState("2573/1");
  const [types, setTypes] = useState("MCR");
  const [folders, setFolders] = useState("/MedChem");
  const [categories, setCategories] = useState("MC05 - Diuretics");
  const [faculties, setFaculties] = useState("Select Multiple");
  const [content, setContent] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;

    if (selectedValue && !selectedValues.includes(selectedValue)) {
      setSelectedValues([...selectedValues, selectedValue]);
    }
  };

  const handleRemoveValue = (value: any) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
  };
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

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

  const onSubmit = useCallback(async (data: any) => {}, []);

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
    initialValues: { authorName: "", password: "", limit: 0 },
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
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FieldBoxWrapper sx={{ width: "60%" }}>
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
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
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
                      disableUnderline
                      sx={{
                        ".MuiSvgIcon-root ": {
                          color: (theme) => theme.palette.text.secondary,
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
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
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
                      disableUnderline
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
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 0 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
                    <FormControlLabel
                      label="Public"
                      control={<Checkbox defaultChecked />}
                      sx={{
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        width: "200px",
                        ".MuiTypography-root": {
                          ml: "15px",
                        },
                        ".MuiSvgIcon-root": {
                          color: (theme) => theme.palette.text.secondary,
                        },
                        "&.Mui-checked": {
                          ".MuiSvgIcon-root": {
                            background: (theme) => theme.palette.text.secondary,
                            color: (theme) => theme.palette.primary.light,
                          },
                        },
                      }}
                    />
                  </FieldBoxWrapper>
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
                    <InputLabelWrapper sx={{ width: "50%" }} htmlFor="limit">
                      <FormattedMessage {...messages.limit} />
                    </InputLabelWrapper>
                    <TextFieldWrapper
                      id="limit"
                      name="limit"
                      type="number"
                      value={values.limit}
                      placeholder={authorName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      variant="standard"
                      fullWidth
                    />
                  </FieldBoxWrapper>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FieldBoxWrapper
                    sx={{
                      width: "100%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
                    <InputLabelWrapper
                      sx={{ width: "20%" }}
                      htmlFor="authorName"
                    >
                      <FormattedMessage {...messages.folder} />
                    </InputLabelWrapper>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={folders}
                      IconComponent={ExpandCircleDownOutlinedIcon}
                      onChange={(e) => {
                        if (setFieldValue) {
                          setFieldValue("folder", e.target.value);
                          setFolders(e.target.value);
                        }
                      }}
                      variant="standard"
                      fullWidth
                      disableUnderline
                      sx={{
                        ".MuiSvgIcon-root ": {
                          color: (theme) => theme.palette.text.secondary,
                        },
                      }}
                    >
                      {folderSelect?.map((folder) => (
                        <MenuItem value={folder.name} key={folder.id}>
                          {folder.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FieldBoxWrapper>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FieldBoxWrapper
                    sx={{
                      width: "100%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
                    <InputLabelWrapper
                      sx={{ width: "30%" }}
                      htmlFor="authorName"
                    >
                      <FormattedMessage {...messages.category} />
                    </InputLabelWrapper>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={categories}
                      IconComponent={ExpandCircleDownOutlinedIcon}
                      onChange={(e) => {
                        if (setFieldValue) {
                          setFieldValue("category", e.target.value);
                          setCategories(e.target.value);
                        }
                      }}
                      variant="standard"
                      fullWidth
                      disableUnderline
                      sx={{
                        ".MuiSvgIcon-root ": {
                          color: (theme) => theme.palette.text.secondary,
                        },
                      }}
                    >
                      {categorySelect?.map((category) => (
                        <MenuItem value={category.name} key={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FieldBoxWrapper>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <FieldBoxWrapper
                    sx={{
                      width: "100%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                    }}
                  >
                    <InputLabelWrapper
                      sx={{ width: "100%" }}
                      htmlFor="authorName"
                    >
                      <FormattedMessage {...messages.categoriesForFaculty} />
                    </InputLabelWrapper>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={faculties}
                        IconComponent={ExpandCircleDownOutlinedIcon}
                        onChange={handleSelectChange}
                        variant="standard"
                        fullWidth
                        disableUnderline
                        sx={{
                          ".MuiSvgIcon-root ": {
                            color: (theme) => theme.palette.text.secondary,
                          },
                        }}
                      >
                        {facultyCategorySelect?.map((faculty) =>
                          faculty.id === 0 ? (
                            <MenuItem
                              disabled
                              value={faculty.name}
                              key={faculty.id}
                            >
                              {faculty.name}
                            </MenuItem>
                          ) : (
                            <MenuItem value={faculty.name} key={faculty.id}>
                              {faculty.name}
                            </MenuItem>
                          ),
                        )}
                      </Select>
                    </FormControl>
                  </FieldBoxWrapper>
                  <Box sx={{ p: "0 24px" }}>
                    {selectedValues.length > 0 ? (
                      selectedValues.map((value) => (
                        <Box
                          sx={{ display: "flex", alignItems: "center" }}
                          key={value}
                        >
                          <Typography variant="body1">{value}</Typography>
                          <IconButton
                            color="primary"
                            onClick={() => handleRemoveValue(value)}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Box>
                      ))
                    ) : (
                      <Typography variant="body2">
                        No values selected.
                      </Typography>
                    )}
                  </Box>
                </Box>
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
              <BoxWrapper
                sx={{
                  ".tox-tinymce": { border: "none" },
                  ".tox:not(.tox-tinymce-inline) .tox-editor-header": {
                    boxShadow: "none",
                  },
                  ".tox .tox-toolbar__group": {
                    flexWrap: "nowrap",
                    overflowX: "auto",
                  },
                  ".tox .tox-statusbar": { display: "none " },
                }}
              >
                <TinyMCEEditor
                  initialValue={content}
                  handleEditorChange={handleEditorChange}
                />
              </BoxWrapper>
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
