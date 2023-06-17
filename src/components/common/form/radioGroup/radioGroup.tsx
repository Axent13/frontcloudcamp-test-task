import React from 'react';
import FormikCustomRadio from '../radio/formikCustomRadio';

interface IRadioGroup {
  title: string;
  name: string;
  options: number[];
}

const RadioGroup = ({ title, name, options }: IRadioGroup) => {
  return (
    <div className='main-page__input-container'>
      <p>{title}</p>
      {options.map((option, index) => {
        const optionId = `${name}-option-${index + 1}`;
        return (
          <div key={optionId}>
            <FormikCustomRadio name={name} value={option} id={optionId} />
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
