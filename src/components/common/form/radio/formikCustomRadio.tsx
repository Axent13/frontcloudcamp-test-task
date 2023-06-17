import React from 'react';
import './formikCustomRadio.scss';
import { Field } from 'formik';

interface IFormikCustomRadio {
  name: string;
  id: string;
  value: number;
}

const FormikCustomRadio = ({
  name,
  value,
  id,
  ...rest
}: IFormikCustomRadio) => {
  return (
    <>
      <Field
        type='radio'
        name={name}
        id={id}
        value={value.toString()}
        className='formik-custom-radio__input'
        {...rest}
      ></Field>
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default FormikCustomRadio;
