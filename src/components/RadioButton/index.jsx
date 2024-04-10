import PropTypes from "prop-types";

const RadioButton = ({ label, id, value, onChange, name }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioButton;
