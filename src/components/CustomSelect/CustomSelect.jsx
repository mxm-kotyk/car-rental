import PropTypes from "prop-types";
import Select from "react-select";
import { selectCustomStyles } from "./CustomSelectStyles";

const CustomSelect = ({
  selectOptions,
  handleChange,
  type,
  placeholder,
  isClearable,
  isSearchable,
}) => {
  return (
    <>
      <Select
        options={selectOptions}
        blurInputOnSelect={true}
        onChange={handleChange}
        styles={selectCustomStyles(type)}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={isSearchable}
      />
    </>
  );
};

CustomSelect.propTypes = {
  selectOptions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isClearable: PropTypes.bool.isRequired,
  isSearchable: PropTypes.bool.isRequired,
};

export default CustomSelect;
