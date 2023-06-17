import React from 'react';
import { Field } from 'formik';
import './formikCustomCheckbox.scss';

interface IFormikCustomCheckbox {
  name: string;
  id: string;
  value: number;
}

const FormikCustomCheckbox = ({
  name,
  value,
  id,
  ...rest
}: IFormikCustomCheckbox) => {
  return (
    <>
      <Field
        type='checkbox'
        name={name}
        id={id}
        value={value.toString()}
        className='formik-custom-checkbox__input'
        {...rest}
      ></Field>
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default FormikCustomCheckbox;
