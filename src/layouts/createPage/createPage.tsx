import React, { useState } from 'react';
import './createPage.scss';
import Frame from '../../components/common/frame/frame';
import StepFirst from '../../components/ui/stepFirst/stepFirst';
import StepSecond from '../../components/ui/stepSecond/stepSecond';
import StepThird from '../../components/ui/stepThird/stepThird';
import Stepper from '../../components/common/stepper/stepper';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Modal from '../../components/ui/modal/modal';

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const navigate = useNavigate();

  const BackToMainPage = () => {
    navigate('/');
  };

  const GoToFirstStep = () => {
    setCurrentStep(1);
  };

  const GoToSecondStep = () => {
    setCurrentStep(2);
  };

  const GoToThirdStep = () => {
    setCurrentStep(3);
  };

  const SendData = () => {
    console.log('Sending Data');
    setIsModalShown(true);
  };

  return (
    <div className='create-page'>
      <Modal
        isShown={isModalShown}
        isSuccess={isDataValid}
        onCloseButtonClick={() => setIsModalShown(false)}
        onGoToMainButtonClick={() => {
          setIsModalShown(false);
          BackToMainPage();
        }}
      />
      <Frame>
        <Stepper stepsCount={3} currentStep={currentStep} />
        <Formik
          initialValues={{
            'field-nickname': '',
            'field-name': '',
            'field-sername': '',
            'field-sex': null,
            'field-advantages': ['', '', ''],
            'field-radio-group': '',
            'field-checkbox-group': [],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            {currentStep === 1 && (
              <StepFirst
                handlePrevButtonClick={BackToMainPage}
                handleNextButtonClick={GoToSecondStep}
              />
            )}
            {currentStep === 2 && (
              <StepSecond
                advantagesCount={3}
                handlePrevButtonClick={GoToFirstStep}
                handleNextButtonClick={GoToThirdStep}
              />
            )}
            {currentStep === 3 && (
              <StepThird
                handlePrevButtonClick={GoToSecondStep}
                handleNextButtonClick={SendData}
              />
            )}
          </Form>
        </Formik>
      </Frame>
    </div>
  );
};

export default CreatePage;
