import userInfoReducer from './userInfo';
import { configureStore } from '@reduxjs/toolkit';

export function createStore() {
  return configureStore({
    reducer: userInfoReducer,
  });
}
