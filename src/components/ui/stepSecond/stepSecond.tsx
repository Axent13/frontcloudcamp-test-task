import React from 'react';
import './stepSecond.scss';
import Button from '../../common/button/button';
import { Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';

interface IStepSecondProps {
  handlePrevButtonClick: Function;
  handleNextButtonClick: Function;
}

const StepSecond = ({
  handlePrevButtonClick,
  handleNextButtonClick,
}: IStepSecondProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          'field-advantage': '',
          'field-checkbox-group': '',
          'field-radio-group': '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor='field-advantage'>Advantages</label>
            <div className='main-page__input-container'>
              <FormikFieldWithClass
                type='text'
                name='field-advantage'
                id='field-advantage'
                placeholder='Placeholder'
              />
            </div>
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
        </Form>
      </Formik>
    </div>
  );
};

export default StepSecond;
