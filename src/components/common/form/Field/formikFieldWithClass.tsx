import React, { useState } from 'react';
import './formikFieldWithClass.scss';
import { Field } from 'formik';

interface IFormikFieldWithClass {
  hasSymbolsCounter?: boolean;
  maxSymbols?: number;
  [x: string]: any;
}

const FormikFieldWithClass = ({
  hasSymbolsCounter,
  maxSymbols,
  ...props
}: IFormikFieldWithClass) => {
  const [symbolsCount, setSymbolsCount] = useState(0);

  const handleInput = (e: InputEvent) => {
    if (e.currentTarget) {
      const textAreaInput = e.currentTarget as HTMLTextAreaElement;
      const symbolsWithoutWhitespacesCount = textAreaInput.value
        .split(' ')
        .join('').length;

      setSymbolsCount(symbolsWithoutWhitespacesCount);
    }
  };

  if (hasSymbolsCounter) {
    return (
      <div className=' field__counter-container'>
        <Field {...props} className='field' onInput={handleInput}></Field>
        <p
          className={
            'field__counter' +
            (maxSymbols && symbolsCount > maxSymbols
              ? ' field__counter_danger'
              : '')
          }
        >
          {symbolsCount}
          {maxSymbols && `/${maxSymbols}`}
        </p>
      </div>
    );
  }
  return <Field {...props} className='field'></Field>;
};

export default FormikFieldWithClass;
