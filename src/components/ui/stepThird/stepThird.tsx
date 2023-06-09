import React from 'react';
import './stepThird.scss';

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
      Third Step
      <button onClick={() => handlePrevButtonClick()}>Назад</button>
      <button onClick={() => handleNextButtonClick()}>Отправить</button>
    </div>
  );
};

export default StepThird;
