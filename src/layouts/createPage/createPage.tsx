import React, { useState } from 'react';
import './createPage.scss';
import Frame from '../../components/common/frame/frame';
import StepFirst from '../../components/ui/stepFirst/stepFirst';
import StepSecond from '../../components/ui/stepSecond/stepSecond';
import StepThird from '../../components/ui/stepThird/stepThird';

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const BackToMainPage = () => {
    console.log('Переход на MainPage');
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
      </Frame>
    </div>
  );
};

export default CreatePage;
