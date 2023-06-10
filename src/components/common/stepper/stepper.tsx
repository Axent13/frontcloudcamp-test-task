import React from 'react';
import './stepper.scss';

interface IStepper {
  stepsCount: number;
  currentStep: number;
}

const Stepper = ({ stepsCount, currentStep }: IStepper) => {
  const drawCommonElement = (tip: number) => {
    return (
      <div className='stepper__line'>
        <div className='stepper__point'>
          <div className='stepper__tip'>{tip}</div>
        </div>
      </div>
    );
  };

  const drawCommonLastElement = (tip: number) => {
    return (
      <div className='stepper__line stepper__line_last'>
        <div className='stepper__point'>
          <div className='stepper__tip'>{stepsCount}</div>
        </div>
      </div>
    );
  };

  const drawPassedElement = (tip: number) => {
    return (
      <div className='stepper__line stepper__line_passed'>
        <div className='stepper__point stepper__point_passed'>
          <div className='stepper__tip stepper__tip_passed'>{tip}</div>
        </div>
      </div>
    );
  };

  const drawCurrentElement = (tip: number) => {
    return (
      <div className='stepper__line stepper__line_current'>
        <div className='stepper__point stepper__point_current'>
          <div className='stepper__tip stepper__tip_current'>{tip}</div>
        </div>
      </div>
    );
  };

  const drawCurrentWithLastElement = (tip: number) => {
    return (
      <div className='stepper__line stepper__line_current stepper__line_last'>
        <div className='stepper__point stepper__point_current'>
          <div className='stepper__tip stepper__tip_current'>{currentStep}</div>
        </div>
      </div>
    );
  };

  const createStepElements = () => {
    const elemets = [];

    for (let index = 1; index < currentStep; index++) {
      elemets.push(drawPassedElement(index));
    }

    if (stepsCount === currentStep) {
      elemets.push(drawCurrentWithLastElement(currentStep));
    } else {
      elemets.push(drawCurrentElement(currentStep));

      for (let index = currentStep + 1; index < stepsCount; index++) {
        elemets.push(drawCommonElement(index));
      }

      elemets.push(drawCommonLastElement(stepsCount));
    }

    return elemets;
  };

  return <div className='stepper'>{createStepElements()}</div>;
};

export default Stepper;
