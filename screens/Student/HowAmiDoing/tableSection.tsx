import { BoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import { useState } from "react";
import { Grid, Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AttemptDrawer from "./AttemptDrawer";

export const columnsManageHowAmiDoing: GridColDef[] = [
  {
    field: "quizId",
    headerName: "Quiz No.",
    minWidth: 180,
    flex: 1,
    renderCell: (params: any) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: (theme) => theme.palette.text.primary,
                fontWeight: "700",
              }}
            >
              {num} <ArrowForwardRoundedIcon style={{ fontSize: "20px" }} />
            </Box>
          </Grid>
        </Grid>
      );
    },
  },
  {
    field: "quiz_name",
    headerName: "Name",
    minWidth: 250,
    flex: 1,
  },
  {
    field: "course_name",
    headerName: "Course",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "quiz_date",
    headerName: "Quiz Date",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      const initialdate = new Date(params.formattedValue);
      const date = initialdate.toLocaleDateString("en-US", {
        timeZone: "UTC",
      });

      return <Box>{date}</Box>;
    },
  },
  {
    field: "attempt_date",
    headerName: "Date Taken",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      const initialdate = new Date(params.formattedValue);
      const date = initialdate.toLocaleDateString("en-US", {
        timeZone: "UTC",
      });

      return (
        <Box
          sx={{
            color: (theme) => theme.palette.success.dark,
            fontWeight: "700",
          }}
        >
          {date}
        </Box>
      );
    },
  },
  {
    field: "score",
    headerName: "Score",
    minWidth: 200,
    flex: 1,
  },
];

interface TableSectionProps {
  quizData: any;
  loading: boolean;
  totalCount: number;
  page: number;
  handlePageChange: any;
}

const TableSection: React.FC<TableSectionProps> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quizId, setQuizId] = useState<number>();

  const { quizData, loading, totalCount, page, handlePageChange } = props;
  return (
    <>
      <BoxWrapper>
        <CustomDataGrid
          onRowClick={(e) => {
            setDrawerOpen(true), setQuizId(e?.row?.quizId);
          }}
          rows={quizData}
          columns={columnsManageHowAmiDoing}
          loading={loading}
          page={page}
          pageSizeData={10}
          handlePageChange={handlePageChange}
          type={"1"}
          isCheckbox={false}
          totalRows={totalCount}
        />
      </BoxWrapper>
      <AttemptDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        //@ts-ignore
        quizId={quizId}
        courseName={quizData}
      />
    </>
  );
};

export default TableSection;
