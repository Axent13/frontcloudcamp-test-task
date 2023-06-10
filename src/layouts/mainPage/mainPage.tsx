import React from 'react';
import './mainPage.scss';
import userPhotoUrl from '../../assets/images/user-photo.jpg';
import folderIconUrl from '../../assets/images/folder-icon.png';
import Button from '../../components/common/button/button';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const handleStartButtonClick = () => {
    console.log('Go to StepFirst');
  };

  return (
    <div className='main-page'>
      <div className='main-page__frame'>
        <section className='main-page__user-avatar-and-info'>
          <img
            className='main-page__user-avatar'
            src={userPhotoUrl}
            alt='Фото пользователя'
          />
          <div className='main-page__user-name-and-socials'>
            <p className='main-page__user-name'>Михаил Силаев</p>
            <ul className='main-page__user-socials'>
              <li className='main-page__social'>
                <a
                  href='https://t.me/Axent1398'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='main-page__social-link'
                >
                  <img
                    src={folderIconUrl}
                    alt='Иконка ссылки'
                    className='main-page__social-icon'
                  />
                  Telegram
                </a>
              </li>
              <li className='main-page__social'>
                <img
                  src={folderIconUrl}
                  alt='Иконка ссылки'
                  className='main-page__social-icon'
                />
                <a
                  href='https://github.com/Axent13'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='main-page__social-link'
                >
                  GitHub
                </a>
              </li>
              <li className='main-page__social'>
                <img
                  src={folderIconUrl}
                  alt='Иконка ссылки'
                  className='main-page__social-icon'
                />
                <a
                  href='https://disk.yandex.ru/i/v3qHKMkSb_-r_Q'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='main-page__social-link'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>
        <hr className='main-page__divider' />
        <section className='main-page__phone-and-email-form'>
          <form>
            <div>
              <label htmlFor='phone'>Номер телефона</label>
              <div>
                <input type='tel' name='phone' id='phone' />
              </div>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <div>
                <input type='email' name='email' id='email' />
              </div>
            </div>
          </form>
        </section>
        <div className='main-page__button'>
          <Link to='/create'>
            <Button
              text='Начать'
              isFilled={true}
              onClickFunction={handleStartButtonClick}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
