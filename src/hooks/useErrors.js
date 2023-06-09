import { useState } from 'react';

export default function useErrors() {
  const [errors, setErros] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExist = errors.find((error) => error.field === field);
    if (errorAlreadyExist) return;

    setErros((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName) {
    setErros((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}
