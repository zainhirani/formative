import React, { FocusEvent, Ref } from "react";
import Select, { Props as SelectProps, components } from "react-select";
import Animated from "react-select/animated";

interface CustomComponents {
  DropdownIndicator?: typeof components.DropdownIndicator;
  Control?: React.ComponentType<any>;
}

interface AutoCompleteProps<OptionType = any> extends SelectProps<OptionType> {
  className?: string;
  handleBlur?: (event: FocusEvent<any>) => void;
  customStyles?: any;
  handleScroll?: () => void;
  handleOnFocus?: () => void;
  selectRef?: Ref<any>;
  isOptionDisabled?: (option: OptionType) => boolean;
  isDisabled?: boolean;
  closeMenuOnSelect?: boolean;
  customComponents?: CustomComponents;
  isMulti: boolean;
}

const AutoComplete = <OptionType extends any = any>({
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
}: AutoCompleteProps<OptionType>) => {
  const style = {
    control: (provided: any, state: any) => ({
      ...provided,
    }),
  };
  const selectStyles = customStyles ? customStyles : style;

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
      styles={selectStyles}
      maxMenuHeight={maxMenuHeight}
      isClearable={isClearable}
      placeholder={placeholder}
      closeMenuOnSelect={closeMenuOnSelect}
      isLoading={isLoading}
      value={value}
      isOptionDisabled={isOptionDisabled}
      isMulti={isMulti}
      components={customComponents}
      {...rest}
    />
  );
};

export default AutoComplete;
