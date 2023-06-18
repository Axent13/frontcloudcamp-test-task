import React from 'react';
import './stepThird.scss';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import { FormikErrors } from 'formik';
import Tip from '../../common/tip/tip';

interface IStepThirdProps {
  errors: FormikErrors<{
    'field-about': string;
  }>;
}

const StepThird = ({ errors }: IStepThirdProps) => {
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
        {errors['field-about'] && <Tip>{errors['field-about']}</Tip>}
      </div>
    </div>
  );
};

export default StepThird;
