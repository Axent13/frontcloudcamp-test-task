import React, { useState } from 'react';
import './stepSecond.scss';
import Button from '../../common/button/button';
import { FieldArray, Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import DeleteButton from '../../common/deleteButton/deleteButton';
import AddButton from '../../common/addButton/addButton';
import CheckboxGroup from '../../common/form/checkboxGroup/checkboxGroup';
import RadioGroup from '../../common/form/radioGroup/radioGroup';

interface IStepSecondProps {
  advantagesCount: number;
  handlePrevButtonClick: Function;
  handleNextButtonClick: Function;
}

const StepSecond = ({
  advantagesCount,
  handlePrevButtonClick,
  handleNextButtonClick,
}: IStepSecondProps) => {
  const renderAdvantagesFields = (count: number) => {
    const advantagesField: React.JSX.Element[] = [];
    for (let index = 1; index <= count; index++) {
      const advantageField = (
        <div
          className='main-page__input-container'
          key={`field-advantages-${index}`}
        >
          <FormikFieldWithClass
            type='text'
            name={`field-advantages[${index}]`}
            id={`field-advantages.field-advantages-${index}`}
            placeholder='Placeholder'
          />
        </div>
      );

      advantagesField.push(advantageField);
    }

    return advantagesField;
  };

  return (
    <div>
      <div>
        <p>Advantages</p>
        <FieldArray name='field-advantages'>
          {({ form, remove, push }) => (
            <div>
              {form.values['field-advantages']?.map(
                (value: string, index: number) => (
                  <div
                    className='step-second__advantage-container'
                    key={`field-advantages-${index}`}
                  >
                    <FormikFieldWithClass
                      type='text'
                      name={`field-advantages[${index}]`}
                      id={`field-advantages-${index}`}
                      placeholder='Placeholder'
                    />
                    <div className='step-second__delete-button-container'>
                      <DeleteButton onClickFunction={() => remove(index)} />
                    </div>
                  </div>
                )
              )}
              <AddButton onClickFunction={() => push('')} />
            </div>
          )}
        </FieldArray>
      </div>
      <CheckboxGroup
        title='Checkbox group'
        name='field-checkbox-group'
        options={[1, 2, 3]}
      />
      <RadioGroup
        title='Radio Group'
        name='field-radio-group'
        options={[1, 2, 3]}
      />
      <div className='step-second__buttons'>
        <Button
          id='button-back'
          text='Назад'
          isFilled={false}
          onClickFunction={handlePrevButtonClick}
        />
        <Button
          id='button-next'
          text='Далее'
          isFilled={true}
          onClickFunction={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

export default StepSecond;
