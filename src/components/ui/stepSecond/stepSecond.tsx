import React from 'react';
import './stepSecond.scss';
import Button from '../../common/button/button';

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
      <div className='step-second__buttons'>
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

export default StepSecond;
