import React from 'react';
import './stepThird.scss';
import Button from '../../common/button/button';
import { Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';

interface IStepThirdProps {
  handlePrevButtonClick: Function;
  handleNextButtonClick: Function;
}

const StepThird = ({
  handlePrevButtonClick,
  handleNextButtonClick,
}: IStepThirdProps) => {
  return (
    <div>
      <div>
        <label htmlFor='field-about'>About</label>
        <div className='main-page__input-container'>
          <FormikFieldWithClass
            as='textarea'
            className='textarea'
            type='text'
            name='field-about'
            id='field-about'
            placeholder='Placeholder'
          />
        </div>
      </div>
      <div className='step-third__buttons'>
        <Button
          id='button-back'
          text='Назад'
          isFilled={false}
          onClickFunction={handlePrevButtonClick}
        />
        <Button
          id='button-send'
          type='submit'
          text='Отправить'
          isFilled={true}
          onClickFunction={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

export default StepThird;
