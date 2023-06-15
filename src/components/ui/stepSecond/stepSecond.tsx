import React, { useState } from 'react';
import './stepSecond.scss';
import Button from '../../common/button/button';
import { FieldArray, Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import DeleteButton from '../../common/deleteButton/deleteButton';
import AddButton from '../../common/addButton/addButton';

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

      <div>
        <label htmlFor='field-checkbox-group'>Checkbox group</label>
        <div className='main-page__input-container'>
          <div>
            <FormikFieldWithClass
              type='checkbox'
              name='field-checkbox-group'
              id='field-checkbox-group-1'
              value='1'
            />
            <label htmlFor='field-checkbox-group-1'>1</label>
          </div>
          <div>
            <FormikFieldWithClass
              type='checkbox'
              name='field-checkbox-group'
              id='field-checkbox-group-2'
              value='2'
            />
            <label htmlFor='field-checkbox-group-2'>2</label>
          </div>
          <div>
            <FormikFieldWithClass
              type='checkbox'
              name='field-checkbox-group'
              id='field-checkbox-group-3'
              value='3'
            />
            <label htmlFor='field-checkbox-group-3'>3</label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='field-radio-group'>Radio group</label>
        <div className='main-page__input-container'>
          <div>
            <FormikFieldWithClass
              type='radio'
              name='field-radio-group'
              id='field-radio-group-1'
              value='1'
            />
            <label htmlFor='field-radio-group-1'>1</label>
          </div>
          <div>
            <FormikFieldWithClass
              type='radio'
              name='field-radio-group'
              id='field-radio-group-2'
              value='2'
            />
            <label htmlFor='field-radio-group-2'>2</label>
          </div>
          <div>
            <FormikFieldWithClass
              type='radio'
              name='field-radio-group'
              id='field-radio-group-3'
              value='3'
            />
            <label htmlFor='field-radio-group-3'>3</label>
          </div>
        </div>
      </div>
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
