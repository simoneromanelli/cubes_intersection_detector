import React from 'react'

const InputField = ({params}) => {

  return(
    <div className={`form-group ${params.name.touched && params.name.invalid ? 'has-error' : ''}`}>
      <label>{params.label}</label>
      <input type="text" className="form-control" {...params.name} />
      <div className="help-block">
        {params.name.touched ? params.name.error : ''}
      </div>
    </div>
  );
};

export default InputField;