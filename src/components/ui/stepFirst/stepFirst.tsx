import React from 'react';
import './stepFirst.scss';
import Button from '../../common/button/button';
import { Form, Formik } from 'formik';
import FormikFieldWithClass from '../../common/form/Field/formikFieldWithClass';
import Select from '../../common/form/Select/select';
import FormikSelect from '../../common/form/FormikSelect/formikSelect';

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
    </div>
  );
};

export default StepFirst;
