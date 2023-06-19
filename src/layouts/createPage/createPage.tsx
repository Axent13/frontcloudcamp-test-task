import React, { useState } from 'react';
import './createPage.scss';
import Frame from '../../components/common/frame/frame';
import StepFirst from '../../components/ui/stepFirst/stepFirst';
import StepSecond from '../../components/ui/stepSecond/stepSecond';
import StepThird from '../../components/ui/stepThird/stepThird';
import Stepper from '../../components/common/stepper/stepper';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, FormikErrors, FormikProps } from 'formik';
import Modal from '../../components/ui/modal/modal';
import * as Yup from 'yup';
import Button from '../../components/common/button/button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOtherInfo,
  getUserInfoErrorStatus,
  sendUserInfo,
} from '../../store/userInfo';

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const navigate = useNavigate();
  const stepsCount = 3;
  const dispatch: any = useDispatch();

  const handlePrevButtonClick = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setCurrentStep((prevState) => prevState - 1);
    }
  };

  const getValidationSchema = () => {
    switch (currentStep) {
      case 1:
        return Yup.object().shape({
          'field-nickname': Yup.string()
            .trim()
            .max(30, 'Nickname не может быть более 30 символов')
            .required('Nickname обязателен для заполнения')
            .matches(
              /^(\p{L}|[0-9])+$/u,
              'Nickname может состоять только из букв и цифр'
            ),
          'field-name': Yup.string()
            .trim()
            .max(50, 'Name не может быть более 50 символов')
            .required('Name обязателен для заполнения')
            .matches(/^\p{L}+$/u, 'Name может состоять только из букв'),
          'field-sername': Yup.string()
            .trim()
            .max(50, 'Sername может быть не более 50 символов')
            .required('Sername обязателен для заполнения')
            .matches(/^\p{L}+$/u, 'Sername может состоять только из букв'),
          'field-sex': Yup.string().required('Sex обязателен для заполнения'),
        });
      case 2:
        return Yup.object().shape({
          'field-advantages': Yup.array().of(
            Yup.string().trim().required('Поле не может быть пустым')
          ),
          'field-radio-group': Yup.string().required(
            'Должен быть выбран один из вариантов'
          ),
          'field-checkbox-group': Yup.array().min(
            1,
            'Должен быть отмечен хотя бы один пункт'
          ),
        });
      case 3:
        return Yup.object().shape({
          'field-about': Yup.string()
            .transform((currentValue) => currentValue.split(' ').join(''))
            .trim()
            .required('About обязательно для заполнения')
            .max(200, 'About не может превышать 200 символов без пробелов'),
        });
    }
  };

  return (
    <div className='create-page'>
      <Modal
        isShown={isModalShown}
        isSuccess={isDataValid}
        onCloseButtonClick={() => setIsModalShown(false)}
        onGoToMainButtonClick={() => {
          setIsModalShown(false);
          navigate('/');
        }}
      />
      <Frame>
        <Stepper stepsCount={stepsCount} currentStep={currentStep} />
        <Formik
          initialValues={{
            'field-nickname': '',
            'field-name': '',
            'field-sername': '',
            'field-sex': null,
            'field-advantages': ['', '', ''],
            'field-radio-group': '',
            'field-checkbox-group': [],
            'field-about': '',
          }}
          validationSchema={getValidationSchema()}
          onSubmit={async (values) => {
            if (currentStep === stepsCount) {
              dispatch(addOtherInfo(values));
              try {
                await dispatch(sendUserInfo(values));
                setIsDataValid(true);
                setIsModalShown(true);
              } catch (e) {
                console.log(e);
                setIsDataValid(false);
                setIsModalShown(true);
              }
            } else {
              setCurrentStep((prevState) => prevState + 1);
            }
          }}
        >
          {({
            errors,
          }: {
            errors: FormikErrors<{
              'field-nickname': string;
              'field-name': string;
              'field-sername': string;
              'field-sex': string;
              'field-advantages': string[];
              'field-checkbox-group': string[];
              'field-radio-group': string;
              'field-about': string;
            }>;
            isValid: boolean;
            validateField: Function;
          }) => {
            return (
              <Form>
                {currentStep === 1 && <StepFirst errors={errors} />}
                {currentStep === 2 && <StepSecond errors={errors} />}
                {currentStep === 3 && <StepThird errors={errors} />}
                <div className='create-page__navigate-buttons'>
                  <Button
                    id='button-back'
                    text='Назад'
                    isFilled={false}
                    onClickFunction={handlePrevButtonClick}
                  />
                  <Button
                    id={currentStep === 3 ? 'button-send' : 'button-next'}
                    text='Далее'
                    type='submit'
                    isFilled={true}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Frame>
    </div>
  );
};

export default CreatePage;
