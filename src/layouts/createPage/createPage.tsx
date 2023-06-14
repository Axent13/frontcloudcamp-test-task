import React, { useState } from 'react';
import './createPage.scss';
import Frame from '../../components/common/frame/frame';
import StepFirst from '../../components/ui/stepFirst/stepFirst';
import StepSecond from '../../components/ui/stepSecond/stepSecond';
import StepThird from '../../components/ui/stepThird/stepThird';
import Stepper from '../../components/common/stepper/stepper';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  };

  return (
    <div className='create-page'>
      <Frame>
        <Stepper stepsCount={3} currentStep={currentStep} />
        <Formik
          initialValues={{
            'field-nickname': '',
            'field-name': '',
            'field-sername': '',
            'field-sex': null,
            'field-advantages': '',
            'field-checkbox-group': null,
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
