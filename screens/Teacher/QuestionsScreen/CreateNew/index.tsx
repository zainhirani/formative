// @ts-nocheck
import { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Delete } from "@material-ui/icons";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

import { useSnackbar } from "notistack";
import ImagePreview from "./ImagePreview";
import AnswerOptions from "./Answers";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import {
  BoxWrapper,
  FieldBoxWrapper,
  InputLabelWrapper,
  TextFieldWrapper,
} from "./Styled";
import { ButtonConfig } from "components/GroupedButton/types";
import GroupedButton from "components/GroupedButton";
import TinyMCEEditor from "./Editor";
import CustomSelect from "components/CustomSelect/CustomSelect";
import {
  formatArrayOfObjectsForFormData,
  formatOptions,
  isStringNotURL,
} from "utils";
import {
  useAddQuestion,
  useDeleteQuestion,
  useDuplicateQuestion,
  useGetCategories,
  useGetFolders,
  useGetQuestionCountId,
  useQuestionDetails,
  useUpdateQuestion,
} from "providers/Teacher_Questions";
import OverlayLoader from "components/OverlayLoader";
import { useAuthContext } from "contexts/AuthContext";
import Head from "next/head";
import { TYPES, TYPE_OPTIONS } from "constants/Types";
import { STATUS } from "constants/Status";
import { useTheme } from "@mui/material/styles";
import { PUBLIC_IMAGE_URL } from "configs";
import { useRegisterDetail } from "providers/Auth";

interface QuestionProps {
  qId?: any;
}

