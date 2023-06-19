import React from 'react';
import FormikCustomRadio from '../radio/formikCustomRadio';

interface IRadioGroup {
  title: string;
  name: string;
  options: number[];
}

const RadioGroup = ({ title, name, options }: IRadioGroup) => {
  return (
    <div className='input-and-label-container'>
      <p>{title}</p>
      <div className='input-container'>
        {options.map((option, index) => {
          const optionId = `${name}-option-${index + 1}`;
          return (
            <div key={optionId}>
              <FormikCustomRadio name={name} value={option} id={optionId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
