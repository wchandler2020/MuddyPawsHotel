import React, { useState, useEffect } from "react";

const useForm = initialFieldValues => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange
  };
};

export default useForm;
