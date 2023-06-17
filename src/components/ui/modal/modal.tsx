import React from 'react';
import './modal.scss';
import successImageUrl from '../../../assets/images/success-image.svg';
import errorImageUrl from '../../../assets/images/error-image.svg';
import Button from '../../common/button/button';

interface IModal {
  isShown: boolean;
  isSuccess: boolean;
  onCloseButtonClick: Function;
  onGoToMainButtonClick: Function;
}

const Modal = ({
  isShown,
  isSuccess,
  onCloseButtonClick,
  onGoToMainButtonClick,
}: IModal) => {
  return (
    <div className={'modal' + (isShown ? ' modal_shown' : '')}>
      <div
        className={
          isSuccess
            ? 'modal__title-container'
            : 'modal__title-and-button-container'
        }
      >
        <p className='modal__title'>
          {isSuccess ? 'Форма успешно отправлена' : 'Ошибка'}
        </p>
        {!isSuccess && (
          <button
            type='button'
            className='modal__top-close-button'
            onClick={() => {
              onCloseButtonClick();
            }}
          ></button>
        )}
      </div>
      <div className='modal__status-image-container'>
        <img
          src={isSuccess ? successImageUrl : errorImageUrl}
          alt={isSuccess ? 'Успешно отправлено' : 'Ошибка про отправке данных'}
          className='modal__status-image'
        />
      </div>
      <div
        className={
          'modal__button' +
          (isSuccess ? ' modal__button-to-main' : ' modal__button-close')
        }
      >
        <Button
          text={isSuccess ? 'На главную' : 'Закрыть'}
          isFilled={true}
          id={isSuccess ? 'button-to-main' : 'button-close'}
          onClickFunction={
            isSuccess
              ? () => onGoToMainButtonClick()
              : () => onCloseButtonClick()
          }
        />
      </div>
    </div>
  );
};

export default Modal;
