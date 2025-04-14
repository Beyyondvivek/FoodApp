import {Dispatch, createSlice} from '@reduxjs/toolkit';
import StoreFrontService from '../../../service/StoreFrontService';
import UserState from '../../types/UserAccount';
import AppState from '../../types/AppState';
import PersonalProfile from '../../../types/PersonalProfile';
import BusinessDetails from '../../../types/BussinessDetails';

const defaultState: UserState = {
  userId: '',
  personal: {},
  business: {},
  defaultAddress: {},
  loading: false,
  addresses: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      const user = action.payload;
      state.userId = user.userId;
      state.personal = {...user};
    },
    setLoadingProfile: (state, action) => {
      state.loading = action.payload;
    },
    setAccountDetails: (state, action) => {
      const account = action.payload;
      state.personal.addresses = account.address;
      // state.business = {...(account.business || {})};
      state.business = account.bussiness || {};
      // state.addresses = account.address;
      state.defaultAddress = account.address[0] || defaultState.defaultAddress;
    },
  },
});

export const {setUserId, setUserDetails, setAccountDetails, setLoadingProfile} =
  userSlice.actions;

export const getUserDetails =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    dispatch(setLoadingProfile(true));
    Promise.all([
      StoreFrontService.getUserDetails({token: auth.accessToken}),
      StoreFrontService.getUserAccount({token: auth.accessToken}),
    ])
      .then(([user, account]) => {
        dispatch(setUserDetails(user));
        dispatch(setAccountDetails(account));
      })
      .finally(() => dispatch(setLoadingProfile(false)));
  };

export const addUserDetails =
  (data: any) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    Promise.all([
      StoreFrontService.addUserDetails({token: auth.accessToken}, data),
      StoreFrontService.getUserAccount({token: auth.accessToken}),
    ]).then(([user, account]) => {
      dispatch(setUserDetails(user));
      dispatch(setAccountDetails(account));
    });
  };

export const getUserAddress =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.getUserAddress({token: auth.accessToken}).then(
      response => {
        dispatch(setAccountDetails(response));
      },
    );
  };

export const addUserAddress =
  (address: any) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.addUserAddress({token: auth.accessToken}, address).then(
      response => {
        dispatch(setAccountDetails(response));
      },
    );
  };

export const updatePersonalDetails =
  (personal: PersonalProfile) =>
  (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.updatePersonalDetails(
      {token: auth.accessToken},
      personal,
    ).then(response => {
      console.log('udate user detaisl ::: ', response);
      dispatch(setUserDetails(response));
    });
  };

export const addBusinessDetails =
  (details: any) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.addBusinessDetails(
      {token: auth.accessToken},
      details,
    ).then(response => {
      console.log('add bussi detaisl ::: ', response);
      dispatch(setAccountDetails(response));
    });
  };
export const getBusinessDetails =
  () => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.getBusinessDetails({token: auth.accessToken}).then(
      response => {
        console.log('get details bussiness ::', response);
        dispatch(setAccountDetails(response));
      },
    );
  };

export const updateBusinessDetails =
  (newData: BusinessDetails) =>
  (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    StoreFrontService.updateBusinessDetails(
      {token: auth.accessToken},
      newData,
    ).then(response => {
      console.log('udate bussiness detaisl ::: ', response);
      dispatch(setAccountDetails(response));
    });
  };

export default userSlice.reducer;
