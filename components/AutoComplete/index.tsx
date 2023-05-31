import React, { FocusEvent, Ref } from "react";
import Select, { components } from "react-select";
import Animated from "react-select/animated";

interface CustomComponents {
  DropdownIndicator?: typeof components.DropdownIndicator;
  Control?: React.ComponentType<any>;
  // Add more custom components here if needed
}
interface AutoCompleteProps {
  className?: string;
  options: any[];
  onInputChange?: (inputValue: string, actionMeta: any) => void;
  onChange: (value: any, actionMeta: any) => void;
  handleBlur?: (event: FocusEvent<any>) => void;
  customStyles?: any;
  maxMenuHeight?: any;
  isClearable?: boolean;
  placeholder?: string;
  isLoading?: boolean;
  value?: any;
  isMulti?: boolean;
  handleScroll?: () => void;
  handleOnFocus?: () => void;
  selectRef?: Ref<any>;
  isOptionDisabled?: (option: any) => boolean;
  isDisabled?: boolean;
  closeMenuOnSelect?: boolean;
  customComponents?: CustomComponents;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  className = "",
  options,
  onInputChange = () => {},
  onChange,
  handleBlur = () => {},
  customStyles = undefined,
  maxMenuHeight,
  isClearable = false,
  placeholder = "",
  isLoading = false,
  value,
  isMulti = false,
  handleScroll = undefined,
  handleOnFocus = undefined,
  selectRef,
  isOptionDisabled = undefined,
  isDisabled,
  closeMenuOnSelect = true,
  customComponents,
  ...rest
}) => {
  // const selectStyles = customStyles ? customStyles : styles;
  const style = {
    control: (provided: any, state: any) => ({
      ...provided,
      boxShadow: "none",
      border: "none",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
    }),
    // option: (provided: any, state: any) => ({
    //   ...provided,
    //   backgroundColor: state.isFocused && "#8c2531",
    //   color: state.isFocused && "#fff",
    // }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#fcb150"
        : state.isFocused
        ? "#ffe57b"
        : provided.backgroundColor,
      "&:hover": {
        backgroundColor: state.isSelected ? "#fcb150" : "#ffe57b",
      },
    }),
  };
  return (
    <Select
      isDisabled={isDisabled}
      onFocus={handleOnFocus}
      onBlur={handleBlur}
      ref={selectRef}
      onMenuScrollToBottom={handleScroll}
      className={className}
      options={options}
      onInputChange={onInputChange}
      onChange={onChange}
      // styles={selectStyles}
      maxMenuHeight={maxMenuHeight}
      isClearable={isClearable}
      placeholder={placeholder}
      closeMenuOnSelect={closeMenuOnSelect}
      isLoading={isLoading}
      value={value}
      isOptionDisabled={isOptionDisabled}
      isMulti={isMulti}
      components={customComponents}
      // theme={(theme) => ({
      //   ...theme,
      //   borderRadius: 0,
      //   colors: {
      //     ...theme.colors,
      //     primary25: 'hotpink',
      //     primary: 'black',
      //   },
      // })}
      styles={style}
      // components={Animated()}
      {...rest}
    />
  );
};

export default AutoComplete;
