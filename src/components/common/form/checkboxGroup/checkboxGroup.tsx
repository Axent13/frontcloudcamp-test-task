import React from 'react';
import FormikCustomCheckbox from '../checkbox/formikCustomCheckbox';

interface ICheckboxGroup {
  title: string;
  name: string;
  options: number[];
}

const CheckboxGroup = ({ title, name, options }: ICheckboxGroup) => {
  return (
    <div className='input-and-label-container'>
      <p>{title}</p>
      <div className='input-container'>
        {options.map((option, index) => {
          const optionId = `${name}-option-${index + 1}`;
          return (
            <div key={optionId}>
              <FormikCustomCheckbox name={name} value={option} id={optionId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
