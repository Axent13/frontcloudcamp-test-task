import React from 'react';
import './stepFirst.scss';

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
      First Step
      <button onClick={() => handlePrevButtonClick()}>Назад</button>
      <button onClick={() => handleNextButtonClick()}>Далее</button>
    </div>
  );
};

export default StepFirst;
