import React from 'react';
import './mainPage.scss';
import userPhotoUrl from '../../assets/images/user-photo.jpg';
import folderIconUrl from '../../assets/images/folder-icon.png';
import Button from '../../components/common/button/button';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikFieldWithClass from '../../components/common/form/Field/formikFieldWithClass';

const MainPage = () => {
  const navigate = useNavigate();

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
          <Formik
            initialValues={{
              phone: '+7 952 803-26-80',
              email: 'Axent13@yandex.ru',
            }}
            onSubmit={(values) => {
              navigate('/create');
              console.log(values);
            }}
          >
            <Form>
              <div>
                <label htmlFor='phone'>Номер телефона</label>
                <div className='main-page__input-container'>
                  <FormikFieldWithClass
                    type='tel'
                    name='phone'
                    id='phone'
                    placeholder='+7 999 999-99-99'
                    disabled
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <div className='main-page__input-container'>
                  <FormikFieldWithClass
                    type='email'
                    name='email'
                    id='email'
                    placeholder='tim.jennings@example.com'
                    disabled
                  />
                </div>
              </div>
              <div className='main-page__button'>
                <Button
                  type='submit'
                  text='Начать'
                  isFilled={true}
                  id='button-start'
                />
              </div>
            </Form>
          </Formik>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
