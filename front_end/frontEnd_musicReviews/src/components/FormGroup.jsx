import React from 'react';
import PropTypes from 'prop-types';


function FormGroup({
  label,
  type,
  name,
  id,
  register,
  validation = {},
  autocomplete = "off",
  required = false,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autocomplete}
        {...register(name, validation)}
      />
    </div>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  autocomplete: PropTypes.string,
  required: PropTypes.bool,
};

export default FormGroup;