const AddQuestion = ({ qId }: QuestionProps) => {
  const theme = useTheme();
  let { enqueueSnackbar } = useSnackbar();
  // const { currentUser } = useAuthContext();
  const currentUser = useRegisterDetail();

  // Queries
  const deleteQuestion = useDeleteQuestion();
  const duplicateQuestion = useDuplicateQuestion();
  const foldersData = useGetFolders();
  const categoriesData = useGetCategories();
  const questionCountData = useGetQuestionCountId();
  const updateQuestion = useUpdateQuestion();
  const addQuestion = useAddQuestion();
  const questionDetails = useQuestionDetails({
    questionId: qId,
  });

  // States
  const [questionId, setQuestionId] = useState("121/1");
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [detail, setDetail] = useState("");
  const [answerOptions, setAnswerOptions] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [media, setMedia] = useState(null);
  const [enumType, setEnumType] = useState(null);
  const [status, setStatus] = useState(STATUS.DRAFT);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [timelimit, setTimelimit] = useState();
  const authorNamePlaceholder = useFormattedMessage(messages.authorName);
  const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] = useState(
    [],
  );
  const [answer, setAnswer] = useState("");
  const [tolerence, setTolerence] = useState("");
  const [attempts, setAttempts] = useState("");

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

  useEffect(() => {
    setAuthorName(
      `${currentUser?.data?.first_name} ${currentUser?.data?.last_name}`,
    );
    setQuestionId(questionCountData.data?.count + 1);
  }, [currentUser, questionCountData]);

  useEffect(() => {
    if (qId && questionDetails.data) {
      const details = questionDetails.data;

      if (details.media) {
        let url = "";
        url = `${PUBLIC_IMAGE_URL}/${details.media}`;
        setMedia(url);
      }

      setStatus(details?.status);
      setTitle(details?.title);
      setQuestionId(details?.id);
      setEnumType({ label: details?.type, value: details?.type });
      setIsPublic(details.isPublic);
      setTimelimit(details.timelimit);
      setSelectedFolder({
        label: details?.folders.name,
        value: details?.folders.id,
      });
      setSelectedCategory({
        label: details?.categories.name,
        value: details?.categories.id,
      });
      setSelectedFacultyCategoryIds([
        { label: details?.categories.name, value: details?.categories.id },
      ]);
      setDetail(details.detail);

      if ([TYPES.SA, TYPES.NUM].includes(details?.type)) {
        setAnswer(details?.answer);
        setAttempts(details?.attempts);
        if (details.type == TYPES.NUM) {
          setTolerence(details?.acceptable_ans);
        }
      } else {
        setAnswerOptions(formatOptions(details?.option, details?.answer));
      }
    }
  }, [questionDetails.data, qId]);

  const BUTTONS_CONFIG: ButtonConfig[] = [
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
      disabled: !Boolean(qId),
      onClick: () => {
        duplicateQuestion.mutate(qId);
      },
    },
    {
      key: "delete",
      startIcon: <Delete />,
      disabled: !Boolean(qId),
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        deleteQuestion.mutate(qId);
      },
    },
  ];

  const handleSubmit = () => {
    if (!validateForm()) return;

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
    let formattedCategoryIds = selectedfacultyCategoryIds.map((item) =>
      Number(item.value),
    );
    // formdata.append("tries", "3");
    formdata.append("folderId", selectedFolder.value);
    formdata.append("timelimit", timelimit);
    formdata.append("detail", detail);
    formdata.append("status", status);
    formdata.append("isPublic", isPublic);
    formdata.append("title", title);
    formdata.append("categoryId", selectedCategory.value);
    formdata.append("facultyId", formattedCategoryIds);
    formdata.append("type", enumType.value);
    formdata.append(
      "answer",
      `${
        [TYPES.SA, TYPES.NUM].includes(enumType.value)
          ? answer
          : correctAnswer.join(",")
      }`,
    );

    if (![TYPES.SA, TYPES.NUM].includes(enumType.value)) {
      formatArrayOfObjectsForFormData("option", formatedOptions, formdata);
    }

    if (enumType.value == TYPES.NUM) {
      formdata.append("acceptable_ans", parseInt(tolerence));
    }

    if ([TYPES.SA, TYPES.NUM].includes(enumType.value)) {
      formdata.append("attempt ", parseInt(attempts));
    }

    if (!qId && media) {
      formdata.append("img", media);
    }

    if (qId && isStringNotURL(media)) {
      formdata.append("img", media);
    }

    if (qId) {
      updateQuestion.mutate({ formdata, qId });
    } else {
      addQuestion.mutate(formdata);
    }
  };

  const validateForm = () => {
    let formArr = [
      {
        value: title,
        errorMsg: "Please enter a question title",
      },
      {
        value: enumType?.value,
        errorMsg: "Select a type",
      },
      {
        value: timelimit,
        errorMsg: "Please enter limit",
      },
      {
        value: selectedFolder?.value,
        errorMsg: "Select folder",
      },
      {
        value: selectedCategory?.value,
        errorMsg: "Select a category",
      },
      {
        value: selectedfacultyCategoryIds?.length,
        errorMsg: "Select atleast 1 faculty category",
      },
      {
        value: detail,
        errorMsg: "Please enter question details",
      },
      // ...(![TYPES.SA, TYPES.NUM].includes(enumType.value)
      //   ? [
      //       {
      //         value: answerOptions.length && answerOptions.length >= 2,
      //         errorMsg: "Add atleast 2 options for answer",
      //       },
      //       {
      //         value: answerOptions.find((item) => Boolean(item.correct)),
      //         errorMsg: "Select a correct answer",
      //       },
      //       {
      //         value: !Boolean(
      //           answerOptions.find((item) => !Boolean(item.inputText)),
      //         ),
      //         errorMsg: "Answer text is missing",
      //       },
      //     ]
      //   : [
      //       {
      //         value: answer,
      //         errorMsg: "Please enter the answer",
      //       },
      //       {
      //         value: attempts,
      //         errorMsg: "Please enter the attempts",
      //       },

      //       ...(enumType?.value == TYPES.NUM && [
      //         {
      //           value: tolerence,
      //           errorMsg: "Please enter the tolerance",
      //         },
      //       ]),
      //     ]),
    ];

    let notFilled = formArr.find((item) => !item.value);
    if (notFilled) {
      enqueueSnackbar(notFilled.errorMsg, {
        autoHideDuration: 2000,
        variant: "error",
      });
      return;
    } else {
      return true;
    }
  };

  const handleRemoveSelectedFacultyCategory = (value: any) => {
    setSelectedFacultyCategoryIds(
      selectedfacultyCategoryIds.filter((v) => v.value !== value.value),
    );
  };

  const STATUS_CLASSES = {
    [STATUS.ACTIVE]: {
      color: theme.additionalColors.activeStatusColor,
      icon: <CheckCircleIcon fontSize="small" />,
    },
    [STATUS.DRAFT]: {
      color: theme.additionalColors.draftStatusColor,
      icon: <SaveAsIcon fontSize="small" />,
    },
    [STATUS.INACTIVE]: {
      color: theme.additionalColors.inActiveStatusColor,
      icon: <DoNotDisturbOnIcon fontSize="small" />,
    },
  };

  useEffect(() => {
    console.log("Answer:", answer);
    console.log("Tolerance:", tolerence);
    console.log("Attempts:", attempts);
  }, [answer, tolerence, attempts]);

  return (
    <>
      <Head>
        <title>Add Question</title>
      </Head>
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
                      color: [STATUS_CLASSES[status].color],
                    }}
                  >
                    {[STATUS_CLASSES[status].icon]}
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
              {/* Title */}
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
                    required
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
                  <InputLabelWrapper
                    htmlFor="authorName"
                    sx={{ whiteSpace: "normal", width: "100%" }}
                  >
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
                      name="type"
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
                    onChange={(e) => {
                      const inputValue = Math.max(
                        0,
                        parseInt(e.target.value, 10),
                      );
                      setTimelimit(inputValue);
                    }}
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    onKeyDown={(e) => {
                      if (
                        e.key === "-" ||
                        e.key === "e" ||
                        e.key === "+" ||
                        e.key === "."
                      ) {
                        e.preventDefault();
                      }
                    }}
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
                      name="folder"
                      placeholder={folderPlaceholder}
                      controlText={folder}
                      dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                      options={foldersData?.data?.data?.map((folder) => ({
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
                      name="category"
                      placeholder={categoryPlaceholder}
                      controlText={category}
                      dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                      options={categoriesData?.data?.data?.map((category) => ({
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
                      name="faculty"
                      placeholder={facultyPlaceholder}
                      controlText={faculty}
                      dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                      options={categoriesData?.data?.data?.map((category) => ({
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
                          onClick={() =>
                            handleRemoveSelectedFacultyCategory(item)
                          }
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
                value={detail}
                onChange={(val) => setDetail(val)}
              />
            </BoxWrapper>
            {/* Upload Image */}
            <Box>
              <ImagePreview
                src={media}
                onImageUpload={(uploadedImage) => {
                  setMedia(uploadedImage);
                }}
              />
            </Box>
            {/* Answers  */}
            <BoxWrapper sx={{ p: "20px" }}>
              <AnswerOptions
                questionType={enumType?.value}
                answerValue={answer}
                tolerenceValue={tolerence}
                attemptsValue={attempts}
                onAnswerValueChange={setAnswer}
                onTolerenceValueChange={setTolerence}
                onAttemptsValueChange={setAttempts}
                isEdit={qId}
                onChange={(options) => setAnswerOptions(options)}
                options={answerOptions}
              />
            </BoxWrapper>
          </Box>
        </Box>
        <Box sx={{ p: "40px 20px", float: "right" }}>
          <GroupedButton config={BUTTONS_CONFIG} />
        </Box>
        <OverlayLoader
          isShow={addQuestion.isLoading || updateQuestion.isLoading}
        />
      </form>
    </>
  );
};
export default AddQuestion;
