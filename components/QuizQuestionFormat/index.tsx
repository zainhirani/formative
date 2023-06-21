import React, { FC } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SideDrawer from "components/Drawer";
import Image from "theme/Image";

type QuizQuestionFormatProps = {
  title?: string;
  questionContext?: string;
  actualQuestion?: string;
  quizOptions?: object[];
  timeSpent?: string | number;
  score?: string | number;
  isHeader?: boolean;
  questionIdNum?: string | number;
  avgTime?: string;
  avgAttemps?: number | string;
  difficulty?: string;
  answerStats?: { key?: string; value?: any }[];
  isShowScoreBar: boolean;
  isOpen: boolean;
  children?: any;
  onClose: () => void;
  loading?: boolean;
  disable?: boolean;
  isChecked?: boolean | number;
  media?: string;
  timeUnit?: string;
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
  avgTime = "18",
  timeUnit = " Sec",
  difficulty = "Hard",
  isShowScoreBar = true,
  answerStats,
  onClose = () => {},
  isOpen = true,
  disable,
  loading,
  isChecked,
  media,
  children,
}): JSX.Element => {
  const [checked, setChecked] = React.useState([0]);
  const [textColors, setTextColors] = React.useState([]);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const newTextColors = [...textColors];

    if (currentIndex === -1) {
      newChecked.push(value);
      // @ts-ignore
      newTextColors.push("#225A41"); // Change the text color to red when checked
    } else {
      newChecked.splice(currentIndex, 1);
      newTextColors.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setTextColors(newTextColors);
  };
  // const handleToggle = (value: number) => () => {
  //   setChecked(value);
  // };

  return (
    <SideDrawer open={isOpen} onClose={onClose} title={title} loading={loading}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
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
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                        variant="body2"
                        component="span"
                      >
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
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                        variant="body2"
                        component="span"
                      >
                        Average Time :
                      </Typography>
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ marginLeft: "0.5rem" }}
                      >
                        {avgTime}
                        {timeUnit}
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
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                        variant="body2"
                        component="span"
                      >
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
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                        variant="body2"
                        component="span"
                      >
                        Difficulty :
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

          <Typography sx={{ mt: "30px" }} variant="body1" gutterBottom pl={2}>
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
              maxWidth: { xs: 360, md: 500 },

              paddingLeft: "10px",
            }}
          >
            <Typography variant="caption" display="block" gutterBottom>
              Choose the best answer
            </Typography>
            {media ? (
              <Image
                alt="quiz-image"
                lazyLoadProps={{ height: 240 }}
                src={media}
                lazyLoad={true}
                style={{ maxWidth: "100%", maxHeight: "240px" }}
              />
            ) : null}
            {quizOptions.map((value, index) => {
              // @ts-ignore
              const labelId = `checkbox-list-label-${value.id}`;

              return (
                <Paper
                  key={index}
                  elevation={6}
                  sx={{
                    borderRadius: "5px",
                    marginBottom: "10px",
                    boxShadow: " 0px 0px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(index)}
                      dense
                    >
                      <ListItemIcon sx={{ minWidth: "max-content" }}>
                        <Checkbox
                          disabled={disable}
                          edge="start"
                          // checked={checked.indexOf(index) !== -1}
                          checked={isChecked === index}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                          sx={{
                            ".MuiSvgIcon-root": {
                              color: (theme) =>
                                theme.additionalColors?.primaryGreen,
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        // @ts-ignore
                        primary={`${value.optionText}`}
                        sx={{ color: textColors[index] }}
                      />
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
              sx={{
                borderRadius: "5px",
                width: "100%",
                maxWidth: { xs: 360, md: 500 },
                margin: "10px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    <TableCell
                      sx={{ color: "inherit" }}
                      colSpan={isSmScreen ? 2 : 1}
                    >
                      # of times answered
                    </TableCell>
                    {answerStats?.map((item, ind) => (
                      <TableCell sx={{ color: "inherit" }} key={ind}>
                        {item.key}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={isSmScreen ? 2 : 1}></TableCell>
                    {answerStats?.map((item, ind) => (
                      <TableCell key={ind}>{item.value}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
          {children}
        </>
      )}
    </SideDrawer>
  );
};

export default QuizQuestionFormat;
