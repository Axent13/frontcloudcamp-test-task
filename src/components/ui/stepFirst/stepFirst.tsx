import React from 'react';
import './stepFirst.scss';
import Button from '../../common/button/button';

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
      <div className='step-first__buttons'>
        <Button
          text='Назад'
          isFilled={false}
          onClickFunction={handlePrevButtonClick}
        />
        <Button
          text='Далее'
          isFilled={true}
          onClickFunction={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

export default StepFirst;
