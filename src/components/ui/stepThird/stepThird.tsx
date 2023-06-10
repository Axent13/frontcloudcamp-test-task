import React from 'react';
import './stepThird.scss';
import Button from '../../common/button/button';

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
      <div className='step-third__buttons'>
        <Button
          text='Назад'
          isFilled={false}
          onClickFunction={handlePrevButtonClick}
        />
        <Button
          text='Отправить'
          isFilled={true}
          onClickFunction={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

export default StepThird;
