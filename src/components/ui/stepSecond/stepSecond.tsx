import React, { useState } from 'react';
import './stepSecond.scss';
import Button from '../../common/button/button';
import { FieldArray, Form, Formik, FormikErrors } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import DeleteButton from '../../common/deleteButton/deleteButton';
import AddButton from '../../common/addButton/addButton';
import CheckboxGroup from '../../common/form/checkboxGroup/checkboxGroup';
import RadioGroup from '../../common/form/radioGroup/radioGroup';
import Tip from '../../common/tip/tip';

interface IStepSecondProps {
  errors: FormikErrors<{
    'field-advantages': string[];
    'field-checkbox-group': string[];
    'field-radio-group': string;
  }>;
}

const StepSecond = ({ errors }: IStepSecondProps) => {
  console.log(errors);

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
                    {errors['field-advantages'] &&
                      errors['field-advantages'][index] && (
                        <Tip>{errors['field-advantages'][index]}</Tip>
                      )}
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
      {errors['field-checkbox-group'] && (
        <Tip>{errors['field-checkbox-group']}</Tip>
      )}
      <RadioGroup
        title='Radio Group'
        name='field-radio-group'
        options={[1, 2, 3]}
      />
      {errors['field-radio-group'] && <Tip>{errors['field-radio-group']}</Tip>}
    </div>
  );
};

export default StepSecond;
