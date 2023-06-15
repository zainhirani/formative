import { useEffect } from "react";
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
import AnswerOptions from "./listSection";
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
import { initialValues, validationSchema } from "./Form";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import {
  addQuestion,
  getCategories,
  getFolders,
  getQuestionCountId,
} from "providers/Teacher_Questions/api";
import { setAuthenticationHeader } from "services";
import { useRegisterDetail } from "providers/Auth";
import { formatArrayOfObjectsForFormData } from "utils";

const TYPE_OPTIONS = [
  { value: "SA", label: "SA" },
  { value: "MCN", label: "MCN" },
  { value: "MCR", label: "MCR" },
  { value: "MSN", label: "MSN" },
  { value: "MSR", label: "MSR" },
  { value: "MA", label: "MA" },
  { value: "F", label: "F" },
];

const STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DRAFT: "DRAFT",
};

const AddQuestion = () => {
  let { data: currentUser } = useSession();
  setAuthenticationHeader(currentUser?.accessToken);
  let userDetails = useRegisterDetail(currentUser.accessToken);

  const foldersData = useQuery(["FOLDERS"], getFolders);
  const categoriesData = useQuery(["CATEGORIES"], getCategories);
  const questionCountData = useQuery(["QUESTION_ID"], getQuestionCountId);

  // ======================= State

  const [questionId, setQuestionId] = useState("121/1");
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [detail, setDetail] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [answerOptions, setAnswerOptions] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [folderOptions, setFolderOptions] = useState([]);
  const [media, setMedia] = useState({});
  const [enumType, setEnumType] = useState({});
  const [status, setStatus] = useState(STATUS.DRAFT);
  const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] = useState(
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [timelimit, setTimelimit] = useState(0);
  const [tries, setTries] = useState(0);
  const [facultyIds, setFacultyIds] = useState<number[]>([]);

  //  ====================== State

  const authorNamePlaceholder = useFormattedMessage(messages.authorName);
  const [content, setContent] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (e: any) => {
    const selectedValue = e.label;
    if (selectedValue && !selectedValues.includes(selectedValue)) {
      setSelectedValues([...selectedValues, selectedValue]);
    }
  };

  const handleRemoveValue = (value: any) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
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
      onClick: () => handleSubmit(),
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

  const handleSubmit = async () => {
    var formdata = new FormData();
    let correctAnswer = [];
    let formatedOptions = answerOptions.map((item) => {
      if (item.correct)
        correctAnswer.push(item.text.replace("Option", "").trim());
      return {
        key: item.text.replace("Option", "").trim(),
        value: item.inputText,
      };
    });
    let formattedCategoryIds = selectedfacultyCategoryIds.map(
      (item) => item.value,
    );

    formdata.append("folderId", selectedFolder.value);
    formdata.append("timelimit", timelimit);
    formdata.append("detail", detail);
    formdata.append("status", status);
    formdata.append("isPublic", isPublic);
    formdata.append("title", title);
    formdata.append("categoryId", selectedCategory.value);
    formdata.append("facultyIds", formattedCategoryIds);
    // formdata.append("tries", "3");
    formdata.append("type", enumType.value);
    formdata.append("answer", `${correctAnswer.join(",")}`);
    formatArrayOfObjectsForFormData("option", formatedOptions, formdata);

    // formdata.append("img", media);
    // return;
    await addQuestion(formdata);
  };

  useEffect(() => {
    setAuthorName(
      `${userDetails.data?.first_name} ${userDetails.data?.last_name}`,
    );
    setQuestionId(questionCountData.data?.count + 1);
  }, [userDetails, questionCountData]);

  return (
    <>
      {/* <PageLayout
        iconAngle={true}
        subText="Create New Questions"
        icon={<HelpRoundedIcon />}
        title={"Questions"}
      > */}
      <form>
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

                  {/* Author Name */}
                  <TextFieldWrapper
                    disabled
                    id="authorName"
                    name="authorName"
                    type="text"
                    value={authorName}
                    placeholder={authorNamePlaceholder}
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
                  {/* Status */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      color: (theme) => theme.additionalColors?.primaryYellow,
                    }}
                  >
                    <SaveAsIcon style={{ fontSize: "20px" }} />
                    <div>{status}</div>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: "20px",
                borderTop: "1px solid #EAEAEA",
              }}
            >
              <Box sx={{ display: "flex", width: "100%" }}>
                <FieldBoxWrapper
                  sx={{
                    width: { md: "57%", lg: "55%" },
                  }}
                >
                  <InputLabelWrapper htmlFor="questionTitle">
                    <div>Title: </div>
                  </InputLabelWrapper>

                  {/* Question Title */}
                  <TextFieldWrapper
                    id="questionTitle"
                    name="questionTitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={"Question title"}
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
                {/* Question Id */}
                <FieldBoxWrapper
                  sx={{
                    width: "50%",
                    padding: " 0 24px",
                    border: "1px solid #EAEAEA",
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabelWrapper htmlFor="authorName">
                    <FormattedMessage {...messages.questNo} />
                  </InputLabelWrapper>

                  {/* Author Name */}
                  <TextFieldWrapper
                    disabled
                    id="questionId"
                    name=""
                    type="text"
                    value={questionId}
                    placeholder={questionPlaceholder}
                    variant="standard"
                    fullWidth
                  />
                </FieldBoxWrapper>
                <FieldBoxWrapper
                  sx={{
                    width: "50%",
                    padding: " 0 24px",
                    border: "1px solid #EAEAEA",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Type */}
                  <Box sx={{ width: "100%" }}>
                    <CustomSelect
                      onChange={(val: object) => setEnumType(val)}
                      value={enumType}
                      placeholder={typePlaceholder}
                      controlText={type}
                      dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                      options={TYPE_OPTIONS}
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
                {/* Public Checkbox */}
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
                    control={
                      <Checkbox
                        defaultChecked
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
                      />
                    }
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
                {/* Limit */}
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
                    value={timelimit}
                    placeholder={"0"}
                    onChange={(e) => setTimelimit(e.target.value)}
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
                {/* Folders */}
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
                      options={foldersData?.data?.map((folder) => ({
                        label: folder.name,
                        value: folder.id,
                      }))}
                      value={selectedFolder}
                      onChange={(val) => setSelectedFolder(val)}
                      isFetching={foldersData?.isFetching}
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
                {/* Category */}
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
                      options={categoriesData?.data?.map((category) => ({
                        label: category.name,
                        value: category.id,
                      }))}
                      onChange={(val) => setSelectedCategory(val)}
                      value={selectedCategory}
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
                {/* Faculty Category */}
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
                      isMulti
                      placeholder={facultyPlaceholder}
                      controlText={faculty}
                      dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                      options={categoriesData?.data?.map((category) => ({
                        label: category.name,
                        value: category.id,
                      }))}
                      onChange={(val) => {
                        setSelectedFacultyCategoryIds(val);
                      }}
                      value={selectedfacultyCategoryIds}
                    />
                  </Box>
                </FieldBoxWrapper>
                <Box sx={{ p: "0 24px" }}>
                  {selectedfacultyCategoryIds?.length > 0 ? (
                    selectedfacultyCategoryIds.map((item, index) => (
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        key={index}
                      >
                        <Typography variant="body1">{item.label}</Typography>
                        <IconButton
                          color="primary"
                          onClick={() => handleRemoveValue(value)}
                        >
                          <CancelIcon />
                        </IconButton>
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body2">No values selected.</Typography>
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
            {/* Question Details */}
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
                initialValue={detail}
                onChange={(val) => setDetail(val)}
              />
            </BoxWrapper>
            {/* Upload Image */}
            <Box>
              <ImageSection
                onImageUpload={(uploadedImage) => {
                  console.log(uploadedImage);
                  setMedia(uploadedImage);
                }}
              />
            </Box>
            <BoxWrapper sx={{ p: "20px" }}>
              <AnswerOptions
                onChange={(options) => setAnswerOptions(options)}
              />
            </BoxWrapper>
          </Box>
        </Box>
        <Box sx={{ p: "40px 20px", float: "right" }}>
          <GroupedButton config={config} />
        </Box>
      </form>
      {/* </PageLayout> */}
    </>
  );
};
export default AddQuestion;
