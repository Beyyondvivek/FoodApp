import {Dispatch, createSlice} from '@reduxjs/toolkit';
import StoreFrontService from '../../../service/StoreFrontService';
import {getAuth, getUser, setUser} from '../../../service/Cache';
import CheckinState from '../../types/CheckinState';
import CheckinResponse from '../../../service/types/CheckinResponse';
import AppState from '../../types/AppState';
import AuthState from '../../types/AuthState';
import UserStateResponse from '../../../service/types/UserStateResponse';

const defaultState: CheckinState = {
  userId: '',
  loggedIn: false,
  cartId: '',
  deviceId: '',
};

export const checkinSlice = createSlice({
  name: 'checkin',
  initialState: defaultState,
  reducers: {
    setCheckinState: (state, action) => {
      const checkinState = action.payload;
      state.loggedIn = checkinState.loggedIn;
      state.cartId = checkinState.cartId;
      state.userId = checkinState.userId;
      state.orderId = checkinState.orderId;
      state.deviceId = checkinState.deviceId;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

const {setCheckinState} = checkinSlice.actions;

export const checkinUser =
  (user: UserStateResponse, auth: AuthState) => (dispatch: Dispatch) => {
    const {deviceId, cartId} = user;
    const {accessToken} = auth;
    StoreFrontService.checkin({deviceId, cartId}, {token: accessToken})
      .then((checkinResponse: CheckinResponse) => {
        console.log('checkin respponse:: ', checkinResponse);
        dispatch(setCheckinState(checkinResponse));
        setUser({
          deviceId: checkinResponse.deviceId,
          cartId: checkinResponse.cartId,
        });
      })
      .catch(e => console.log('checkin error:: ', e));
  };

export default checkinSlice.reducer;
