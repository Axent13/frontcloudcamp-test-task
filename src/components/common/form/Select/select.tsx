import React, { useRef, useState } from 'react';
import './select.scss';

export type SelectOption<T> = {
  label: string;
  value: T;
};

export type Select<T> = {
  options: SelectOption<T>[];
  value: T;
  placeholder: string;
  onChange(value: T): void;
};

const Select = <T,>(props: Select<T>) => {
  const { options, placeholder, onChange } = props;
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const [isOpened, setIsOpened] = useState(false);
  const optionsField = useRef(null);

  const handleSelectClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleOptionClick = (option: SelectOption<T>) => {
    setIsOpened((prevState) => !prevState);
    setSelectedValue(option.label);
    onChange(option.value);
  };

  return (
    <div className='select'>
      <div className='select__select select__select_opened'>
        <div
          className={
            'select__selected-value' +
            (isOpened ? ' select__selected-value_opened' : '') +
            (selectedValue === placeholder
              ? ' select__selected-value_is-placeholder'
              : '')
          }
          onClick={handleSelectClick}
        >
          {selectedValue}
        </div>
        <div
          className={
            'select__options' + (isOpened ? ' select__options_opened' : '')
          }
          ref={optionsField}
        >
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={
                  'select__option' +
                  (option.label === selectedValue
                    ? ' select__option_selected'
                    : '')
                }
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
