import {Dispatch, createSlice} from '@reduxjs/toolkit';
import StoreFrontService from '../../../service/StoreFrontService';
import AppState from '../../types/AppState';
import AuthState from '../../types/AuthState';
import {resetCache, setAuth} from '../../../service/Cache';

const defaultState: AuthState = {
  userId: '',
  loggedIn: false,
  accessToken: '',
  otp: undefined,
  loginState: 'loggedout',
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    setAuthState: (state, action) => {
      const authState = action.payload;
      state.loggedIn = authState.loggedIn;
      state.accessToken = authState.accessToken;
      state.userId = authState.userId;
    },
    setLoginState: (state, action) => {
      state.loginState = action.payload;
    },
    setAuthSuccess: (state, action) => {
      const auth = action.payload;
      state.accessToken = auth.act;
      state.loginState = 'loginsuccess';
      state.loggedIn = true;
    },
    resetAuthError: state => {
      state.errorMessage = '';
    },
    setAuthFailed: state => {
      state.accessToken = '';
      state.loginState = 'loginfailed';
      state.errorMessage = 'Invalid credentials';
      state.loggedIn = false;
    },
    setSignupFailed: (state, action) => {
      state.accessToken = '';
      state.loginState = 'signupfailed';
      state.loggedIn = false;
      state.errorMessage = action.payload;
    },
    setLoggedOut: () => {
      return {
        ...defaultState,
      };
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setOTPToken: (state, action) => {
      state.otp = {
        token: action.payload,
        error: '',
        verified: false,
      };
    },
    setOTPVerified: (state, action) => {
      state.otp = {
        token: state.otp?.token || '',
        error: state.otp?.error || '',
        verified: action.payload,
      };
    },
    setOTPError: (state, action) => {
      state.otp = {
        token: '',
        error: action.payload,
        verified: false,
      };
    },
  },
});

const {
  setLoggedIn,
  setLoggedOut,
  setAccessToken,
  setOTPToken,
  setOTPError,
  setOTPVerified,
  setAuthState,
  setLoginState,
  setAuthSuccess,
  setAuthFailed,
  setSignupFailed,
  resetAuthError,
} = authSlice.actions;

export const authAPI = {
  setAuthState,
  resetAuthError,
};

export const login = (auth: AuthState) => (dispatch: Dispatch) => {
  StoreFrontService.login({token: auth?.accessToken}).then(
    ({accessToken, userId, loggedIn}) => {
      dispatch(setAuthState({accessToken, userId, loggedIn}));
    },
  );
};

export const logoutFromDevice = () => (dispatch: Dispatch) => {
  resetCache().then(() => {
    StoreFrontService.logoutFromDevice()
      .then(resp => {
        console.log('finally logged out... ', resp);
      })
      .finally(() => dispatch(setLoggedOut()));
  });
};

export const loginByPhoneOTP =
  (phoneNumber: string) => (dispatch: Dispatch) => {
    StoreFrontService.loginByPhoneOTP(phoneNumber).then(response => {
      dispatch(setOTPToken(response.token));
    });
  };

export const signupByPin =
  (phoneNumber: string, pin: string) => (dispatch: Dispatch) => {
    dispatch(setLoginState('loginprogress'));
    StoreFrontService.signupByPin(phoneNumber, pin)
      .then(response => {
        setAuth({
          accessToken: response.verified ? response.act : '',
          loggedIn: response.verified,
          userId: response.verified ? response.userId : '',
          loginState: response.verified ? 'loggedin' : 'loggedout',
        }).then(() => {
          if (response.verified) {
            dispatch(
              setAuthSuccess({
                accessToken: response.act,
                userId: response.userId,
              }),
            );
          } else {
            dispatch(setSignupFailed(response.error));
          }
        });
      })
      .catch(() => dispatch(setLoginState('loginfailed')));
  };

export const loginByPin =
  (phoneNumber: string, pin: string) => (dispatch: Dispatch) => {
    dispatch(setLoginState('loginprogress'));
    StoreFrontService.loginByPin(phoneNumber, pin)
      .then(response => {
        setAuth({
          accessToken: response.verified ? response.act : '',
          loggedIn: response.verified,
          userId: response.verified ? response.userId : '',
          loginState: response.verified ? 'loggedin' : 'loggedout',
        }).then(() => {
          if (response.verified) {
            dispatch(
              setAuthSuccess({
                accessToken: response.act,
                userId: response.userId,
              }),
            );
          } else {
            dispatch(setAuthFailed());
          }
        });
      })
      .catch(() => dispatch(setLoginState('loginfailed')));
  };

export const verifyOTP =
  (value: string) => (dispatch: Dispatch, getState: () => AppState) => {
    const {auth} = getState();
    if (!auth.otp) {
      dispatch(setOTPError('OTP token not present'));
      return;
    }
    StoreFrontService.verifyOTP(auth.otp.token, value).then(response => {
      dispatch(setOTPVerified(response.verified));
      dispatch(setAccessToken(response.act));
      dispatch(setLoggedIn(true));
      setAuth({
        accessToken: response.act,
        loggedIn: true,
        userId: response.userId,
        loginState: 'loggedin',
      });
    });
  };

export default authSlice.reducer;
