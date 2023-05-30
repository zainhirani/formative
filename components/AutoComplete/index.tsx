import React, { FocusEvent, Ref } from "react";
import Select from "react-select";
import Animated from "react-select/animated";

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
  ...rest
}) => {
  // const selectStyles = customStyles ? customStyles : styles;

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
      components={Animated()}
      {...rest}
    />
  );
};

export default AutoComplete;
