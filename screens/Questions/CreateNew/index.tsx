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
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { facultySelect } from "mock-data/Teacher/ManageQuestion";

const validationSchema = Yup.object().shape({
  authorName: Yup.string().required().label("Author Name"),
  password: Yup.string().required().min(6).label("Password"),
});

const questionSelect = [
  { value: "2573/1", label: "2573/1" },
  { value: "2574/1", label: "2574/1" },
  { value: "2574/1", label: "2574/1" },
];
const typeSelect = [
  { value: "MCR", label: "MCR" },
  { value: "NCR", label: "NCR" },
  { value: "SCR", label: "SCR" },
];
const folderSelect = [
  { value: "/MedChem", label: "/MedChem" },
  { value: "/Physics", label: "/Physics" },
  { value: "/Maths", label: "/Maths" },
];
const categorySelect = [
  { value: "MC05 - Diuretics", label: "MC05 - Diuretics" },
  { value: "MC06 - Diuretics", label: "MC06 - Diuretics" },
  { value: "MC07 - Diuretics", label: "MC07 - Diuretics" },
];
const facultyCategorySelect = [
  { value: 1, label: "Select Multiple" },
  { value: "BC06- Amino Acids", label: "BC06- Amino Acids" },
  { value: "Appendix", label: "Appendix" },
  { value: "B01 Biochemistry", label: "B01 Biochemistry" },
];

const CreateNewScreen = () => {
  const authorName = useFormattedMessage(messages.authorName);
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

  const question = useFormattedMessage(messages.questNo);
  const questionPlaceholder = useFormattedMessage(messages.questNoValue);
  const type = useFormattedMessage(messages.questType);
  const typePlaceholder = useFormattedMessage(messages.questTypeValue);
  const folder = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderValue);
  const category = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryValue);
  const faculty = useFormattedMessage(messages.categoriesForFaculty);
  const facultyPlaceholder = useFormattedMessage(
    messages.categoriesForFacultyValue,
  );

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
          <Box
            sx={{
              display: "flex",
              minHeight: "800px",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <BoxWrapper
              sx={{
                width: { md: "40%", xs: "100%" },
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
                <Box sx={{ display: "flex", width: "100%" }}>
                  <FieldBoxWrapper sx={{ width: { md: "57%", lg: "55%" } }}>
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
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <CustomSelect
                        placeholder={questionPlaceholder}
                        controlText={question}
                        dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                        options={questionSelect}
                      />
                    </Box>
                  </FieldBoxWrapper>
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 24px",
                      border: "1px solid #EAEAEA",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <CustomSelect
                        placeholder={typePlaceholder}
                        controlText={type}
                        dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                        options={typeSelect}
                      />
                    </Box>
                  </FieldBoxWrapper>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", width: "100%" }}>
                  <FieldBoxWrapper
                    sx={{
                      width: "50%",
                      padding: " 0 0 0 24px",
                      border: "1px solid #EAEAEA",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      label="Public"
                      control={<Checkbox defaultChecked />}
                      sx={{
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        width: "100%",
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
                      placeholder={"0"}
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
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <CustomSelect
                        placeholder={folderPlaceholder}
                        controlText={folder}
                        dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                        options={folderSelect}
                      />
                    </Box>
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
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <CustomSelect
                        placeholder={categoryPlaceholder}
                        controlText={category}
                        dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                        options={categorySelect}
                      />
                    </Box>
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
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <CustomSelect
                        placeholder={facultyPlaceholder}
                        controlText={faculty}
                        dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                        options={facultySelect}
                        onChange={handleSelectChange}
                      />
                    </Box>
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
                width: { md: "60%", xs: "100%" },
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                mt: { xs: "30px", md: "0" },
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
