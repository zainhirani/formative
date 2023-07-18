// @ts-nocheck
import React, { useState, useEffect } from "react";
import SideDrawer from "components/Drawer";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextFieldStyled } from "../../Styled";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";
import { useQuestionsListing } from "providers/Teacher_Questions";
import { useQuery } from "react-query";
import { getCategories, getFolders } from "providers/Teacher_Questions/api";
import { debounce } from "lodash";

const TYPE_OPTIONS = [
  { value: "SA", label: "SA" },
  { value: "MCN", label: "MCN" },
  { value: "MCR", label: "MCR" },
  { value: "MSN", label: "MSN" },
  { value: "MSR", label: "MSR" },
  { value: "MA", label: "MA" },
  { value: "F", label: "F" },
];
const pageSizeQues: any = 8;
const DrawerQuestionsSection = (props: any) => {
  const {
    drawerOpen,
    setDrawerOpen,
    setSelectedQuestions,
    selectedQuestions,
    COLUMNS_CONFIG,
  } = props;
  const [searchChange, setSearchChange] = useState("");
  const [folder, setFolder] = useState("");
  const [facultyCategory, setFacultyCategory] = useState<any[]>([]);
  const [enumType, setEnumType] = useState("");
  const [enumTypeObj, setEnumTypeObj] = useState("");
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] = useState<
    any[] | undefined | null
  >(null);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { data: questions, refetch: refQuestions } = useQuestionsListing({
    Limit: pageSizeQues,
    Page: page,
    ...(facultyCategory?.length > 0 && { facultyId: facultyCategory }),
    ...(folder && { folderId: folder }),
    ...(enumType && { type: enumType }),
    ...(category && { categories: category }),
    ...(searchChange && { SearchBy: searchChange }),
  });
  useEffect(() => {
    refQuestions({
      Limit: pageSizeQues,
      Page: page,
      ...(facultyCategory?.length > 0 && { facultyId: facultyCategory }),
      ...(folder && { folderId: folder }),
      ...(enumType && { type: enumType }),
      ...(category && { categories: category }),
      ...(searchChange && { SearchBy: searchChange }),
    });
  }, [searchChange, category, enumType, folder, facultyCategory, page]);
  const foldersData = useQuery(["FOLDERS"], getFolders);
  const categoriesData = useQuery(["CATEGORIES"], getCategories);

  const faculty_name = useFormattedMessage(messages.faculty);
  const facultyPlaceholder = useFormattedMessage(messages.facultyPlaceholder);
  const folder_name = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type_name = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category_name = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryPlaceholder);

  const handleDrawerCloseQuestion = () => {
    setDrawerOpen(false);
  };
  const handleRemoveSelectedFacultyCategory = (value: any) => {
    let arr = [];
    (arr = selectedfacultyCategoryIds?.filter(
      (obj: any) => obj?.value !== value.value,
    )),
      setSelectedFacultyCategoryIds([...arr]);
    let arr2 = arr.map((item: any) => item.value);
    setFacultyCategory([...arr2]);
  };

  const debouncedSearch = debounce((criteria) => {
    setSearchChange(criteria);
  }, 400);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  const config = [
    {
      key: "createNew",
      startIcon: <AddCircleOutlineIcon fontSize="small" />,
      customClass: "filled",
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.createNew} />
          </Box>
        );
      },
      onClick: () => {
        router.push(APP_ROUTES.QUESTIONS_CREATE_NEW);
      },
    },
  ];
  return (
    <>
      <SideDrawer
        title="Add Questions"
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
        isHelp={true}
      >
        <Box>
          <TextFieldStyled
            placeholder={"Search a keyword ..."}
            variant="outlined"
            onChange={onInputChange}
            InputProps={{
              style: { border: "none", outline: "0px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <BoxWrapper sx={{ boxShadow: "none", mt: "0" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SelectBoxWrapper  sx={{ zIndex: "2" }}>
                {/* :TODO: Faculty */}
                <CustomSelect
                  placeholder={facultyPlaceholder}
                  controlText={faculty_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  value={selectedCategory}
                  options={categoriesData?.data?.data?.map((category: any) => ({
                    label: category.name,
                    value: category.id,
                  }))}
                  isFetching={categoriesData?.isFetching}
                  isClearable={true}
                  onChange={(val: any) => {
                    setCategory(val?.value);
                    setSelectedCategory(val);
                  }}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <CustomSelect
                  placeholder={folderPlaceholder}
                  controlText={folder_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={foldersData?.data?.data?.map((folder: any) => ({
                    label: folder.name,
                    value: folder.id,
                  }))}
                  isClearable={true}
                  value={selectedFolder}
                  onChange={(val: any) => {
                    setFolder(val?.value);
                    setSelectedFolder(val);
                  }}
                  isFetching={foldersData?.isFetching}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <CustomSelect
                  value={enumTypeObj}
                  placeholder={typePlaceholder}
                  controlText={type_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={TYPE_OPTIONS}
                  isClearable={true}
                  onChange={(val: any) => {
                    setEnumTypeObj(val);
                    setEnumType(val?.value);
                  }}
                />
              </SelectBoxWrapper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SelectBoxWrapper sx={{ width: "48.5%", zIndex: "1" }}>
                <CustomSelect
                  isMulti
                  placeholder={categoryPlaceholder}
                  controlText={category_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={categoriesData?.data?.data?.map((category: any) => ({
                    label: category.name,
                    value: category.id,
                  }))}
                  onChange={(val: any) => {
                    setSelectedFacultyCategoryIds(val);
                    let arr = val.map((item: any) => item.value);
                    setFacultyCategory([...arr]);
                  }}
                  value={selectedfacultyCategoryIds}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <Box sx={{ display: "flex" }}>
                  {selectedfacultyCategoryIds?.length ? (
                    selectedfacultyCategoryIds?.map(
                      (item: any, index: number) => (
                        <Box
                          sx={{ display: "flex", alignItems: "center" }}
                          key={index}
                        >
                          <Typography variant="body1">{item?.label}</Typography>
                          <IconButton
                            color="primary"
                            onClick={() =>
                              handleRemoveSelectedFacultyCategory(item)
                            }
                          >
                            <CancelIcon />
                          </IconButton>
                        </Box>
                      ),
                    )
                  ) : (
                    <Typography variant="body2">No values selected.</Typography>
                  )}
                </Box>
              </SelectBoxWrapper>
            </Box>
          </BoxWrapper>
          <BoxWrapper sx={{ m: "20px", width: "inherit" }}>
            <CustomDataGrid
              rows={questions?.data || []}
              columns={COLUMNS_CONFIG}
              totalRows={questions?.count}
              pageSizeData={pageSizeQues}
              type={"1"}
              buttonArray={config}
              page={page}
              handlePageChange={(_, v) => setPage(v)}
              sx={{ minHeight: "400px" }}
            />
          </BoxWrapper>
        </Box>
      </SideDrawer>
    </>
  );
};

export default React.memo(DrawerQuestionsSection);
