import React from 'react';
import MainPage from './layouts/mainPage/mainPage';
import CreatePage from './layouts/createPage/createPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}
