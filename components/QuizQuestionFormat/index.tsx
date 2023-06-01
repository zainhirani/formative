import React, { FC } from "react";
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import SideDrawer from "components/Drawer";
import Typography from "@mui/material/Typography";

type QuizQuestionFormatProps = {
  title?: string;
  questionContext?: string;
  actualQuestion?: string;
  quizOptions?: object[];
  timeSpent?: string;
  score?: string;
  isHeader?: boolean;
  questionIdNum?: string;
  avgTime?: string;
  avgAttemps?: number;
  difficulty?: string;
  answerStats?: object[];
  isShowScoreBar: boolean;
  isOpen: boolean;
  children?: any;
  onClose: () => void;
};

const QuizQuestionFormat: FC<QuizQuestionFormatProps> = ({
  title = "Title here",
  questionContext = "Here will be the question context",
  actualQuestion = "The Actual Question",
  quizOptions = [
    { id: 1, optionText: "Option 1" },
    { id: 2, optionText: "Option 2" },
    { id: 3, optionText: "Option 3" },
    { id: 4, optionText: "Option 4" },
  ],
  timeSpent = "21 Seconds",
  score = "12 Points",
  isHeader = true,
  questionIdNum = "1",
  avgAttemps = "4",
  avgTime = "18 Sec",
  difficulty = "Hard",
  isShowScoreBar = true,
  answerStats = [1],
  onClose = () => {},
  isOpen = true,
  children,
}): JSX.Element => {
  const [checked, setChecked] = React.useState([0]);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <SideDrawer open={isOpen} onClose={onClose} title={title}>
      {/* Header 4 Boxes */}

      {isHeader && (
        <Box
          sx={{
            borderTop: "1px solid lightgrey",
            borderBottom: "1px solid lightgrey",
            //   height: "80px",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  borderRight: "1px solid lightgrey",
                  p: 2,
                  height: "50px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="span">
                    Question ID No :
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    {questionIdNum}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  borderRight: "1px solid lightgrey",
                  p: 2,
                  height: "50px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="span">
                    Average Time :
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    {avgTime}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  borderRight: "1px solid lightgrey",
                  p: 2,
                  height: "50px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="span">
                    Average Attempts :
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    {avgAttemps}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ p: 2, height: "100%" }}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="span">
                    Difficult :
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ marginLeft: "0.5rem" }}
                  >
                    {difficulty}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Question Section */}

      <Typography variant="body1" gutterBottom pl={2} pt={3}>
        {questionContext}
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        pl={2}
        sx={{ color: theme.palette.primary.main }}
      >
        {actualQuestion}
      </Typography>

      {/* Quiz Answers List */}

      <List
        sx={{
          width: "100%",
          maxWidth: 360,

          paddingLeft: "10px",
        }}
      >
        <Typography variant="caption" display="block" gutterBottom>
          Choose the best answer
        </Typography>
        {quizOptions.map((value, index) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <Paper
              elevation={6}
              sx={{ borderRadius: "5px", marginBottom: "10px" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value.optionText}`} />
                </ListItemButton>
              </ListItem>
            </Paper>
          );
        })}
      </List>

      {/* Score Section */}

      {isShowScoreBar && (
        <Box
          display="flex"
          alignItems="center"
          component={Paper}
          elevation={6}
          sx={{
            borderRadius: "5px",
            height: "50px",
            margin: "0px 10px 0px 10px",
          }}
        >
          <Box flex="1" borderRight="1px solid lightgrey" pr={2}>
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                component="span"
                sx={{ marginLeft: "0.5rem" }}
              >
                Total Time Spent:
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={{ marginLeft: "0.5rem", color: "blue" }}
              >
                {timeSpent}
              </Typography>
            </Box>
          </Box>
          <Box flex="1" pl={2}>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" component="span">
                You Scored:
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={{ marginLeft: "0.5rem", color: "darkgreen" }}
              >
                {score}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Bottom Box */}
      {answerStats?.length ? (
        <TableContainer
          component={Paper}
          elevation={6}
          sx={{ borderRadius: "5px", width: "60%", margin: "10px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={isSmScreen ? 2 : 1}>
                  # of times answered
                </TableCell>
                <TableCell>A</TableCell>
                <TableCell>B</TableCell>
                <TableCell>C</TableCell>
                <TableCell>D</TableCell>
                <TableCell>E</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={isSmScreen ? 2 : 1}></TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
                <TableCell>5</TableCell>
                <TableCell>6</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
      {children}
    </SideDrawer>
  );
};

export default QuizQuestionFormat;
