import React from 'react';
import './stepFirst.scss';
import { FormikErrors, FormikTouched } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import FormikSelect from '../../common/form/FormikSelect/formikSelect';
import Tip from '../../common/tip/tip';

interface IStepFirstProps {
  errors: FormikErrors<{
    'field-nickname': string;
    'field-name': string;
    'field-sername': string;
    'field-sex': string;
  }>;
}

const StepFirst = ({ errors }: IStepFirstProps) => {
  return (
    <div>
      <div>
        <div className='input-and-label-container'>
          <label htmlFor='field-nickname'>Nickname</label>
          <div className='input-container'>
            <FormikFieldWithClass
              type='text'
              name='field-nickname'
              id='field-nickname'
              placeholder='Placeholder'
            />
          </div>

          {errors['field-nickname'] && <Tip>{errors['field-nickname']}</Tip>}
        </div>
      </div>
      <div>
        <div className='input-and-label-container'>
          <label htmlFor='field-name'>Name</label>
          <div className='input-container'>
            <FormikFieldWithClass
              type='text'
              name='field-name'
              id='field-name'
              placeholder='Placeholder'
            />
          </div>
          {errors['field-name'] && <Tip>{errors['field-name']}</Tip>}
        </div>
      </div>
      <div>
        <div className='input-and-label-container'>
          <label htmlFor='field-sername'>Sername</label>
          <div className='input-container'>
            <FormikFieldWithClass
              type='text'
              name='field-sername'
              id='field-sername'
              placeholder='Placeholder'
            />
          </div>
          {errors['field-sername'] && <Tip>{errors['field-sername']}</Tip>}
        </div>
      </div>
      <div>
        <div className='input-and-label-container'>
          <label htmlFor='field-sex'>Sex</label>
          <div className='input-container'>
            <FormikSelect
              name='field-sex'
              placeholder='Не выбрано'
              options={[
                {
                  label: 'man',
                  value: 'field-sex-option-man',
                },
                {
                  label: 'woman',
                  value: 'field-sex-option-woman',
                },
              ]}
            />
          </div>
          {errors['field-sex'] && <Tip>{errors['field-sex']}</Tip>}
        </div>
      </div>
    </div>
  );
};

export default StepFirst;
