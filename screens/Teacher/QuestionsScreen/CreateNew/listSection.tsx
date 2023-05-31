import { Delete } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import React, { useState } from "react";
import FormattedMessage from "theme/FormattedMessage";
import { TextFieldWrapper } from "./Styled";
import messages from "./messages";

interface ListItemData {
  text: string;
  correct: boolean;
  locked: boolean;
  inputText: string;
}

const initialItems: ListItemData[] = [
  { text: "Option A", correct: false, locked: false, inputText: "" },
  { text: "Option B", correct: false, locked: false, inputText: "" },
  { text: "Option C", correct: false, locked: false, inputText: "" },
];

const QuestionListSection = () => {
  const [items, setItems] = useState<ListItemData[]>(initialItems);
  const [counter, setCounter] = useState(initialItems.length + 1);

  const handleToggleCheckbox = (index: number, option: string) => {
    const updatedItems = [...items];
    if (option === "correct") {
      updatedItems[index].correct = !updatedItems[index].correct;
    } else if (option === "lock") {
      updatedItems[index].locked = !updatedItems[index].locked;
    }
    setItems(updatedItems);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedItems = [...items];
    updatedItems[index].inputText = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem: ListItemData = {
      text: `Option ${String.fromCharCode(64 + counter)}`,
      correct: false,
      locked: false,
      inputText: "",
    };
    setItems([...items, newItem]);
    setCounter(counter + 1);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  return (
    <>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: ` 1px solid #EAEAEA `,
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ListItemText primary={item.text} />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.correct}
                    onChange={() => handleToggleCheckbox(index, "correct")}
                    color="primary"
                    sx={{
                      ".MuiSvgIcon-root": {
                        color: (theme) => theme.palette.primary.main,
                      },
                      "&.Mui-checked": {
                        ".MuiSvgIcon-root": {
                          background: (theme) => theme.palette.primary.main,
                          color: (theme) => theme.palette.primary.light,
                        },
                      },
                    }}
                  />
                }
                sx={{
                  ".MuiTypography-root": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                label="Correct"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.locked}
                    onChange={() => handleToggleCheckbox(index, "lock")}
                    color="primary"
                    disabled
                  />
                }
                label="Lock"
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{ textTransform: "capitalize", fontWeight: 500 }}
                  startIcon={<Delete />}
                  onClick={() => handleRemoveItem(index)}
                >
                  <FormattedMessage {...messages.deleteButton} />
                </Button>
              </Box>
            </Box>
            <TextFieldWrapper
              value={item.inputText}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Type your details here"
              variant="standard"
            />
          </ListItem>
        ))}
      </List>
      <Button
        sx={{ textTransform: "capitalize" }}
        startIcon={<AddCircleOutlineRoundedIcon />}
        onClick={handleAddItem}
      >
        <FormattedMessage {...messages.addImageButton} />
      </Button>
    </>
  );
};

export default QuestionListSection;
