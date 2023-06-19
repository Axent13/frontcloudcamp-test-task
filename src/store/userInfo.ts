import { createAction, createSlice } from '@reduxjs/toolkit';
import sbercloudService from '../services/sbercloud.service';

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    entities: {},
    isSended: false,
    error: null,
    isError: false,
  },
  reducers: {
    userInfoSended: (state, action) => {
      state.isSended = true;
    },
    phoneAndEmailAdded: (state, action: { type: string; payload: Object }) => {
      state.entities = action.payload;
    },
    otherInfoAdded: (state, action: { type: string; payload: Object }) => {
      state.entities = { ...state.entities, ...action.payload };
    },
    userInfoSendingFailed: (state, action) => {
      state.error = action.payload;
      state.isError = true;
    },
  },
});

const sendingUserInfo = createAction('userInfo/sending');

const { reducer: userInfoReducer, actions } = userInfoSlice;
const {
  userInfoSended,
  userInfoSendingFailed,
  phoneAndEmailAdded,
  otherInfoAdded,
} = actions;

export const addPhoneAndEmail = (payload: any) => (dispatch: any) => {
  dispatch(phoneAndEmailAdded(payload));
};

export const addOtherInfo = (payload: any) => (dispatch: any) => {
  dispatch(otherInfoAdded(payload));
};

export const sendUserInfo = (payload: any) => async (dispatch: any) => {
  dispatch(sendingUserInfo());
  try {
    const { content } = await sbercloudService.sendMessage(payload);
    dispatch(userInfoSended(content));
  } catch (error) {
    dispatch(userInfoSendingFailed(error));
  }
};

export const getUserInfoErrorStatus = () => (state: any) => {
  return state.userInfo.isError;
};

export default userInfoReducer;
