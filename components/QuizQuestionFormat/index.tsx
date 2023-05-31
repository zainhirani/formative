import React, { FC } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import SideDrawer from "components/Drawer";

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
  isOpen: boolean;
  onClose: () => void;
};

const QuizQuestionFormat: FC<QuizQuestionFormatProps> = ({
  title = "",
  questionContext = "",
  actualQuestion = "",
  quizOptions = [],
  timeSpent = "",
  isHeader = true,
  questionIdNum = "",
  avgAttemps = "",
  avgTime = "",
  difficulty = "",
  answerStats = [],
  onClose = () => {},
  isOpen = true,
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
    <SideDrawer open={isOpen} onClose={onClose}>
      {/* Header 4 Boxes */}

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
              {/* Column 1 content */}
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
              {/* Column 2 content */}
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
              {/* Column 3 content */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2, height: "100%" }}>{/* Column 4 content */}</Box>
          </Grid>
        </Grid>
      </Box>

      {/* Quiz Answers List */}

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          paddingLeft: "10px",
        }}
      >
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <Paper
              elevation="6"
              sx={{ borderRadius: "5px", marginBottom: "10px" }}
            >
              <ListItem key={value} disablePadding>
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
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            </Paper>
          );
        })}
      </List>

      {/* Bottom Box */}
      <Paper elevation={6} sx={{ p: 2, borderRadius: "5px", width: "60%" }}>
        <Grid container>
          <Grid item xs={isSmScreen ? 12 : 6} sm={6}>
            <Box
              sx={{
                borderBottom: "1px solid lightgrey",
                p: 1,
              }}
            >
              {/* Content for the first section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                borderBottom: "1px solid lightgrey",
                p: 1,
              }}
            >
              {/* Content for the second section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                borderBottom: "1px solid lightgrey",
                p: 1,
              }}
            >
              {/* Content for the third section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                borderBottom: "1px solid lightgrey",
                p: 1,
              }}
            >
              {/* Content for the fourth section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                borderBottom: "1px solid lightgrey",
                p: 1,
              }}
            >
              {/* Content for the fifth section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box sx={{ p: 1 }}>
              {/* Content for the sixth section of the first row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 6} sm={6}>
            <Box
              sx={{
                p: 1,
              }}
            >
              {/* Content for the first section of the second row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                p: 1,
              }}
            >
              {/* Content for the second section of the second row */}
            </Box>
          </Grid>
          <Grid item xs={isSmScreen ? 12 : 1} sm={1}>
            <Box
              sx={{
                p: 1,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </SideDrawer>
  );
};

export default QuizQuestionFormat;
