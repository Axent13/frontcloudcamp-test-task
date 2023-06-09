import React from 'react';
import './stepSecond.scss';

interface IStepSecondProps {
  handlePrevButtonClick: Function;
  handleNextButtonClick: Function;
}

const StepSecond = ({
  handlePrevButtonClick,
  handleNextButtonClick,
}: IStepSecondProps) => {
  return (
    <div>
      Second Step
      <button onClick={() => handlePrevButtonClick()}>Назад</button>
      <button onClick={() => handleNextButtonClick()}>Далее</button>
    </div>
  );
};

export default StepSecond;
