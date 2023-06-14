import React from 'react';
import { useField, useFormikContext } from 'formik';
import Select, { SelectOption } from '../Select/select';

type FormikSelectProps<T> = {
  name: string;
  options: SelectOption<T>[];
  placeholder: string;
};

const FormikSelect = <T,>(props: FormikSelectProps<T>) => {
  const name = props.name;
  const [field] = useField<T>(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (val: T) => {
    setFieldValue(name, val);
  };

  return (
    <Select
      placeholder={props.placeholder}
      options={props.options}
      onChange={handleChange}
      value={field.value}
    />
  );
};
export default FormikSelect;
