import React from 'react';
import './formikFieldWithClass.scss';
import { Field } from 'formik';

const FormikFieldWithClass = ({ ...props }) => {
  return <Field {...props} className='field'></Field>;
};

export default FormikFieldWithClass;
