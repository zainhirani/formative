import React, { FC, ReactNode } from "react";
import AutoComplete from "components/AutoComplete";
import { components } from "react-select";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";

interface CustomSelectProps {
  options: Array<{}>;
  placeholder: string;
  config?: string;
  controlText?: string;
  dropdownIcon?: ReactNode;
}

const CustomDropdownIndicator = (props: any) => {
  const { dropdownIcon } = props;
  return (
    <components.DropdownIndicator {...props}>
      {dropdownIcon}
    </components.DropdownIndicator>
  );
};

const Control = (props: any) => {
  const { children, controlText } = props;
  return (
    <components.Control {...props}>
      <SelectBoxWrapper>{controlText}</SelectBoxWrapper> {children}
    </components.Control>
  );
};

const CustomSelect: FC<CustomSelectProps> = ({
  controlText,
  dropdownIcon,
  options,
  placeholder,
}) => {
  const onChange = () => {};

  const style = {
    control: (provided: any, state: any) => ({
      ...provided,
      boxShadow: "none",
      border: "none",
      color: "#404040 !important",
      height: "100%",
      cursor: "pointer",
      placeholder: {
        color: "purple",
        fontSize: 12,
        fontWeight: "bold",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#404040",
      width: "100%",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      border: "none",
      padding: "0px",
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#8C2531"
        : state.isFocused
        ? "#EAEAEA"
        : provided.backgroundColor,
      "&:hover": {
        backgroundColor: state.isSelected ? "#8C2531" : "#EAEAEA",
      },
    }),
    indicatorContainer: (provided: any) => ({
      ...provided,
      color: "#404040",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <BoxWrapper>
      <AutoComplete
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        customComponents={{
          DropdownIndicator: (props) => (
            <CustomDropdownIndicator {...props} dropdownIcon={dropdownIcon} />
          ),
          Control: (props) => <Control {...props} controlText={controlText} />,
        }}
        customStyles={style}
        className="custom-select"
      />
    </BoxWrapper>
  );
};

export default CustomSelect;