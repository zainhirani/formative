import React, { FocusEvent, Ref } from "react";
import Select, { Props as SelectProps, components } from "react-select";

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
  value: any;
  classNamePrefix?: string;
  onMenuClose: () => void;
}

const AutoComplete = <OptionType extends any = any>({
  className = "",
  options,
  onMenuClose = () => {},
  onInputChange = () => {},
  onChange,
  handleBlur = () => {},
  customStyles = undefined,
  maxMenuHeight,
  isClearable = true,
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
  classNamePrefix,
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
      classNamePrefix={classNamePrefix}
      onMenuClose={onMenuClose}
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
