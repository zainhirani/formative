// @ts-nocheck
import { useEffect } from "react";
import { Delete } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import React, { useState } from "react";
import FormattedMessage from "theme/FormattedMessage";
import { TextFieldWrapper } from "./Styled";
import messages from "./messages";

interface AnswerOptionsProps {
  onChange: () => void;
  isEdit?: any;
}
interface ListItemData {
  id: string;
  text: string;
  correct: boolean;
  locked: boolean;
  inputText: string;
  options?: any;
}

const initialItems: ListItemData[] = [
  { id: "1", text: "Option A", correct: false, locked: false, inputText: "" },
];

const MAX_ANSWER_OPTIONS = 8;

const AnswerOptions = (props: AnswerOptionsProps) => {
  let { onChange = () => {}, options, isEdit } = props;
  const [items, setItems] = useState<ListItemData[]>(initialItems);
  const [counter, setCounter] = useState(initialItems.length + 1);

  useEffect(() => {
    onChange(items);
  }, [items]);

  useEffect(() => {
    if (options.length && isEdit) {
      setItems(options);
    }
  }, [options]);

  const getNextOptionText = () => {
    const lastOption = items[items.length - 1];
    const lastOptionText = lastOption.text;
    const lastOptionLetter = lastOptionText.charAt(lastOptionText.length - 1);
    const nextOptionLetter = String.fromCharCode(
      lastOptionLetter.charCodeAt(0) + 1,
    );
    return `Option ${nextOptionLetter}`;
  };

  const handleToggleCheckbox = (id: string, option: string) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (option === "correct") {
          return { ...item, correct: !item.correct };
        } else if (option === "lock") {
          return { ...item, locked: !item.locked };
        }
      } else {
        return { ...item, correct: false };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleInputChange = (id: string, value: string) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, inputText: value };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const handleAddItem = () => {
    if (items.length == MAX_ANSWER_OPTIONS) return;
    const newItem: ListItemData = {
      id: counter.toString(),
      text: getNextOptionText(),
      correct: false,
      locked: false,
      inputText: "",
    };
    setItems([...items, newItem]);
    setCounter(counter + 1);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length == 1) return;
    const updatedItems = items.filter((item) => item.id !== id);
    const reassignIds = updatedItems.map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
    }));
    setItems(reassignIds);
  };
  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
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
                    onChange={() => handleToggleCheckbox(item.id, "correct")}
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
                    onChange={() => handleToggleCheckbox(item.id, "lock")}
                    color="primary"
                    disabled
                  />
                }
                label="Lock"
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  disabled={items.length == 1}
                  sx={{ textTransform: "capitalize", fontWeight: 500 }}
                  startIcon={<Delete />}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <FormattedMessage {...messages.deleteButton} />
                </Button>
              </Box>
            </Box>
            <TextFieldWrapper
              value={item.inputText}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              placeholder="Type your details here"
              variant="standard"
            />
          </ListItem>
        ))}
      </List>
      <Button
        disabled={items.length == MAX_ANSWER_OPTIONS}
        sx={{ textTransform: "capitalize" }}
        startIcon={<AddCircleOutlineRoundedIcon />}
        onClick={handleAddItem}
      >
        <FormattedMessage {...messages.addImageButton} />
      </Button>
    </>
  );
};

export default AnswerOptions;
