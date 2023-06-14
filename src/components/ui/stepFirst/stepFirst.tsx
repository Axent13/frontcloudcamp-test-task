import React from 'react';
import './stepFirst.scss';
import Button from '../../common/button/button';
import { Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';

interface IStepFirstProps {
  handlePrevButtonClick: Function;
  handleNextButtonClick: Function;
}

const StepFirst = ({
  handlePrevButtonClick,
  handleNextButtonClick,
}: IStepFirstProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          'field-nickname': '',
          'field-name': '',
          'field-sername': '',
          'field-sex': '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor='field-nickname'>Nickname</label>
            <div className='main-page__input-container'>
              <FormikFieldWithClass
                type='text'
                name='field-nickname'
                id='field-nickname'
                placeholder='Placeholder'
              />
            </div>
          </div>
          <div>
            <label htmlFor='field-name'>Name</label>
            <div className='main-page__input-container'>
              <FormikFieldWithClass
                type='text'
                name='field-name'
                id='field-name'
                placeholder='Placeholder'
              />
            </div>
          </div>
          <div>
            <label htmlFor='field-sername'>Sername</label>
            <div className='main-page__input-container'>
              <FormikFieldWithClass
                type='text'
                name='field-sername'
                id='field-sername'
                placeholder='Placeholder'
              />
            </div>
          </div>
          <div>
            <label htmlFor='field-sex'>Sex</label>
            <div className='main-page__input-container'>
              <FormikFieldWithClass
                type='text'
                name='field-sex'
                id='field-sex'
                placeholder='Не выбрано'
                as='select'
              >
                <option value='field-sex-option-man'>man</option>
                <option value='field-sex-option-woman'>woman</option>
              </FormikFieldWithClass>
            </div>
          </div>
          <div className='step-first__buttons'>
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

export default StepFirst;
