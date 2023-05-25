import React from 'react'
import { Box, FormControl, IconButton, InputAdornment, InputLabel,Grid } from '@mui/material';
import {  MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
import { BoxWrapper, ButtonWrapper, SelectStyled, TextFieldStyled } from './Styled';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";

const SearchSection = () => {
    return (
        <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 3">
            <TextFieldStyled
              placeholder='Search'
              variant="outlined"
              sx={{
               
              }}
              InputProps={{
                style: { border: 'none',outline: '0px' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="visibility"
                        edge="end"
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
            />
        </Box>
        <Box gridColumn="span 2">
          <FormControl fullWidth>
            <InputLabel shrink={false} id="demo-simple-select-label" sx={{
                color: '#7F7F7F',
              }}>Select Course</InputLabel>
            <SelectStyled
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Course"
              placeholder='Search'
              variant="outlined"
              IconComponent={ArrowDropDownCircleOutlinedIcon}
            >
              <MenuItem value={10}>Cannabis 2023</MenuItem>
              <MenuItem value={20}>Cannabis 2024</MenuItem>
              <MenuItem value={30}>Cannabis 2025</MenuItem>
            </SelectStyled>
          </FormControl>
        </Box>
        <Box gridColumn="span 2">
          <FormControl fullWidth>
            <InputLabel shrink={false} htmlFor="my-select" id="demo-simple-select-label" sx={{
                color: '#7F7F7F',
              }}>Select Folder</InputLabel>
            <SelectStyled
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Folder"
              IconComponent={ArrowDropDownCircleOutlinedIcon}
            >
              <MenuItem value={10}>/ Daily 1</MenuItem>
              <MenuItem value={20}>/ Daily 2</MenuItem>
              <MenuItem value={30}>/ Daily 3</MenuItem>
            </SelectStyled>
          </FormControl>
        </Box>
        <Box gridColumn="span 2">
          <FormControl fullWidth>
            <InputLabel shrink={false} id="demo-simple-select-label" sx={{
                color: '#7F7F7F',
              }}>Select Status</InputLabel>
            <SelectStyled
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Status"
              IconComponent={ArrowDropDownCircleOutlinedIcon}
            >
              <MenuItem value={10}>Completed</MenuItem>
              <MenuItem value={20}>Draft</MenuItem>
            </SelectStyled>
          </FormControl>
        </Box>
        <Box gridColumn="span 3">
           <ButtonWrapper
                startIcon={<AddCircleOutlineRoundedIcon />}
                variant="contained"
              >
                <FormattedMessage {...messages.createNew} />
              </ButtonWrapper>
        </Box>
        </BoxWrapper>
    )
}

export default SearchSection